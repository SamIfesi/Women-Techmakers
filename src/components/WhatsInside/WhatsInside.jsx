import { whatsInside } from '../Data/Data';
import WhatsInsideCard from './WhatsInsideCard';
import './WhatsInside.css';

export default function WhatsInside() {
  return (
    <section className="whats-inside" id="whats-inside">
      <div className="whats-inside__header">
        <h2 className="whats-inside__heading">{whatsInside.heading}</h2>
        <p className="whats-inside__subheading">{whatsInside.subheading}</p>
      </div>

      <div className="whats-inside__list">
        {whatsInside.chapters.map((chapter) => (
          <WhatsInsideCard
            key={chapter.number}
            number={chapter.number}
            title={chapter.title}
            theme={chapter.theme}
            description={chapter.description}
          />
        ))}
      </div>
    </section>
  );
}
