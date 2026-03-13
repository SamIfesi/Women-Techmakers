import Navbar from './components/Navbar/Navbar';
import StoryBehindBook from './components/Hero/AboutHero';
import EditorNote from './components/EditorNote/EditorNote';
import WhatsInside from './components/WhatsInside/WhatsInside';
import ReflectionPrompts from './components/ReflectionPrompts/ReflectionPrompts';
import BookDetails from './components/BookDetails/BookDetails';
import Footer from './components/Footer/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <StoryBehindBook />
        <EditorNote />
        <WhatsInside />
        <ReflectionPrompts />
        <BookDetails />
      </main>
      <Footer />
    </>
  );
}
