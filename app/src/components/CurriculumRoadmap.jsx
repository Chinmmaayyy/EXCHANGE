import { CURRICULUM_PHILOSOPHY } from "../data/curriculum.js";
import { CompassIcon, EyeIcon, LayersIcon, BrainIcon, CrownIcon, TrophyIcon, ZapIcon, ArrowRightIcon } from "./Icons.jsx";

const LEVEL_ICONS = {
  compass: CompassIcon,
  eye: EyeIcon,
  layers: LayersIcon,
  brain: BrainIcon,
  crown: CrownIcon,
  trophy: TrophyIcon,
  zap: ZapIcon,
};

export default function CurriculumRoadmap({ activeLevelSlug, onSelectLevel }) {
  return (
    <div className="curriculum-roadmap-container">
      <div className="curriculum-roadmap__header">
        <span className="eyebrow">Transformation Journey</span>
        <h3>7 Levels from First Move to Independent Mastery</h3>
      </div>
      <div className="curriculum-roadmap">
        {CURRICULUM_PHILOSOPHY.map((step, index) => {
          const Icon = LEVEL_ICONS[step.icon] || CompassIcon;
          const slug = step.title.toLowerCase();
          const isActive = activeLevelSlug === slug;

          return (
            <div key={step.title} className="curriculum-roadmap__step-wrapper">
              <button
                type="button"
                className={`curriculum-roadmap__step ${isActive ? "is-active" : ""}`}
                onClick={() => onSelectLevel && onSelectLevel(slug)}
                title={`Jump to Level ${step.levelNumber}: ${step.title}`}
              >
                <div className="curriculum-roadmap__badge">0{step.levelNumber}</div>
                <div className="curriculum-roadmap__icon" style={{ color: step.color }}>
                  <Icon size={20} />
                </div>
                <div className="curriculum-roadmap__info">
                  <span className="curriculum-roadmap__title">{step.title}</span>
                  <span className="curriculum-roadmap__concept">{step.concept}</span>
                </div>
              </button>
              {index < CURRICULUM_PHILOSOPHY.length - 1 && (
                <div className="curriculum-roadmap__connector" aria-hidden="true">
                  <ArrowRightIcon size={16} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
