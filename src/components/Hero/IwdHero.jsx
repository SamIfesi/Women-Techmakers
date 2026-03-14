import {Link} from 'react-router';
import './IwdHero.css';

export default function IwdHero() {
  return (
    <section className="iwd-hero">
      {/* Eyebrow */}
      <p className="iwd-hero__eyebrow">International Women&apos;s Day</p>

      {/* Display heading */}
      <h1 className="iwd-hero__title">
        <span className="iwd-hero__title--white">Break The</span>
        <br />
        <span className="iwd-hero__title--green">Pattern</span>
      </h1>

      {/* Tagline */}
      <p className="iwd-hero__tagline">
        Women Shaping the Future of Tech &mdash; IWD 2026, University of
        Nigeria, Nsukka
      </p>

      {/* Event meta */}
      <ul className="iwd-hero__meta" aria-label="Event details">
        <li className="iwd-hero__meta-item">
          <img
            src="/assets/icons/calendar.svg"
            alt=""
            aria-hidden="true"
            className="iwd-hero__meta-icon"
          />
          <span>28th March 2026</span>
        </li>
        <li className="iwd-hero__meta-item">
          <img
            src="/assets/icons/location.svg"
            alt=""
            aria-hidden="true"
            className="iwd-hero__meta-icon"
          />
          <span>University of Nigeria, Nsukka</span>
        </li>
        <li className="iwd-hero__meta-item">
          <img
            src="/assets/icons/seats.svg"
            alt=""
            aria-hidden="true"
            className="iwd-hero__meta-icon"
          />
          <span>120 seats (Free)</span>
        </li>
      </ul>

      {/* CTA */}
      <Link
        to="https://gdg.community.dev/events/details/google-gdg-enugu-presents-break-the-pattern-women-shaping-the-future-of-tech-international-womens-day-nsukka-2026/"
        className="iwd-hero__cta"
        target="_blank"
        rel="noopener noreferrer"
      >
        Register for IWD 2026 &mdash; Free
      </Link>
    </section>
  );
}
