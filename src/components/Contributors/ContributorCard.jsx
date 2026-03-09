import './ContributorCard.css';

export default function ContributorCard({ name, role, image }) {
  return (
    <article className="contributor-card">
      <div className="contributor-card__avatar">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <span
            className="contributor-card__avatar-placeholder"
            aria-hidden="true"
          />
        )}
      </div>
      <div className="contributor-card__info">
        <h3 className="contributor-card__name">{name}</h3>
        <p className="contributor-card__role">{role}</p>
      </div>
    </article>
  );
}
