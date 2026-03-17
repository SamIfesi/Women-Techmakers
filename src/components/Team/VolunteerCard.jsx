import './VolunteerCard.css';

export default function VolunteerCard({ initials, name, image }) {
  return (
    <article className="volunteer-card">
      <div className="volunteer-card__avatar" aria-hidden="true">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <span className="volunteer-card__initials">{initials}</span>
        )}
      </div>
      <h3 className="volunteer-card__name">{name}</h3>
    </article>
  );
}
