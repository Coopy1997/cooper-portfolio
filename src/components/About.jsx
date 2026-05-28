import SectionHeader from './SectionHeader.jsx';

export default function About() {
  return (
    <section className="wrap reveal" id="about">
      <SectionHeader index="01 / About" title="About Me" />
      <div className="about-layout">
        <div className="text-panel">
          <p>
            I am a full-stack developer based on the Gold Coast, Australia, specialising in building polished frontend
            interfaces and reliable backend systems.
          </p>
          <p>
            On the frontend, I create clean, responsive, user-friendly web applications that look professional and feel
            smooth to use. On the backend, I build secure APIs, structure SQL databases, handle authentication, connect
            services, and deploy applications using cloud and DevOps workflows.
          </p>
          <p>
            My strength is connecting both sides of a project: turning a strong visual interface into a working product
            backed by reliable logic, organised data, and secure infrastructure. I focus on building practical software
            that is easy to use, easy to maintain, and ready for real-world deployment.
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
