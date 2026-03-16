import { coreTeam } from '../Data/TeamData';
import CoreTeamCard from './CoreTeamCard';
import './CoreTeam.css';

export default function CoreTeam() {
  return (
    <section className="core-team" id="core-team">
      <div className="core-team__header">
        <h2 className="core-team__heading">{coreTeam.title}</h2>
        <p className="core-team__subtitle">{coreTeam.subtitle}</p>
      </div>

      <div className="core-team__grid">
        {coreTeam.members.map((member) => (
          <CoreTeamCard
            key={member.name}
            initials={member.initials}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
}
