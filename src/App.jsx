import "./App.css";
import { useEffect, useMemo, useState } from "react";
import brandLogo from "./assets/leecognitek-logo.jpg";
import vulnitekLogo from "./assets/vulnitek-logo.png";
import mantrikaLogo from "./assets/mantrika-logo.jpg";
import lstatLogo from "./assets/lstat-logo.jpg";
import vulnitekUi1 from "./assets/vulnitek-ui/1.jpg";
import vulnitekUi2 from "./assets/vulnitek-ui/2.jpg";
import vulnitekUi3 from "./assets/vulnitek-ui/3.jpg";
import vulnitekUi4 from "./assets/vulnitek-ui/4.jpg";
import vulnitekUi5 from "./assets/vulnitek-ui/5.jpg";
import vulnitekUi6 from "./assets/vulnitek-ui/6.jpg";
import vulnitekUi7 from "./assets/vulnitek-ui/7.jpg";
import vulnitekUi8 from "./assets/vulnitek-ui/8.jpg";
import {
  PRODUCT_ROUTES,
  ROUTES,
  apiPath,
  appPath,
  getAppPathname,
  isAppRoute,
  siteUrl,
} from "./site";

const products = [
  {
    name: "Vulnitek",
    logo: vulnitekLogo,
    stage: "Flagship product | 30-day BYOLLM trial",
    summary:
      "AI-based security scanning platform for code, APIs, and modern apps with unified SAST, DAST, triage, and remediation workflows.",
    points: [
      "30-day BYOLLM evaluation for customer-managed models",
      "LeeCognitek-hosted option with usage-based LLM call pricing",
      "Built for AppSec teams, developer workflows, and security governance",
    ],
  },
  {
    name: "Mantrika",
    logo: mantrikaLogo,
    stage: "Under development",
    summary:
      "Recorder-first intelligent RPA platform for adaptive workflow automation across operations, support, and enterprise teams.",
    points: [
      "Windows Steps Recorder capture and AI workflow interpretation",
      "Human-in-loop automation with audit-ready controls",
      "Currently under development for early design partners",
    ],
  },
  {
    name: "Lstat",
    logo: lstatLogo,
    stage: "Under development",
    summary:
      "Medical coding and statistical analytics automation platform for healthcare teams seeking faster, governed delivery.",
    points: [
      "Coding intelligence and statistical workflow orchestration",
      "Healthcare QA, governance, and reporting support",
      "Currently under development with domain partners",
    ],
  },
];

const services = [
  "AI adoption strategy, product engineering, and modernization",
  "Cybersecurity and application security consulting",
  "LLM-based security scans for code, APIs, and cloud workflows",
  "Bring Your Own LLM (BYO LLM) integration for enterprise security and automation",
  "Enterprise automation and intelligent operations",
  "Data analytics and decision support systems",
  "Custom platforms for healthcare, fintech, and enterprise teams",
  "Architecture, delivery, and long-term transformation partnerships",
];

const taglines = [
  "Make AI adoption easier with secure, usable, enterprise-ready systems.",
  "Launch AI programs with governance, delivery confidence, and measurable outcomes.",
  "Move from experimentation to production with LeeCognitek applied intelligence.",
];

const pillars = [
  {
    title: "Secure by Design",
    text: "Security is embedded from architecture to deployment, reducing downstream risk and emergency patch cycles.",
  },
  {
    title: "Automation with Accountability",
    text: "Every automation decision is observable, reviewable, and aligned with governance needs in enterprise environments.",
  },
  {
    title: "AI with Business Outcomes",
    text: "We optimize for measurable impact: reduced cycle time, improved reliability, and lower operational overhead.",
  },
];

const impactMetrics = [
  { value: "40%+", label: "potential reduction in repetitive manual security triage effort" },
  { value: "3x", label: "faster decision loops through AI-assisted automation workflows" },
  { value: "24/7", label: "continuous digital operations model across products and services" },
  { value: "Enterprise", label: "delivery posture with compliance-aware implementation" },
];

const engagementFlow = [
  {
    phase: "Discover",
    detail: "Joint workshops to map systems, priorities, constraints, and transformation opportunities.",
  },
  {
    phase: "Design",
    detail: "Solution blueprint covering architecture, controls, KPIs, rollout milestones, and ownership model.",
  },
  {
    phase: "Deploy",
    detail: "Pilot-to-production execution with integrated training, governance checks, and measurable outcomes.",
  },
  {
    phase: "Scale",
    detail: "Optimization and expansion across departments with long-term strategic partnership support.",
  },
];

const industryFocus = [
  "Healthcare & life sciences",
  "Fintech & digital banking",
  "SaaS & cloud-native platforms",
  "Enterprise operations & shared services",
];

const faqs = [
  {
    q: "Do you provide custom enterprise implementations?",
    a: "Yes. We build and tailor solutions based on each organization's security posture, process architecture, and operational goals.",
  },
  {
    q: "Can we start with a pilot before full rollout?",
    a: "Absolutely. We recommend a focused pilot with clear success metrics, then scale once outcomes are validated.",
  },
  {
    q: "How do you handle investor pitch material requests?",
    a: "Investor materials are shared directly after a qualified request so we can provide the latest deck, roadmap, and discussion context.",
  },
];

const aiSearchFocus = [
  {
    title: "AI-Based Security Scanning",
    text: "Vulnitek helps teams scan modern apps, APIs, and engineering workflows with AI-assisted reasoning, SAST, DAST, and remediation context in one place.",
  },
  {
    title: "Application Security Scanning",
    text: "LeeCognitek brings together application security scanning, vulnerability validation, and governed remediation workflows for enterprise AppSec teams.",
  },
  {
    title: "BYOLLM and Managed LLM Delivery",
    text: "Start with a 30-day BYOLLM evaluation or move to LeeCognitek-hosted execution when you want simpler operations with usage-based LLM call pricing.",
  },
];

const stackSignals = [
  { value: "50+", label: "integration connectors" },
  { value: "99.9%", label: "target platform uptime model" },
  { value: "<150ms", label: "real-time decision latency path" },
  { value: "SOC-ready", label: "compliance-oriented architecture" },
];

const orchestrationPhases = [
  "Code + API Intake",
  "LLM Risk Reasoning",
  "Policy-Aware Scoring",
  "Human Security Review",
  "Fix + Ticket Sync",
];

const toolStacks = [
  {
    title: "AI + Model Layer",
    tools: ["OpenAI", "Azure OpenAI", "Claude", "Llama", "Mistral", "BYO LLM"],
  },
  {
    title: "Security Engine",
    tools: ["SAST", "DAST", "API Security", "Container Scan", "SBOM", "Secrets Detection"],
  },
  {
    title: "Developer Workflow",
    tools: ["GitHub", "GitLab", "Jira", "ServiceNow", "Slack", "VS Code"],
  },
  {
    title: "Cloud + Ops",
    tools: ["Azure", "AWS", "Kubernetes", "Terraform", "Prometheus", "Grafana"],
  },
];

const integrationRibbon = [
  "SIEM",
  "SOAR",
  "CI/CD",
  "SSO / SAML",
  "RBAC",
  "Audit Logs",
  "Policy Engine",
  "Webhook SDK",
];

