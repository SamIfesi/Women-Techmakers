import './ReflectionPromptCard.css';

export default function ReflectionPromptCard({ number, question }) {
  return (
    <article className="rp-card">
      <span className="rp-card__number">{number}</span>
      <p className="rp-card__question">{question}</p>
    </article>
  );
}
