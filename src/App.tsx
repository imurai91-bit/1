const services = [
  {
    title: "Launch Design",
    text: "หน้าแรกที่เล่าแบรนด์ชัด จัดลำดับคอนเทนต์ให้ลูกค้าเข้าใจเร็ว และพร้อมต่อยอดแคมเปญ",
  },
  {
    title: "Commerce Ready",
    text: "โครงหน้าเว็บรองรับสินค้า โปรโมชัน ช่องทางติดต่อ และการวัดผลสำหรับขายจริง",
  },
  {
    title: "Fast Delivery",
    text: "งานออกแบบและโค้ดเป็นระบบ ปรับแก้ง่าย โหลดไว และ deploy ได้กับ Vercel",
  },
];

const metrics = [
  ["14d", "launch window"],
  ["98", "performance target"],
  ["24/7", "online storefront"],
];

function App() {
  return (
    <main className="page-shell">
      <nav className="nav">
        <a className="brand" href="#top" aria-label="IMURAI Studio home">
          <span className="brand-mark">I</span>
          <span>IMURAI</span>
        </a>
        <div className="nav-links" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Digital storefront studio</p>
          <h1>Build a first impression that feels ready to sell.</h1>
          <p className="lead">
            IMURAI Studio creates sharp, responsive launch pages for brands that
            need a polished home base before the next campaign goes live.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#contact">
              Start a project
            </a>
            <a className="secondary-action" href="#work">
              View approach
            </a>
          </div>
        </div>

        <div className="hero-media" aria-label="Website launch preview">
          <img src="/hero-dashboard.png" alt="" />
          <div className="status-card">
            <span>Live preview</span>
            <strong>Homepage concept</strong>
          </div>
        </div>
      </section>

      <section className="metrics" aria-label="Project metrics">
        {metrics.map(([value, label]) => (
          <div className="metric" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">What we shape</p>
          <h2>Designed for a visitor who decides fast.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="card-accent" />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-band" id="work">
        <div>
          <p className="eyebrow">Homepage flow</p>
          <h2>Brand clarity, offer clarity, and a clean path to action.</h2>
        </div>
        <a className="secondary-action light" href="#contact">
          Plan the next page
        </a>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Ready for Vercel</p>
        <h2>หน้าแรกนี้พร้อมนำไปปรับชื่อแบรนด์ เนื้อหา และรูปสินค้าได้ทันที</h2>
        <a className="primary-action" href="mailto:hello@imurai.studio">
          hello@imurai.studio
        </a>
      </section>
    </main>
  );
}

export default App;
