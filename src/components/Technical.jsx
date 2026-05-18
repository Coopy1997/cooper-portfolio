import SectionHeader from './SectionHeader.jsx';
import { techStack } from '../data/content.js';

export default function Technical() {
  return (
    <section className="wrap reveal" id="technical">
      <SectionHeader index="05 / Stack" title="Technical Stack" />
      <div className="tech-grid">
        {techStack.map((tech) => (
          <div className="tech" key={tech}>
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}
