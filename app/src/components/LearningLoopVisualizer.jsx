import { LEARNING_LOOP } from "../data/curriculum.js";
import { BookOpenIcon, PuzzleIcon, BoardIcon, AwardIcon, ShieldCheckIcon, ArrowRightIcon } from "./Icons.jsx";

const LOOP_ICONS = {
  LEARN: BookOpenIcon,
  PRACTICE: PuzzleIcon,
  APPLY: BoardIcon,
  REVIEW: AwardIcon,
  ADVANCE: ShieldCheckIcon,
};

export default function LearningLoopVisualizer() {
  return (
    <div className="learning-loop-card">
      <div className="section-head center">
        <p className="eyebrow" style={{ justifyContent: "center" }}>Academy Assessment System</p>
        <h2>The 5-Stage Learning Loop</h2>
        <p className="lede" style={{ marginInline: "auto" }}>
          Every level is taught using a structured feedback loop that ensures complete mastery before a student advances to the next stage.
        </p>
      </div>

      <div className="learning-loop__grid">
        {LEARNING_LOOP.map((step, index) => {
          const Icon = LOOP_ICONS[step.stage] || BookOpenIcon;

          return (
            <div key={step.stage} className="learning-loop__item">
              <div className="learning-loop__step-num">0{index + 1}</div>
              <div className="learning-loop__icon">
                <Icon size={24} />
              </div>
              <h3 className="learning-loop__stage">{step.stage}</h3>
              <span className="learning-loop__tag">{step.tag}</span>
              <p className="learning-loop__desc">{step.desc}</p>
              {index < LEARNING_LOOP.length - 1 && (
                <div className="learning-loop__arrow" aria-hidden="true">
                  <ArrowRightIcon size={18} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
