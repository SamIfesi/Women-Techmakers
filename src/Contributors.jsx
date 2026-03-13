import Navbar from './components/Navbar/Navbar';
import ContributorsHero from './components/Contributors/ContributorsHero';
import Footer from './components/Footer/Footer';

export default function ContributorsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContributorsHero />
      </main>
      <Footer />
    </>
  );
}
