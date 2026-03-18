import FramerMotion from '../FramerMotion';
import { spotlightAbout } from '../Data/SpotlightData';
import './SpotlightAbout.css';

export default function SpotlightAbout() {
  return (
    <section
      className="spotlight-about"
      aria-labelledby="spotlight-about-heading"
    >
      <FramerMotion className="spotlight-about__head" delay={0.1}>
        <img
          src={spotlightAbout.icon}
          alt=""
          aria-hidden="true"
          className="spotlight-about__icon"
        />
        <h2 className="spotlight-about__title" id="spotlight-about-heading">
          {spotlightAbout.title}
        </h2>
      </FramerMotion>

      <div className="spotlight-about__body">
        {spotlightAbout.paragraphs.map((paragraph, index) => (
          <FramerMotion key={index} delay={index * 0.1 + 0.2}>
            <p className="spotlight-about__text">{paragraph}</p>
          </FramerMotion>
        ))}
      </div>
    </section>
  );
}
