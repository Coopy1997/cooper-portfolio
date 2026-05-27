import SectionHeader from './SectionHeader.jsx';

export default function Experience() {
  return (
    <section className="wrap reveal" id="experience">
      <SectionHeader index="03 / Experience" title="Experience" />
      <div className="experience-list">
        <article className="experience-item">
          <div>
            <h3>Website Designer & Developer</h3>
            <p className="meta">2025-Present</p>
          </div>
          <ul>
            <li>Designed, developed, and delivered 10+ modern websites for businesses, startups, and private clients.</li>
            <li>Built responsive frontend experiences using React, Tailwind CSS, JavaScript, and modern UI/UX principles.</li>
            <li>Focused on performance, mobile responsiveness, clean interaction design, and conversion-focused layouts.</li>
            <li>Worked directly with clients to create custom business websites, booking systems, portfolio platforms, and branded web experiences tailored to client goals.</li>
          </ul>
        </article>
        <article className="experience-item">
          <div>
            <h3>All Board Trader</h3>
            <p className="meta">Developer | 2024-2026</p>
          </div>
          <ul>
            <li>Worked on a production marketplace application for buying and selling board sports equipment.</li>
            <li>Built user account and marketplace listing features across frontend, backend, and database layers.</li>
            <li>Worked with SQL databases, backend logic, and secure data handling.</li>
            <li>Contributed to migration from Firebase to a secure server-based architecture.</li>
            <li>Used Git and GitHub for version control and team collaboration.</li>
          </ul>
        </article>
        <article className="experience-item">
          <div>
            <h3>Operations Background</h3>
            <p className="meta">Office management, leadership, documentation</p>
          </div>
          <ul>
            <li>Office management experience involving communication, scheduling, documentation, and workflow improvement.</li>
            <li>Business administration diploma supporting professional communication and organisation.</li>
            <li>Strong reliability, planning, teamwork, and deadline delivery from previous leadership experience.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
