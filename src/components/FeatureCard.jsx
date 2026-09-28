export default function FeatureCard({ icon: Icon, title, text }) {
  return (
    <article className="card feature-card">
      <span className="icon-badge"><Icon size={24} /></span>
      <h3>{title}</h3>
      {text && <p>{text}</p>}
    </article>
  );
}
