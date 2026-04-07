import { useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import './DownloadBanner.css';

export default function DownloadBanner({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 5000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <Motion.div
      className="download-banner"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="download-banner__content">
        <img
          src="/assets/icons/circle-check.svg"
          alt=""
          className="download-banner__icon"
        />
        <div className="download-banner__text">
          <p className="download-banner__title">Thanks For Downloading</p>
          <p className="download-banner__subtitle">
            Download Started! your book is ready to read
          </p>
        </div>
      </div>
    </Motion.div>
  );
}
