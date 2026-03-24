import FramerMotion from '../FramerMotion';
import bookcover from '/assets/img/bookcover.png';
import './BookShowcase.css';

export default function BookShowcase() {
  // TODO: Replace with actual back cover image once uploaded
  // const bookback = '/assets/img/bookback.png';

  return (
    <section className="book-showcase" aria-labelledby="book-showcase-heading">
      <FramerMotion delay={0.1} className="book-showcase__header">
        <h2 className="book-showcase__heading" id="book-showcase-heading">
          The Book
        </h2>
        <p className="book-showcase__description">
          A curated collection of 15 true stories by women in technology,
          celebrating achievements, challenges overcome, and paths to
          leadership.
        </p>
      </FramerMotion>

      <div className="book-showcase__covers">
        {/* Front Cover */}
        <FramerMotion delay={0.2} className="book-showcase__cover-wrapper">
          <div className="book-showcase__cover book-showcase__cover--front">
            <img
              src={bookcover}
              alt="From the Margins to the Mainstream - Book Front Cover"
              className="book-showcase__cover-image"
            />
            <p className="book-showcase__cover-label">Front Cover</p>
          </div>
        </FramerMotion>

        {/* Back Cover - Placeholder for now */}
        <FramerMotion delay={0.3} className="book-showcase__cover-wrapper">
          <div className="book-showcase__cover book-showcase__cover--back">
              <img
                src={bookcover}
                alt="From the Margins to the Mainstream - Book Back Cover"
                className="book-showcase__cover-image"
              />
            <p className="book-showcase__cover-label">Back Cover</p>
          </div>
        </FramerMotion>
      </div>

      {/* Download Section */}
      <FramerMotion delay={0.4} className="book-showcase__download-section">
        <h3 className="book-showcase__download-heading">Ready to Read?</h3>
        <p className="book-showcase__download-description">
          The PDF is completely free and always will be. Download it now and
          share with your network.
        </p>

        <div className="book-showcase__cta-group">
          <a
            href="#"
            className="book-showcase__download-btn"
            download="From-the-Margins-to-the-Mainstream.pdf"
            aria-label="Download the book as PDF"
          >
            <img src="/assets/icons/download.svg" alt="Download icon" />
            Download
          </a>

          <a
            href="/About"
            className="book-showcase__learn-more-btn"
            aria-label="Learn more about the book"
          >
            Learn More
          </a>
        </div>

        <p className="book-showcase__format-info">
          <span className="book-showcase__format-label">Format:</span> PDF
          (Digital)
          <span className="book-showcase__format-divider">•</span>
          <span className="book-showcase__format-label">Size:</span> 5MB
          <span className="book-showcase__format-divider">•</span>
          <span className="book-showcase__format-label">Pages:</span> 128
        </p>
      </FramerMotion>
    </section>
  );
}
