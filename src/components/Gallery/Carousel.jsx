import { useState, useRef, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { CarouselImg } from '../Data/Carousel';
import './Carousel.css';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const scrollTimeout = useRef(null);
  const containerRef = useRef(null);
  const isScrolling = useRef(false);
  const touchStartX = useRef(null); // stores where the finger first touched

  const slideCount = CarouselImg.length;

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
    }, 800);
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

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 50) {
      // 50px swipe threshold
      paginate(diff > 0 ? 1 : -1);
    }

    touchStartX.current = null;
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

  // Auto-advance every 8 seconds
  useEffect(() => {
    const autoAdvanceTimer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 8000);

    return () => clearInterval(autoAdvanceTimer);
  }, [slideCount]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
    }),
    center: {
      zIndex: 1,
      x: 0,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
    }),
  };

  return (
    <div className="carousel" ref={containerRef}>
      <div
        className="carousel__container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction}>
          <Motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
            className="carousel__slide"
          >
            <img
              src={CarouselImg[currentIndex].img}
              alt={CarouselImg[currentIndex].alt}
              className="carousel__image"
            />
          </Motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
