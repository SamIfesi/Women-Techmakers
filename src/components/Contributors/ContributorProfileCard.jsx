import './ContributorProfileCard.css';

export default function ContributorProfileCard({ card }) {
  const isComingSoon = card.status === 'comingSoon';

  return (
    <article
      className={
        isComingSoon
          ? 'contributor-profile-card contributor-profile-card--soon'
          : 'contributor-profile-card'
      }
    >
      <div className="contributor-profile-card__top">
        <div className="contributor-profile-card__avatar" aria-hidden="true">
          {card.initials}
        </div>
      </div>

      <div className="contributor-profile-card__bottom">
        {isComingSoon ? (
          <>
            <h3 className="contributor-profile-card__soon-title">
              Coming Soon
            </h3>
            <span className="contributor-profile-card__soon-pill">
              Announcing Soon
            </span>
          </>
        ) : (
          <>
            <h3 className="contributor-profile-card__name">{card.name}</h3>
            <p className="contributor-profile-card__role">{card.role}</p>
            <p className="contributor-profile-card__chapter">{card.chapter}</p>
            <p className="contributor-profile-card__quote">{card.quote}</p>
          </>
        )}
      </div>
    </article>
  );
}