const vulnitekUiShots = [
  {
    src: vulnitekUi1,
    title: "Vulnitek Console 01",
    label: "Threat Intelligence",
    detail: "Secure login and control center entry for analysts and engineering teams.",
    width: 1917,
    height: 917,
  },
  {
    src: vulnitekUi2,
    title: "Vulnitek Console 02",
    label: "Security Dashboard",
    detail: "Unified risk overview with operational health, coverage, and team priorities.",
    width: 1918,
    height: 910,
  },
  {
    src: vulnitekUi3,
    title: "Vulnitek Console 03",
    label: "Scan Operations",
    detail: "Target configuration and scan lifecycle management across testing workflows.",
    width: 1918,
    height: 907,
  },
  {
    src: vulnitekUi4,
    title: "Vulnitek Console 04",
    label: "Risk Insights",
    detail: "Issue distribution, failure trends, and high-impact vulnerability visibility.",
    width: 1917,
    height: 907,
  },
  {
    src: vulnitekUi5,
    title: "Vulnitek Console 05",
    label: "Policy Controls",
    detail: "Governance settings and security policy alignment for enterprise rollout.",
    width: 1911,
    height: 918,
  },
  {
    src: vulnitekUi6,
    title: "Vulnitek Console 06",
    label: "Agentic Triage",
    detail: "AI-assisted investigation paths with remediation context for teams.",
    width: 1918,
    height: 896,
  },
  {
    src: vulnitekUi7,
    title: "Vulnitek Console 07",
    label: "Developer Workflow",
    detail: "Developer-first findings workflow with fast filtering and actionable output.",
    width: 1918,
    height: 872,
  },
  {
    src: vulnitekUi8,
    title: "Vulnitek Console 08",
    label: "Executive Reporting",
    detail: "Board-level security intelligence with trend and outcome reporting.",
    width: 1903,
    height: 912,
  },
];

const homeSeo = {
  title: "LeeCognitek | AI-Based Security Scanning, Application Security Scanning, BYOLLM",
  description:
    "LeeCognitek is an applied AI startup helping enterprises adopt AI faster with secure products and automation. Vulnitek delivers AI-based security scanning for code, APIs, and modern apps with BYOLLM and managed hosting options.",
  keywords:
    "AI-based security scanning, application security scanning, AI security scanning, vulnerability scanning platform, SAST DAST, BYOLLM, LeeCognitek, Vulnitek",
  ogTitle: "LeeCognitek | AI-Based Security Scanning and Applied AI Products",
  ogDescription:
    "Applied AI startup helping enterprises adopt AI with security-first products, AI-based security scanning, and BYOLLM-ready deployment models.",
  path: ROUTES.home,
};

const vulnitekSeo = {
  title: "Vulnitek | AI-Based Security Scanning for Code, APIs, and Modern Apps",
  description:
    "Vulnitek is LeeCognitek's AI-based security scanning platform with unified SAST and DAST, AI-assisted triage, a 30-day BYOLLM trial, and LeeCognitek-hosted options with usage-based LLM call pricing.",
  keywords:
    "Vulnitek, AI-based security scanning, application security scanning, SAST DAST platform, vulnerability scanning, BYOLLM security platform",
  ogTitle: "Vulnitek | AI-Based Security Scanning Platform",
  ogDescription:
    "Scan, prioritize, and remediate vulnerabilities across apps and APIs with AI-assisted triage, BYOLLM flexibility, and managed deployment options.",
  path: ROUTES.vulnitek,
};

const vulnitekStats = [
  { value: "30 days", label: "BYOLLM evaluation window for customer-managed models" },
  { value: "Usage-based", label: "LLM call pricing on LeeCognitek-hosted model option" },
  { value: "1 platform", label: "unified SAST, DAST, patching, and remediation command center" },
  { value: "24/7", label: "continuous vulnerability and patch posture monitoring" },
  { value: "100+", label: "policy automations and workflow guardrails for enterprise teams" },
];

const vulnitekCapabilities = [
  {
    title: "Unified Vulnerability + Patch Management",
    text: "Track vulnerabilities, map risk, and orchestrate remediation with patch actions from one workspace.",
  },
  {
    title: "LLM-Assisted Risk Prioritization",
    text: "Use exploitability context and LLM-driven reasoning to rank what must be fixed first.",
  },
  {
    title: "Developer-Centric Remediation Flow",
    text: "Push actionable tickets and fix guidance directly into engineering workflows and security ops queues.",
  },
  {
    title: "Flexible LLM Deployment Options",
    text: "Start with a 30-day BYOLLM evaluation or switch to LeeCognitek-hosted execution with usage-based LLM call pricing and governed operations.",
  },
  {
    title: "Compliance-Ready Reporting",
    text: "Generate executive and auditor-friendly reports for posture trends, remediation velocity, and control adherence.",
  },
  {
    title: "Enterprise Integrations",
    text: "Connect SIEM, ticketing, CI/CD, and identity systems to operationalize secure-by-default delivery.",
  },
];

const vulnitekWorkflow = [
  {
    phase: "Discover",
    detail: "Map assets, endpoints, apps, and dependency surfaces across your environment.",
  },
  {
    phase: "Assess",
    detail: "Run static, dynamic, and contextual checks with policy-aware analysis.",
  },
  {
    phase: "Prioritize",
    detail: "Use exploitability scoring plus AI guidance to focus on highest-impact risk.",
  },
  {
    phase: "Remediate",
    detail: "Trigger patch and fix workflows with ownership, SLAs, and verification loops.",
  },
  {
    phase: "Report",
    detail: "Track closure, trend, and control coverage metrics for leadership and compliance teams.",
  },
];

const vulnitekUseCases = [
  "Application security modernization for product teams",
  "Patch and vulnerability lifecycle orchestration for enterprise IT",
  "LLM-based security triage for faster SOC and AppSec decisions",
  "Audit-ready risk and remediation reporting across departments",
];

const vulnitekPlans = [
  {
    name: "Pilot",
    focus: "30-day BYOLLM proof-of-value for one business unit",
    points: ["30-day BYOLLM evaluation", "Core AI-based security scanning", "Guided prioritization and dashboard"],
  },
  {
    name: "Growth",
    focus: "Operational rollout across multiple teams",
    points: ["LeeCognitek-hosted model option", "Usage-based LLM call pricing", "Workflow integrations and advanced policy rules"],
  },
  {
    name: "Enterprise",
    focus: "Large-scale deployment with governance controls",
    points: ["BYO LLM support", "Custom control frameworks", "Executive reporting and SLA orchestration"],
  },
];

const mantrikaSeo = {
  title: "Mantrika | Intelligent RPA Platform Under Development",
  description:
    "Mantrika is LeeCognitek's intelligent RPA platform under development, designed to turn recorder-based workflows into governed enterprise automation.",
  keywords:
    "Mantrika, intelligent RPA, enterprise automation platform, workflow automation, AI automation, human in loop RPA",
  ogTitle: "Mantrika | Intelligent RPA Platform Under Development",
  ogDescription:
    "Join the waitlist for LeeCognitek's recorder-first intelligent RPA platform for governed enterprise automation.",
  path: ROUTES.mantrika,
};

const mantrikaStats = [
  { value: "24/7", label: "orchestrated automation across operations and support flows" },
  { value: "Low-code", label: "workflow builder for business and engineering teams" },
  { value: "Human-in-loop", label: "approval controls for sensitive and high-risk actions" },
  { value: "API-first", label: "integration model for enterprise tools and internal systems" },
];

