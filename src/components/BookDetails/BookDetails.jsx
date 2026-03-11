import { Link } from 'react-router';
import { bookDetails } from '../Data/Data';
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

      <Link to={bookDetails.cta.href} className="book-details__cta">
        {bookDetails.cta.text}
      </Link>
    </section>
  );
}
