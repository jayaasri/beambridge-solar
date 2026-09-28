import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

// `points` renders the detailed version (About page); otherwise a short summary card.
export default function SolutionCard({ image, icon: Icon, title, text, points, to = '/about' }) {
  return (
    <article className="card solution-card">
      <div className="media">
        <img src={image} alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
        <span className="icon-badge icon-badge--float"><Icon size={22} /></span>
      </div>
      <div className="solution-card__body">
        <h3>{title}</h3>
        {text && <p>{text}</p>}
        {points && (
          <ul className="check-list">
            {points.map((p) => <li key={p}><Check size={16} />{p}</li>)}
          </ul>
        )}
        {!points && <Link to={to} className="text-link">Learn More <ArrowRight size={16} /></Link>}
      </div>
    </article>
  );
}
