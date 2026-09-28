import { Wallet, Leaf, TrendingUp, Zap, Home as HomeIcon, Building2, Factory, MessagesSquare } from 'lucide-react';
import Button from '../components/Button.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import SolutionCard from '../components/SolutionCard.jsx';
import CTASection from '../components/CTASection.jsx';
import Reveal from '../components/Reveal.jsx';
import { IMAGES, STATS } from '../data/site.js';

const WHY = [
  { icon: Wallet, title: 'Reduce Energy Costs', text: 'Generate your own clean electricity and reduce your dependence on conventional power.' },
  { icon: Leaf, title: 'Clean & Sustainable', text: 'Use renewable solar energy and contribute to a cleaner environment.' },
  { icon: TrendingUp, title: 'Long-Term Value', text: 'Invest in an energy solution designed to deliver value for years to come.' },
  { icon: Zap, title: 'Energy Independence', text: 'Take greater control over your energy generation and consumption.' },
];
const SOLUTIONS = [
  { icon: HomeIcon, image: IMAGES.residential, title: 'Residential Solar', text: 'Efficient solar solutions designed for modern homes.' },
  { icon: Building2, image: IMAGES.commercial, title: 'Commercial Solar', text: 'Reduce operational energy costs with scalable commercial solar systems.' },
  { icon: Factory, image: IMAGES.industrial, title: 'Industrial Solar', text: 'High-capacity solar solutions designed for industrial energy requirements.' },
  { icon: MessagesSquare, image: IMAGES.consultation, title: 'Solar Consultation', text: 'Get expert guidance to understand the right solar solution for your needs.' },
];
const STEPS = [
  { n: '01', title: 'Consultation', text: 'Understand your energy requirements.' },
  { n: '02', title: 'Site Assessment', text: 'Evaluate your property and energy potential.' },
  { n: '03', title: 'Solar Installation', text: 'Install and configure the solar system.' },
  { n: '04', title: 'Start Saving', text: 'Generate clean energy and reduce electricity costs.' },
];

export default function Home() {
  return (
    <>
      <section className="hero" style={{ '--hero-img': `url(${IMAGES.hero})` }}>
        <div className="container hero__inner">
          <span className="accent-line" />
          <h1>Powering a Brighter Future with Solar Energy</h1>
          <p>Smarter, cleaner and more sustainable energy solutions for homes and businesses.</p>
          <div className="hero__actions">
            <Button to="/contact" variant="accent">Get a Free Quote</Button>
            <Button to="/about" variant="ghost">Explore Our Solutions</Button>
          </div>
          <small className="hero__trust">Clean Energy • Lower Bills • Sustainable Future</small>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionTitle title="Make the Switch to Smarter Energy" />
          <div className="grid grid--4">
            {WHY.map((w, i) => <Reveal key={w.title} delay={i * 80}><FeatureCard {...w} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle title="Solar Solutions Built Around You" />
          <div className="grid grid--4">
            {SOLUTIONS.map((s, i) => <Reveal key={s.title} delay={i * 80}><SolutionCard {...s} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionTitle title="How It Works" subtitle="Four simple steps from first conversation to lower bills." />
          <ol className="steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <li className="step"><span className="step__n">{s.n}</span><h3>{s.title}</h3><p>{s.text}</p></li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <SectionTitle light title="Our Impact" subtitle="Placeholder figures. Update them in src/data/site.js." />
          <div className="stats">
            {STATS.map((s) => (
              <div key={s.label} className="stat"><strong>{s.value}</strong><span>{s.label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to Make the Switch to Solar?" text="Let's build a cleaner and smarter energy future together." label="Get Your Free Solar Quote" />
    </>
  );
}
