import { Link } from "react-router-dom";
import { CompassIcon, EyeIcon, LayersIcon, BrainIcon, CrownIcon, TrophyIcon, ZapIcon, ArrowRightIcon, CheckIcon, ClockIcon, BookOpenIcon, TargetIcon, WhatsAppIcon } from "./Icons.jsx";
import { formatLevelWhatsAppMessage } from "../data/curriculum.js";
import { waLink } from "../data/content.js";

const LEVEL_ICONS = {
  compass: CompassIcon,
  eye: EyeIcon,
  layers: LayersIcon,
  brain: BrainIcon,
  crown: CrownIcon,
  trophy: TrophyIcon,
  zap: ZapIcon,
};

export default function CurriculumLevelCard({ level, onOpenEnquiry }) {
  const Icon = LEVEL_ICONS[level.icon] || CompassIcon;

  return (
    <article className="level-card" id={`level-${level.slug}`}>
      <div className="level-card__header">
        <div className="level-card__badge-row">
          <span className="level-card__number">LEVEL 0{level.levelNumber}</span>
          <span className="level-card__concept">{level.conceptIdentity}</span>
        </div>
        <div className="level-card__title-wrap">
          <div className="level-card__icon-box">
            <Icon size={24} strokeWidth={2} />
          </div>
          <div>
            <h3 className="level-card__title">{level.title}</h3>
            <p className="level-card__subtitle">{level.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="level-card__body">
        <p className="level-card__purpose">{level.purpose}</p>

        <div className="level-card__meta">
          <div className="level-card__meta-item">
            <BookOpenIcon size={16} />
            <span><strong>{level.modules.length}</strong> Modules</span>
          </div>
          <div className="level-card__meta-item">
            <ClockIcon size={16} />
            <span>{level.estimatedDuration}</span>
          </div>
          <div className="level-card__meta-item">
            <TargetIcon size={16} />
            <span>{level.difficulty}</span>
          </div>
        </div>

        <div className="level-card__skills">
          <span className="level-card__label">Skills Developed:</span>
          <div className="tag-row">
            {level.skills.map((skill) => (
              <span key={skill} className="tag tag--sm">
                <CheckIcon size={12} />
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="level-card__outcome">
          <strong>Completion Outcome:</strong>
          <p>{level.learningOutcome}</p>
        </div>
      </div>

      <div className="level-card__footer">
        <Link to={`/curriculum/${level.slug}`} className="btn btn-navy btn-block">
          <span>Explore Level Syllabus</span>
          <ArrowRightIcon size={16} />
        </Link>
        <button
          type="button"
          className="btn btn-outline btn-block"
          onClick={() => onOpenEnquiry && onOpenEnquiry(level)}
        >
          Enquire for Level 0{level.levelNumber}
        </button>
      </div>
    </article>
  );
}
