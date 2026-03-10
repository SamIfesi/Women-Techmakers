import './AboutHero.css';

export default function AboutHero() {
  return (
    <section className="about-hero">
      {/* Eyebrow */}
      <p className="about-hero__eyebrow">International Women&apos;s Day</p>

      {/* Display heading */}
      <h1 className="about-hero__title">
        <span className="about-hero__title--white">Break The</span>
        <br />
        <span className="about-hero__title--green">Pattern</span>
      </h1>

      {/* Tagline */}
      <p className="about-hero__tagline">
        Women Shaping the Future of Tech &mdash; IWD 2026, University of
        Nigeria, Nsukka
      </p>

      {/* Event meta */}
      <ul className="about-hero__meta" aria-label="Event details">
        <li className="about-hero__meta-item">
          <img
            src="/assets/icons/calendar.svg"
            alt=""
            aria-hidden="true"
            className="about-hero__meta-icon"
          />
          <span>28th March 2026</span>
        </li>
        <li className="about-hero__meta-item">
          <img
            src="/assets/icons/location.svg"
            alt=""
            aria-hidden="true"
            className="about-hero__meta-icon"
          />
          <span>University of Nigeria, Nsukka</span>
        </li>
        <li className="about-hero__meta-item">
          <img
            src="/assets/icons/seats.svg"
            alt=""
            aria-hidden="true"
            className="about-hero__meta-icon"
          />
          <span>120 seats (Free)</span>
        </li>
      </ul>

      {/* CTA */}
      <a
        href="https://forms.gle"
        className="about-hero__cta"
        target="_blank"
        rel="noopener noreferrer"
      >
        Register for IWD 2026 &mdash; Free
      </a>
    </section>
  );
}
