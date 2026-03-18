import FramerMotion from '../FramerMotion';
import { bookStory } from '../Data/AboutData';
import './AboutHero.css';

function Paragraph({ p, delay }) {
  if (p.text) {
    return (
      <FramerMotion delay={delay}>
        <p className="story-how__para">{p.text}</p>
      </FramerMotion>
    );
  }
  return (
    <FramerMotion delay={delay}>
      <p className="story-how__para">
        {p.before}
        <strong>{p.bold}</strong>
        {p.after}
      </p>
    </FramerMotion>
  );
}

export default function StoryBehindBook() {
  const { eyebrow, heroTitle, heroSubtitle, howItStarted } = bookStory;

  return (
    <>
      {/* ── Dark navy hero block ────────────────────────────── */}
      <section className="story-behind" aria-labelledby="story-behind-heading">
        <FramerMotion delay={0.1}>
          <p className="story-behind__label">{eyebrow}</p>
        </FramerMotion>

        <FramerMotion delay={0.2}>
          <h2 className="story-behind__heading" id="story-behind-heading">
            {heroTitle}
          </h2>
        </FramerMotion>

        <FramerMotion delay={0.3}>
          <blockquote className="story-behind__blockquote">
            <p>{heroSubtitle}</p>
          </blockquote>
        </FramerMotion>
      </section>

      {/* ── White "How It Started" block ───────────────────── */}
      <section className="story-how" aria-labelledby="story-how-heading">
        <FramerMotion delay={0.2}>
          <h3 className="story-how__heading" id="story-how-heading">
            {howItStarted.heading}
          </h3>
        </FramerMotion>
        <div className="story-how__text">
          {howItStarted.paragraphs.map((p, i) => (
            <Paragraph key={i} p={p} delay={0.3 + i * 0.1} />
          ))}
        </div>
      </section>
    </>
  );
}
