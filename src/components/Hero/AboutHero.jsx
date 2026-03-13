import { bookStory } from '../Data/AboutData';
import './AboutHero.css';

function Paragraph({ p }) {
  if (p.text) {
    return <p className="story-how__para">{p.text}</p>;
  }
  return (
    <p className="story-how__para">
      {p.before}
      <strong>{p.bold}</strong>
      {p.after}
    </p>
  );
}

export default function StoryBehindBook() {
  const { eyebrow, heroTitle, heroSubtitle, howItStarted } = bookStory;

  return (
    <>
      {/* ── Dark navy hero block ────────────────────────────── */}
      <section className="story-behind" aria-labelledby="story-behind-heading">
        <p className="story-behind__label">{eyebrow}</p>

        <h2 className="story-behind__heading" id="story-behind-heading">
          {heroTitle}
        </h2>

        <blockquote className="story-behind__blockquote">
          <p>{heroSubtitle}</p>
        </blockquote>
      </section>

      {/* ── White "How It Started" block ───────────────────── */}
      <section className="story-how" aria-labelledby="story-how-heading">
        <h3 className="story-how__heading" id="story-how-heading">
          {howItStarted.heading}
        </h3>
        <div className="story-how__text">
          {howItStarted.paragraphs.map((p, i) => (
            <Paragraph key={i} p={p} />
          ))}
        </div>
      </section>
    </>
  );
}
