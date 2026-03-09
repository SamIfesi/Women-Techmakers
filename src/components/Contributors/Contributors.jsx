import { contributorsData } from '../Data/Data';
import ContributorCard from './ContributorCard';
import './Contributors.css';

export default function Contributors() {
  return (
    <section className="contributors" id="contributors">
      <div className="contributors__header">
        <h2 className="contributors__title">{contributorsData.title}</h2>
        <p className="contributors__description">{contributorsData.description}</p>
      </div>

      <div className="contributors__grid">
        {contributorsData.contributors.map((contributor, index) => (
          <ContributorCard
            key={index}
            name={contributor.name}
            role={contributor.role}
            image={contributor.image}
          />
        ))}
      </div>
    </section>
  );
}
