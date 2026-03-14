import { spotlightNomination } from '../Data/SpotlightData';
import './SpotlightNomination.css';

export default function SpotlightNomination() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section
      className="spotlight-nomination"
      aria-labelledby="spotlight-nomination-heading"
    >
      <div className="spotlight-nomination__head">
        <img
          src={spotlightNomination.icon}
          alt=""
          aria-hidden="true"
          className="spotlight-nomination__icon"
        />
        <h2
          className="spotlight-nomination__title"
          id="spotlight-nomination-heading"
        >
          {spotlightNomination.title}
        </h2>
      </div>

      <p className="spotlight-nomination__intro">{spotlightNomination.intro}</p>

      <form
        className="spotlight-nomination__form"
        onSubmit={handleSubmit}
        noValidate
      >
        {spotlightNomination.fields.map((field) => (
          <div className="spotlight-nomination__field" key={field.id}>
            <label className="spotlight-nomination__label" htmlFor={field.id}>
              {field.label}
              {field.required ? ' *' : ''}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                className="spotlight-nomination__input spotlight-nomination__input--textarea"
                placeholder={field.placeholder}
                required={field.required}
              />
            ) : (
              <input
                id={field.id}
                type={field.type}
                className="spotlight-nomination__input"
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
          </div>
        ))}

        <button type="submit" className="spotlight-nomination__cta">
          {spotlightNomination.submitText}
        </button>

        <p className="spotlight-nomination__deadline">
          {spotlightNomination.deadlineText}
        </p>
      </form>
    </section>
  );
}
