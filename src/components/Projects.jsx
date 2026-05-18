import SectionHeader from './SectionHeader.jsx';
import { projects } from '../data/content.js';

export default function Projects() {
  return (
    <section className="wrap reveal" id="projects">
      <SectionHeader index="04 / Projects" title="Projects" />
      <div className="project-list">
        {projects.map((project) => (
          <article className="project" key={project.number}>
            <div className="project-number">{project.number}</div>
            <div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              {project.href ? (
                <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">
                  GitHub Repository &rarr;
                </a>
              ) : null}
            </div>
            <div className="tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
