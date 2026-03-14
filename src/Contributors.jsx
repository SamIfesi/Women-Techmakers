import { contributor } from './components/Data/ContributorData';
import Navbar from './components/Navbar/Navbar';
import ContributorsHero from './components/Hero/ContributorsHero';
import ContributorsShowcase from './components/Contributors/ContributorsShowcase';
import Footer from './components/Footer/Footer';

export default function ContributorsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContributorsHero
          eyebrow={contributor.eyebrow}
          titleLine1={contributor.titleLine1}
          titleLine2={contributor.titleLine2}
          subtitle={contributor.subtitle}
          stats={contributor.stat}
          contributorsId="contributors-hero-heading"
        />
        <ContributorsShowcase />
      </main>
      <Footer />
    </>
  );
}
