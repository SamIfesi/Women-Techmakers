import FramerMotion from '../FramerMotion';
import { aboutSec } from '../Data/Data';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      {/* Section heading */}
      <FramerMotion className="about__heading-wrapper" delay={0.1}>
        <span className="about__heading-line" aria-hidden="true" />
        <h2 className="about__heading">{aboutSec.title}</h2>
        <span className="about__heading-line" aria-hidden="true" />
      </FramerMotion>

      <div className="about__body">
        {/* Pull quote */}
        <FramerMotion delay={0.2}>
          <blockquote className="about__quote">
            <p>{aboutSec.quote}</p>
            <p>{aboutSec.quote2}</p>
          </blockquote>
        </FramerMotion>

        {/* Body copy */}
        <FramerMotion delay={0.3} className="about__text">
          <p>{aboutSec.text}</p>
          <p>{aboutSec.text2}</p>
        </FramerMotion>
      </div>
    </section>
  );
}
