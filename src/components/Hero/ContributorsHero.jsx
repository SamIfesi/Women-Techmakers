import { contributorsHero } from '../Data/ContributorData';
import SectionHero from './SectionHero';

export default function ContributorsHero() {
  return (
    <SectionHero
      eyebrow={contributorsHero.eyebrow}
      titleLine1={contributorsHero.titleLine1}
      titleLine2={contributorsHero.titleLine2}
      subtitle={contributorsHero.subtitle}
      stats={contributorsHero.stat}
      sectionId="contributors-hero-heading"
    />
  );
}
