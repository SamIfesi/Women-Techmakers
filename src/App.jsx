import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Chapters from './components/Chapters/Chapters';
import Contributors from './components/Contributors/Contributors';
import Events from './components/Events/Events';
import Waitlist from './components/Waitlist/Waitlist';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Chapters />
        <Contributors />
        <Events />
        <Waitlist />
      </main>
    </>
  );
}
