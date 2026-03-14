import { breakThePattern } from '../Data/IwdData';
import './BreakThePattern.css';

export default function BreakThePattern() {
  const d = breakThePattern;
  return (
    <section className="btp" aria-labelledby="btp-heading">
      <h2 id="btp-heading" className="btp__heading">
        {d.heading}
      </h2>
      <h3 className="btp__subheading">{d.subheading}</h3>

      <div className="btp__body">
        <p>
          {d.body1} <strong>{d.body1Bold}</strong>
          {d.body1End}
        </p>
        <p>{d.body2}</p>
      </div>
    </section>
  );
}
