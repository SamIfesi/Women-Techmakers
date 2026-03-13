import { contributorsHero } from '../Data/Data';
import './ContributorsHero.css';

export default function ContributorsHero() {
  return (
    <section className="contributors-hero" aria-labelledby="contributors-hero-heading">
      <p className="contributors-hero__eyebrow">{contributorsHero.eyebrow}</p>

      <h1 className="contributors-hero__title" id="contributors-hero-heading">
        {contributorsHero.titleLine1}
        <br />
        {contributorsHero.titleLine2}
      </h1>

      <p className="contributors-hero__subtitle">{contributorsHero.subtitle}</p>

      <div className="contributors-hero__stat" aria-label={`${contributorsHero.stat.number} ${contributorsHero.stat.label}`}>
        <span className="contributors-hero__stat-number" aria-hidden="true">
          {contributorsHero.stat.number}
        </span>
        <span className="contributors-hero__stat-label" aria-hidden="true">
          {contributorsHero.stat.label}
        </span>
      </div>
    </section>
  );
}
