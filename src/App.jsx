import { useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import FramerMotion from './components/FramerMotion';
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
        <FramerMotion delay={0.3}>
          <Hero onJoinWaitlist={handleJoinWaitlist} />
        </FramerMotion>
        <FramerMotion delay={0.6}>
          <About />
        </FramerMotion>
        <FramerMotion delay={0.8}>
          <Chapters />
        </FramerMotion>
        <FramerMotion delay={1}>
          <Contributors />
        </FramerMotion>
        <FramerMotion delay={0.3}>
          <Events />
        </FramerMotion>
        <FramerMotion delay={1.5}>
          <Waitlist waitlistRef={waitlistRef} />
        </FramerMotion>
      </main>
      <FramerMotion delay={1.5}>
        <Footer />
      </FramerMotion>
    </>
  );
}
