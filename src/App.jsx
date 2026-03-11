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
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FramerMotion>
          <About />
        </FramerMotion>
        <FramerMotion delay={0.2}>
          <Chapters />
        </FramerMotion>
        <FramerMotion delay={0.4}>
          <Contributors />
        </FramerMotion>
        <FramerMotion delay={0.6}>
          <Events />
        </FramerMotion>
        <FramerMotion delay={0.8}>
          <Waitlist />
        </FramerMotion>
      </main>
      <Footer />
    </>
  );
}