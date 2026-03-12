import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Waitlist.css';

// ── EmailJS config (values live in .env) ────────────────────────────────────
const EJS_SERVICE_ID = import.meta.env.VITE_EJS_SERVICE_ID;
const EJS_TEMPLATE_ID = import.meta.env.VITE_EJS_TEMPLATE_ID;
const EJS_PUBLIC_KEY = import.meta.env.VITE_EJS_PUBLIC_KEY;

export default function Waitlist() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  // Snapshot of the submitted values so the modal keeps them after the form clears
  const [submitted, setSubmitted] = useState({ name: '', email: '' });
  const timerRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    const snap = { name, email };
    setSubmitted(snap);

    // Send data to ekesamrose@gmail.com via EmailJS
    emailjs.send(
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

    setShowModal(true);
    setName('');
    setEmail('');
  }

  // Auto-close the modal after 5 seconds
  useEffect(() => {
    if (showModal) {
      timerRef.current = setTimeout(() => setShowModal(false), 5000);
    }
    return () => clearTimeout(timerRef.current);
  }, [showModal]);

  return (
    <>
      <section className="waitlist-section">
        <div className="waitlist-card">
          <h2 className="waitlist-title">Be The First To Know</h2>
          <p className="waitlist-subtitle">
            Join the waitlist to receive the digital copy immediately after
            launch
          </p>

          <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
            <div className="waitlist-field">
              <label htmlFor="waitlist-name" className="waitlist-label">
                Your Name
              </label>
              <input
                id="waitlist-name"
                type="text"
                className="waitlist-input"
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
            </div>

            <div className="waitlist-field">
              <label htmlFor="waitlist-email" className="waitlist-label">
                Email Address
              </label>
              <input
                id="waitlist-email"
                type="email"
                className="waitlist-input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            <button type="submit" className="waitlist-btn">
              Join The Waitlist
            </button>
          </form>

          <p className="waitlist-footer">
            <span>Free Forever</span>
            <span className="waitlist-dot" aria-hidden="true">
              {' '}
              •{' '}
            </span>
            <span>No Spam</span>
            <span className="waitlist-dot" aria-hidden="true">
              {' '}
              •{' '}
            </span>
            <span>IWD 2026 Edition&apos;</span>
          </p>
        </div>
      </section>

      {/* ── Success Modal ─────────────────────────────────── */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="wl-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <motion.div
              className="wl-modal-card"
              initial={{ scale: 0.5, opacity: 0, y: 0 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 1, opacity: 0, y: -80 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            >
              <div className="wl-modal-icon" aria-hidden="true">
                ✓
              </div>
              <p className="wl-modal-text">
                Thanks, <strong>{submitted.name}</strong>!
              </p>
              <p className="wl-modal-sub">
                We&apos;ll notify you at <strong>{submitted.email}</strong>.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
