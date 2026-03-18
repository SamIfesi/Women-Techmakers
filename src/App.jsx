import { useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Chapters from './components/Chapters/Chapters';
import Contributors from './components/Contributors/Contributors';
import Events from './components/Events/Events';
import Waitlist from './components/Waitlist/Waitlist';
import Footer from './components/Footer/Footer';

export default function App() {
  const waitlistRef = useRef(null);

  function handleJoinWaitlist(event) {
    event.preventDefault();
    waitlistRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero onJoinWaitlist={handleJoinWaitlist} />
        <About />
        <Chapters />
        <Contributors />
        <Events />
        <Waitlist waitlistRef={waitlistRef} />
      </main>
      <Footer />
    </>
  );
}
