import FramerMotion from '../FramerMotion';
import { mainEvent, webinarCard } from '../Data/IwdData';
import './EventDetailCards.css';
import lightening from '/assets/icons/web-lightening.svg';

export default function EventDetailCards() {
  return (
    <section className="edc">
      {/* ── Main Event Card ─────────────────────────────────── */}
      <FramerMotion className="edc-main" delay={0.1}>
        <h2 className="edc-main__heading">{mainEvent.heading}</h2>

        <div className="edc-main__rows">
          {mainEvent.rows.map((row, i) => (
            <div key={i} className="edc-main__row">
              <div className="edc-main__row-inner">
                <span className="edc-main__label">{row.label}</span>
                <span
                  className={`edc-main__value${row.highlight ? ' edc-main__value--free' : ''}`}
                >
                  {row.value}
                </span>
              </div>
              {i < mainEvent.rows.length - 1 && (
                <hr className="edc-main__divider" />
              )}
            </div>
          ))}
        </div>

        <a
          href={mainEvent.cta.link}
          className="edc-main__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          {mainEvent.cta.text}
        </a>
      </FramerMotion>

      {/* ── Pre-Event Webinar Card ───────────────────────────── */}
      <FramerMotion className="edc-webinar" delay={0.3}>
        <div>
          <div className="edc-webinar__badge">
            <img src={lightening} alt="" />
            <span className="edc-webinar__badge-text">{webinarCard.badge}</span>
          </div>

          <h2 className="edc-webinar__heading">{webinarCard.title}</h2>
          <p className="edc-webinar__subtitle">{webinarCard.subtitle}</p>
        </div>

        <div className="edc-webinar__rows">
          {webinarCard.rows.map((row, i) => (
            <div key={i} className="edc-webinar__row">
              <div className="edc-webinar__row-inner">
                <span className="edc-webinar__label">{row.label}</span>
                <span className="edc-webinar__value">{row.value}</span>
              </div>
              {i < webinarCard.rows.length - 1 && (
                <hr className="edc-webinar__divider" />
              )}
            </div>
          ))}
        </div>

        <a
          href={webinarCard.cta.link}
          className="edc-webinar__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          {webinarCard.cta.text}
        </a>
      </FramerMotion>
    </section>
  );
}
