import { AnimatePresence, motion as Motion } from 'framer-motion';
import err from '/assets/icons/error.svg';
import './Waitlist.css';

/**
 * Reusable waitlist confirmation modal.
 *
 * Props:
 *   show   {boolean}                    — whether to render the modal
 *   type   {'success'|'already'|'error'} — which message variant to show
 *   name   {string}                     — the submitter's name
 *   email  {string}                     — the submitter's email
 *
 * Usage example (from any component):
 *   <WaitlistModal show={open} type="success" name={name} email={email} />
 */
export default function WaitlistModal({
  show,
  type = 'success',
  name = '',
  email = '',
  onClose,
}) {
  const isAlready = type === 'already';
  const isError = type === 'error';

  return (
    <AnimatePresence>
      {show && (
        <Motion.div
          className="wl-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={onClose}
        >
          <Motion.div
            className="wl-modal-card"
            initial={{ scale: 0.5, opacity: 0, y: 0 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1, opacity: 0, y: -80 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={
                isError ? 'wl-modal-icon wl-modal-icon-error' : 'wl-modal-icon'
              }
              aria-hidden="true"
            >
              {isError ? <img src={err} alt="Error" /> : '✓'}
            </div>

            {isError ? (
              <>
                <p className="wl-modal-text">Request Could Not Be Completed</p>
                <p className="wl-modal-sub">
                  Your request could not be completed at this time. Please try
                  again later.
                </p>
              </>
            ) : isAlready ? (
              <>
                <p className="wl-modal-text">Already on the list!</p>
                <p className="wl-modal-sub">
                  <strong>{email}</strong> is already registered.
                  <br />
                  We&apos;ll reach out when we launch.
                </p>
              </>
            ) : (
              <>
                <p className="wl-modal-text">
                  Thanks, <strong>{name}</strong>!
                </p>
                <p className="wl-modal-sub">
                  We&apos;ll notify you at <strong>{email}</strong>.
                </p>
              </>
            )}
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
