import { heroActions } from '../data/content.js';

export default function Hero() {
  return (
    <section className="hero wrap" id="home">
      <div className="hero-main">
        <div className="eyebrow">
          <span>Junior Developer</span>
          <span>Gold Coast, Australia</span>
        </div>
        <div className="hero-title-row">
          <div>
            <h1 className="name">
              <span>Cooper</span>
              <span>Timmins</span>
            </h1>
            <div className="hero-meta-row" aria-label="Portfolio focus">
              <span>Web</span>
              <span>Cloud</span>
              <span>Data</span>
              <span>Interactions</span>
            </div>
          </div>
          <div className="kinetic-stack" aria-hidden="true">
            <div className="stack-card stack-card-one">
              <span>01</span>
              <strong>Front</strong>
              <code>React / HTML / CSS</code>
            </div>
            <div className="stack-card stack-card-two">
              <span>02</span>
              <strong>Back</strong>
              <code>Node / SQL / .NET</code>
            </div>
            <div className="stack-card stack-card-three">
              <span>03</span>
              <strong>Flow</strong>
              <code>Auth / data / cloud</code>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <div>
          <p className="intro">
            <strong>Junior Developer</strong>
          </p>
          <div className="hero-proof-grid" aria-label="Portfolio highlights">
            <div>
              <span>01</span>
              <strong>Frontend</strong>
              <p>Responsive React interfaces and polished user flows.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Backend</strong>
              <p>Node, .NET, SQL data logic, and secure application features.</p>
            </div>
            <div>
              <span>03</span>
              <strong>Cloud</strong>
              <p>Azure, Vercel, storage, configuration, and deployment fixes.</p>
            </div>
          </div>
        </div>
        <div className="contact-strip">
          <div className="button-grid">
            {heroActions.map((action) => {
              const Icon = action.icon;
              return (
                <a
                  key={action.label}
                  className={`btn ${action.variant || ''}`.trim()}
                  href={action.href}
                  target={action.external ? '_blank' : undefined}
                  rel={action.external ? 'noopener noreferrer' : undefined}
                  download={action.download ? true : undefined}
                >
                  <Icon aria-hidden="true" />
                  {action.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
