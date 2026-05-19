'use client';

import { useEffect, useMemo } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  BadgeCheck,
  Cloud,
  Code2,
  Database,
  Github,
  Mail,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from 'lucide-react';

const links = {
  email: 'mailto:Coopyy@live.com',
  phone: 'tel:+610435744450',
  whatsapp: 'https://wa.me/48664466743',
  github: 'https://github.com/Coopy1997',
  credly: 'https://www.credly.com/users/cooper-timmins/badges',
  resume: '/CooperTimminsResume.pdf',
};

const nav = ['About', 'Skills', 'Experience', 'Projects', 'Stack', 'Education', 'Contact'];

const proof = [
  ['01', 'Frontend', 'React interfaces, responsive layouts, forms, and animated UI states.'],
  ['02', 'Backend', 'Node.js, C#, .NET, routing, validation, authentication, and SQL-backed features.'],
  ['03', 'Cloud', 'Azure, Vercel, Blob Storage, environment variables, production fixes, and deployment flow.'],
];

const skillCards = [
  ['FRONT', 'Responsive interfaces with HTML, CSS, JavaScript, and React', Code2],
  ['BACK', 'Server-side logic with Node.js, C#, .NET, routing, and validation', Wrench],
  ['DATA', 'SQL schemas, joins, reporting queries, relationships, and data integrity', Database],
  ['AUTH', 'Login flows, protected access, user records, and secure handling', ShieldCheck],
  ['CLOUD', 'Azure, Vercel, storage, configuration, and deployment troubleshooting', Cloud],
  ['GIT', 'Repository organisation, commits, READMEs, and project presentation', Github],
];

const projects = [
  {
    number: '001',
    title: 'OnlineReader',
    copy: 'Cloud-based reading platform for PDF and EPUB files with login, storage, and progress features.',
    tags: ['React', 'Node.js', 'Azure SQL', 'Blob Storage'],
    href: 'https://github.com/Coopy1997/online-reader-app',
  },
  {
    number: '002',
    title: 'Cinema Seat Reservation',
    copy: 'C# and .NET booking system with users, seats, reservations, and structured application layers.',
    tags: ['C#', '.NET 8', 'EF Core', 'MVC'],
  },
  {
    number: '003',
    title: 'Car Rental Database',
    copy: 'SQL Server database project with clients, employees, cars, places, rentals, joins, grouping, and reporting.',
    tags: ['SQL Server', 'Data Modelling', 'Reporting'],
  },
  {
    number: '004',
    title: 'Library Borrowing System',
    copy: 'Database project for books, borrowers, loans, returns, availability, history, and data integrity.',
    tags: ['SQL', 'Relationships', 'Data Integrity'],
  },
  {
    number: '005',
    title: 'Fish Game',
    copy: 'Unity and C# game project demonstrating movement, collision detection, scoring, and gameplay state.',
    tags: ['Unity', 'C#', 'Gameplay Logic'],
    href: 'https://github.com/Coopy1997/fish-game-unity',
  },
];

const stack = ['JavaScript', 'React', 'HTML5', 'CSS3', 'Node.js', 'C#', '.NET', 'SQL Server', 'Azure', 'GitHub'];

