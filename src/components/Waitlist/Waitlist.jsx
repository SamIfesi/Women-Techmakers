import { useState } from 'react';
import './Waitlist.css';

export default function Waitlist() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire up to backend / email service
    alert(`Thanks, ${name}! We'll notify you at ${email}.`);
    setName('');
    setEmail('');
  }

  return (
    <section className="waitlist-section">
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
  );
}
