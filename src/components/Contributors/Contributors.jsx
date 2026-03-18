import { contributorsData } from '../Data/Data';
import FramerMotion from '../FramerMotion';
import ContributorCard from './ContributorCard';
import './Contributors.css';

export default function Contributors() {
  return (
    <section className="contributors" id="contributors">
      <div className="contributors__header">
        <FramerMotion delay={0.1}>
          <h2 className="contributors__title">{contributorsData.title}</h2>
        </FramerMotion>
        <FramerMotion delay={0.2}>
          <p className="contributors__description">
            {contributorsData.description}
          </p>
        </FramerMotion>
      </div>

      <div className="contributors__grid">
        {contributorsData.contributors.map((contributor, index) => (
          <FramerMotion key={index} delay={index * 0.15}>
            <ContributorCard
              name={contributor.name}
              role={contributor.role}
              image={contributor.image}
            />
          </FramerMotion>
        ))}
      </div>
    </section>
  );
}
