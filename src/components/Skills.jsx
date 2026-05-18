import SectionHeader from './SectionHeader.jsx';
import { skills } from '../data/content.js';

export default function Skills() {
  return (
    <section className="wrap reveal" id="skills">
      <SectionHeader index="02 / Skills" title="Core Skills" />
      <div className="skill-grid">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div className="skill" key={skill.code}>
              <div className="skill-top">
                <code>{skill.code}</code>
                <Icon aria-hidden="true" />
              </div>
              <strong>{skill.title}</strong>
            </div>
          );
        })}
      </div>
    </section>
  );
}
