import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import FramerMotion from '../FramerMotion';
import NominationModal from './NominationModal';
import { spotlightNomination } from '../Data/SpotlightData';
import './SpotlightNomination.css';

export default function SpotlightNomination() {
  const NOM_SERVICE_ID = import.meta.env.VITE_NOM_SERVICE_ID;
  const NOM_TEMPLATE_ID = import.meta.env.VITE_NOM_TEMPLATE_ID;
  const NOM_PUBLIC_KEY = import.meta.env.VITE_NOM_PUBLIC_KEY;

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('');
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusType, setStatusType] = useState('success');
  const [submitted, setSubmitted] = useState({ name: '', role: '' });
  const timerRef = useRef(null);

  const canSubmit =
    name.trim() !== '' && role.trim() !== '' && message.trim() !== '';

  async function handleSubmit(event) {
    event.preventDefault();
    let nextStatus = 'success';

    const trimmedName = name.trim();
    const trimmedRole = role.trim();
    const trimmedMessage = message.trim();
    const trimmedNumber = number.trim();

    const snap = {
      name: trimmedName,
      role: trimmedRole,
      message: trimmedMessage,
      number: trimmedNumber,
    };
    setSubmitted(snap);

    const storeDatas = localStorage.getItem('spotlightNominations');
    const storedNominations = storeDatas ? JSON.parse(storeDatas) : [];
    const isAlready =
      storeDatas !== null &&
      storedNominations.some(
        (nom) =>
          nom.name.toLowerCase() === trimmedName.toLowerCase() &&
          nom.role.toLowerCase() === trimmedRole.toLowerCase()
      );
    if (isAlready) {
      nextStatus = 'already';
    } else {
      try {
        await emailjs.send(
          NOM_SERVICE_ID,
          NOM_TEMPLATE_ID,
          {
            title: 'New Spotlight Nomination',
            name: snap.name,
            role: snap.role,
            message: `${snap.name} was nominated for the spotlight with role/organisation: ${snap.role} and message: ${snap.message}`,
            number: snap.number,
          },
          NOM_PUBLIC_KEY
        );

        localStorage.setItem(
          'spotlightNominations',
          JSON.stringify([...storedNominations, snap])
        );
      } catch (error) {
        console.error('Email sending failed:', error);
        nextStatus = 'error';
      }
    }
    setStatusType(nextStatus);
    setShowStatusModal(true);
    setName('');
    setRole('');
    setMessage('');
    setNumber('');
  }

  useEffect(() => {
    if (showStatusModal) {
      timerRef.current = setTimeout(() => setShowStatusModal(false), 500000);
    }
    return () => clearTimeout(timerRef.current);
  }, [showStatusModal]);

  return (
    <section
      className="spotlight-nomination"
      aria-labelledby="spotlight-nomination-heading"
    >
      <FramerMotion className="spotlight-nomination__head" delay={0.1}>
        <img
          src={spotlightNomination.icon}
          alt=""
          aria-hidden="true"
          className="spotlight-nomination__icon"
        />
        <h2
          className="spotlight-nomination__title"
          id="spotlight-nomination-heading"
        >
          {spotlightNomination.title}
        </h2>
      </FramerMotion>

      <FramerMotion delay={0.2}>
        <p className="spotlight-nomination__intro">
          {spotlightNomination.intro}
        </p>
      </FramerMotion>

      <FramerMotion delay={0.3} className="spotlight-nomination-wrapper">
        <form
          className="spotlight-nomination__form"
          onSubmit={handleSubmit}
          noValidate
        >
          {spotlightNomination.fields.map((field) => (
            <div className="spotlight-nomination__field" key={field.id}>
              <label className="spotlight-nomination__label" htmlFor={field.id}>
                {field.label}
                {field.required ? ' *' : ''}
              </label>

              {field.type === 'textarea' ? (
                <textarea
                  id={field.id}
                  className="spotlight-nomination__input spotlight-nomination__input--textarea"
                  placeholder={field.placeholder}
                  value={field.id === 'nominee-why' ? message : ''}
                  onChange={(event) => setMessage(event.target.value)}
                  required={field.required}
                />
              ) : (
                <input
                  id={field.id}
                  type={field.type}
                  className="spotlight-nomination__input"
                  placeholder={field.placeholder}
                  value={
                    field.id === 'nominee-name'
                      ? name
                      : field.id === 'nominee-role'
                        ? role
                        : number
                  }
                  onChange={(event) => {
                    if (field.id === 'nominee-name') {
                      setName(event.target.value);
                    } else if (field.id === 'nominee-role') {
                      setRole(event.target.value);
                    } else {
                      setNumber(event.target.value);
                    }
                  }}
                  required={field.required}
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="spotlight-nomination__cta"
            disabled={!canSubmit}
          >
            {spotlightNomination.submitText}
          </button>

          {statusType === 'error' && (
            <p className="spotlight-nomination__deadline" role="status">
              Could not submit nomination. Please try again.
            </p>
          )}

          <p className="spotlight-nomination__deadline">
            {spotlightNomination.deadlineText}
          </p>
        </form>
      </FramerMotion>

      <NominationModal
        show={showStatusModal}
        type={statusType}
        name={submitted.name}
        role={submitted.role}
      />
    </section>
  );
}