const mantrikaCapabilities = [
  {
    title: "Recorder-First Automation Capture",
    text: "Capture real desktop workflows using Windows Steps Recorder and convert real operator behavior into automation-ready data.",
  },
  {
    title: "LLM-Based Step Interpretation",
    text: "LLM analyzes recorded actions, UI context, and process intent to create structured, replayable automation logic.",
  },
  {
    title: "Reliable Action Replay",
    text: "Replay captured flows in controlled execution runs, validate outcomes, and stabilize fragile automation paths.",
  },
  {
    title: "Human-in-Loop Decision Controls",
    text: "Escalate approvals and sensitive actions to users while maintaining traceability and governance confidence.",
  },
  {
    title: "Enterprise Integrations",
    text: "Connect ticketing, CRM, ERP, and internal APIs to operationalize automation across departments.",
  },
  {
    title: "Audit and Observability",
    text: "Track every recorded and automated step with run history, failure context, and SLA-level reporting.",
  },
];

const mantrikaWorkflow = [
  {
    phase: "Record",
    detail: "User records process steps with Windows Steps Recorder to capture real-world task execution.",
  },
  {
    phase: "Analyze",
    detail: "LLM interprets captured actions, screens, and intent to produce structured automation instructions.",
  },
  {
    phase: "Replay",
    detail: "Mantrika replays and validates flow execution to ensure repeatability and quality of outcomes.",
  },
  {
    phase: "Automate",
    detail: "Promote validated flows into production automation with exception handling and approval controls.",
  },
  {
    phase: "Optimize",
    detail: "Monitor performance, improve step logic, and continuously refine workflows for scale and reliability.",
  },
];

const mantrikaUseCases = [
  "Back-office task automation from manually recorded SOPs",
  "Support and operations workflows with repetitive desktop actions",
  "Finance and compliance processes requiring approval checkpoints",
  "Cross-system enterprise workflows using recorder-driven automation capture",
];

const mantrikaPlans = [
  {
    name: "Starter",
    focus: "Automate one or two high-volume internal workflows",
    points: ["Workflow builder", "Core connectors", "Execution monitoring"],
  },
  {
    name: "Operations",
    focus: "Scale intelligent automation across multiple departments",
    points: ["Advanced orchestration", "SLA controls", "Team-level governance"],
  },
  {
    name: "Enterprise",
    focus: "Organization-wide automation with strict compliance controls",
    points: ["Custom integrations", "Policy enforcement", "Audit-ready reporting"],
  },
];

const lstatSeo = {
  title: "Lstat | Medical Coding and Analytics Platform Under Development",
  description:
    "Lstat is LeeCognitek's healthcare coding and analytics platform under development for governed medical coding, statistical reporting, and quality workflows.",
  keywords:
    "Lstat, medical coding automation, statistical analytics automation, healthcare analytics platform, clinical data workflows, healthcare AI operations",
  ogTitle: "Lstat | Healthcare Coding Platform Under Development",
  ogDescription:
    "Join the early-access conversation for LeeCognitek's healthcare coding and analytics platform under development.",
  path: ROUTES.lstat,
};

const lstatStats = [
  { value: "5-layer flow", label: "project -> study -> delivery -> program -> element execution model" },
  { value: "Role-based", label: "active-directory and access-level controls for governed operations" },
  { value: "SAS-native", label: "generated code, controlled execution, and output/log review loop" },
  { value: "Partner-led", label: "domain-informed build model with Statdoc healthcare collaboration" },
];

const lstatCapabilities = [
  {
    title: "Hierarchical Workflow Orchestration",
    text: "Operate across project, study, delivery, program, and element layers with governed ownership and sequencing.",
  },
  {
    title: "Program and Element Composition",
    text: "Compose table/listing/figure programs and reusable elements with structured parameter management.",
  },
  {
    title: "SAS Code Generation",
    text: "Generate deterministic SAS code from element parameters for transparent review and controlled execution.",
  },
  {
    title: "Execution and Log Visibility",
    text: "Run element-level or program-level execution and inspect logs plus output datasets in one operating flow.",
  },
  {
    title: "Access Governance",
    text: "Apply admin, read, write, and execute access rules through Active Directory mapping and project access policies.",
  },
  {
    title: "Clone and Scale Operations",
    text: "Clone deliveries, programs, and elements to accelerate repeatable healthcare analytics delivery patterns.",
  },
];

const lstatWorkflow = [
  {
    phase: "Govern",
    detail: "Set up users, Active Directory groups, and scoped project/study access levels.",
  },
  {
    phase: "Structure",
    detail: "Create projects, studies, and deliveries with controlled folder and operational metadata.",
  },
  {
    phase: "Compose",
    detail: "Build programs and element sequences for tables, listings, and figures workflows.",
  },
  {
    phase: "Generate",
    detail: "Produce program and element SAS code directly from configured parameters.",
  },
  {
    phase: "Execute",
    detail: "Run at sequence checkpoints, inspect execution logs, and iterate quickly.",
  },
  {
    phase: "Deliver",
    detail: "Review outputs, track auditable changes, and clone structures for next delivery cycle.",
  },
];

const lstatUseCases = [
  "Clinical-statistical workflow standardization across project teams",
  "Controlled SAS generation and execution for regulated analytics operations",
  "Reusable delivery templates for recurring table/listing/figure production cycles",
  "Governed collaboration between admin, analytics, and execution stakeholders",
];

const lstatPlans = [
  {
    name: "Foundation",
    focus: "Launch core workflow governance and first delivery pipeline",
    points: ["Access setup", "Program creation baseline", "Execution log visibility"],
  },
  {
    name: "Operations",
    focus: "Scale program/element automation across multiple studies",
    points: ["Delivery cloning", "Element sequence control", "Cross-team workflow ownership"],
  },
  {
    name: "Enterprise",
    focus: "Enterprise-grade rollout with governance and repeatability",
    points: ["Policy-driven access", "Audit-ready process trails", "Strategic domain collaboration"],
  },
];

const productDemoLinks = {
  vulnitek: "",
  mantrika: "",
  lstat: "",
};

function toEmbedUrl(url) {
  if (!url || !url.trim()) return "";
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtube.com")) {
      const videoId = parsed.searchParams.get("v");
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }
    if (parsed.hostname.includes("youtu.be")) {
      const videoId = parsed.pathname.replace("/", "").trim();
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }
    if (parsed.hostname.includes("vimeo.com")) {
      const videoId = parsed.pathname.replace("/", "").trim();
      if (videoId) return `https://player.vimeo.com/video/${videoId}`;
    }
    return url;
  } catch {
    return "";
  }
}

