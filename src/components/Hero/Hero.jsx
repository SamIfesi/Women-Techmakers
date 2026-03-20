import { Link } from 'react-router';
import bookcover from '/assets/img/bookcover.png';
import vector12 from '/assets/icons/vector-12.svg';
import vector6 from '/assets/icons/vector-6.svg';
import vectorPrimary from '/assets/icons/Vector-cta-primary.svg';
import vectorSec from '/assets/icons/vector-cta-sec.svg';
import FramerMotion from '../FramerMotion';
import './Hero.css';

export default function Hero({ onJoinWaitlist }) {
  return (
    <section className="hero">
      {/* Badge */}
      <FramerMotion className="hero__badge" role="note" delay={0.1}>
        <span>IWD 2026</span>
        <span className="hero__badge-dot" aria-hidden="true">
          •
        </span>
        <span>Women Techmakers Nsukka</span>
        <span className="hero__badge-dot" aria-hidden="true">
          •
        </span>
        <span>Free Download</span>
      </FramerMotion>

      <FramerMotion delay={0.6} className="hero__bookcover-wrap">
        <img
          src={bookcover}
          alt="Book cover for From the Margins to the Mainstream"
          className="hero__bookcover"
        />
      </FramerMotion>

      <div className="hero__content">
        {/* Heading */}
        <FramerMotion delay={0.3}>
          <h1 className="hero__title">
            From the <span className="hero__title--green">margins</span> to the{' '}
            <span className="hero__title--green">mainstream</span>
          </h1>

          {/* Subtitle */}
          <p className="hero__subtitle">
            Women who claimed their seats at the Table of Technology
          </p>
        </FramerMotion>

        {/* Stats */}
        <FramerMotion
          delay={0.4}
          className="hero__stats"
          role="list"
          aria-label="Book highlights"
        >
          <div className="hero__stat" role="listitem">
            <img src={vector12} alt="" aria-hidden="true" />
            <span className="hero__stat-number">12</span>
            <span className="hero__stat-label">Contributors</span>
          </div>

          <div className="hero__stat-divider" aria-hidden="true" />

          <div className="hero__stat" role="listitem">
            <img src={vector6} alt="" aria-hidden="true" />
            <span className="hero__stat-number">6</span>
            <span className="hero__stat-label">Chapters</span>
          </div>

          <div className="hero__stat-divider" aria-hidden="true" />

          <div className="hero__stat" role="listitem">
            <img
              src="/assets/icons/vector-free.svg"
              alt=""
              aria-hidden="true"
            />
            <span className="hero__stat-number">Free</span>
            <span className="hero__stat-label">Always</span>
          </div>
        </FramerMotion>

        {/* CTAs */}
        <FramerMotion delay={0.5} className="hero__ctas">
          <Link
            to="/"
            className="hero__cta hero__cta--primary"
            rel="noopener noreferrer"
            onClick={onJoinWaitlist}
          >
            Join the Waitlist
            <img src={vectorPrimary} alt="" aria-hidden="true" />
          </Link>
          <Link to="/About" className="hero__cta hero__cta--secondary">
            Learn More
            <img src={vectorSec} alt="" aria-hidden="true" />
          </Link>
        </FramerMotion>
      </div>
    </section>
  );
}
