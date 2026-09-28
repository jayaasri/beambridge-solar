import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import FAQ from '../components/FAQ.jsx';
import CTASection from '../components/CTASection.jsx';
import { CONTACT, IMAGES } from '../data/site.js';

const FAQS = [
  { q: 'What is solar energy?', a: 'Solar energy is electricity generated from sunlight using solar panels. It is a renewable source that reduces reliance on conventional power.' },
  { q: 'How much can I save with solar?', a: 'Savings depend on your electricity usage, system size and site conditions. Share your monthly bill and our team will estimate what is realistic for you.' },
  { q: 'How long does solar installation take?', a: 'Timelines vary with system size and site requirements. After the site assessment we will give you a clear schedule.' },
  { q: 'Do you provide maintenance?', a: 'Yes. We offer maintenance and support so your system keeps performing over the long term.' },
  { q: 'Can solar be installed for commercial properties?', a: 'Yes. We design scalable rooftop systems for commercial and industrial properties.' },
];
const BILLS = ['Below ₹2,000', '₹2,000–₹5,000', '₹5,000–₹10,000', '₹10,000+'];
const EMPTY = { name: '', email: '', phone: '', location: '', property: 'Residential', bill: '', message: '' };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.';
  if (!/^\+?[\d\s-]{8,15}$/.test(v.phone.trim())) e.phone = 'Enter a valid phone number.';
  if (!v.location.trim()) e.location = 'Enter your location.';
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    // TODO: send `values` to your backend or form service here.
    setSent(true);
    setValues(EMPTY);
  };

  const field = (name, label, props = {}) => (
    <label className={`field ${errors[name] ? 'has-error' : ''}`}>
      <span>{label}</span>
      <input name={name} value={values[name]} onChange={onChange} {...props} />
      {errors[name] && <em role="alert">{errors[name]}</em>}
    </label>
  );

  return (
    <>
      <section className="hero hero--short" style={{ '--hero-img': `url(${IMAGES.consultation})` }}>
        <div className="container hero__inner">
          <span className="accent-line" />
          <h1>Let's Start Your Solar Journey</h1>
          <p>Tell us about your energy requirements and our team will help you explore the right solar solution.</p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container contact">
          <form className="card pad form" onSubmit={onSubmit} noValidate>
            {sent && <p className="notice"><CheckCircle2 size={18} /> Thank you. We have received your request and will be in touch.</p>}
            <div className="form__row">
              {field('name', 'Full Name *', { autoComplete: 'name' })}
              {field('email', 'Email Address *', { type: 'email', autoComplete: 'email' })}
            </div>
            <div className="form__row">
              {field('phone', 'Phone Number *', { type: 'tel', autoComplete: 'tel' })}
              {field('location', 'Location *')}
            </div>
            <div className="form__row">
              <label className="field"><span>Property Type</span>
                <select name="property" value={values.property} onChange={onChange}>
                  <option>Residential</option><option>Commercial</option><option>Industrial</option>
                </select>
              </label>
              <label className="field"><span>Monthly Electricity Bill</span>
                <select name="bill" value={values.bill} onChange={onChange}>
                  <option value="">Select a range</option>
                  {BILLS.map((b) => <option key={b}>{b}</option>)}
                </select>
              </label>
            </div>
            <label className="field"><span>Message / Requirements</span>
              <textarea name="message" rows="4" value={values.message} onChange={onChange} />
            </label>
            <Button type="submit">Request a Free Quote</Button>
          </form>

          <aside className="info">
            <SectionTitle center={false} title="Contact Information" />
            <ul>
              <li><span className="icon-badge"><Phone size={20} /></span><div><b>Phone</b><p>{CONTACT.phone}</p></div></li>
              <li><span className="icon-badge"><Mail size={20} /></span><div><b>Email</b><p>{CONTACT.email}</p></div></li>
              <li><span className="icon-badge"><MapPin size={20} /></span><div><b>Location</b><p>{CONTACT.address}</p></div></li>
              <li><span className="icon-badge"><Clock size={20} /></span><div><b>Business Hours</b><p>{CONTACT.hours[0]}<br />{CONTACT.hours[1]}</p></div></li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionTitle title="Frequently Asked Questions" />
          <FAQ items={FAQS} />
        </div>
      </section>

      <CTASection tone="navy" title="Have questions about going solar?" text="Speak with our team and find the right solution for your energy needs." label="Contact Us" />
    </>
  );
}
