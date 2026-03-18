import FramerMotion from '../FramerMotion';
import './ContributorsHero.css';

export default function contributorsHero({
  eyebrow,
  titleLine1,
  titleLine2,
  subtitle,
  stats = null,
  contributorsId = 'section-hero-heading',
}) {
  return (
    <section className="contributors-hero" aria-labelledby={contributorsId}>
      <FramerMotion delay={0.1}>
        <p className="contributors-hero__eyebrow">{eyebrow}</p>
      </FramerMotion>

      <FramerMotion delay={0.2}>
        <h1 className="contributors-hero__title" id={contributorsId}>
          {titleLine1}
          <span className="contributors-hero__title-line">{titleLine2}</span>
        </h1>
      </FramerMotion>

      <FramerMotion delay={0.3}>
        <p className="contributors-hero__subtitle">{subtitle}</p>
      </FramerMotion>

      {stats ? (
        <FramerMotion delay={0.4}>
          <div
            className="contributors-hero__stat"
            aria-label={`${stats.number} ${stats.label}`}
          >
            <span className="contributors-hero__stat-number" aria-hidden="true">
              {stats.number}
            </span>
            <span className="contributors-hero__stat-label" aria-hidden="true">
              {stats.label}
            </span>
          </div>
        </FramerMotion>
      ) : null}
    </section>
  );
}
