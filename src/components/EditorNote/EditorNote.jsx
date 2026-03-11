import { editorNote } from '../Data/Data';
import './EditorNote.css';

export default function EditorNote() {
  return (
    <section className="editor-note" aria-labelledby="editor-note-heading">
      <div className="editor-note__card">
        <span className="editor-note__open-quote" aria-hidden="true">
          &#8220;
        </span>
        <h2 className="editor-note__heading" id="editor-note-heading">
          {editorNote.title}
        </h2>
        <p className="editor-note__quote">{editorNote.quote}</p>
        <p className="editor-note__attribution">
          &mdash; {editorNote.author}, {editorNote.role}
        </p>
      </div>
    </section>
  );
}
