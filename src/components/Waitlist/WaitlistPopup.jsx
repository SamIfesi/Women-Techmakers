import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
  import emailjs from '@emailjs/browser';
import WaitlistModal from './WaitlistModal';
import './Waitlist.css';

export default function WaitlistPopup({
  triggerText = 'Join The Waitlist',
  triggerClassName = '',
  storageKey = 'wl_email',
  title = 'Be The First To Know',
  subtitle = 'Join the waitlist to receive the digital copy immediately after launch',
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusType, setStatusType] = useState('success');
  const [submitted, setSubmitted] = useState({ name: '', email: '' });
  const timerRef = useRef(null);

  // ── EmailJS — COMMENTED OUT until launch to preserve free-tier quota (200/mo) ─
  const EJS_SERVICE_ID = import.meta.env.VITE_EJS_SERVICE_ID;
  const EJS_TEMPLATE_ID = import.meta.env.VITE_EJS_TEMPLATE_ID;
  const EJS_PUBLIC_KEY = import.meta.env.VITE_EJS_PUBLIC_KEY;

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const canSubmit = name.trim() !== '' && email.trim() !== '' && EMAIL_REGEX.test(email.trim());

  function openFormModal(event) {
    event.preventDefault();
    setIsFormOpen(true);
  }

  function closeFormModal() {
    setIsFormOpen(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let nextStatus = 'success';

    const snap = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
    };
    setSubmitted(snap);

    try {
      const storedData = localStorage.getItem(storageKey);
      const storedList = storedData ? JSON.parse(storedData) : [];
      const isAlready = storedList.some(
        (item) => item?.email?.toLowerCase?.() === snap.email
      );

      if (isAlready) {
        nextStatus = 'already';
      } else {
        // ── EmailJS send — uncomment at launch ──────────────────────────────
        await emailjs.send(
          EJS_SERVICE_ID,
          EJS_TEMPLATE_ID,
          {
            title: 'New Waitlist Signup',
            name: snap.name,
            email: snap.email,
            message: `${snap.name} joined the waitlist with email: ${snap.email}`,
          },
          EJS_PUBLIC_KEY
        );
        // ────────────────────────────────────────────────────────────────────
        const updatedList = [...storedList, snap];
        localStorage.setItem(storageKey, JSON.stringify(updatedList));
      }
    } catch (error) {
      console.error('Waitlist submission failed:', error);
      nextStatus = 'error';
    }

    setStatusType(nextStatus);
    setIsFormOpen(false);
    setShowStatusModal(true);
    setName('');
    setEmail('');
  }

  useEffect(() => {
    if (showStatusModal) {
      timerRef.current = setTimeout(() => setShowStatusModal(false), 5000);
    }

    return () => clearTimeout(timerRef.current);
  }, [showStatusModal]);

  useEffect(() => {
    if (isFormOpen || showStatusModal) {
      const { overflow } = document.body.style;
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = overflow;
      };
    }

    return undefined;
  }, [isFormOpen, showStatusModal]);

  const closeStatusModal = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setShowStatusModal(false);
  };

  return (
    <>
      <button type="button" className={triggerClassName} onClick={openFormModal}>
        {triggerText}
      </button>

      <AnimatePresence>
        {isFormOpen && (
          <Motion.div
            className="waitlist-popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeFormModal}
          >
            <Motion.div
              className="waitlist-popup-panel waitlist-card"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="waitlist-popup-close"
                aria-label="Close waitlist form"
                onClick={closeFormModal}
              >
                X
              </button>

              <h2 className="waitlist-title">{title}</h2>
              <p className="waitlist-subtitle">{subtitle}</p>

              <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
                <div className="waitlist-field">
                  <label htmlFor="waitlist-popup-name" className="waitlist-label">
                    Your Name
                  </label>
                  <input
                    id="waitlist-popup-name"
                    type="text"
                    className="waitlist-input"
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="waitlist-field">
                  <label htmlFor="waitlist-popup-email" className="waitlist-label">
                    Email Address
                  </label>
                  <input
                    id="waitlist-popup-email"
                    type="email"
                    className="waitlist-input"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>

                <button type="submit" className="waitlist-btn" disabled={!canSubmit}>
                  Join The Waitlist
                </button>
              </form>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>

      <WaitlistModal
        show={showStatusModal}
        type={statusType}
        name={submitted.name}
        email={submitted.email}
        onClose={closeStatusModal}
      />
    </>
  );
}