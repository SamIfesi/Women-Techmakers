import { spotlightAbout } from '../Data/SpotlightData';
import './SpotlightAbout.css';

export default function SpotlightAbout() {
  return (
    <section
      className="spotlight-about"
      aria-labelledby="spotlight-about-heading"
    >
      <div className="spotlight-about__head">
        <img
          src={spotlightAbout.icon}
          alt=""
          aria-hidden="true"
          className="spotlight-about__icon"
        />
        <h2 className="spotlight-about__title" id="spotlight-about-heading">
          {spotlightAbout.title}
        </h2>
      </div>

      <div className="spotlight-about__body">
        {spotlightAbout.paragraphs.map((paragraph, index) => (
          <p key={index} className="spotlight-about__text">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
