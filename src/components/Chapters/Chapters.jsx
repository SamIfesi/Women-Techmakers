import {Link} from 'react-router'
import { chapters } from '../Data/Data';
import ChapterCard from './ChapterCard';
import arrowRight from '/assets/icons/arrow-right.svg';
import './Chapters.css';

export default function Chapters() {
  return (
    <section className="chapters" id="chapters">
      <div className="chapters__grid">
        {chapters.map((chapter) => (
          <ChapterCard
            key={chapter.number}
            number={chapter.number}
            label={chapter.label}
            title={chapter.title}
            description={chapter.description}
          />
        ))}
      </div>
      <Link to="/About" className="chapters__link">
      Read the full story behind the book
      <img src={arrowRight} alt="Arrow pointing right" className="chapters__link-icon" />
      </Link>
    </section>
  );
}
