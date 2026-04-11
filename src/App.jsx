import "./App.css";

const products = [
  {
    name: "Vulnitek",
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
  return (
    <div className="page-shell">
      <div className="bg-orb orb-a" />
      <div className="bg-orb orb-b" />
      <div className="bg-grid" />
      <main className="site">
        <header className="topbar">
          <a className="brand" href="#home">
            LeeCognitek
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

        <section className="section split reveal" id="investors">
          <article className="panel">
            <p className="kicker">Investor Materials</p>
            <h2>Investor-ready narrative and pipeline</h2>
            <p>
              This section can host your pitch deck, one-page profile, traction snapshots, and roadmap milestones.
              Replace the links below with your final investor documents.
            </p>
            <div className="inline-actions">
              <a className="btn btn-primary" href="#">
                Open pitch deck
              </a>
              <a className="btn btn-secondary" href="#">
                Download company profile
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
          <div className="inline-actions">
            <a className="btn btn-primary" href="mailto:info@leecognitek.com">
              Contact LeeCognitek
            </a>
            <a className="btn btn-secondary" href="https://leecognitek.com/">
              Visit current domain
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
