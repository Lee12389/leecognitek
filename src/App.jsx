import "./App.css";
import { useState } from "react";
import brandLogo from "./assets/leecognitek-logo.jpg";
import vulnitekLogo from "./assets/vulnitek-logo.png";
import mantrikaLogo from "./assets/mantrika-logo.jpg";

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
    logo: "",
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
  "Enterprise automation and intelligent operations",
  "Data analytics and decision support systems",
  "Custom platforms for healthcare, fintech, and enterprise teams",
  "Architecture, delivery, and long-term transformation partnerships",
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
      <div className="bg-orb orb-a" />
      <div className="bg-orb orb-b" />
      <div className="bg-grid" />
      <main className="site">
        <header className="topbar">
          <a className="brand" href="#home">
            <img src={brandLogo} alt="LeeCognitek logo" className="brand-logo" />
            <span>LeeCognitek</span>
          </a>
          <nav className="topnav">
            <a href="#products">Products</a>
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
          <div className="hero-actions">
            <a className="btn btn-primary" href="#products">
              Explore products
            </a>
            <a className="btn btn-secondary" href="#investors">
              View investor section
            </a>
          </div>
          <div className="hero-graphic" aria-hidden="true">
            <div className="pulse-node node-core">LeeCognitek</div>
            <div className="pulse-node node-vulnitek">Vulnitek</div>
            <div className="pulse-node node-mantrika">Mantrika</div>
            <div className="pulse-node node-lstat">Lstat</div>
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
                    <img src={product.logo} alt={`${product.name} logo`} className="product-logo" />
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
                <input name="name" value={form.name} onChange={onFormChange} placeholder="Your name" required />
                <input name="email" type="email" value={form.email} onChange={onFormChange} placeholder="Work email" required />
              </div>
              <div className="form-row">
                <input name="phone" value={form.phone} onChange={onFormChange} placeholder="Phone number" />
                <input name="company" value={form.company} onChange={onFormChange} placeholder="Company" />
              </div>
              <div className="form-row form-row-single">
                <select name="interest" value={form.interest} onChange={onFormChange}>
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
                <textarea name="message" value={form.message} onChange={onFormChange} placeholder="Tell us what you need" rows={4} required />
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
