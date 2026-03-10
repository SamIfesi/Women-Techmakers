import Navbar from './components/Navbar/Navbar';
import AboutHero from './components/About/AboutHero';
import BreakThePattern from './components/About/BreakThePattern';

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <BreakThePattern />
      </main>
    </>
  );
}