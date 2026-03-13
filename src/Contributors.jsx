import Navbar from './components/Navbar/Navbar';
import ContributorsHero from './components/Hero/ContributorsHero';
import ContributorsShowcase from './components/Contributors/ContributorsShowcase';
import Footer from './components/Footer/Footer';

export default function ContributorsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContributorsHero />
        <ContributorsShowcase />
      </main>
      <Footer />
    </>
  );
}
