import { contributorCardsData } from '../Data/ContributorData';
import ContributorProfileCard from './ContributorProfileCard';
import WaitlistPopup from '../Waitlist/WaitlistPopup';
import './ContributorsShowcase.css';

export default function ContributorsShowcase() {
  return (
    <section className="contributors-showcase" id="contributors-showcase">
      <div className="contributors-showcase__grid">
        {contributorCardsData.map((card) => (
          <ContributorProfileCard key={card.id} card={card} />
        ))}
      </div>
      <WaitlistPopup
        triggerText="get the book when it launches"
        triggerClassName="contributor-showcase__cta"
      />
    </section>
  );
}
