import './Waitlist.css';

export default function FormWaitlist({
  waitlistRef,
  name,
  setName,
  email,
  setEmail,
  canSubmit,
  handleSubmit,
}) {
  return (
    <section className="waitlist-section" ref={waitlistRef}>
      <div className="waitlist-card">
        <h2 className="waitlist-title">Be The First To Know</h2>
        <p className="waitlist-subtitle">
          Join the waitlist to receive the digital copy immediately after launch
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

          <button type="submit" className="waitlist-btn" disabled={!canSubmit}>
            Join The Waitlist
          </button>
        </form>

        <p className="waitlist-footer">
          <span>Free Forever</span>
          <span className="waitlist-dot" aria-hidden="true">
            {' '}
            &bull;{' '}
          </span>
          <span>No Spam</span>
          <span className="waitlist-dot" aria-hidden="true">
            {' '}
            &bull;{' '}
          </span>
          <span>IWD 2026 Edition&apos;</span>
        </p>
      </div>
    </section>
  );
}
