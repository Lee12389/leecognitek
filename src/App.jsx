import "./App.css";
import { useEffect, useState } from "react";
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

const products = [
  {
    name: "Vulnitek",
    logo: vulnitekLogo,
    stage: "Pre-release (final testing + GTM)",
    summary:
      "Advanced SAST + DAST platform with agentic security reasoning, exploit-aware validation, and enterprise triage workflows.",
    points: [
      "Unified static + dynamic analysis in one security flow",
      "Prioritized findings with remediation guidance and analyst context",
      "Built for enterprise AppSec operations and governance",
    ],
  },
  {
    name: "Mantrika",
    logo: mantrikaLogo,
    stage: "In progress",
    summary:
      "Intelligent RPA platform for adaptive workflow automation across operations, support, and internal enterprise processes.",
    points: [
      "AI-assisted workflow planning and execution",
      "Automation with auditability and control",
      "Designed for scale across departments",
    ],
  },
  {
    name: "Lstat",
    logo: lstatLogo,
    stage: "Strategic build partnership with Statdoc",
    summary:
      "Medical coding and statistical analytics automation tool focused on reducing manual effort and improving decision velocity.",
    points: [
      "Medical coding intelligence workflows",
      "Statistical analytics automation for healthcare operations",
      "Co-built with domain partners for practical deployment",
    ],
  },
];

const services = [
  "AI product engineering and modernization",
  "Cybersecurity and application security consulting",
  "LLM-based security scans for code, APIs, and cloud workflows",
  "Bring Your Own LLM (BYO LLM) integration for enterprise security and automation",
  "Enterprise automation and intelligent operations",
  "Data analytics and decision support systems",
  "Custom platforms for healthcare, fintech, and enterprise teams",
  "Architecture, delivery, and long-term transformation partnerships",
];

const taglines = [
  "Empower Your Business with LCT AI: Unleash the Power of Intelligent Automation.",
  "Drive secure growth with AI-powered cybersecurity and enterprise execution.",
  "Transform decisions into outcomes with LeeCognitek intelligence platforms.",
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
    a: "Investor materials are shared directly after a qualified request to protect IP while maintaining structured communication.",
  },
];

