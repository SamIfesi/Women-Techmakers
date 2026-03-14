import { everthingPlanned } from '../Data/IwdData';
import WhatHappeningCard from './WhatHappeningCard';
import './WhatHappening.css';

export default function WhatHappening() {
  const { title, subtitle, cards } = everthingPlanned;

  return (
    <section className="what-happening">
      <h2 className="what-happening__title">{title}</h2>
      <p className="what-happening__subtitle">{subtitle}</p>

      <div className="what-happening__grid">
        {cards.map((card, index) => (
          <WhatHappeningCard
            key={index}
            icon={card.icon}
            head={card.head}
            text={card.text}
          />
        ))}
      </div>
    </section>
  );
}
