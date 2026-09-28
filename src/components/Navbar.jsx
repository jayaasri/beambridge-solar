import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun } from 'lucide-react';
import Button from './Button.jsx';
import { NAV } from '../data/site.js';
import Logo from './Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar__inner">
       <Link to="/" className="logo" aria-label="Beam Bridge Energy home">
<span className="logo__mark">
  <Logo />
</span>


</Link>
        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end className={({ isActive }) => (isActive ? 'active' : '')}>{n.label}</NavLink>
          ))}
          <Button to="/contact" className="navbar__cta">Get a Free Quote</Button>
        </nav>
        <button className="navbar__toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}
