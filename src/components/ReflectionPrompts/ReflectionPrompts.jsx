import { reflectionPrompts } from '../Data/Data';
import ReflectionPromptCard from './ReflectionPromptCard';
import './ReflectionPrompts.css';

export default function ReflectionPrompts() {
  return (
    <section className="reflection-prompts" id="reflection-prompts">
      <div className="reflection-prompts__header">
        <h2 className="reflection-prompts__heading">{reflectionPrompts.heading}</h2>
        <p className="reflection-prompts__subheading">{reflectionPrompts.subheading}</p>
      </div>

      <div className="reflection-prompts__list">
        {reflectionPrompts.prompts.map((item) => (
          <ReflectionPromptCard
            key={item.number}
            number={item.number}
            question={item.question}
          />
        ))}
      </div>
    </section>
  );
}
