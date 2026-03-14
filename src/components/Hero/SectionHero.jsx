import './SectionHero.css';

export default function SectionHero({
  eyebrow,
  titleLine1,
  titleLine2,
  subtitle,
  highlightLine2 = false,
  stats = null,
  sectionId = 'section-hero-heading',
}) {
  return (
    <section className="section-hero" aria-labelledby={sectionId}>
      <p className="section-hero__eyebrow">{eyebrow}</p>

      <h1 className="section-hero__title" id={sectionId}>
        {titleLine1} {" "}
        <span
          className={
            highlightLine2
              ? 'section-hero__title-line section-hero__title-line--accent'
              : 'section-hero__title-line'
          }
        >
          {titleLine2}
        </span>
      </h1>

      <p className="section-hero__subtitle">{subtitle}</p>

      {stats ? (
        <div
          className="section-hero__stat"
          aria-label={`${stats.number} ${stats.label}`}
        >
          <span className="section-hero__stat-number" aria-hidden="true">
            {stats.number}
          </span>
          <span className="section-hero__stat-label" aria-hidden="true">
            {stats.label}
          </span>
        </div>
      ) : null}
    </section>
  );
}
