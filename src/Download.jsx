import Navbar from './components/Navbar/Navbar';
// import DownloadHero from './components/Hero/DownloadHero';
import BookShowcase from './components/Download/BookShowcase';
import Footer from './components/Footer/Footer';

export default function Download() {
  return (
    <>
      <Navbar />
      <main>
        {/* <DownloadHero /> */}
        <BookShowcase />
      </main>
      <Footer />
    </>
  );
}
