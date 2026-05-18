export default function Marquee() {
  const items = ['React', 'JavaScript', 'Azure', 'SQL', 'C#', '.NET', 'Cloud', 'GitHub', 'HTML', 'CSS'];
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