const aiSearchFocus = [
  {
    title: "AI Startup Security Tools",
    text: "We help AI startups launch faster with security-first tooling, secure architecture patterns, and practical AppSec workflows for modern product teams.",
  },
  {
    title: "LLM-Based Security Scans",
    text: "Our approach combines static and dynamic testing with LLM-assisted reasoning to improve vulnerability detection, triage quality, and remediation velocity.",
  },
  {
    title: "Bring Your Own LLM (BYO LLM)",
    text: "Use your preferred or self-hosted LLM with governance controls, security guardrails, and enterprise-ready integration paths across your workflows.",
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

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "Vulnitek",
    investorRequest: false,
    message: "",
  });
  const [formBusy, setFormBusy] = useState(false);
  const [formMsg, setFormMsg] = useState("");
  const [activeShot, setActiveShot] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return undefined;
    const timer = setInterval(() => {
      setActiveShot((prev) => (prev + 1) % vulnitekUiShots.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const onFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormMsg("");
    setFormBusy(true);
    try {
      const res = await fetch("/api/contact", {
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
        phone: "",
        company: "",
        interest: "Vulnitek",
        investorRequest: false,
        message: "",
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      setFormMsg(message || "Submission failed.");
    } finally {
      setFormBusy(false);
    }
  };

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
            <a href="#products">Products</a>
            <a href="#showcase">Showcase</a>
            <a href="#services">Services</a>
            <a href="#investors">Investors</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="hero reveal" id="home">
          <p className="kicker">AI Systems. Security. Automation.</p>
          <h1>We build intelligent software products for high-stakes enterprise execution.</h1>
          <p className="subheadline">
            LeeCognitek is an AI company focused on applied intelligence across cybersecurity, automation, and analytics.
            Our flagship stack includes Vulnitek, Mantrika, and Lstat with partner-led domain depth.
          </p>
          <div className="tagline-list" aria-label="Brand taglines">
            {taglines.map((tagline) => (
              <p key={tagline} className="tagline-pill">
                {tagline}
              </p>
            ))}
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#products">
              Explore products
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
              <span>3</span>
              <p>Core product lines</p>
            </article>
            <article>
              <span>1</span>
              <p>Strategic healthcare partnership</p>
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
            <h2>Platforms under active build and launch</h2>
          </div>
          <div className="card-grid">
            {products.map((product) => (
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
            ))}
          </div>
        </section>

        <section className="section reveal" id="showcase">
          <div className="section-head">
            <p className="kicker">Vulnitek Product UI</p>
            <h2>Live interface showcase with enterprise-ready product depth</h2>
          </div>

          <div className="showcase-surface">
            <div
              className="showcase-carousel"
              aria-label="Vulnitek product interface gallery"
            >
              <div className="showcase-viewport">
                <div className="showcase-strip" style={{ transform: `translateX(-${activeShot * 100}%)` }}>
                  {vulnitekUiShots.map((shot, idx) => (
                    <figure className="showcase-slide" key={shot.title}>
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
                <span>{vulnitekUiShots[activeShot].label}</span>
                <h3>{vulnitekUiShots[activeShot].title}</h3>
                <p>{vulnitekUiShots[activeShot].detail}</p>
              </div>

              <div className="showcase-dots" role="tablist" aria-label="Vulnitek UI slides">
                {vulnitekUiShots.map((shot, idx) => (
                  <button
                    key={shot.title}
                    type="button"
                    className={`showcase-dot${idx === activeShot ? " is-active" : ""}`}
                    onClick={() => {
                      setActiveShot(idx);
                      setIsAutoPlay(false);
                    }}
                    aria-label={`Show ${shot.title}`}
                    aria-current={idx === activeShot ? "true" : "false"}
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
            <h2>AI startup security tools, LLM security scans, and BYO LLM delivery</h2>
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
              We share investor pitch materials directly upon request. Please contact our team for the latest investor
              deck, company profile, roadmap snapshots, and discussion scheduling.
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
              <li>Vulnitek launch after final validation and GTM readiness</li>
              <li>Mantrika feature expansion for intelligent enterprise RPA</li>
              <li>Lstat co-development with Statdoc for healthcare workflows</li>
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
          <p className="kicker">Let&apos;s build together</p>
          <h2>Partnerships, pilots, and enterprise deployments</h2>
          <p>
            For demos, strategic partnerships, investor communication, or enterprise consultations, contact our team.
          </p>
          <div className="contact-grid">
            <article className="panel contact-panel">
              <h3>Reach us directly</h3>
              <p>Email: <a href="mailto:info@leecognitek.com">info@leecognitek.com</a></p>
              <p>Phone: <a href="tel:+919010994629">+91 90109 94629</a></p>
              <div className="inline-actions">
                <a className="btn btn-secondary" href="mailto:info@leecognitek.com?subject=Investor%20Presentation%20Request">
                  Request investor presentation
                </a>
              </div>
            </article>
            <form className="panel contact-panel form-panel" onSubmit={onSubmit}>
              <h3>Contact form</h3>
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
                  name="phone"
                  value={form.phone}
                  onChange={onFormChange}
                  placeholder="Phone number"
                  autoComplete="tel"
                  aria-label="Phone number"
                />
                <input
                  name="company"
                  value={form.company}
                  onChange={onFormChange}
                  placeholder="Company"
                  autoComplete="organization"
                  aria-label="Company"
                />
              </div>
              <div className="form-row form-row-single">
                <select name="interest" value={form.interest} onChange={onFormChange} aria-label="Interest">
                  <option value="Vulnitek">Vulnitek</option>
                  <option value="Mantrika">Mantrika</option>
                  <option value="Lstat">Lstat</option>
                  <option value="Services">Services</option>
                  <option value="Investor discussion">Investor discussion</option>
                </select>
              </div>
              <div className="form-row form-row-single">
                <label className="checkbox-row">
                  <input
                    type="checkbox"
                    name="investorRequest"
                    checked={form.investorRequest}
                    onChange={onFormChange}
                  />
                  <span>This is an investor presentation request</span>
                </label>
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
                  {formBusy ? "Submitting..." : "Submit inquiry"}
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

