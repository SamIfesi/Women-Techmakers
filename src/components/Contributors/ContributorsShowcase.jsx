import {contributorCardsData} from '../Data/ContributorData';
import ContributorProfileCard from './ContributorProfileCard';
import './ContributorsShowcase.css';

export default function ContributorsShowcase() {
  return (
    <section className="contributors-showcase" id="contributors-showcase">
      <div className="contributors-showcase__grid">
        {contributorCardsData.map((card) => (
          <ContributorProfileCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
