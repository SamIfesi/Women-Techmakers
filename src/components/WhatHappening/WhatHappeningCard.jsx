import './WhatHappeningCard.css';

export default function WhatHappeningCard({ icon, head, text }) {
  return (
    <article className="happening-card">
      <img className="happening-card__icon" src={icon} alt="" />
      <h3 className="happening-card__title">{head}</h3>
      <p className="happening-card__text">{text}</p>
    </article>
  );
}
