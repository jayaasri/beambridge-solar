import { Link } from 'react-router-dom';
import { NAV } from '../data/site.js';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footer__inner">

        <div>
          <Logo />

          <p>Powering a brighter, cleaner future.</p>
        </div>

        <nav aria-label="Footer">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to}>
              {n.label}
            </Link>
          ))}
        </nav>

      </div>

      <div className="container footer__legal">
        © 2026 BeamBridge Solar. All rights reserved.
      </div>

    </footer>
  );
}