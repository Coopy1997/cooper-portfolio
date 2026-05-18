import SectionHeader from './SectionHeader.jsx';

export default function About() {
  return (
    <section className="wrap reveal" id="about">
      <SectionHeader index="01 / About" title="About Me" />
      <div className="about-layout">
        <div className="text-panel">
          <p>
            I am a junior developer and final-year Computer Science student with practical development experience
            across production marketplace features, full-stack web applications, SQL databases, Azure deployment, and
            Cloud Technologies and DevOps.
          </p>
          <p>
            Gold Coast, Australia. I am focused on growing in web development, backend systems, cloud deployment, and
            clean project delivery.
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
