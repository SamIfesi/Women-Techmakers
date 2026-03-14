import Navbar from './components/Navbar/Navbar';
import { spotlightHero } from './components/Data/SpotlightData';
import SectionHero from './components/Hero/SectionHero';
import SpotlightAbout from './components/Spotlight/SpotlightAbout';
import Footer from './components/Footer/Footer';

export default function Spotlight() {
  return (
    <>
      <Navbar />
      <main>
        <SectionHero
          eyebrow={spotlightHero.eyebrow}
          titleLine1={spotlightHero.titleLine1}
          titleLine2Leading={spotlightHero.titleLine2Leading}
          titleLine2={spotlightHero.titleLine2}
          titleLine3={spotlightHero.titleLine3}
          subtitle={spotlightHero.subtitle}
          highlightLine2={true}
          stats={spotlightHero.stat}
          sectionId="spotlight-hero-heading"
        />
        <SpotlightAbout />
      </main>
      <Footer />
    </>
  );
}
