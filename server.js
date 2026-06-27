import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = Number(process.env.PORT || 3000);
const distDir = path.join(__dirname, "dist");
const indexHtmlPath = path.join(distDir, "index.html");
const DEFAULT_ROBOTS = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

function normalizePathname(value = "/") {
  let normalized = value || "/";
  try {
    normalized = decodeURIComponent(normalized);
  } catch {
    normalized = value || "/";
  }
  normalized = normalized.toLowerCase();
  if (normalized.length > 1 && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }
  return normalized || "/";
}

const SITE_URL = String(process.env.SITE_URL || process.env.VITE_SITE_URL || "").replace(/\/$/, "") ||
  (process.env.NODE_ENV === "production" ? "" : "http://localhost:3000");
const BASE_PATH = normalizePathname(process.env.BASE_PATH || process.env.VITE_BASE_PATH || "/");

function resolveSiteUrl(req) {
  if (SITE_URL) return SITE_URL;
  const protocol = req.get("x-forwarded-proto") || req.protocol || "http";
  const host = req.get("x-forwarded-host") || req.get("host") || "localhost";
  return `${protocol}://${host}`.replace(/\/$/, "");
}

function resolveAppPathname(req) {
  let pathname = normalizePathname(req.path);
  if (BASE_PATH !== "/" && pathname.startsWith(BASE_PATH)) {
    pathname = normalizePathname(pathname.slice(BASE_PATH.length) || "/");
  }
  return pathname;
}

function buildSeoByPath(siteUrl) {
  return {
  "/": {
    title: "LeeCognitek | AI Startup Security Tools, LLM Security Scans, BYO LLM",
    description:
      "LeeCognitek is an AI startup building security tools, LLM-based security scans, and Bring Your Own LLM (BYO LLM) enterprise solutions with Vulnitek, Mantrika, and Lstat.",
    keywords:
      "AI startup, security tools, LLM security scans, LLM based security scans, bring your own LLM, BYO LLM, AI cybersecurity, Vulnitek, Mantrika, Lstat, LeeCognitek",
    ogTitle: "LeeCognitek | AI Startup Security Tools, LLM Security Scans, BYO LLM",
    ogDescription:
      "AI startup platform for security tools, LLM-based security scans, and BYO LLM enterprise deployments.",
    canonical: `${siteUrl}/`,
    robots: DEFAULT_ROBOTS,
  },
  "/vulnitek": {
    title: "Vulnitek | Vulnerability Management, Patch Orchestration, and LLM Risk Prioritization",
    description:
      "Vulnitek is LeeCognitek's integrated vulnerability and patch management platform with unified SAST + DAST visibility, LLM-assisted prioritization, and enterprise remediation workflows.",
    keywords:
      "Vulnitek, vulnerability management, patch management, LLM vulnerability prioritization, application security platform, SAST DAST platform",
    ogTitle: "Vulnitek | Integrated Vulnerability and Patch Management Platform",
    ogDescription:
      "Discover, prioritize, and remediate vulnerabilities with AI-assisted triage and enterprise patch orchestration in one platform.",
    canonical: `${siteUrl}/vulnitek`,
    robots: DEFAULT_ROBOTS,
  },
  "/mantrika": {
    title: "Mantrika | Intelligent RPA Platform for Enterprise Workflow Automation",
    description:
      "Mantrika is LeeCognitek's intelligent RPA platform where users record steps with Windows Steps Recorder, LLM analyzes the flow, replays it, and automates enterprise workflows.",
    keywords:
      "Mantrika, intelligent RPA, enterprise automation platform, workflow automation, AI automation, human in loop RPA",
    ogTitle: "Mantrika | Intelligent RPA for Enterprise Operations",
    ogDescription:
      "Automate high-volume enterprise workflows with intelligent orchestration, approvals, and audit-ready operations.",
    canonical: `${siteUrl}/mantrika`,
    robots: DEFAULT_ROBOTS,
  },
  "/lstat": {
    title: "Lstat | Medical Coding and Statistical Analytics Automation Platform",
    description:
      "Lstat is LeeCognitek's healthcare coding and analytics automation platform, co-built with Statdoc, for enterprise medical coding, statistical reporting, and quality governance workflows.",
    keywords:
      "Lstat, medical coding automation, statistical analytics automation, healthcare analytics platform, clinical data workflows, healthcare AI operations",
    ogTitle: "Lstat | Healthcare Coding and Statistical Analytics Automation",
    ogDescription:
      "Automate coding validation, statistical analytics, and healthcare reporting workflows with enterprise-grade controls and auditability.",
    canonical: `${siteUrl}/lstat`,
    robots: DEFAULT_ROBOTS,
  },
  };
}

