'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
import ThreeShowcase from './ThreeShowcase';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const links = {
  email: 'mailto:CooperTimmins1@gmail.com',
  phone: 'tel:+610435744450',
  whatsapp: 'https://wa.me/48664466743',
  github: 'https://github.com/Coopy1997',
  credly: 'https://www.credly.com/users/cooper-timmins/badges',
  resume: `${basePath}/Resume_CooperTimmins.docx`,
};

const nav = ['About', 'Skills', 'Experience', 'Projects', 'Stack', 'Education', 'Contact'];

const proof = [
  ['01', 'Frontend', 'HTML5, CSS3, JavaScript, TypeScript, and React interfaces with responsive layouts, forms, and animated UI states.'],
  ['02', 'Backend', 'C#, .NET, Node.js, JavaScript, TypeScript, Java, Python, and C++ foundations for APIs, routing, validation, authentication, and server-side logic.'],
  ['03', 'Data', 'SQL Server, T-SQL, relational schemas, joins, reporting queries, relationships, data integrity, and cloud-connected storage.'],
];

const skillCards = [
  ['FRONT', 'Frontend development with HTML5, CSS3, JavaScript, TypeScript, React, responsive UI, forms, state, accessibility, and polished browser interactions', Code2],
  ['BACK', 'Backend development with C#, .NET, Node.js, JavaScript, TypeScript, Java, Python, C++, routing, validation, authentication, and application logic', Wrench],
  ['LANG', 'C++, C#, Python, Java, JavaScript, TypeScript, HTML5, CSS3, SQL, and T-SQL across web, backend, data, and software projects', Code2],
  ['DATA', 'SQL Server, T-SQL, schemas, joins, reporting queries, relationships, database design, cloud storage, and data integrity', Database],
  ['AUTH', 'Login flows, protected access, user records, and secure handling', ShieldCheck],
  ['CLOUD', 'Azure, Vercel, storage, configuration, and deployment troubleshooting', Cloud],
];

const projects = [
  {
    number: '001',
    title: 'Cloud Book Reader',
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
    title: 'Fishtank Simulator',
    copy: 'Unity and C# game project demonstrating movement, collision detection, scoring, and gameplay state.',
    tags: ['Unity', 'C#', 'Gameplay Logic'],
    href: 'https://github.com/Coopy1997/fish-game-unity',
  },
];

const liveProjects = [
  {
    title: 'Hello Poland AI',
    url: 'https://hellopolandai.com/',
    image: `${basePath}/images/hellopoland.webp`,
    description:
      'Multilingual platform for an AI-powered Polish immigration assistant covering Karta Pobytu, PESEL and NFZ guidance. Built with Next.js, React and Tailwind CSS, with the assistant powered by OpenAI GPT-4 and deployed on Vercel.',
    tags: ['Next.js', 'React', 'Tailwind', 'OpenAI', 'GPT-4', 'Vercel'],
  },
  {
    title: 'Pol Smash',
    url: 'https://polsmash.vercel.app/',
    image: `${basePath}/images/polsmash.png`,
    description:
      'Community hub for the Polish Super Smash Bros Ultimate scene with an ELO and rating system, tournament schedules and results, and an interactive player map. Built with Next.js, React and Tailwind CSS on Vercel.',
    tags: ['Next.js', 'React', 'Tailwind', 'Maps', 'Vercel'],
  },
  {
    title: 'Polish With Wilczyńska',
    url: 'https://privatepolish.com/',
    image: `${basePath}/images/polishwithw.webp`,
    description:
      'Marketing and booking site for a private online Polish language school with EN/RU/UK localisation, integrated Calendly scheduling and card, PayPal, Apple Pay, Google Pay and Blik payments. Built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'Tailwind', 'Multilingual', 'Calendly', 'Payments'],
  },
  {
    title: 'Renueral Psy',
    url: 'https://renueralpsy.com/',
    image: `${basePath}/images/renueralpsy.webp`,
    description:
      'Trauma-focused psychology practice site presenting structured therapy pathways (EMDR, somatic, psychedelic integration), telehealth information and an online booking flow. Built with Next.js, Tailwind CSS and a custom typographic design system.',
    tags: ['Next.js', 'Tailwind', 'Web Design', 'Booking'],
  },
  {
    title: 'Pools by Jex',
    url: 'https://poolsbyjex.com/',
    image: `${basePath}/images/Poolsbyjex.webp`,
    description:
      'Marketing and lead-capture site for a Northern Gold Coast pool servicing business — services, packages and a direct phone CTA. Built with Next.js, React and Tailwind CSS.',
    tags: ['Next.js', 'React', 'Tailwind', 'Lead Gen'],
  },
  {
    title: 'Commercial Catamaran',
    url: 'https://www.commercialcatamaran.com/',
    description:
      'Marketing site for a commercial catamaran business showcasing vessel specs, photography galleries and an inquiry contact flow. Built with a modern React stack and responsive Tailwind layouts.',
    tags: ['React', 'Tailwind', 'Responsive', 'Business Site'],
  },
  {
    title: 'Blackjack 3D',
    url: 'https://blackjack-eight-lyart.vercel.app/',
    image: `${basePath}/images/blackjack3d.webp`,
    description:
      'Browser-based 3D blackjack game with animated card dealing, hit/stand/double/split rules, live count tracking and keyboard shortcuts. Built with Three.js for WebGL rendering and deployed on Vercel.',
    tags: ['Three.js', 'WebGL', 'JavaScript', 'Vercel'],
  },
];

