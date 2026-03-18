import { Link } from 'react-router';
import FramerMotion from '../FramerMotion';
import { chapters } from '../Data/Data';
import ChapterCard from './ChapterCard';
import arrowRight from '/assets/icons/arrow-right.svg';
import './Chapters.css';

export default function Chapters() {
  return (
    <section className="chapters" id="chapters">
      <div className="chapters__grid">
        {chapters.map((chapter, index) => (
          <FramerMotion key={chapter.number} delay={index * 0.15}>
            <ChapterCard
              number={chapter.number}
              label={chapter.label}
              title={chapter.title}
              description={chapter.description}
            />
          </FramerMotion>
        ))}
      </div>
      <FramerMotion delay={0.2}>
        <Link to="/About" className="chapters__link">
          Read the full story behind the book
          <img
            src={arrowRight}
            alt="Arrow pointing right"
            className="chapters__link-icon"
          />
        </Link>
      </FramerMotion>
    </section>
  );
}
