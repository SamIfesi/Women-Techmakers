import { useState, useRef, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { Carosel } from '../Data/Carosel';
import './Carousel.css';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const scrollTimeout = useRef(null);
  const containerRef = useRef(null);
  const isScrolling = useRef(false);

  const slideCount = Carosel.length;

  const paginate = (newDirection) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) => (prevIndex + newDirection + slideCount) % slideCount
    );

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isScrolling.current = false;
    }, 3000);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const newDirection = e.deltaY > 0 ? 1 : -1;
    paginate(newDirection);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') paginate(1);
    if (e.key === 'ArrowLeft') paginate(-1);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
        window.removeEventListener('keydown', handleKeyDown);
      }
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [slideCount]);

  // Auto-advance every 3 seconds
  useEffect(() => {
    const autoAdvanceTimer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 3000);

    return () => clearInterval(autoAdvanceTimer);
  }, [slideCount]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
    }),
    center: {
      zIndex: 1,
      x: 0,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
    }),
  };

  return (
    <div className="carousel" ref={containerRef}>
      <div className="carousel__container">
        <Motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 8, type: 'tween' }}
          className="carousel__slide"
        >
          <img
            src={Carosel[currentIndex].img}
            alt={Carosel[currentIndex].alt}
            className="carousel__image"
          />
        </Motion.div>
      </div>
    </div>
  );
}
