import FramerMotion from '../FramerMotion';
import frontcover from '/assets/img/bookcover.png';
import backcover from '/assets/img/bookbackcover.jpg';
import download from '/assets/icons/download.svg';
import WaitlistPopup from '../Waitlist/WaitlistPopup';
import FMTMS from '/assets/pdf/From-the-Margins-to-the-Mainstream.pdf';
import './BookShowcase.css';

const LAUNCH_DATE = new Date(2026, 2, 28, 13, 0, 0).getTime(); // 1 PM - Note: Months are 0-indexed
const isBeforeLaunch = Date.now() < LAUNCH_DATE;

export default function BookShowcase() {

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
              src={frontcover}
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
              src={backcover}
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
          {isBeforeLaunch ? (
            <>
              <WaitlistPopup
                triggerText="Download"
                triggerClassName="book-showcase__download-btn"
                title="Get Early Access"
                subtitle="Join the waitlist to receive the digital copy immediately after launch on March 28, 2026"
              />
              <a
                href="/About"
                className="book-showcase__learn-more-btn"
                aria-label="Learn more about the book"
              >
                Learn More
              </a>
            </>
          ) : (
            <>
              <a
                href={FMTMS}
                className="book-showcase__download-btn"
                download="FROM THE MARGINS TO THE MAINSTREAM.pdf"
                aria-label="Download the book as PDF"
              >
                <img src={download} alt="Download icon" />
                Download PDF
              </a>
              <a
                href="/About"
                className="book-showcase__learn-more-btn"
                aria-label="Learn more about the book"
              >
                Learn More
              </a>
            </>
          )}
        </div>

        <p className="book-showcase__format-info">
          <span className="book-showcase__format-label">Format:</span> PDF
          (Digital)
          <span className="book-showcase__format-divider">•</span>
          <span className="book-showcase__format-label">Size:</span> -MB
          <span className="book-showcase__format-divider">•</span>
          <span className="book-showcase__format-label">Pages:</span> -
        </p>
      </FramerMotion>
    </section>
  );
}
