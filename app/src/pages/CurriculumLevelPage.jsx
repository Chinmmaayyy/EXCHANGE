import { useState, useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Seo from "../components/Seo.jsx";
import PageHeader from "../components/PageHeader.jsx";
import CurriculumEnquiryModal from "../components/CurriculumEnquiryModal.jsx";
import { getLevelBySlug, curriculumLevels, ASSESSMENT_TYPES } from "../data/curriculum.js";
import { CompassIcon, EyeIcon, LayersIcon, BrainIcon, CrownIcon, TrophyIcon, ZapIcon, ArrowRightIcon, CheckIcon, SearchIcon, BookOpenIcon, ClockIcon, TargetIcon, ShieldCheckIcon, WhatsAppIcon, ChevronDownIcon } from "../components/Icons.jsx";
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

export default function CurriculumLevelPage() {
  const { slug } = useParams();
  const level = getLevelBySlug(slug);

  const [searchQuery, setSearchQuery] = useState("");
  const [completedModules, setCompletedModules] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!level) {
    return <Navigate to="/curriculum" replace />;
  }

  const Icon = LEVEL_ICONS[level.icon] || CompassIcon;
  const prevLevel = curriculumLevels.find((l) => l.levelNumber === level.levelNumber - 1);
  const nextLevel = curriculumLevels.find((l) => l.levelNumber === level.levelNumber + 1);

  const filteredModules = useMemo(() => {
    if (!searchQuery.trim()) return level.modules;
    const query = searchQuery.toLowerCase();
    return level.modules.filter(
      (m) => m.title.toLowerCase().includes(query) || m.desc.toLowerCase().includes(query) || m.order.toString() === query
    );
  }, [level.modules, searchQuery]);

  const toggleModule = (id) => {
    setCompletedModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(completedModules).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / level.modules.length) * 100);

  return (
    <>
      <Seo
        title={`Level ${level.levelNumber}: ${level.title} — ${level.subtitle} | Exchange Chess Academy`}
        description={`${level.purpose} View the complete ${level.modules.length}-module syllabus, developed skills, and completion outcome for Level ${level.levelNumber}.`}
        path={`/curriculum/${level.slug}`}
      />

      <PageHeader
        eyebrow={`Level 0${level.levelNumber} · ${level.conceptIdentity}`}
        title={`${level.title}: ${level.subtitle}`}
        lede={level.purpose}
        crumb={`Curriculum / Level ${level.levelNumber}`}
      />

      {/* Prev / Next Level Navigation Bar */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: 24 }}>
        <div className="container">
          <div className="level-nav-bar">
            {prevLevel ? (
              <Link to={`/curriculum/${prevLevel.slug}`} className="level-nav-btn level-nav-btn--prev">
                <span className="level-nav-btn__sub">← Previous Level</span>
                <strong className="level-nav-btn__title">Level 0{prevLevel.levelNumber}: {prevLevel.title}</strong>
              </Link>
            ) : (
              <div />
            )}
            <Link to="/curriculum" className="level-nav-btn level-nav-btn--all">
              <span>View All 7 Levels</span>
            </Link>
            {nextLevel ? (
              <Link to={`/curriculum/${nextLevel.slug}`} className="level-nav-btn level-nav-btn--next">
                <span className="level-nav-btn__sub">Next Level →</span>
                <strong className="level-nav-btn__title">Level 0{nextLevel.levelNumber}: {nextLevel.title}</strong>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Level Overview Grid */}
      <section className="section section--alt">
        <div className="container">
          <div className="level-overview-grid">
            <Reveal className="level-overview-card">
              <div className="level-overview-card__header">
                <div className="level-overview-icon" style={{ background: "var(--navy-900)", color: "var(--gold-400)" }}>
                  <Icon size={28} />
                </div>
                <div>
                  <span className="eyebrow" style={{ marginBottom: 2 }}>Target Student Profile</span>
                  <h3>Who This Level Is Ideal For</h3>
                </div>
              </div>
              <p className="level-overview-card__text">{level.targetStudent}</p>

              <div className="level-meta-row" style={{ marginTop: 24 }}>
                <div className="level-meta-pill">
                  <ClockIcon size={16} />
                  <span>Duration: <strong>{level.estimatedDuration}</strong></span>
                </div>
                <div className="level-meta-pill">
                  <TargetIcon size={16} />
                  <span>Difficulty: <strong>{level.difficulty}</strong></span>
                </div>
                <div className="level-meta-pill">
                  <BookOpenIcon size={16} />
                  <span>Modules: <strong>{level.modules.length} Lessons</strong></span>
                </div>
              </div>
            </Reveal>

            <Reveal className="level-overview-card">
              <div className="level-overview-card__header">
                <div className="level-overview-icon" style={{ background: "var(--gold-100)", color: "var(--gold-600)" }}>
                  <ShieldCheckIcon size={28} />
                </div>
                <div>
                  <span className="eyebrow" style={{ marginBottom: 2 }}>Completion Outcome</span>
                  <h3>Skills &amp; Mastery Goal</h3>
                </div>
              </div>
              <p className="level-overview-card__text">
                <strong>{level.learningOutcome}</strong>
              </p>

              <div style={{ marginTop: 20 }}>
                <span className="level-card__label" style={{ display: "block", marginBottom: 8 }}>Key Skills Developed:</span>
                <div className="tag-row">
                  {level.skills.map((s) => (
                    <span key={s} className="tag">
                      <CheckIcon size={14} />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Interactive Module Syllabus Section */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Complete Module Catalog</p>
            <h2>Level 0{level.levelNumber} Detailed Syllabus ({level.modules.length} Modules)</h2>
            <p className="lede" style={{ marginInline: "auto", marginTop: 10 }}>
              Each module includes step-by-step concepts, tactical exercises, and practical assessment criteria. Use the search bar or checklist to track your learning progress.
            </p>
          </Reveal>

          {/* Interactive Progress Bar & Search Control */}
          <div className="module-controls-bar">
            <div className="module-search-box">
              <SearchIcon size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search among all ${level.modules.length} modules...`}
              />
              {searchQuery && (
                <button className="search-clear-btn" onClick={() => setSearchQuery("")}>
                  Clear
                </button>
              )}
            </div>

            <div className="module-progress-box">
              <div className="module-progress-text">
                <span>Progress Tracker:</span>
                <strong>{completedCount} / {level.modules.length} Modules ({progressPercent}%)</strong>
              </div>
              <div className="module-progress-bar">
                <div className="module-progress-fill" style={{ width: `${progressPercent}%` }} />
              </div>
            </div>
          </div>

          {/* Numbered Modules Grid */}
          <div className="modules-grid">
            {filteredModules.map((m) => {
              const isChecked = Boolean(completedModules[m.id]);

              return (
                <div key={m.id} className={`module-card ${isChecked ? "is-completed" : ""}`}>
                  <div className="module-card__header">
                    <button
                      type="button"
                      className={`module-checkbox ${isChecked ? "is-checked" : ""}`}
                      onClick={() => toggleModule(m.id)}
                      title={isChecked ? "Mark as uncompleted" : "Mark as completed"}
                      aria-label={`Mark module ${m.order} completed`}
                    >
                      {isChecked ? <CheckIcon size={14} /> : <span>{m.order}</span>}
                    </button>

                    <div className="module-card__title-wrap">
                      <span className="module-card__num">MODULE 0{m.order < 10 ? `0${m.order}` : m.order}</span>
                      <h4 className="module-card__title">{m.title}</h4>
                    </div>
                  </div>

                  <p className="module-card__desc">{m.desc}</p>

                  <div className="module-card__assessments">
                    <span className="assessment-badge" title="Concept explanation">Learn</span>
                    <span className="assessment-badge" title="Tactical Puzzles">Practice</span>
                    <span className="assessment-badge" title="Practical Play">Apply</span>
                    <span className="assessment-badge" title="Coach Review">Review</span>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredModules.length === 0 && (
            <div className="modules-empty-state">
              <p>No modules match your search query "{searchQuery}".</p>
              <button className="btn btn-outline" onClick={() => setSearchQuery("")}>
                Reset Search
              </button>
            </div>
          )}

          {/* Level Enrolment CTA */}
          <Reveal className="level-enrollment-cta">
            <div className="level-enrollment-cta__inner">
              <div>
                <span className="eyebrow" style={{ color: "var(--gold-400)", marginBottom: 6 }}>Ready to Begin?</span>
                <h2>Start Level 0{level.levelNumber}: {level.title}</h2>
                <p className="lede" style={{ color: "var(--neutral-100)", marginTop: 8 }}>
                  Book a free level assessment or enquire directly to enroll in home coaching or online coaching sessions for Level 0{level.levelNumber}.
                </p>
              </div>
              <div className="level-enrollment-cta__actions">
                <button
                  type="button"
                  className="btn btn-gold btn-lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span>Enquire for Level 0{level.levelNumber}</span>
                  <ArrowRightIcon size={18} />
                </button>
                <a
                  className="btn btn-whatsapp btn-lg"
                  href={waLink(`Hi Coach, I'd like to ask about enrolling in Level ${level.levelNumber} (${level.title} — ${level.subtitle}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={18} />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CurriculumEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedLevel={level}
      />
    </>
  );
}
