import './WhatsInsideCard.css';

export default function WhatsInsideCard({ number, title, theme, description }) {
  return (
    <article className="wi-card">
      <div className="wi-card__badge" aria-label={`Chapter ${number}`}>
        {number}
      </div>
      <div className="wi-card__content">
        <h3 className="wi-card__title">{title}</h3>
        <span className="wi-card__theme">{theme}</span>
        <p className="wi-card__description">{description}</p>
      </div>
    </article>
  );
}