const productSchemaByPath = {
  "/vulnitek": {
    name: "Vulnitek",
    description:
      "Integrated vulnerability and patch management platform with unified static and dynamic analysis, prioritization, and remediation workflows.",
    applicationCategory: "SecurityApplication",
    keywords: "vulnerability management, patch management, SAST, DAST, AI security triage",
  },
  "/mantrika": {
    name: "Mantrika",
    description:
      "Intelligent RPA platform where users record process steps, LLM analyzes intent, and workflows are replayed and automated at enterprise scale.",
    applicationCategory: "BusinessApplication",
    keywords: "intelligent RPA, workflow automation, recorder-first automation, enterprise operations",
  },
  "/lstat": {
    name: "Lstat",
    description:
      "Healthcare coding and statistical analytics automation platform for governed operational and reporting workflows.",
    applicationCategory: "HealthApplication",
    keywords: "medical coding automation, healthcare analytics, statistical workflow automation",
  },
};

function escapeHtmlText(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeHtmlAttr(value) {
  return escapeHtmlText(value).replace(/"/g, "&quot;");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceTagOrInject(html, pattern, replacement) {
  if (pattern.test(html)) return html.replace(pattern, replacement);
  return html.replace("</head>", `    ${replacement}\n  </head>`);
}

function replaceMetaName(html, name, content) {
  const safeContent = escapeHtmlAttr(content);
  const replacement = `<meta name="${name}" content="${safeContent}" />`;
  const pattern = new RegExp(`<meta[^>]*name=["']${escapeRegExp(name)}["'][^>]*>`, "i");
  return replaceTagOrInject(html, pattern, replacement);
}

function replaceMetaProperty(html, property, content) {
  const safeContent = escapeHtmlAttr(content);
  const replacement = `<meta property="${property}" content="${safeContent}" />`;
  const pattern = new RegExp(`<meta[^>]*property=["']${escapeRegExp(property)}["'][^>]*>`, "i");
  return replaceTagOrInject(html, pattern, replacement);
}

function replaceCanonical(html, href) {
  const safeHref = escapeHtmlAttr(href);
  const replacement = `<link rel="canonical" href="${safeHref}" />`;
  const pattern = /<link[^>]*rel=["']canonical["'][^>]*>/i;
  return replaceTagOrInject(html, pattern, replacement);
}

function buildStructuredData(pathname, seo, siteUrl) {
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;
  const webPageId = `${seo.canonical}#webpage`;

  const graph = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "LeeCognitek",
      url: `${siteUrl}/`,
      logo: `${siteUrl}/og-image.jpg`,
      description:
        "AI startup building security tools, LLM-based security scans, and Bring Your Own LLM enterprise solutions.",
      knowsAbout: [
        "AI startup products",
        "Security tools",
        "LLM security scans",
        "Bring Your Own LLM",
        "Application security",
        "Enterprise automation",
      ],
      email: "info@leecognitek.com",
      telephone: "+91 90109 94629",
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${siteUrl}/`,
      name: "LeeCognitek",
      publisher: { "@id": organizationId },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": webPageId,
      url: seo.canonical,
      name: seo.title,
      description: seo.description,
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      inLanguage: "en",
    },
  ];

  if (pathname === "/") {
    graph.push(
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#products`,
        name: "LeeCognitek product portfolio",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Vulnitek",
            url: `${siteUrl}/vulnitek`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Mantrika",
            url: `${siteUrl}/mantrika`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Lstat",
            url: `${siteUrl}/lstat`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you provide custom enterprise implementations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We build and tailor solutions based on each organization's security posture, process architecture, and operational goals.",
            },
          },
          {
            "@type": "Question",
            name: "Can we start with a pilot before full rollout?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. We recommend a focused pilot with clear success metrics, then scale once outcomes are validated.",
            },
          },
          {
            "@type": "Question",
            name: "How do you handle investor pitch material requests?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Investor materials are shared directly after a qualified request to protect intellectual property while maintaining structured communication.",
            },
          },
        ],
      },
    );
  }

  const productSchema = productSchemaByPath[pathname];
  if (productSchema) {
    graph.push(
      {
        "@type": "SoftwareApplication",
        "@id": `${seo.canonical}#software`,
        name: productSchema.name,
        applicationCategory: productSchema.applicationCategory,
        operatingSystem: "Web",
        url: seo.canonical,
        description: productSchema.description,
        keywords: productSchema.keywords,
        creator: { "@id": organizationId },
        publisher: { "@id": organizationId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${seo.canonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${siteUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: productSchema.name,
            item: seo.canonical,
          },
        ],
      },
    );
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

function injectSeoIntoHtml(template, pathname, siteUrl) {
  const seoByPath = buildSeoByPath(siteUrl);
  const seo = seoByPath[pathname] || seoByPath["/"];
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtmlText(seo.title)}</title>`);
  html = replaceMetaName(html, "description", seo.description);
  html = replaceMetaName(html, "keywords", seo.keywords);
  html = replaceMetaName(html, "robots", seo.robots || DEFAULT_ROBOTS);
  html = replaceMetaProperty(html, "og:title", seo.ogTitle);
  html = replaceMetaProperty(html, "og:description", seo.ogDescription);
  html = replaceMetaProperty(html, "og:url", seo.canonical);
  html = replaceMetaName(html, "twitter:title", seo.ogTitle);
  html = replaceMetaName(html, "twitter:description", seo.ogDescription);
  html = replaceMetaName(html, "twitter:url", seo.canonical);
  html = replaceCanonical(html, seo.canonical);

  const jsonLd = JSON.stringify(buildStructuredData(pathname, seo, siteUrl), null, 2);
  const schemaTag = `<script type="application/ld+json">\n${jsonLd}\n</script>`;
  html = replaceTagOrInject(html, /<script type="application\/ld\+json">[\s\S]*?<\/script>/i, schemaTag);
  return html;
}

app.disable("x-powered-by");
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(distDir, { maxAge: "1h", index: false }));

function ensureLeadStore() {
  const dataDir = path.join(__dirname, "data");
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  return path.join(dataDir, "contact_leads.jsonl");
}

async function sendLeadMail(lead) {
  const host = process.env.SMTP_HOST || "";
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER || "";
  const pass = process.env.SMTP_PASS || "";
  const from = process.env.CONTACT_FROM_EMAIL || user;
  const to = process.env.CONTACT_TO_EMAIL || "info@leecognitek.com";

  if (!host || !user || !pass || !from || !to) {
    return { mailed: false, reason: "SMTP not configured" };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const text = [
    "New lead from leecognitek.com",
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone || "-"}`,
    `Company: ${lead.company || "-"}`,
    `Interest: ${lead.interest || "-"}`,
    `Trial request: ${lead.trial_request ? "yes" : "no"}`,
    `Investor request: ${lead.investor_request ? "yes" : "no"}`,
    "",
    lead.message || "",
  ].join("\n");

  const leadTags = [];
  if (lead.trial_request) leadTags.push("[TRIAL]");
  if (lead.investor_request) leadTags.push("[INVESTOR]");
  const leadPrefix = leadTags.length ? `${leadTags.join(" ")} ` : "";

  await transporter.sendMail({
    from,
    to,
    subject: `${leadPrefix}New website lead: ${lead.name}`,
    text,
  });
  return { mailed: true };
}

