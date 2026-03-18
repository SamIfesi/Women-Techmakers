import FramerMotion from '../FramerMotion';
import { coreTeam } from '../Data/TeamData';
import CoreTeamCard from './CoreTeamCard';
import './CoreTeam.css';

export default function CoreTeam() {
  return (
    <section className="core-team" id="core-team">
      <div className="core-team__header">
        <FramerMotion delay={0.1}>
          <h2 className="core-team__heading">{coreTeam.title}</h2>
        </FramerMotion>
        <FramerMotion delay={0.2}>
          <p className="core-team__subtitle">{coreTeam.subtitle}</p>
        </FramerMotion>
      </div>

      <div className="core-team__grid">
        {coreTeam.members.map((member, index) => (
          <FramerMotion delay={index * 0.15 + 0.1} key={member.name}>
            <CoreTeamCard
              initials={member.initials}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          </FramerMotion>
        ))}
      </div>
    </section>
  );
}