function DemoVideoSection({ id, title, description, url }) {
  const embedUrl = toEmbedUrl(url);
  if (!embedUrl) return null;

  return (
    <section className="section reveal" id={id}>
      <div className="section-head">
        <p className="kicker">Demo Video</p>
        <h2>{title}</h2>
      </div>
      <div className="demo-video-panel">
        <p>{description}</p>
        <div className="demo-video-wrap">
          <iframe
            src={embedUrl}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function upsertMetaByName(name, content) {
  if (typeof document === "undefined") return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertMetaByProperty(property, content) {
  if (typeof document === "undefined") return;
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function applySeoMeta(meta) {
  if (typeof document === "undefined") return;
  const canonical = meta.path ? siteUrl(meta.path) : meta.canonical;
  document.title = meta.title;
  upsertMetaByName("description", meta.description);
  upsertMetaByName("keywords", meta.keywords);
  upsertMetaByProperty("og:title", meta.ogTitle);
  upsertMetaByProperty("og:description", meta.ogDescription);
  upsertMetaByProperty("og:url", canonical);
  upsertMetaByName("twitter:title", meta.ogTitle);
  upsertMetaByName("twitter:description", meta.ogDescription);
  upsertMetaByName("twitter:url", canonical);
  const canonicalTag = document.querySelector('link[rel="canonical"]');
  if (canonicalTag) canonicalTag.setAttribute("href", canonical);
}

function AppLink({ to, children, onClick, ...props }) {
  const href = appPath(to);
  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    window.history.pushState(null, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

function useAppPathname() {
  const [pathname, setPathname] = useState(() => getAppPathname());

  useEffect(() => {
    const syncPath = () => setPathname(getAppPathname());
    window.addEventListener("popstate", syncPath);
    return () => window.removeEventListener("popstate", syncPath);
  }, []);

  return pathname;
}

function ShowcaseCarousel({ shots, productName = "Product", autoSlideMs = 2800, surfaceClassName = "" }) {
  const [activeShot, setActiveShot] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isCarouselTransition, setIsCarouselTransition] = useState(true);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const normalizedShots = useMemo(() => (Array.isArray(shots) ? shots : []), [shots]);
  const shotCount = normalizedShots.length;
  const loopedUiShots = useMemo(
    () => (shotCount ? [...normalizedShots, normalizedShots[0]] : []),
    [normalizedShots, shotCount],
  );
  const safeActiveShot = shotCount ? activeShot % shotCount : 0;
  const currentShot = normalizedShots[safeActiveShot] || normalizedShots[0];

  useEffect(() => {
    if (!isAutoPlay || shotCount <= 1) return undefined;
    const timer = setInterval(() => {
      setCarouselIndex((prev) => prev + 1);
      setActiveShot((prev) => (prev + 1) % shotCount);
    }, autoSlideMs);
    return () => clearInterval(timer);
  }, [isAutoPlay, shotCount, autoSlideMs]);

  if (!normalizedShots.length) return null;

  const onShowcaseTransitionEnd = () => {
    if (carouselIndex !== shotCount) return;
    setIsCarouselTransition(false);
    setCarouselIndex(0);
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsCarouselTransition(true);
        });
      });
      return;
    }
    setIsCarouselTransition(true);
  };

  const onShotSelect = (idx) => {
    setActiveShot(idx);
    setCarouselIndex(idx);
    setIsCarouselTransition(true);
    setIsAutoPlay(false);
  };

  return (
    <div className={`showcase-surface${surfaceClassName ? ` ${surfaceClassName}` : ""}`}>
      <div className="showcase-carousel" aria-label={`${productName} product interface gallery`}>
        <div className="showcase-viewport">
          <div
            className="showcase-strip"
            style={{
              transform: `translateX(-${carouselIndex * 100}%)`,
              transition: isCarouselTransition ? undefined : "none",
            }}
            onTransitionEnd={onShowcaseTransitionEnd}
          >
            {loopedUiShots.map((shot, idx) => (
              <figure className="showcase-slide" key={`${shot.title}-${idx}`}>
                <img
                  className="showcase-main-image"
                  src={shot.src}
                  alt={`${shot.title} - ${shot.label}`}
                  width={shot.width}
                  height={shot.height}
                  loading={idx < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </div>

        <div className="showcase-caption">
          <div className="showcase-caption-head">
            <span>{currentShot.label}</span>
            <p className="showcase-progress" aria-live="polite">
              {safeActiveShot + 1} / {shotCount}
            </p>
          </div>
          <h3>{currentShot.title}</h3>
          <p>{currentShot.detail}</p>
        </div>

        <div className="showcase-dots" role="tablist" aria-label={`${productName} UI slides`}>
          {normalizedShots.map((shot, idx) => (
            <button
              key={shot.title}
              type="button"
              className={`showcase-dot${idx === safeActiveShot ? " is-active" : ""}`}
              onClick={() => onShotSelect(idx)}
              aria-label={`Show ${shot.title}`}
              aria-current={idx === safeActiveShot ? "true" : "false"}
            />
          ))}
        </div>

        <div className="showcase-controls">
          <button
            type="button"
            className="showcase-toggle"
            onClick={() => setIsAutoPlay((prev) => !prev)}
            aria-pressed={isAutoPlay ? "true" : "false"}
          >
            {isAutoPlay ? "Stop auto slide" : "Resume auto slide"}
          </button>
        </div>
      </div>
    </div>
  );
}

function VulnitekPage() {
  const [trialForm, setTrialForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    teamSize: "",
    message: "",
  });
  const [trialBusy, setTrialBusy] = useState(false);
  const [trialMsg, setTrialMsg] = useState("");

  const onTrialFormChange = (e) => {
    const { name, value } = e.target;
    setTrialForm((prev) => ({ ...prev, [name]: value }));
  };

  const onTrialSubmit = async (e) => {
    e.preventDefault();
    setTrialMsg("");
    setTrialBusy(true);

    const autoMessage = [
      "Requested Vulnitek 30-day free trial.",
      `Team size: ${trialForm.teamSize || "-"}.`,
      trialForm.message ? `Notes: ${trialForm.message}` : "",
    ]
      .filter(Boolean)
      .join(" ");

    try {
      const res = await fetch(apiPath("/api/contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trialForm.name,
          email: trialForm.email,
          phone: trialForm.phone,
          company: trialForm.company,
          interest: "Vulnitek 30-day trial",
          investorRequest: false,
          trialRequest: true,
          message: autoMessage,
        }),
      });

      const out = await res.json();
      if (!res.ok || !out?.ok) {
        throw new Error(out?.error || "Failed to submit free trial request.");
      }

      setTrialMsg("Thanks. Your 30-day trial request is received. We will contact you shortly.");
      setTrialForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        teamSize: "",
        message: "",
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      setTrialMsg(message || "Submission failed.");
    } finally {
      setTrialBusy(false);
    }
  };

  return (
    <div className="page-shell vulnitek-shell">
      <a className="skip-link" href="#v-main">
        Skip to main content
      </a>
      <div className="bg-orb orb-a" />
      <div className="bg-orb orb-b" />
      <div className="bg-grid" />

      <main className="site vulnitek-site" id="v-main">
        <header className="topbar">
          <AppLink className="brand" to={ROUTES.home}>
            <img
              src={brandLogo}
              alt="LeeCognitek logo"
              className="brand-logo"
              width="36"
              height="36"
              decoding="async"
              fetchPriority="high"
            />
            <span>LeeCognitek</span>
          </AppLink>
          <nav className="topnav" aria-label="Vulnitek primary navigation">
            <a href="#v-overview">Overview</a>
            <a href="#v-capabilities">Capabilities</a>
            <a href="#v-workflow">Workflow</a>
            <a href="#v-tour">Product Tour</a>
            <a href="#v-pricing">Plans</a>
            <a href="#v-contact">Contact</a>
          </nav>
        </header>

        <a className="trial-top-ribbon reveal" href="#v-contact">
          <span>30-day free trial. No credit card required!</span>
          <strong>Start Trial</strong>
        </a>

        <section className="v-hero reveal" id="v-overview">
          <div className="v-hero-copy">
            <div className="product-identity">
              <img
                src={vulnitekLogo}
                alt="Vulnitek logo"
                className="product-identity-logo"
                width="48"
                height="48"
                loading="eager"
                decoding="async"
              />
              <span>Vulnitek</span>
            </div>
            <p className="kicker">Vulnitek Platform</p>
            <h1>Your first AI Application Security Engineer.</h1>
            <p className="subheadline">
              Vulnitek helps teams discover, prioritize, and remediate vulnerabilities with unified SAST and DAST,
              AI-assisted triage, a 30-day BYOLLM trial, and LeeCognitek-hosted deployment options with usage-based
              LLM call pricing.
            </p>
            <ul className="v-hero-bullets">
              <li>Unified SAST + DAST + remediation context</li>
              <li>30-day BYOLLM evaluation for customer-managed models</li>
              <li>LeeCognitek-hosted option with usage-based LLM call pricing</li>
            </ul>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#v-contact">
                Request Vulnitek demo
              </a>
              <a className="btn btn-secondary" href="mailto:info@leecognitek.com?subject=Vulnitek%20Platform%20Inquiry">
                Talk to security team
              </a>
            </div>
          </div>

          <aside className="v-hero-panel">
            <p className="kicker">At a glance</p>
            <div className="v-hero-metrics">
              {vulnitekStats.slice(0, 3).map((item) => (
                <article key={item.label}>
                  <span>{item.value}</span>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </aside>
        </section>

        <section className="section reveal" id="v-stats">
          <div className="section-head">
            <p className="kicker">Platform Metrics</p>
            <h2>Numbers that support operational readiness</h2>
          </div>
          <div className="v-stats-grid">
            {vulnitekStats.map((item) => (
              <article className="v-stat-card" key={item.label}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="v-capabilities">
          <div className="section-head">
            <p className="kicker">Core Capabilities</p>
            <h2>Built for enterprise AppSec, SecOps, and IT remediation teams</h2>
          </div>
          <div className="card-grid">
            {vulnitekCapabilities.map((item) => (
              <article className="panel" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="v-workflow">
          <div className="section-head">
            <p className="kicker">Operational Flow</p>
            <h2>From detection to validated remediation in one cycle</h2>
          </div>
          <div className="timeline v-workflow-grid">
            {vulnitekWorkflow.map((step, idx) => (
              <article className="timeline-item" key={step.phase}>
                <div className="timeline-index">{idx + 1}</div>
                <div>
                  <h3>{step.phase}</h3>
                  <p>{step.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="v-tour">
          <div className="section-head">
            <p className="kicker">Product Tour</p>
            <h2>See Vulnitek in action across security workflows</h2>
          </div>

          <ShowcaseCarousel
            shots={vulnitekUiShots}
            productName="Vulnitek"
          />
        </section>

        <DemoVideoSection
          id="v-demo"
          title="Vulnitek Platform Demo"
          description="Walk through vulnerability discovery, prioritization, remediation workflows, and executive reporting in Vulnitek."
          url={productDemoLinks.vulnitek}
        />

        <section className="section split reveal" id="v-pricing">
          <article className="panel">
            <p className="kicker">Use Cases</p>
            <h2>Where Vulnitek delivers the most value</h2>
            <ul className="bullets">
              {vulnitekUseCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="panel">
            <p className="kicker">Engagement Plans</p>
            <h2>Choose rollout speed that fits your team</h2>
            <div className="v-plan-grid">
              {vulnitekPlans.map((plan) => (
                <article key={plan.name} className="v-plan-card">
                  <h3>{plan.name}</h3>
                  <p>{plan.focus}</p>
                  <ul>
                    {plan.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="section cta reveal" id="v-contact">
          <p className="kicker">Free Trial</p>
          <h2>Start Vulnitek with a 30-day free trial</h2>

          <div className="contact-grid">
            <article className="panel contact-panel v-trial-info">
              <h3>What happens after you request trial access</h3>
              <ul className="bullets">
                <li>Our team reviews your request and reaches out manually by email</li>
                <li>We configure your trial workspace and onboarding schedule</li>
                <li>You get guided setup support for your first security workflow</li>
              </ul>
              <div className="inline-actions">
                <a className="btn btn-secondary" href="tel:+919010994629">
                  Call +91 90109 94629
                </a>
                <AppLink className="btn btn-secondary" to={ROUTES.home}>
                  Back to company site
                </AppLink>
              </div>
            </article>

            <form className="panel contact-panel form-panel" onSubmit={onTrialSubmit}>
              <h3>Request Vulnitek free trial</h3>
              <div className="form-row">
                <input
                  name="name"
                  value={trialForm.name}
                  onChange={onTrialFormChange}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-label="Your name"
                  required
                />
                <input
                  name="email"
                  type="email"
                  value={trialForm.email}
                  onChange={onTrialFormChange}
                  placeholder="Work email"
                  autoComplete="email"
                  aria-label="Work email"
                  required
                />
              </div>

              <div className="form-row">
                <input
                  name="phone"
                  value={trialForm.phone}
                  onChange={onTrialFormChange}
                  placeholder="Phone number"
                  autoComplete="tel"
                  aria-label="Phone number"
                />
                <input
                  name="company"
                  value={trialForm.company}
                  onChange={onTrialFormChange}
                  placeholder="Company"
                  autoComplete="organization"
                  aria-label="Company"
                />
              </div>

              <div className="form-row form-row-single">
                <select
                  name="teamSize"
                  value={trialForm.teamSize}
                  onChange={onTrialFormChange}
                  aria-label="Team size"
                >
                  <option value="">Team size (optional)</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201+">201+</option>
                </select>
              </div>

              <div className="form-row form-row-single">
                <textarea
                  name="message"
                  value={trialForm.message}
                  onChange={onTrialFormChange}
                  placeholder="Primary use case or notes (optional)"
                  aria-label="Primary use case"
                  rows={3}
                />
              </div>

              <div className="inline-actions">
                <button className="btn btn-primary" type="submit" disabled={trialBusy}>
                  {trialBusy ? "Submitting..." : "Request 30-day free trial"}
                </button>
              </div>
              {trialMsg ? <p className="form-msg">{trialMsg}</p> : null}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

function MantrikaPage() {
  return (
    <div className="page-shell mantrika-shell">
      <a className="skip-link" href="#m-main">
        Skip to main content
      </a>
      <div className="bg-orb orb-a" />
      <div className="bg-orb orb-b" />
      <div className="bg-grid" />

      <main className="site vulnitek-site" id="m-main">
        <header className="topbar">
          <AppLink className="brand" to={ROUTES.home}>
            <img
              src={brandLogo}
              alt="LeeCognitek logo"
              className="brand-logo"
              width="36"
              height="36"
              decoding="async"
              fetchPriority="high"
            />
            <span>LeeCognitek</span>
          </AppLink>
          <nav className="topnav" aria-label="Mantrika primary navigation">
            <a href="#m-overview">Overview</a>
            <a href="#m-capabilities">Capabilities</a>
            <a href="#m-workflow">Workflow</a>
            <a href="#m-pricing">Plans</a>
            <a href="#m-contact">Contact</a>
          </nav>
        </header>

        <section className="v-hero reveal" id="m-overview">
          <div className="v-hero-copy">
            <div className="product-identity">
              <img
                src={mantrikaLogo}
                alt="Mantrika logo"
                className="product-identity-logo"
                width="48"
                height="48"
                loading="eager"
                decoding="async"
              />
              <span>Mantrika</span>
            </div>
            <p className="kicker">Mantrika | Under Development</p>
            <h1>Intelligent RPA that learns workflows from real user-recorded steps.</h1>
            <p className="subheadline">
              Mantrika is under development as a recorder-first intelligent RPA platform. It captures process steps
              using Windows Steps Recorder, applies LLM analysis to understand intent, and turns validated flow logic
              into governed enterprise automation.
            </p>
            <ul className="v-hero-bullets">
              <li>Record processes exactly as users perform them</li>
              <li>LLM converts recorded actions into automation-ready logic</li>
              <li>Replay and validate before promoting to production automation</li>
            </ul>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#m-contact">
                Join Mantrika waitlist
              </a>
              <a className="btn btn-secondary" href="mailto:info@leecognitek.com?subject=Mantrika%20Platform%20Inquiry">
                Talk to automation team
              </a>
            </div>
          </div>

          <aside className="v-hero-panel">
            <p className="kicker">At a glance</p>
            <div className="v-hero-metrics">
              {mantrikaStats.slice(0, 3).map((item) => (
                <article key={item.label}>
                  <span>{item.value}</span>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </aside>
        </section>

        <section className="section reveal" id="m-stats">
          <div className="section-head">
            <p className="kicker">Automation Metrics</p>
            <h2>Built for practical, governed enterprise automation</h2>
          </div>
          <div className="v-stats-grid">
            {mantrikaStats.map((item) => (
              <article className="v-stat-card" key={item.label}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="m-capabilities">
          <div className="section-head">
            <p className="kicker">Core Capabilities</p>
            <h2>From recorder capture to intelligent enterprise automation</h2>
          </div>
          <div className="card-grid">
            {mantrikaCapabilities.map((item) => (
              <article className="panel" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="m-workflow">
          <div className="section-head">
            <p className="kicker">Automation Flow</p>
            <h2>Record, analyze, replay, and automate with confidence</h2>
          </div>
          <div className="timeline v-workflow-grid">
            {mantrikaWorkflow.map((step, idx) => (
              <article className="timeline-item" key={step.phase}>
                <div className="timeline-index">{idx + 1}</div>
                <div>
                  <h3>{step.phase}</h3>
                  <p>{step.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <DemoVideoSection
          id="m-demo"
          title="Mantrika Intelligent RPA Demo"
          description="See recorder-first automation capture, LLM interpretation, replay validation, and production workflow orchestration in Mantrika."
          url={productDemoLinks.mantrika}
        />

        <section className="section split reveal" id="m-pricing">
          <article className="panel">
            <p className="kicker">Use Cases</p>
            <h2>Where Mantrika delivers fastest operational impact</h2>
            <ul className="bullets">
              {mantrikaUseCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="panel">
            <p className="kicker">Engagement Plans</p>
            <h2>Scale automation by team maturity</h2>
            <div className="v-plan-grid">
              {mantrikaPlans.map((plan) => (
                <article key={plan.name} className="v-plan-card">
                  <h3>{plan.name}</h3>
                  <p>{plan.focus}</p>
                  <ul>
                    {plan.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="section cta reveal" id="m-contact">
          <p className="kicker">Under Development</p>
          <h2>Join the Mantrika design-partner waitlist</h2>
          <p>
            Share one repetitive workflow from your team and we&apos;ll discuss early-access fit, design-partner
            conversations, and the recorder-first rollout approach we&apos;re building.
          </p>
          <div className="inline-actions">
            <a className="btn btn-primary" href="mailto:info@leecognitek.com?subject=Mantrika%20Early%20Access%20Request">
              Request early access
            </a>
            <AppLink className="btn btn-secondary" to={ROUTES.home}>
              Back to company site
            </AppLink>
          </div>
        </section>
      </main>
    </div>
  );
}

function LstatPage() {
  return (
    <div className="page-shell lstat-shell">
      <a className="skip-link" href="#l-main">
        Skip to main content
      </a>
      <div className="bg-orb orb-a" />
      <div className="bg-orb orb-b" />
      <div className="bg-grid" />

      <main className="site vulnitek-site" id="l-main">
        <header className="topbar">
          <AppLink className="brand" to={ROUTES.home}>
            <img
              src={brandLogo}
              alt="LeeCognitek logo"
              className="brand-logo"
              width="36"
              height="36"
              decoding="async"
              fetchPriority="high"
            />
            <span>LeeCognitek</span>
          </AppLink>
          <nav className="topnav" aria-label="Lstat primary navigation">
            <a href="#l-overview">Overview</a>
            <a href="#l-capabilities">Capabilities</a>
            <a href="#l-workflow">Workflow</a>
            <a href="#l-pricing">Plans</a>
            <a href="#l-contact">Contact</a>
          </nav>
        </header>

        <section className="v-hero reveal" id="l-overview">
          <div className="v-hero-copy">
            <div className="product-identity">
              <img
                src={lstatLogo}
                alt="Lstat logo"
                className="product-identity-logo"
                width="48"
                height="48"
                loading="eager"
                decoding="async"
              />
              <span>Lstat</span>
            </div>
            <p className="kicker">Lstat | Under Development</p>
            <h1>Medical coding and statistical analytics automation for healthcare execution teams.</h1>
            <p className="subheadline">
              Lstat is under development as a healthcare-focused platform to automate coding workflows, improve data
              quality, and generate reliable statistical insights for enterprise operations and governance.
            </p>
            <ul className="v-hero-bullets">
              <li>Accelerate medical coding with AI-assisted suggestions and QA guardrails</li>
              <li>Automate statistical analytics flows for operational and clinical reporting</li>
              <li>Maintain traceable, audit-ready workflows across teams and partners</li>
            </ul>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#l-contact">
                Join Lstat waitlist
              </a>
              <a className="btn btn-secondary" href="mailto:info@leecognitek.com?subject=Lstat%20Platform%20Inquiry">
                Talk to healthcare team
              </a>
            </div>
          </div>

          <aside className="v-hero-panel">
            <p className="kicker">At a glance</p>
            <div className="v-hero-metrics">
              {lstatStats.slice(0, 3).map((item) => (
                <article key={item.label}>
                  <span>{item.value}</span>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </aside>
        </section>

        <section className="section reveal" id="l-stats">
          <div className="section-head">
            <p className="kicker">Platform Metrics</p>
            <h2>Designed for reliable healthcare coding and analytics delivery</h2>
          </div>
          <div className="v-stats-grid">
            {lstatStats.map((item) => (
              <article className="v-stat-card" key={item.label}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="l-capabilities">
          <div className="section-head">
            <p className="kicker">Core Capabilities</p>
            <h2>Built for healthcare coding teams, analytics specialists, and governance leaders</h2>
          </div>
          <div className="card-grid">
            {lstatCapabilities.map((item) => (
              <article className="panel" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="l-workflow">
          <div className="section-head">
            <p className="kicker">Operational Flow</p>
            <h2>From intake to validated reporting in one governed healthcare cycle</h2>
          </div>
          <div className="timeline v-workflow-grid">
            {lstatWorkflow.map((step, idx) => (
              <article className="timeline-item" key={step.phase}>
                <div className="timeline-index">{idx + 1}</div>
                <div>
                  <h3>{step.phase}</h3>
                  <p>{step.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <DemoVideoSection
          id="l-demo"
          title="Lstat Healthcare Automation Demo"
          description="Watch coding workflow capture, QA validation, and statistical reporting orchestration with Lstat."
          url={productDemoLinks.lstat}
        />

        <section className="section split reveal" id="l-pricing">
          <article className="panel">
            <p className="kicker">Use Cases</p>
            <h2>Where Lstat drives measurable healthcare execution value</h2>
            <ul className="bullets">
              {lstatUseCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="panel">
            <p className="kicker">Engagement Plans</p>
            <h2>Adopt at the pace of your operations and governance model</h2>
            <div className="v-plan-grid">
              {lstatPlans.map((plan) => (
                <article key={plan.name} className="v-plan-card">
                  <h3>{plan.name}</h3>
                  <p>{plan.focus}</p>
                  <ul>
                    {plan.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="section cta reveal" id="l-contact">
          <p className="kicker">Under Development</p>
          <h2>Join the Lstat early-access conversation</h2>
          <p>
            Share your current coding and reporting process, and we&apos;ll discuss fit for early access, healthcare
            workflow priorities, and the governance model we&apos;re building with domain partners.
          </p>
          <div className="inline-actions">
            <a className="btn btn-primary" href="mailto:info@leecognitek.com?subject=Lstat%20Early%20Access%20Request">
              Request early access
            </a>
            <AppLink className="btn btn-secondary" to={ROUTES.home}>
              Back to company site
            </AppLink>
          </div>
        </section>
      </main>
    </div>
  );
}

function App() {
  const currentPath = useAppPathname();
  const isVulnitekPage = isAppRoute(currentPath, ROUTES.vulnitek);
  const isMantrikaPage = isAppRoute(currentPath, ROUTES.mantrika);
  const isLstatPage = isAppRoute(currentPath, ROUTES.lstat);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: "Vulnitek",
    message: "",
  });
  const [formBusy, setFormBusy] = useState(false);
  const [formMsg, setFormMsg] = useState("");

  useEffect(() => {
    if (isVulnitekPage) {
      applySeoMeta(vulnitekSeo);
      return;
    }
    if (isMantrikaPage) {
      applySeoMeta(mantrikaSeo);
      return;
    }
    if (isLstatPage) {
      applySeoMeta(lstatSeo);
      return;
    }
    applySeoMeta(homeSeo);
  }, [isVulnitekPage, isMantrikaPage, isLstatPage]);

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormMsg("");
    setFormBusy(true);
    try {
      const res = await fetch(apiPath("/api/contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const out = await res.json();
      if (!res.ok || !out?.ok) {
        throw new Error(out?.error || "Failed to submit contact form.");
      }
      setFormMsg("Thanks. We received your details and will contact you shortly.");
      setForm({
        name: "",
        email: "",
        company: "",
        interest: "Vulnitek",
        message: "",
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      setFormMsg(message || "Submission failed.");
    } finally {
      setFormBusy(false);
    }
  };

  if (isVulnitekPage) {
    return <VulnitekPage />;
  }

  if (isMantrikaPage) {
    return <MantrikaPage />;
  }

  if (isLstatPage) {
    return <LstatPage />;
  }

  return (
    <div className="page-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="bg-orb orb-a" />
      <div className="bg-orb orb-b" />
      <div className="bg-grid" />
      <main className="site" id="main-content">
        <header className="topbar">
          <a className="brand" href="#home">
            <img
              src={brandLogo}
              alt="LeeCognitek logo"
              className="brand-logo"
              width="36"
              height="36"
              decoding="async"
              fetchPriority="high"
            />
            <span>LeeCognitek</span>
          </a>
          <nav className="topnav" aria-label="Primary">
            <div className="nav-dropdown">
              <button className="nav-dropdown-trigger" type="button" aria-haspopup="true">
                Products <span className="nav-caret" aria-hidden="true">▾</span>
              </button>
              <div className="nav-dropdown-menu" role="menu" aria-label="Product pages">
                <a href="#products" role="menuitem">
                  All products
                </a>
                <AppLink to={ROUTES.vulnitek} role="menuitem">
                  Vulnitek
                </AppLink>
                <AppLink to={ROUTES.mantrika} role="menuitem">
                  Mantrika
                </AppLink>
                <AppLink to={ROUTES.lstat} role="menuitem">
                  Lstat
                </AppLink>
              </div>
            </div>
            <a href="#services">Services</a>
            <a href="#investors">Investors</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="hero reveal" id="home">
          <p className="kicker">Applied AI Startup</p>
          <h1>LeeCognitek helps teams adopt AI faster with secure, usable, enterprise-ready systems.</h1>
          <p className="subheadline">
            LeeCognitek builds practical AI products, security platforms, and automation workflows that make AI
            adoption easier for real teams. Vulnitek is our flagship platform for AI-based security scanning, while
            Mantrika and Lstat remain under development.
          </p>
          <div className="tagline-list" aria-label="Brand taglines">
            {taglines.map((tagline) => (
              <p key={tagline} className="tagline-pill">
                {tagline}
              </p>
            ))}
          </div>
          <div className="hero-actions">
            <AppLink className="btn btn-primary" to={ROUTES.vulnitek}>
              Explore Vulnitek
            </AppLink>
            <a className="btn btn-secondary" href="#products">
              View portfolio
            </a>
            <a className="btn btn-secondary" href="#investors">
              View investor section
            </a>
          </div>
          <div className="hero-graphic" aria-hidden="true">
            <div className="pulse-node node-core">
              <img src={brandLogo} alt="" className="node-logo-image" width="68" height="68" loading="eager" decoding="async" />
            </div>
            <div className="pulse-node node-vulnitek">
              <img src={vulnitekLogo} alt="" className="node-logo-image" width="62" height="62" loading="lazy" decoding="async" />
            </div>
            <div className="pulse-node node-mantrika">
              <img src={mantrikaLogo} alt="" className="node-logo-image" width="62" height="62" loading="lazy" decoding="async" />
            </div>
            <div className="pulse-node node-lstat">
              <img src={lstatLogo} alt="" className="node-logo-image" width="62" height="62" loading="lazy" decoding="async" />
            </div>
            <span className="beam beam-a" />
            <span className="beam beam-b" />
            <span className="beam beam-c" />
          </div>
          <div className="hero-metrics">
            <article>
              <span>1</span>
              <p>Flagship product ready for conversations now</p>
            </article>
            <article>
              <span>2</span>
              <p>Roadmap products under development</p>
            </article>
            <article>
              <span>AI-first</span>
              <p>Delivery model across all solutions</p>
            </article>
          </div>
        </section>

        <section className="section reveal" id="products">
          <div className="section-head">
            <p className="kicker">Product Portfolio</p>
            <h2>Flagship platform with two roadmap products in development</h2>
          </div>
          <div className="card-grid">
            {products.map((product) => {
              const productHref = PRODUCT_ROUTES[product.name];
              return productHref ? (
                <AppLink
                  key={product.name}
                  className="product-card product-card-link"
                  to={productHref}
                  aria-label={`Open ${product.name} page`}
                >
                  <div className="product-head">
                    {product.logo ? (
                      <img
                        src={product.logo}
                        alt={`${product.name} logo`}
                        className="product-logo"
                        width="52"
                        height="52"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="product-logo product-logo-fallback">{product.name[0]}</div>
                    )}
                  </div>
                  <div className="badge">{product.stage}</div>
                  <h3>{product.name}</h3>
                  <p>{product.summary}</p>
                  <ul>
                    {product.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </AppLink>
              ) : (
                <article key={product.name} className="product-card">
                  <div className="product-head">
                    {product.logo ? (
                      <img
                        src={product.logo}
                        alt={`${product.name} logo`}
                        className="product-logo"
                        width="52"
                        height="52"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="product-logo product-logo-fallback">{product.name[0]}</div>
                    )}
                  </div>
                  <div className="badge">{product.stage}</div>
                  <h3>{product.name}</h3>
                  <p>{product.summary}</p>
                  <ul>
                    {product.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section reveal" id="services">
          <div className="section-head">
            <p className="kicker">Services</p>
            <h2>What we deliver for enterprises</h2>
          </div>
          <ul className="service-grid">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </section>

        <section className="section reveal" id="ai-security">
          <div className="section-head">
            <p className="kicker">AI Security Focus</p>
            <h2>AI-based security scanning, application security scanning, and flexible LLM delivery</h2>
          </div>
          <div className="card-grid">
            {aiSearchFocus.map((item) => (
              <article className="panel" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="stack">
          <div className="section-head">
            <p className="kicker">Tool Ecosystem</p>
            <h2>Enterprise-grade startup stack with clean integrations and secure orchestration</h2>
          </div>

          <div className="stack-layout">
            <article className="panel stack-overview">
              <h3>Built to run like a modern software startup</h3>
              <p>
                We combine AI reasoning, security automation, and enterprise controls in one connected platform.
                Teams can plug in their preferred tools, models, and cloud stack without reworking core workflows.
              </p>

              <div className="stack-metrics">
                {stackSignals.map((item) => (
                  <article className="stack-metric" key={item.label}>
                    <span>{item.value}</span>
                    <p>{item.label}</p>
                  </article>
                ))}
              </div>

              <div className="orchestration-rail" aria-label="LLM security workflow">
                {orchestrationPhases.map((phase) => (
                  <div className="rail-step" key={phase}>
                    <span className="rail-dot" />
                    <p>{phase}</p>
                  </div>
                ))}
              </div>
            </article>

            <div className="stack-categories">
              {toolStacks.map((stack) => (
                <article className="panel stack-card" key={stack.title}>
                  <h3>{stack.title}</h3>
                  <div className="tool-cloud">
                    {stack.tools.map((tool) => (
                      <span className="tool-chip" key={tool}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="integrations-marquee" aria-hidden="true">
            <div className="integrations-track">
              {integrationRibbon.concat(integrationRibbon).map((item, idx) => (
                <span className="integration-pill" key={`${item}-${idx}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section reveal" id="impact">
          <div className="section-head">
            <p className="kicker">Why LeeCognitek</p>
            <h2>Outcome-first engineering for enterprise transformation</h2>
          </div>
          <div className="pillars-grid">
            {pillars.map((pillar) => (
              <article className="panel" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
          <div className="impact-grid">
            {impactMetrics.map((metric) => (
              <article key={metric.label} className="impact-card">
                <h3>{metric.value}</h3>
                <p>{metric.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="approach">
          <div className="section-head">
            <p className="kicker">Execution Model</p>
            <h2>How we engage from strategy to scale</h2>
          </div>
          <div className="timeline">
            {engagementFlow.map((step, idx) => (
              <article className="timeline-item" key={step.phase}>
                <div className="timeline-index">{idx + 1}</div>
                <div>
                  <h3>{step.phase}</h3>
                  <p>{step.detail}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="ticker-wrap" aria-hidden="true">
            <div className="ticker-track">
              {industryFocus.concat(industryFocus).map((item, idx) => (
                <span key={`${item}-${idx}`} className="ticker-pill">{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section reveal" id="partners">
          <div className="section-head">
            <p className="kicker">Partnerships</p>
            <h2>Strategic ecosystem and execution support</h2>
          </div>
          <div className="card-grid">
            <article className="panel">
              <div className="badge">Cloud Partner</div>
              <h3>Microsoft</h3>
              <p>
                Partnered with Microsoft for cloud services. LeeCognitek received USD 5,000 in credits, which supported
                our cloud infrastructure during the early growth phase.
              </p>
            </article>
            <article className="panel">
              <div className="badge">Domain Partner</div>
              <h3>Statdoc</h3>
              <p>
                Strategic partnership for building Lstat, a medical coding and statistical analytics automation platform
                for healthcare-driven enterprise workflows.
              </p>
            </article>
          </div>
        </section>

        <section className="section split reveal" id="investors">
          <article className="panel">
            <p className="kicker">Investor Materials</p>
            <h2>Investor-ready narrative and pipeline</h2>
            <p>
              We share investor pitch materials directly upon request. Contact us if you&apos;re interested in
              investment, strategic collaboration, or reviewing the latest company deck and roadmap.
            </p>
            <div className="inline-actions">
              <a className="btn btn-primary" href="#contact">
                Request investor presentation
              </a>
              <a className="btn btn-secondary" href="mailto:info@leecognitek.com?subject=Investor%20Presentation%20Request">
                Email investor relations
              </a>
            </div>
          </article>

          <article className="panel">
            <p className="kicker">Current Focus</p>
            <h2>Execution roadmap</h2>
            <ul className="bullets">
              <li>Vulnitek customer pilots, evaluations, and flagship product rollout</li>
              <li>Mantrika under development for recorder-first intelligent RPA</li>
              <li>Lstat under development for healthcare coding and analytics workflows</li>
              <li>Scalable delivery model for enterprise transformation services</li>
            </ul>
          </article>
        </section>

        <section className="section reveal" id="faq">
          <div className="section-head">
            <p className="kicker">FAQ</p>
            <h2>Common questions from enterprise teams and investors</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((item) => (
              <article className="panel" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section cta reveal" id="contact">
          <p className="kicker">Contact LeeCognitek</p>
          <h2>Share your request</h2>
          <p>
            For product pilots, partnerships, investor conversations, or enterprise consultations, send a short note
            and we&apos;ll route it to the right team.
          </p>
          <div className="contact-grid">
            <article className="panel contact-panel">
              <h3>Reach us directly</h3>
              <p>Email: <a href="mailto:info@leecognitek.com">info@leecognitek.com</a></p>
              <p>All inbound requests are reviewed by the LeeCognitek core team.</p>
              <div className="inline-actions">
                <a className="btn btn-secondary" href="mailto:info@leecognitek.com?subject=Investor%20Presentation%20Request">
                  Request investor presentation
                </a>
              </div>
            </article>
            <form className="panel contact-panel form-panel" onSubmit={onSubmit}>
              <h3>Send a request</h3>
              <div className="form-row">
                <input
                  name="name"
                  value={form.name}
                  onChange={onFormChange}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-label="Your name"
                  required
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onFormChange}
                  placeholder="Work email"
                  autoComplete="email"
                  aria-label="Work email"
                  required
                />
              </div>
              <div className="form-row">
                <input
                  name="company"
                  value={form.company}
                  onChange={onFormChange}
                  placeholder="Company"
                  autoComplete="organization"
                  aria-label="Company"
                />
                <select name="interest" value={form.interest} onChange={onFormChange} aria-label="Interest">
                  <option value="Vulnitek">Vulnitek</option>
                  <option value="Mantrika">Mantrika</option>
                  <option value="Lstat">Lstat</option>
                  <option value="Services">Services</option>
                  <option value="Investor discussion">Investor discussion</option>
                  <option value="General inquiry">General inquiry</option>
                </select>
              </div>
              <div className="form-row form-row-single">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onFormChange}
                  placeholder="Tell us what you need"
                  aria-label="Tell us what you need"
                  rows={4}
                  required
                />
              </div>
              <div className="inline-actions">
                <button className="btn btn-primary" type="submit" disabled={formBusy}>
                  {formBusy ? "Sending..." : "Send request"}
                </button>
              </div>
              {formMsg ? <p className="form-msg">{formMsg}</p> : null}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