const stack = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Framer Motion',
  'Node.js',
  'REST APIs',
  'C#',
  '.NET',
  'ASP.NET Core',
  'Entity Framework',
  'Java',
  'Python',
  'C++',
  'SQL Server',
  'T-SQL',
  'Database Design',
  'Azure',
  'Azure SQL',
  'Blob Storage',
  'Vercel',
  'Git',
  'GitHub',
  'Postman',
  'Authentication',
  'Cybersecurity',
  'OWASP Basics',
];

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

function screenshotUrl(siteUrl) {
  return `https://image.thum.io/get/width/1280/crop/800/noanimate/${siteUrl}`;
}

function LiveProjectsCarousel({ items }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 6500);
    return () => clearInterval(id);
  }, [paused, items.length]);

  const go = (next) => setIndex((i) => (i + next + items.length) % items.length);
  const current = items[index];

  return (
    <div
      className="noise-panel relative overflow-hidden rounded-lg border border-white/15"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="grid gap-0 md:grid-cols-[1.35fr_1fr]">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1410]">
          {items.map((p, i) => (
            <motion.img
              key={p.url}
              src={p.image ?? screenshotUrl(p.url)}
              alt={`${p.title} screenshot`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1 : 1.04 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 font-mono text-xs font-black uppercase tracking-[0.18em] text-[#ffb08a] backdrop-blur">
            {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 p-6 md:p-8">
          <div>
            <div className="font-mono text-xs font-black uppercase tracking-[0.24em] text-[#ffb08a]">Live Site</div>
            <h3 className="mt-3 text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-[#fff8ee] md:text-4xl">
              {current.title}
            </h3>
            <p className="mt-4 text-[#c9b89f]">{current.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {current.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs font-black uppercase text-[#c9b89f]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <a
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#ff4b13] px-5 py-2 text-sm font-black uppercase text-white transition hover:bg-[#ff5e2c]"
            href={current.url}
            target="_blank"
            rel="noreferrer"
          >
            Visit Live <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-white/15 bg-black/40 px-4 py-3">
        <button
          type="button"
          onClick={() => go(-1)}
          className="rounded-full border border-white/20 px-3 py-1 text-xs font-black uppercase text-[#c9b89f] transition hover:border-[#ff4b13] hover:text-white"
          aria-label="Previous project"
        >
          Prev
        </button>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {items.map((p, i) => (
            <button
              key={p.url}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${p.title}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-10 bg-[#ff4b13]' : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          className="rounded-full border border-white/20 px-3 py-1 text-xs font-black uppercase text-[#c9b89f] transition hover:border-[#ff4b13] hover:text-white"
          aria-label="Next project"
        >
          Next
        </button>
      </div>
    </div>
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.to('.gsap-hero-title', {
        yPercent: -14,
        scale: 0.94,
        ease: 'none',
        scrollTrigger: {
          trigger: '#home',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.utils.toArray('.gsap-card').forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 90, rotate: index % 2 ? 3 : -3, opacity: 0.3 },
          {
            y: 0,
            rotate: 0,
            opacity: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              end: 'top 42%',
              scrub: 0.8,
            },
          },
        );
      });

      ScrollTrigger.matchMedia({
        '(min-width: 768px)': () => {
          gsap.utils.toArray('.gsap-split').forEach((section, index) => {
            gsap.to(section, {
              xPercent: index % 2 ? -4 : 4,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            });
          });
        },
      });
    });

    return () => context.revert();
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <motion.div className="fixed left-0 top-0 z-50 h-1 origin-left bg-[#ff4b13]" style={{ scaleX: progress }} />
      <ThreeShowcase />

      <header className="sticky top-0 z-40 border-b border-white/15 bg-[#070300]/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-8">
          <a href="#home" className="group w-fit">
            <strong className="block text-lg font-black uppercase leading-none tracking-[-0.04em]">Cooper Timmins</strong>
            <span className="mt-1 block text-sm text-[#c9b89f]">Developer / Gold Coast</span>
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
          <motion.div style={{ y: heroY, rotate: heroRotate }} className="gsap-hero-title relative z-10">
            <div className="mb-8 flex justify-between gap-5 font-mono text-xs font-black uppercase tracking-[0.24em] text-[#ffb08a]">
              <span>Developer</span>
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
              Developer
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
              className="hero-stack-card hero-card-frontend rounded-lg noise-panel scan-hover p-5"
              whileHover={{ rotate: -11, scale: 1.03 }}
            >
              <span className="font-mono text-xs font-black text-[#ffb08a]">01</span>
              <strong className="mt-4 block text-5xl font-black uppercase tracking-[-0.08em]">Frontend</strong>
              <code className="mt-3 block font-mono text-xs font-black uppercase tracking-[0.2em] text-[#c9b89f]">
                React / HTML / CSS
              </code>
            </motion.div>
            <motion.div
              className="hero-stack-card hero-card-backend rounded-lg border-[#ff4b13]/60 bg-[#a82b00]/55 noise-panel scan-hover p-5"
              whileHover={{ rotate: 11, scale: 1.04 }}
            >
              <span className="font-mono text-xs font-black text-[#ffb08a]">02</span>
              <strong className="mt-4 block text-5xl font-black uppercase tracking-[-0.08em]">Backend</strong>
              <code className="mt-3 block font-mono text-xs font-black uppercase tracking-[0.2em] text-[#c9b89f]">
                C# / .NET / Node
              </code>
            </motion.div>
            <motion.div
              className="hero-stack-card hero-card-data rounded-lg noise-panel scan-hover p-5"
              whileHover={{ rotate: -6, scale: 1.03 }}
            >
              <span className="font-mono text-xs font-black text-[#ffb08a]">03</span>
              <strong className="mt-4 block text-5xl font-black uppercase tracking-[-0.08em]">Data</strong>
              <code className="mt-3 block font-mono text-xs font-black uppercase tracking-[0.2em] text-[#c9b89f]">
                SQL / Azure / Storage
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
              className="proof-card noise-panel scan-hover min-h-36 rounded-none p-5"
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

      <section id="about" className="gsap-split mx-auto max-w-7xl px-4 py-24 md:px-8">
        <SectionTitle index="01 / About" title="About Me" />
        <motion.div className="grid gap-5 lg:grid-cols-[1fr_390px]" initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div className="gsap-card noise-panel rounded-lg p-7 text-lg leading-relaxed text-[#c9b89f]" variants={fadeUp}>
            <p>
              I am a full-stack developer based on the Gold Coast, Australia, specialising in building polished frontend
              interfaces and reliable backend systems.
            </p>
            <p className="mt-5">
              On the frontend, I create clean, responsive, user-friendly web applications that look professional and feel
              smooth to use. On the backend, I build secure APIs, structure SQL databases, handle authentication, connect
              services, and deploy applications using cloud and DevOps workflows.
            </p>
            <p className="mt-5">
              My strength is connecting both sides of a project: turning a strong visual interface into a working product
              backed by reliable logic, organised data, and secure infrastructure. I focus on building practical software
              that is easy to use, easy to maintain, and ready for real-world deployment.
            </p>
          </motion.div>
          <motion.div className="grid gap-px overflow-hidden rounded-lg border border-white/15 bg-white/15" variants={fadeUp}>
            {[
              ['10+', 'Projects completed'],
              ['Cloud', 'Deployment, storage, environment configuration, and production troubleshooting'],
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
              className={`gsap-card noise-panel scan-hover min-h-48 rounded-lg p-5 ${
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

      <section id="experience" className="gsap-split mx-auto max-w-7xl px-4 py-24 md:px-8">
        <SectionTitle index="03 / Experience" title="Experience" />
        <div className="grid gap-4">
          {[
            [
              'Website Designer & Developer',
              '2025-Present',
              [
                'Designed, developed, and delivered 10+ modern websites for businesses, startups, and private clients.',
                'Built responsive frontend experiences using React, Tailwind CSS, JavaScript, and modern UI/UX principles.',
                'Focused on performance, mobile responsiveness, clean interaction design, and conversion-focused layouts.',
                'Worked directly with clients to create custom business websites, booking systems, portfolio platforms, and branded web experiences tailored to client goals.',
              ],
            ],
            [
              'All Board Trader',
              'Developer | 2024-2026',
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
              className="gsap-card noise-panel scan-hover grid min-w-0 gap-6 overflow-hidden rounded-lg p-5 sm:p-6 md:grid-cols-[300px_1fr]"
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              whileHover={{ scale: 1.015 }}
              key={title}
            >
              <div className="min-w-0">
                <h3 className="[overflow-wrap:anywhere] text-3xl font-black uppercase tracking-[-0.06em]">{title}</h3>
                <p className="mt-2 [overflow-wrap:anywhere] text-sm font-bold text-[#c9b89f]">{meta}</p>
              </div>
              <ul className="min-w-0 space-y-2 text-[#c9b89f]">
                {bullets.map((bullet) => (
                  <li className="flex min-w-0 gap-3" key={bullet}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff4b13]" />
                    <span className="min-w-0 [overflow-wrap:anywhere]">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <SectionTitle index="04 / Projects" title="Projects" />

        <motion.div
          className="mb-4 flex items-baseline justify-between gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <h3 className="text-2xl font-black uppercase tracking-[-0.04em] text-[#fff8ee]">Live Sites</h3>
          <span className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#ffb08a]">
            Deployed Work
          </span>
        </motion.div>

        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <LiveProjectsCarousel items={liveProjects} />
        </motion.div>

        <motion.div
          className="mb-4 flex items-baseline justify-between gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <h3 className="text-2xl font-black uppercase tracking-[-0.04em] text-[#fff8ee]">Other Work</h3>
          <span className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#ffb08a]">
            Coursework &amp; Builds
          </span>
        </motion.div>

        <div className="grid gap-4">
          {projects.map((project, index) => (
            <motion.article
              className="gsap-card noise-panel scan-hover grid min-h-56 gap-6 rounded-lg p-6 md:grid-cols-[110px_1fr_310px]"
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

      <section id="stack" className="gsap-split mx-auto max-w-7xl px-4 py-24 md:px-8">
        <SectionTitle index="05 / Stack" title="Technical Stack" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {stack.map((item, index) => (
            <motion.div
              className="gsap-card noise-panel grid min-h-32 place-items-center rounded-lg p-4 text-center text-sm font-black uppercase tracking-[0.12em] text-[#c9b89f]"
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
          <motion.article className="gsap-card noise-panel scan-hover rounded-lg p-6" {...fadeInProps(0)}>
            <span className="font-mono text-sm font-black text-[#ffb08a]">BSc</span>
            <h3 className="mt-8 text-4xl font-black uppercase tracking-[-0.07em]">BSc Computer Science</h3>
            <p className="mt-5 text-[#c9b89f]">
              University of Information Technology and Management (WSIiZ). Final semester, graduating in 2026.
              Completed specialisation in Cloud Technologies and DevOps.
            </p>
          </motion.article>
          <motion.article className="gsap-card noise-panel scan-hover rounded-lg p-6" {...fadeInProps(0.12)}>
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
              <ContactLink href={links.email} icon={Mail} label="Email: CooperTimmins1@gmail.com" />
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
