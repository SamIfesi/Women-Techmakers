import FramerMotion from '../FramerMotion';
import { bookDetails } from '../Data/AboutData';
import WaitlistPopup from '../Waitlist/WaitlistPopup';
import './BookDetails.css';

export default function BookDetails() {
  return (
    <section className="book-details" aria-labelledby="book-details-heading">
      <FramerMotion delay={0.1}>
        <h2 className="book-details__heading" id="book-details-heading">
          {bookDetails.heading}
        </h2>
      </FramerMotion>

      <div className="book-details__grid">
        {bookDetails.details.map((item, index) => (
          <FramerMotion
            className="book-details__card"
            key={item.label}
            delay={index * 0.1}
          >
            <span className="book-details__label">{item.label}</span>
            <span
              className={
                item.highlight
                  ? 'book-details__value book-details__value--highlight'
                  : 'book-details__value'
              }
            >
              {item.value}
            </span>
          </FramerMotion>
        ))}
      </div>

      <FramerMotion
        className="cta-container"
        delay={bookDetails.details.length * 0.1 + 0.1}
      >
        <WaitlistPopup
          triggerText={bookDetails.cta.text}
          triggerClassName="book-details__cta"
        />
      </FramerMotion>
    </section>
  );
}
