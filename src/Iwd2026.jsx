import Navbar from './components/Navbar/Navbar';
import AboutHero from './components/Hero/IwdHero';
import BreakThePattern from './components/About/BreakThePattern';
import WhatHappening from './components/WhatHappening/WhatHappening';
import EventDetailCards from './components/Events/EventDetailCards';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <BreakThePattern />
        <WhatHappening />
        <EventDetailCards />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
