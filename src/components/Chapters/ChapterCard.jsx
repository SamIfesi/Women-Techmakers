import './ChapterCard.css';

export default function ChapterCard({ number, label, title, description }) {
  return (
    <article className="chapter-card">
      <span className="chapter-card__watermark" aria-hidden="true">
        {number}
      </span>
      <div className="chapter-card__body">
        <span className="chapter-card__label">{label}</span>
        <h3 className="chapter-card__title">{title}</h3>
        <p className="chapter-card__description">{description}</p>
      </div>
    </article>
  );
}
