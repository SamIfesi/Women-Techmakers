import { useState, useEffect, useRef } from 'react';
import WaitlistModal from './WaitlistModal';
import FormWaitlist from './FormWaitlist';
import emailjs from '@emailjs/browser';

export default function Waitlist({ waitlistRef }) {
  const EJS_SERVICE_ID = import.meta.env.VITE_EJS_SERVICE_ID;
  const EJS_TEMPLATE_ID = import.meta.env.VITE_EJS_TEMPLATE_ID;
  const EJS_PUBLIC_KEY = import.meta.env.VITE_EJS_PUBLIC_KEY;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  // 'success' = new signup | 'already' = email already stored in localStorage
  const [modalType, setModalType] = useState('success');

  // Snapshot of submitted values — kept so modal shows them after form clears
  const [submitted, setSubmitted] = useState({ name: '', email: '' });
  const timerRef = useRef(null);

  // Button is only active when both fields have content and email is valid
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const canSubmit =
    name.trim() !== '' && email.trim() !== '' && EMAIL_REGEX.test(email.trim());

  async function handleSubmit(e) {
    e.preventDefault();
    let nextStatus = 'success';

    const snap = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
    };
    setSubmitted(snap);

    try {
      const storedEmail = localStorage.getItem('wl_email');
      const storedDatas = storedEmail ? JSON.parse(storedEmail) : [];
      const isAlready = storedDatas.some(
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
        localStorage.setItem(
          'wl_email',
          JSON.stringify([...storedDatas, snap])
        );
      }
    } catch (error) {
      console.error('Waitlist submission failed:', error);
      nextStatus = 'error';
    }

    setModalType(nextStatus);
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

  // One-time cleanup: remove only waitlist data and never run again.
  useEffect(() => {
    const CLEANUP_FLAG_KEY = 'wl_cleanup_done_v1';
    const hasRunCleanup = localStorage.getItem(CLEANUP_FLAG_KEY) === '1';

    if (hasRunCleanup) return;

    localStorage.removeItem('wl_email');
    localStorage.setItem(CLEANUP_FLAG_KEY, '1');
    console.info('One-time waitlist localStorage cleanup completed.');
  }, []);

  const closeModel = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setShowModal(false);
  };

  return (
    <>
      <FormWaitlist
        waitlistRef={waitlistRef}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        canSubmit={canSubmit}
        handleSubmit={handleSubmit}
      />

      {/* ── Modal (success or already-joined) — powered by WaitlistModal ─── */}
      <WaitlistModal
        show={showModal}
        type={modalType}
        name={submitted.name}
        email={submitted.email}
        onClose={closeModel}
      />
    </>
  );
}
