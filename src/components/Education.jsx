import SectionHeader from './SectionHeader.jsx';
import { links } from '../data/content.js';

export default function Education() {
  return (
    <section className="wrap reveal" id="education">
      <SectionHeader index="06 / Education" title="Education" />
      <div className="project-list">
        <article className="project">
          <div className="project-number">BSc</div>
          <div>
            <h3>BSc Computer Science</h3>
            <p>
              University of Information Technology and Management (WSIiZ). Graduated 2026 with a
              specialisation in Cloud Technologies and DevOps.
            </p>
          </div>
          <div className="tags">
            <span className="tag">Computer Science</span>
            <span className="tag">Cloud Technologies</span>
            <span className="tag">DevOps</span>
          </div>
        </article>
        <article className="project">
          <div className="project-number">CERT</div>
          <div>
            <h3>Certifications & Badges</h3>
            <p>Verified digital badges and certifications are available through Credly.</p>
            <a className="project-link" href={links.credly} target="_blank" rel="noopener noreferrer">
              View Credly Profile &rarr;
            </a>
          </div>
          <div className="tags">
            <span className="tag">Credly</span>
            <span className="tag">Certifications</span>
          </div>
        </article>
      </div>
    </section>
  );
}
