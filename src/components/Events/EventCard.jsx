import {Link} from 'react-router'
import './EventCard.css';

export default function EventCard({
  title,
  type,
  speakers,
  panelists,
  location,
  date,
  time,
  link,
  image,
}) {
  const details = [type, speakers, panelists, location, date, time].filter(
    Boolean
  );

  return (
    <article className='event-card' >
      {/* Flyer image */}
      <div className="event-card__flyer">
        {image && <img src={image} alt={`${title} flyer`} />}
      </div>

      {/* Content */}
      <div className="event-card__content">
        <h3 className="event-card__title">{title}</h3>
        <p className="event-card__details" aria-label="Event details">
          {details.map((item, i) => (
            <span key={i}>
              {i > 0 && (
                <span className="event-card__dot" aria-hidden="true">
                  {' '}
                  ·{' '}
                </span>
              )}
              {item}
            </span>
          ))}
        </p>
        
      {/* CTA */}
      <Link
        to={link}
        className="event-card__cta"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Register free for ${title}`}
      >
        Register Free
        <span className="event-card__arrow" aria-hidden="true">
          {' '}
          →
        </span>
      </Link>
      </div>

    </article>
  );
}
