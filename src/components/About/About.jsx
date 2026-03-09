import { aboutSec } from '../Data/Data';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      {/* Section heading */}
      <div className="about__heading-wrapper">
        <span className="about__heading-line" aria-hidden="true" />
        <h2 className="about__heading">{aboutSec.title}</h2>
        <span className="about__heading-line" aria-hidden="true" />
      </div>

      <div className="about__body">
        {/* Pull quote */}
        <blockquote className="about__quote">
          <p>{aboutSec.quote}</p>
          <p>{aboutSec.quote2}</p>
        </blockquote>

        {/* Body copy */}
        <div className="about__text">
          <p>{aboutSec.text}</p>
          <p>{aboutSec.text2}</p>
        </div>
      </div>
    </section>
  );
}
