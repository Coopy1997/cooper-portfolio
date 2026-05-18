import { navItems } from '../data/content.js';

export default function Header({ activeSection }) {
  return (
    <header className="topbar">
      <div className="topbar-inner wrap">
        <a className="brand" href="#home">
          <strong>Cooper Timmins</strong>
          <span>Junior Developer / Gold Coast</span>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? 'active' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
