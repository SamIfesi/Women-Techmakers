import { mainEvent, webinarCard } from '../Data/Data';
import './EventDetailCards.css';

export default function EventDetailCards() {
  return (
    <div className="edc">
      {/* ── Main Event Card ─────────────────────────────────── */}
      <div className="edc-main">
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
      </div>

      {/* ── Pre-Event Webinar Card ───────────────────────────── */}
      <div className="edc-webinar">
        <div className="edc-webinar__badge">
          <span className="edc-webinar__badge-icon" aria-hidden="true">
            ⚡
          </span>
          <span className="edc-webinar__badge-text">{webinarCard.badge}</span>
        </div>

        <h2 className="edc-webinar__heading">{webinarCard.title}</h2>
        <p className="edc-webinar__subtitle">{webinarCard.subtitle}</p>

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
      </div>
    </div>
  );
}
