import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Badge */}
      <div className="hero__badge" role="note">
        <span>IWD 2026</span>
        <span className="hero__badge-dot" aria-hidden="true">
          •
        </span>
        <span>Women Techmakers Nsukka</span>
        <span className="hero__badge-dot" aria-hidden="true">
          •
        </span>
        <span>Free Download</span>
      </div>

      <div className="hero__content">
        {/* Heading */}
        <h1 className="hero__title">
          From the <span className="hero__title--green">margins</span> to the{' '}
          <span className="hero__title--green">mainstream</span>
        </h1>

        {/* Subtitle */}
        <p className="hero__subtitle">
          Women who claimed their seats at the Table of Technology
        </p>

        {/* Stats */}
        <div className="hero__stats" role="list" aria-label="Book highlights">
          <div className="hero__stat" role="listitem">
            <img src="/assets/icons/vector-12.svg" alt="" aria-hidden="true" />
            <span className="hero__stat-number">12</span>
            <span className="hero__stat-label">Contributors</span>
          </div>

          <div className="hero__stat-divider" aria-hidden="true" />

          <div className="hero__stat" role="listitem">
            <img src="/assets/icons/vector-6.svg" alt="" aria-hidden="true" />
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
        </div>

        {/* CTAs */}
        <div className="hero__ctas">
          <a
            href="/"
            className="hero__cta hero__cta--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the Waitlist
            <img
              src="/assets/icons/Vector-cta-primary.svg"
              alt=""
              aria-hidden="true"
            />
          </a>
          <a href="/" className="hero__cta hero__cta--secondary">
            Learn More
            <img
              src="/assets/icons/vector-cta-sec.svg"
              alt=""
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
