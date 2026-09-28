import Button from './Button.jsx';
import Reveal from './Reveal.jsx';

export default function CTASection({ title, text, label, to = '/contact', tone = 'green' }) {
  return (
    <section className={`cta cta--${tone}`}>
      <Reveal className="container cta__inner">
        <h2>{title}</h2>
        {text && <p>{text}</p>}
        <Button to={to} variant="accent">{label}</Button>
      </Reveal>
    </section>
  );
}
