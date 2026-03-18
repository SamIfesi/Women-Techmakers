import FramerMotion from '../FramerMotion';
import { contributorCardsData } from '../Data/ContributorData';
import ContributorProfileCard from './ContributorProfileCard';
import WaitlistPopup from '../Waitlist/WaitlistPopup';
import './ContributorsShowcase.css';

export default function ContributorsShowcase() {
  return (
    <section className="contributors-showcase" id="contributors-showcase">
      <div className="contributors-showcase__grid">
        {contributorCardsData.map((card, index) => (
          <FramerMotion key={card.id} delay={index * 0.15}>
            <ContributorProfileCard card={card} />
          </FramerMotion>
        ))}
      </div>
      <FramerMotion className="cta-container" delay={0.2}>
        <WaitlistPopup
          triggerText="get the book when it launches"
          triggerClassName="contributor-showcase__cta"
        />
      </FramerMotion>
    </section>
  );
}
