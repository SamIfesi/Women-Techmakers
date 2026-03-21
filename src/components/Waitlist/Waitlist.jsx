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

  // Button is only active when both fields have content
  const canSubmit = name.trim() !== '' && email.trim() !== '';

  function handleSubmit(e) {
    e.preventDefault();

    const snap = { name, email };
    setSubmitted(snap);

    const storedEmail = localStorage.getItem('wl_email');
    const storedDatas = storedEmail ? JSON.parse(storedEmail) : [];
    const isAlready =
      storedEmail !== null &&
      storedDatas.some(
        (item) => item.email.toLowerCase() === email.trim().toLowerCase()
      );
    if (isAlready) {
      setModalType('already');
    } else {
      // ── EmailJS send — uncomment at launch ──────────────────────────────
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
      // ────────────────────────────────────────────────────────────────────
      localStorage.setItem('wl_email', JSON.stringify([...storedDatas, snap]));
      setModalType('success');
    }

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
      />
    </>
  );
}
