import FramerMotion from '../FramerMotion';
import { everthingPlanned } from '../Data/IwdData';
import WhatHappeningCard from './WhatHappeningCard';
import './WhatHappening.css';

export default function WhatHappening() {
  const { title, subtitle, cards } = everthingPlanned;

  return (
    <section className="what-happening">
      <FramerMotion delay={0.1}>
        <h2 className="what-happening__title">{title}</h2>
      </FramerMotion>
      <FramerMotion delay={0.2}>
        <p className="what-happening__subtitle">{subtitle}</p>
      </FramerMotion>

      <div className="what-happening__grid">
        {cards.map((card, index) => (
          <FramerMotion delay={index * 0.15 + 0.1} key={index}>
            <WhatHappeningCard
              icon={card.icon}
              head={card.head}
              text={card.text}
            />
          </FramerMotion>
        ))}
      </div>
    </section>
  );
}
