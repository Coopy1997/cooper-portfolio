export default function Marquee() {
  const items = [
    'React',
    'Next.js',
    'Tailwind CSS',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'C#',
    '.NET',
    'SQL Server',
    'Azure',
    'Vercel',
    'Cybersecurity',
    'GitHub',
    'REST APIs',
  ];
  const row = [...items, ...items, ...items];

  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {row.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
