import FramerMotion from '../FramerMotion';
import { whatsInside } from '../Data/AboutData';
import WhatsInsideCard from './WhatsInsideCard';
import './WhatsInside.css';

export default function WhatsInside() {
  return (
    <section className="whats-inside" id="whats-inside">
      <div className="whats-inside__header">
        <FramerMotion delay={0.1}>
          <h2 className="whats-inside__heading">{whatsInside.heading}</h2>
        </FramerMotion>
        <FramerMotion delay={0.2}>
          <p className="whats-inside__subheading">{whatsInside.subheading}</p>
        </FramerMotion>
      </div>

      <div className="whats-inside__list">
        {whatsInside.chapters.map((chapter, index) => (
          <FramerMotion delay={index * 0.15 + 0.1} key={chapter.number}>
            <WhatsInsideCard
              number={chapter.number}
              title={chapter.title}
              theme={chapter.theme}
              description={chapter.description}
            />
          </FramerMotion>
        ))}
      </div>
    </section>
  );
}
