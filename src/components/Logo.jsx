import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Beam Bridge Energy home">

      <span className="logo__mark">
        <svg
          viewBox="0 0 180 280"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Blue solar panel */}
          <polygon
            points="20,15 155,55 155,265 20,215"
            className="panel-body"
          />

          {/* 3 COLUMNS */}
          <line x1="65" y1="28" x2="65" y2="232" />
          <line x1="110" y1="41" x2="110" y2="249" />

          {/* STRAIGHT LINE AFTER 3RD COLUMN */}
          <line
            x1="169"
            y1="55"
            x2="169"
            y2="265"
            className="panel-edge"
          />

          {/* 6 ROWS */}
          <line x1="20" y1="48" x2="155" y2="88" />
          <line x1="20" y1="81" x2="152" y2="121" />
          <line x1="20" y1="114" x2="149" y2="154" />
          <line x1="20" y1="147" x2="146" y2="187" />
          <line x1="20" y1="180" x2="143" y2="220" />
        </svg>
      </span>

      <span className="logo__text">
        <span>Beam</span>
        <b>Bridge</b>
        <b>Energy</b>
      </span>

    </Link>
  );
}