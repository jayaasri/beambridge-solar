import { Award, Eye, Heart, Leaf, LifeBuoy, Home as HomeIcon, Building2, Factory, Target } from 'lucide-react';
import SectionTitle from '../components/SectionTitle.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import SolutionCard from '../components/SolutionCard.jsx';
import CTASection from '../components/CTASection.jsx';
import Reveal from '../components/Reveal.jsx';
import { IMAGES } from '../data/site.js';

const SOLUTIONS = [
  { icon: HomeIcon, image: IMAGES.residential, title: 'Residential Solar', points: ['Rooftop solar systems', 'Energy assessment', 'Installation', 'Maintenance/support'] },
  { icon: Building2, image: IMAGES.commercial, title: 'Commercial Solar', points: ['Commercial rooftop systems', 'Energy cost optimization', 'Scalable solutions', 'Monitoring'] },
  { icon: Factory, image: IMAGES.industrial, title: 'Industrial Solar', points: ['Large-scale solar systems', 'Energy planning', 'Performance monitoring', 'Long-term support'] },
];
const WHY = [
  { icon: Award, title: 'Quality' },
  { icon: Eye, title: 'Transparency' },
  { icon: Heart, title: 'Customer First' },
  { icon: Leaf, title: 'Sustainable Solutions' },
  { icon: LifeBuoy, title: 'Long-Term Support' },
];
const VALUES = [
  'Commitment to clean energy',
  'Customer-focused approach',
  'Quality installation',
  'Long-term support',
  'A sustainable future',
];

export default function About() {
  return (
    <>
      <section className="hero hero--short" style={{ '--hero-img': `url(${IMAGES.about})` }}>
        <div className="container hero__inner">
          <span className="accent-line" />
          <h1>Building a Cleaner Energy Future</h1>
          <p>BeamBridge Solar provides reliable and sustainable solar energy solutions for residential, commercial and industrial customers.</p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container split">
          <Reveal className="split__media media">
            <img src={IMAGES.residential} alt="Rooftop solar panels in sunlight" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
          </Reveal>
          <Reveal delay={100}>
            <SectionTitle center={false} title="Who We Are" />
            <p className="lead">[Placeholder company story] BeamBridge Solar helps homes, businesses and industries move to clean, dependable solar power, from the first consultation to long-term support.</p>
            <ul className="check-list check-list--lg">
              {VALUES.map((v) => <li key={v}><Leaf size={18} />{v}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid--2">
          <Reveal><article className="card pad"><span className="icon-badge"><Target size={24} /></span><h3>Our Mission</h3><p>To make clean, reliable and sustainable solar energy accessible to more people and businesses.</p></article></Reveal>
          <Reveal delay={100}><article className="card pad"><span className="icon-badge"><Eye size={24} /></span><h3>Our Vision</h3><p>To contribute to a future where clean energy becomes a smarter and more accessible choice for every community.</p></article></Reveal>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionTitle title="Our Solutions" />
          <div className="grid grid--3">
            {SOLUTIONS.map((s, i) => <Reveal key={s.title} delay={i * 80}><SolutionCard {...s} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle title="Why Choose Us?" />
          <div className="grid grid--5">
            {WHY.map((w, i) => <Reveal key={w.title} delay={i * 60}><FeatureCard {...w} /></Reveal>)}
          </div>
        </div>
      </section>

      <CTASection tone="navy" title="Let's Build Your Solar Future" label="Talk to Our Solar Experts" />
    </>
  );
}
