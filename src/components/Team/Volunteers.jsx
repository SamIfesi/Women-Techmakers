import FramerMotion from '../FramerMotion';
import { volunteers } from '../Data/TeamData';
import VolunteerCard from './VolunteerCard';
import './Volunteers.css';

export default function Volunteers() {
  return (
    <section className="volunteers" id="volunteers">
      <div className="volunteers__header">
        <FramerMotion delay={0.1}>
          <span className="volunteers__icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="8"
                cy="8"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="16"
                cy="6"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="17"
                cy="15"
                r="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M3.5 17.5C3.5 15 5.5 13 8 13C10.5 13 12.5 15 12.5 17.5V19H3.5V17.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M11.5 13.5C11.8 11.6 13.4 10.2 15.3 10.2C17.5 10.2 19.3 12 19.3 14.2V16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M14.8 19V17.8C14.8 16.2 16.1 14.9 17.7 14.9C19.3 14.9 20.6 16.2 20.6 17.8V19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </FramerMotion>
        <FramerMotion delay={0.2}>
          <h2 className="volunteers__heading">{volunteers.title}</h2>
        </FramerMotion>
        <FramerMotion delay={0.3}>
          <p className="volunteers__subtitle">{volunteers.subtitle}</p>
        </FramerMotion>
      </div>

      <div className="volunteers__grid">
        {volunteers.members.map((member, index) => (
          <FramerMotion delay={index * 0.15 + 0.1} key={member.name}>
            <VolunteerCard
              initials={member.initials}
              name={member.name}
              image={member.image}
            />
          </FramerMotion>
        ))}
      </div>
    </section>
  );
}
