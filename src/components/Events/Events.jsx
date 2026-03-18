import { eventsData } from '../Data/Data';
import FramerMotion from '../FramerMotion';
import EventCard from './EventCard';
import './Events.css';

export default function Events() {
  const { section, events } = eventsData;

  return (
    <section className="events" id="iwd2026">
      {/* Hero banner */}
      <div className="events__banner">
        <FramerMotion delay={0.1}>
          <h2 className="events__title">{section.title}</h2>
        </FramerMotion>
        <FramerMotion delay={0.2}>
          <p className="events__description">{section.description}</p>
        </FramerMotion>
      </div>

      {/* Event cards */}
      <div className="events__cards">
        {events.map((event, index) => (
          <FramerMotion key={index} delay={index * 0.15}>
            <EventCard
              title={event.title}
              type={event.type}
              speakers={event.speakers}
              panelists={event.panelists}
              location={event.location}
              date={event.date}
              time={event.time}
              link={event.link}
              image={event.image}
            />
          </FramerMotion>
        ))}
      </div>
    </section>
  );
}
