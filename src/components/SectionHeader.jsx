export default function SectionHeader({ index, title, children }) {
  return (
    <div className="section-head">
      <div className="section-index">{index}</div>
      <div>
        <h2 className="section-title">{title}</h2>
        {children ? <p className="section-copy">{children}</p> : null}
      </div>
    </div>
  );
}
