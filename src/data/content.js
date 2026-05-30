import {
  BadgeCheck,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Github,
  Mail,
  MessageCircle,
  Server,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';

export const links = {
  email: 'mailto:CooperTimmins1@gmail.com',
  phone: 'tel:+610435744450',
  whatsapp:
    'https://wa.me/48664466743?text=Hi%20Cooper%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.',
  github: 'https://github.com/Coopy1997',
  credly: 'https://www.credly.com/users/cooper-timmins/badges',
  resume: '/Resume_CooperTimmins.docx',
};

export const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#technical', label: 'Technical' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export const heroActions = [
  { label: 'Email Me', href: links.email, variant: 'primary', icon: Mail },
  { label: 'WhatsApp', href: links.whatsapp, variant: 'whatsapp', icon: MessageCircle, external: true },
  { label: 'GitHub', href: links.github, icon: Github, external: true },
  { label: 'Credly', href: links.credly, icon: BadgeCheck, external: true },
  { label: 'View Projects', href: '#projects', icon: Sparkles },
  { label: 'Resume', href: links.resume, icon: ExternalLink, download: true },
];

export const skills = [
  { code: 'FRONT', title: 'Responsive interfaces with HTML5, CSS3, JavaScript, TypeScript, React, forms, state, and polished UI flows', icon: Sparkles },
  { code: 'BACK', title: 'Server-side logic with C#, .NET, Node.js, JavaScript, TypeScript, Java, Python, C++, routing, validation, and authentication', icon: Server },
  { code: 'DATA', title: 'SQL Server, T-SQL, schema design, joins, reporting queries, relationships, cloud storage, and data integrity', icon: Database },
  { code: 'AUTH', title: 'Login flows, protected access, user records, and secure handling', icon: ShieldCheck },
  { code: 'CLOUD', title: 'Azure, Vercel, storage, environment variables, and deployment fixes', icon: Cloud },
  { code: 'DEVOPS', title: 'Cloud Technologies and DevOps specialisation with practical deployment work', icon: Wrench },
  { code: 'GIT', title: 'Repository organisation, commits, README files, and project presentation', icon: Github },
  { code: 'UI', title: 'Readable layouts, interactive states, forms, and polished user flows', icon: Code2 },
  { code: 'TEST', title: 'Bug investigation, browser checks, data issues, and release troubleshooting', icon: Wrench },
  { code: 'SUPPORT', title: 'Clear communication, technical problem solving, and user-focused help', icon: BadgeCheck },
];

export const projects = [
  {
    number: '001',
    title: 'OnlineReader',
    summary:
      'Cloud-based reading platform for PDF and EPUB files with login, storage, and reading progress features.',
    tags: ['React', 'Node.js', 'Azure SQL', 'Blob Storage'],
    href: 'https://github.com/Coopy1997/online-reader-app',
  },
  {
    number: '002',
    title: 'Cinema Seat Reservation System',
    summary: 'C# and .NET booking system with seats, users, reservations, and structured application layers.',
    tags: ['C#', '.NET 8', 'EF Core', 'MVC'],
  },
  {
    number: '003',
    title: 'Car Rental Database System',
    summary:
      'Microsoft SQL Server project with clients, employees, cars, places, rentals, joins, filtering, grouping, and reporting.',
    tags: ['SQL Server', 'Data Modelling', 'Reporting'],
  },
  {
    number: '004',
    title: 'Library Book Borrowing System',
    summary:
      'Database project for books, borrowers, loans, returns, availability, borrowing history, and data integrity.',
    tags: ['SQL', 'Relationships', 'Data Integrity'],
  },
  {
    number: '005',
    title: 'Fish Game',
    summary: 'Unity and C# game project demonstrating movement, collision detection, scoring, and gameplay state.',
    tags: ['Unity', 'C#', 'Gameplay Logic'],
    href: 'https://github.com/Coopy1997/fish-game-unity',
  },
];

export const techStack = [
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
