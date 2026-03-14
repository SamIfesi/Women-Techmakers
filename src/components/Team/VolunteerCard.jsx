import './VolunteerCard.css';

export default function VolunteerCard({ initials, name }) {
  return (
    <article className="volunteer-card">
      <div className="volunteer-card__badge" aria-hidden="true">
        {initials}
      </div>
      <h3 className="volunteer-card__name">{name}</h3>
    </article>
  );
}
