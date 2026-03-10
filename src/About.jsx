import Navbar from './components/Navbar/Navbar';
import AboutHero from './components/About/AboutHero';
import BreakThePattern from './components/About/BreakThePattern';
import WhatHappening from './components/WhatHappening/WhatHappening';
import Footer from './components/Footer/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <BreakThePattern />
        <WhatHappening />
      </main>
        <Footer />
    </>
  );
}