const fadeUp = {
  hidden: { opacity: 0, y: 46 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

function SectionTitle({ index, title }) {
  return (
    <motion.div
      className="mb-8 grid gap-5 border-t border-white/15 pt-5 md:grid-cols-[180px_1fr]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
    >
      <div className="font-mono text-xs font-black uppercase tracking-[0.24em] text-[#ffb08a]">{index}</div>
      <h2 className="text-balance text-5xl font-black uppercase leading-[0.88] tracking-[-0.07em] text-[#fff8ee] md:text-8xl">
        {title}
      </h2>
    </motion.div>
  );
}

export default function ShowcasePortfolio() {
  const mouseX = useMotionValue(70);
  const mouseY = useMotionValue(22);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -120]);
  const heroRotate = useTransform(scrollYProgress, [0, 0.25], [0, -4]);

  const marquee = useMemo(
    () => [...stack, 'Frontend', 'Backend', 'Cloud', 'Portfolio', ...stack, 'Frontend', 'Backend', 'Cloud'],
    [],
  );

  useEffect(() => {
    const onMove = (event) => {
      const x = Math.round((event.clientX / window.innerWidth) * 100);
      const y = Math.round((event.clientY / window.innerHeight) * 100);
      mouseX.set(x);
      mouseY.set(y);
      document.body.style.setProperty('--mx', `${x}%`);
      document.body.style.setProperty('--my', `${y}%`);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [mouseX, mouseY]);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <motion.div className="fixed left-0 top-0 z-50 h-1 origin-left bg-[#ff4b13]" style={{ scaleX: progress }} />

      <header className="sticky top-0 z-40 border-b border-white/15 bg-[#070300]/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-8">
          <a href="#home" className="group w-fit">
            <strong className="block text-lg font-black uppercase leading-none tracking-[-0.04em]">Cooper Timmins</strong>
            <span className="mt-1 block text-sm text-[#c9b89f]">Junior Developer / Gold Coast</span>
            <span className="mt-2 block h-0.5 w-full origin-left scale-x-25 bg-[#ff4b13] transition group-hover:scale-x-100" />
          </a>
          <nav className="grid grid-cols-4 gap-2 text-center text-xs font-black text-[#c9b89f] md:flex md:text-sm">
            {nav.map((item) => (
              <a
                className="rounded-md border border-white/10 px-3 py-2 transition hover:border-[#ff4b13] hover:bg-[#ff4b13]/25 hover:text-white md:border-0"
                href={`#${item.toLowerCase()}`}
                key={item}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="home" className="mx-auto min-h-[calc(100vh-86px)] max-w-7xl px-4 py-10 md:px-8">
        <div className="grid items-center gap-10 border-t border-white/15 pt-5 lg:grid-cols-[0.95fr_0.7fr]">
          <motion.div style={{ y: heroY, rotate: heroRotate }} className="relative z-10">
            <div className="mb-8 flex justify-between gap-5 font-mono text-xs font-black uppercase tracking-[0.24em] text-[#ffb08a]">
              <span>Junior Developer</span>
              <span>Gold Coast, Australia</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 70, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[21vw] font-black uppercase leading-[0.77] tracking-[-0.1em] text-[#fff8ee] drop-shadow-[0_0_40px_rgba(255,75,19,0.28)] md:text-[13vw] lg:text-[10rem]"
            >
              Cooper
              <br />
              Timmins
            </motion.h1>
            <motion.div
              className="mt-8 h-1 w-80 origin-left bg-gradient-to-r from-[#ff4b13] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 0.35 }}
            />
            <motion.p
              className="mt-8 text-4xl font-black uppercase tracking-[-0.06em] text-[#fff8ee] md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              Junior Developer
            </motion.p>
          </motion.div>

          <motion.div
            className="hero-stack perspective-distant"
            initial={{ opacity: 0, scale: 0.92, rotate: 4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="orbital inset-10 hidden md:block" />
            <div className="orbital inset-24 hidden rotate-45 md:block" />
            <motion.div
              className="hero-stack-card hero-card-front rounded-lg noise-panel scan-hover p-5"
              whileHover={{ rotate: -11, scale: 1.03 }}
            >
              <span className="font-mono text-xs font-black text-[#ffb08a]">01</span>
              <strong className="mt-4 block text-5xl font-black uppercase tracking-[-0.08em]">Frontend</strong>
              <code className="mt-3 block font-mono text-xs font-black uppercase tracking-[0.2em] text-[#c9b89f]">
                React / HTML / CSS
              </code>
            </motion.div>
            <motion.div
              className="hero-stack-card hero-card-back rounded-lg border-[#ff4b13]/60 bg-[#a82b00]/55 noise-panel scan-hover p-5"
              whileHover={{ rotate: 11, scale: 1.04 }}
            >
              <span className="font-mono text-xs font-black text-[#ffb08a]">02</span>
              <strong className="mt-4 block text-5xl font-black uppercase tracking-[-0.08em]">Backend</strong>
              <code className="mt-3 block font-mono text-xs font-black uppercase tracking-[0.2em] text-[#c9b89f]">
                Node / SQL / .NET
              </code>
            </motion.div>
            <motion.div
              className="hero-stack-card hero-card-cloud rounded-lg noise-panel scan-hover p-5"
              whileHover={{ rotate: -6, scale: 1.03 }}
            >
              <span className="font-mono text-xs font-black text-[#ffb08a]">03</span>
              <strong className="mt-4 block text-5xl font-black uppercase tracking-[-0.08em]">Cloud</strong>
              <code className="mt-3 block font-mono text-xs font-black uppercase tracking-[0.2em] text-[#c9b89f]">
                Azure / Vercel / GitHub
              </code>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 grid gap-px overflow-hidden rounded-lg border border-white/15 bg-white/15 md:grid-cols-3"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.55 } } }}
        >
          {proof.map(([number, title, copy]) => (
            <motion.div
              className="noise-panel scan-hover min-h-36 rounded-none p-5"
              variants={fadeUp}
              whileHover={{ y: -8, rotate: -0.5 }}
              key={title}
            >
              <span className="font-mono text-xs font-black text-[#ffb08a]">{number}</span>
              <strong className="mt-8 block text-2xl font-black uppercase tracking-[-0.05em]">{title}</strong>
              <p className="mt-3 text-sm leading-relaxed text-[#c9b89f]">{copy}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="-my-4 rotate-[-1.8deg] overflow-hidden bg-[#fff3df] py-3 text-[#070300]">
        <div className="flex w-max gap-10 whitespace-nowrap [animation:marquee_26s_linear_infinite]">
          {marquee.map((item, index) => (
            <span className="text-5xl font-black uppercase tracking-[-0.08em] md:text-8xl" key={`${item}-${index}`}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <SectionTitle index="01 / About" title="About Me" />
        <motion.div className="grid gap-5 lg:grid-cols-[1fr_390px]" initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div className="noise-panel rounded-lg p-7 text-lg leading-relaxed text-[#c9b89f]" variants={fadeUp}>
            <p>
              I am a junior developer and final-year Computer Science student with practical development experience
              across marketplace features, full-stack web applications, SQL databases, Azure deployment, and Cloud
              Technologies and DevOps.
            </p>
            <p className="mt-5">
              Gold Coast, Australia. I focus on building clean interfaces, useful backend features, and project work
              that can actually be deployed, tested, and explained.
            </p>
          </motion.div>
          <motion.div className="grid gap-px overflow-hidden rounded-lg border border-white/15 bg-white/15" variants={fadeUp}>
            {[
              ['10+', 'Projects completed'],
              ['Cloud', 'Azure and Vercel deployment'],
              ['Full', 'Frontend and backend project work'],
            ].map(([big, small]) => (
              <div className="noise-panel rounded-none p-6" key={big}>
                <strong className="block text-5xl font-black tracking-[-0.08em]">{big}</strong>
                <span className="mt-2 block text-sm font-bold uppercase text-[#c9b89f]">{small}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <SectionTitle index="02 / Skills" title="Core Skills" />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-6">
          {skillCards.map(([code, title, Icon], index) => (
            <motion.article
              className={`noise-panel scan-hover min-h-48 rounded-lg p-5 ${
                index % 3 === 0 ? 'md:col-span-3' : 'md:col-span-2'
              }`}
              initial={{ opacity: 0, y: 45, rotate: index % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.08 }}
              whileHover={{ y: -12, rotate: index % 2 ? -1.5 : 1.5 }}
              key={code}
            >
              <div className="flex items-center justify-between">
                <code className="font-mono text-sm font-black text-[#ffb08a]">{code}</code>
                <Icon size={22} className="text-[#c9b89f]" />
              </div>
              <strong className="mt-16 block text-2xl font-black leading-tight tracking-[-0.05em]">{title}</strong>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <SectionTitle index="03 / Experience" title="Experience" />
        <div className="grid gap-4">
          {[
            [
              'All Board Trader',
              'Junior Developer | 2024-2026',
              [
                'Worked on a production marketplace application for buying and selling board sports equipment.',
                'Built user account and marketplace listing features across frontend, backend, and database layers.',
                'Worked with SQL databases, backend logic, and secure data handling.',
                'Contributed to migration from Firebase to a secure server-based architecture.',
                'Used Git and GitHub for version control and team collaboration.',
              ],
            ],
            [
              'Operations Background',
              'Office management, leadership, documentation',
              [
                'Office management experience involving communication, scheduling, documentation, and workflow improvement.',
                'Business administration diploma supporting professional communication and organisation.',
                'Strong reliability, planning, teamwork, and deadline delivery from previous leadership experience.',
              ],
            ],
          ].map(([title, meta, bullets], index) => (
            <motion.article
              className="noise-panel scan-hover grid gap-6 rounded-lg p-6 md:grid-cols-[300px_1fr]"
              initial={{ opacity: 0, x: index % 2 ? 70 : -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              whileHover={{ scale: 1.015 }}
              key={title}
            >
              <div>
                <h3 className="text-3xl font-black uppercase tracking-[-0.06em]">{title}</h3>
                <p className="mt-2 text-sm font-bold text-[#c9b89f]">{meta}</p>
              </div>
              <ul className="space-y-2 text-[#c9b89f]">
                {bullets.map((bullet) => (
                  <li className="flex gap-3" key={bullet}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff4b13]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <SectionTitle index="04 / Projects" title="Projects" />
        <div className="grid gap-4">
          {projects.map((project, index) => (
            <motion.article
              className="noise-panel scan-hover grid min-h-56 gap-6 rounded-lg p-6 md:grid-cols-[110px_1fr_310px]"
              initial={{ opacity: 0, rotate: index % 2 ? 2 : -2, y: 50 }}
              whileInView={{ opacity: 1, rotate: 0, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ x: index % 2 ? -18 : 18, rotate: index % 2 ? -0.8 : 0.8 }}
              transition={{ duration: 0.7 }}
              key={project.number}
            >
              <div className="font-mono text-3xl font-black text-[#ff4b13]">{project.number}</div>
              <div>
                <h3 className="text-4xl font-black uppercase leading-none tracking-[-0.07em]">{project.title}</h3>
                <p className="mt-5 max-w-2xl text-[#c9b89f]">{project.copy}</p>
                {project.href ? (
                  <a
                    className="mt-5 inline-flex items-center gap-2 font-black text-[#ffb08a] transition hover:text-white"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repository <ArrowUpRight size={18} />
                  </a>
                ) : null}
              </div>
              <div className="flex flex-wrap content-start gap-2 md:justify-end">
                {project.tags.map((tag) => (
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-black uppercase text-[#c9b89f]" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <SectionTitle index="05 / Stack" title="Technical Stack" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {stack.map((item, index) => (
            <motion.div
              className="noise-panel grid min-h-32 place-items-center rounded-lg p-4 text-center text-sm font-black uppercase tracking-[0.12em] text-[#c9b89f]"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: index % 2 ? 24 : 0 }}
              whileHover={{ y: -10, color: '#fff8ee' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 5) * 0.04 }}
              key={item}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <SectionTitle index="06 / Education" title="Education" />
        <div className="grid gap-4 md:grid-cols-2">
          <motion.article className="noise-panel scan-hover rounded-lg p-6" {...fadeInProps(0)}>
            <span className="font-mono text-sm font-black text-[#ffb08a]">BSc</span>
            <h3 className="mt-8 text-4xl font-black uppercase tracking-[-0.07em]">BSc Computer Science</h3>
            <p className="mt-5 text-[#c9b89f]">
              University of Information Technology and Management (WSIiZ). Final semester, graduating in 2026.
              Completed specialisation in Cloud Technologies and DevOps.
            </p>
          </motion.article>
          <motion.article className="noise-panel scan-hover rounded-lg p-6" {...fadeInProps(0.12)}>
            <span className="font-mono text-sm font-black text-[#ffb08a]">CERT</span>
            <h3 className="mt-8 text-4xl font-black uppercase tracking-[-0.07em]">Certifications & Badges</h3>
            <p className="mt-5 text-[#c9b89f]">Verified digital badges and certifications are available through Credly.</p>
            <a className="mt-5 inline-flex items-center gap-2 font-black text-[#ffb08a]" href={links.credly} target="_blank" rel="noreferrer">
              View Credly <ArrowUpRight size={18} />
            </a>
          </motion.article>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <motion.div
          className="noise-panel rounded-lg p-6 md:p-10"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid gap-8 md:grid-cols-[1fr_430px] md:items-end">
            <div>
              <div className="font-mono text-xs font-black uppercase tracking-[0.24em] text-[#ffb08a]">07 / Contact</div>
              <h2 className="mt-5 text-6xl font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-9xl">Contact</h2>
            </div>
            <div className="grid gap-3">
              <ContactLink href={links.email} icon={Mail} label="Email: Coopyy@live.com" />
              <ContactLink href={links.phone} icon={BadgeCheck} label="Phone: +61 0435744450" />
              <ContactLink href={links.whatsapp} icon={MessageCircle} label="WhatsApp: +48 664466743" external />
              <ContactLink href={links.github} icon={Github} label="GitHub: github.com/Coopy1997" external />
              <ContactLink href={links.resume} icon={ArrowUpRight} label="Resume" />
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="mx-auto max-w-7xl px-4 pb-10 text-center text-sm text-[#c9b89f] md:px-8">
        © 2026 Cooper Timmins. Personal resume and portfolio website.
      </footer>
    </main>
  );
}

function ContactLink({ href, icon: Icon, label, external }) {
  return (
    <motion.a
      className="scan-hover noise-panel flex items-center justify-between rounded-lg px-4 py-3 font-black text-[#fff8ee]"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      whileHover={{ x: 8, backgroundColor: 'rgba(168,43,0,0.45)' }}
    >
      <span className="flex items-center gap-3">
        <Icon size={18} />
        {label}
      </span>
      <ArrowUpRight size={18} />
    </motion.a>
  );
}

function fadeInProps(delay) {
  return {
    initial: { opacity: 0, y: 45 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay },
  };
}
