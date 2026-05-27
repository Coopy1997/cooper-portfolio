import SectionHeader from './SectionHeader.jsx';

export default function About() {
  return (
    <section className="wrap reveal" id="about">
      <SectionHeader index="01 / About" title="About Me" />
      <div className="about-layout">
        <div className="text-panel">
          <p>
            I am a full-stack developer and final-year Computer Science student who builds practical,
            deployable software across frontend interfaces, backend APIs, SQL databases, Azure cloud deployment,
            DevOps workflows, and cybersecurity-aware development.
          </p>
          <p>
            Based on the Gold Coast, Australia, I turn ideas into tested web applications that look polished, run
            reliably, protect user data, and can be clearly explained from UI to database to cloud infrastructure.
          </p>
        </div>
        <div className="stats">
          <div className="stat-panel">
            <strong>10+</strong>
            <span>Projects completed</span>
          </div>
          <div className="stat-panel">
            <strong>Cloud</strong>
            <span>Azure and Vercel deployment</span>
          </div>
          <div className="stat-panel">
            <strong>Full</strong>
            <span>Frontend and backend project work</span>
          </div>
        </div>
      </div>
    </section>
  );
}
