import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import FramerMotion from '../FramerMotion';
import { bookDetails } from '../Data/AboutData';
import WaitlistPopup from '../Waitlist/WaitlistPopup';
import DownloadBanner from '../Download/DownloadBanner';
import './BookDetails.css';
import FMTMS from '/assets/pdf/FROM THE MARGINS TO THE MAINSTREAM.pdf';
import download from '/assets/icons/download.svg';

const LAUNCH_DATE = new Date(2026, 2, 28, 13, 0, 0).getTime(); // 1 PM - Note: Months are 0-indexed
const isBeforeLaunch = Date.now() < LAUNCH_DATE;

export default function BookDetails() {
  const [showBanner, setShowBanner] = useState(false);

  const handleDownloadClick = () => {
    setShowBanner(true);
  };

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <DownloadBanner onComplete={() => setShowBanner(false)} />
        )}
      </AnimatePresence>
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

      <FramerMotion className='cta-container' delay={bookDetails.details.length * 0.1 + 0.1}>
        {isBeforeLaunch ? (
          <WaitlistPopup
            triggerText={bookDetails.cta.text}
            triggerClassName="book-details__cta"
          />
        ) : (
          <a
            // href={FMTMS}
            className="book-details__download-btn"
            // download="FROM THE MARGINS TO THE MAINSTREAM.pdf"
            aria-label="Download the book as PDF"
            onClick={handleDownloadClick}
          >
            <img src={download} alt="Download icon" />
            Download BOOK
          </a>
        )}
      </FramerMotion>
    </section>
    </>
  );
}
