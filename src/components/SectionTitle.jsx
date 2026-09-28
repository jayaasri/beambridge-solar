export default function SectionTitle({ title, subtitle, light = false, center = true }) {
  return (
    <div className={`section-title ${center ? 'is-center' : ''} ${light ? 'is-light' : ''}`}>
      <span className="accent-line" />
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
