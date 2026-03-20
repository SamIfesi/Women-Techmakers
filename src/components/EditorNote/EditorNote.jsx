import FramerMotion from '../FramerMotion';
import { editorNote } from '../Data/AboutData';
import quote from '/assets/icons/quote.svg';
import './EditorNote.css';

export default function EditorNote() {
  return (
    <section className="editor-note" aria-labelledby="editor-note-heading">
      <FramerMotion className="editor-note__card" delay={0.2}>
        <span className="editor-note__open-quote" aria-hidden="true">
          <img src={quote} alt="" />
        </span>
        <h2 className="editor-note__heading" id="editor-note-heading">
          {editorNote.title}
        </h2>
        <p className="editor-note__quote">
          {editorNote.img && (
            <img
              src={editorNote.img}
              alt={editorNote.author}
              className="editor-note__author-img"
            />
          )}
          {editorNote.quote}
        </p>
        <p className="editor-note__attribution">
          &mdash; {editorNote.author}, {editorNote.role}
        </p>
      </FramerMotion>
    </section>
  );
}
