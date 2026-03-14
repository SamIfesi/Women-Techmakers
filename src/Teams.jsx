import Navbar from './components/Navbar/Navbar';
import { teamHero } from './components/Data/TeamData';
import SectionHero from './components/Hero/SectionHero';
import Footer from './components/Footer/Footer';

export default function Teams() {
  return (
    <>
      <Navbar />
      <main>
        <SectionHero
          eyebrow={teamHero.eyebrow}
          titleLine1={teamHero.titleLine1}
          titleLine2={teamHero.titleLine2}
          subtitle={teamHero.subtitle}
          highlightLine2={true}
          stats={null}
          sectionId="team-hero-heading"
        />
      </main>
      <Footer />
    </>
  );
}
