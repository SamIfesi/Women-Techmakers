import { bookDetails } from '../Data/AboutData';
import WaitlistPopup from '../Waitlist/WaitlistPopup';
import './BookDetails.css';

export default function BookDetails() {
  return (
    <section className="book-details" aria-labelledby="book-details-heading">
      <h2 className="book-details__heading" id="book-details-heading">
        {bookDetails.heading}
      </h2>

      <div className="book-details__grid">
        {bookDetails.details.map((item) => (
          <div className="book-details__card" key={item.label}>
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
          </div>
        ))}
      </div>

      <WaitlistPopup
        triggerText={bookDetails.cta.text}
        triggerClassName="book-details__cta"
      />
    </section>
  );
}
