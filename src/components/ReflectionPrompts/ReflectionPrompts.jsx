import FramerMotion from '../FramerMotion';
import { reflectionPrompts } from '../Data/AboutData';
import ReflectionPromptCard from './ReflectionPromptCard';
import './ReflectionPrompts.css';

export default function ReflectionPrompts() {
  return (
    <section className="reflection-prompts" id="reflection-prompts">
      <div className="reflection-prompts__header">
        <FramerMotion delay={0.1}>
          <h2 className="reflection-prompts__heading">
            {reflectionPrompts.heading}
          </h2>
        </FramerMotion>
        <FramerMotion delay={0.2}>
          <p className="reflection-prompts__subheading">
            {reflectionPrompts.subheading}
          </p>
        </FramerMotion>
      </div>

      <div className="reflection-prompts__list">
        {reflectionPrompts.prompts.map((item, index) => (
          <FramerMotion key={item.number} delay={index * 0.15 + 0.1}>
            <ReflectionPromptCard
              number={item.number}
              question={item.question}
            />
          </FramerMotion>
        ))}
      </div>
    </section>
  );
}