app.post("/api/contact", async (req, res) => {
  try {
    const body = req.body && typeof req.body === "object" ? req.body : {};
    const lead = {
      name: String(body.name || "").trim(),
      email: String(body.email || "").trim(),
      phone: String(body.phone || "").trim(),
      company: String(body.company || "").trim(),
      interest: String(body.interest || "").trim(),
      trial_request: Boolean(body.trialRequest),
      investor_request: Boolean(body.investorRequest),
      message: String(body.message || "").trim(),
      source: "website",
      received_at: new Date().toISOString(),
    };

    if (lead.trial_request && !lead.interest) {
      lead.interest = "Vulnitek 30-day trial";
    }

    if (lead.investor_request && !lead.interest) {
      lead.interest = "Investor discussion";
    }

    if (lead.trial_request && !lead.message) {
      lead.message = "Requested Vulnitek 30-day free trial.";
    }

    if (!lead.name || !lead.email || !lead.message) {
      return res.status(400).json({ ok: false, error: "Name, email, and message are required." });
    }

    const leadFile = ensureLeadStore();
    fs.appendFileSync(leadFile, `${JSON.stringify(lead)}\n`, "utf8");
    const mail = await sendLeadMail(lead);
    return res.json({ ok: true, ...mail });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return res.status(500).json({ ok: false, error: message });
  }
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "leecognitek-web" });
});

// SPA fallback so React routes work in production.
app.get(/.*/, (req, res) => {
  const normalizedPath = resolveAppPathname(req);
  const siteUrl = resolveSiteUrl(req);
  try {
    const template = fs.readFileSync(indexHtmlPath, "utf8");
    const html = injectSeoIntoHtml(template, normalizedPath, siteUrl);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("X-Robots-Tag", DEFAULT_ROBOTS);
    res.send(html);
  } catch {
    res.sendFile(indexHtmlPath);
  }
});

app.listen(port, () => {
  console.log(`Web server running on port ${port}`);
});
