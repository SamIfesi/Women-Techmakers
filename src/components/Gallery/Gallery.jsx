import FramerMotion from '../FramerMotion';
import Carousel from './Carousel';
import './Gallery.css';

export default function Gallery() {
  return (
    <section className="gallery">
      <FramerMotion delay={0.2}>
        <h2 className="gallery__title">Photos from Past IWD Events</h2>
      </FramerMotion>
      <FramerMotion className="gallery__item" delay={0.3}>
        <Carousel />
      </FramerMotion>
    </section>
  );
}
