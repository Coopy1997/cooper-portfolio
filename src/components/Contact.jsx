import { links } from '../data/content.js';

export default function Contact() {
  return (
    <section className="wrap reveal" id="contact">
      <div className="contact-panel">
        <div>
          <div className="section-index">07 / Contact</div>
          <h2>Contact</h2>
        </div>
        <div className="contact-details">
          <a href={links.email}>Email: CooperTimmins1@gmail.com</a>
          <a href={links.phone}>Phone: +61 0435744450</a>
          <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp: +48 664466743
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub: github.com/Coopy1997
          </a>
        </div>
      </div>
    </section>
  );
}
