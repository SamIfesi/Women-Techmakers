import './CoreTeamCard.css';

export default function CoreTeamCard({ initials, name, role }) {
  return (
    <article className="core-team-card">
      <div className="core-team-card__top" aria-hidden="true">
        <span className="core-team-card__initials">{initials}</span>
      </div>
      <div className="core-team-card__bottom">
        <h3 className="core-team-card__name">{name}</h3>
        <p className="core-team-card__role">{role}</p>
      </div>
    </article>
  );
}
