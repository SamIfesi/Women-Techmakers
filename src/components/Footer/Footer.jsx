import { Link } from 'react-router';
import { footerData } from '../Data/Data';
import './Footer.css';

export default function Footer() {
  const { title, description, socials, quickLinks, joinUs, copyright, hashtags } = footerData;

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <h2 className="footer__title">
            {title.split('\n').map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </h2>
          <p className="footer__description">{description}</p>
          <div className="footer__socials">
            {socials.map(({ label, icon, href }) => (
              <a key={label} to={href} className="footer__social-link" aria-label={label}>
                <img src={icon} alt={label} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__links-col">
          <h3 className="footer__col-heading">{quickLinks.heading}</h3>
          <ul className="footer__link-list">
            {quickLinks.links.map(({ label, href }) => (
              <li key={label}>
                <Link to={href} className="footer__link">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__links-col">
          <h3 className="footer__col-heading">{joinUs.heading}</h3>
          <ul className="footer__link-list">
            {joinUs.links.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="footer__link">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <hr className="footer__divider" />
        <p className="footer__copyright">{copyright}</p>
        <p className="footer__hashtags">{hashtags}</p>
      </div>
    </footer>
  );
}
