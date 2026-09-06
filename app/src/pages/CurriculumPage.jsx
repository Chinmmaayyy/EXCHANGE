import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Seo from "../components/Seo.jsx";
import CurriculumRoadmap from "../components/CurriculumRoadmap.jsx";
import CurriculumLevelCard from "../components/CurriculumLevelCard.jsx";
import LearningLoopVisualizer from "../components/LearningLoopVisualizer.jsx";
import CurriculumEnquiryModal from "../components/CurriculumEnquiryModal.jsx";
import { curriculumLevels, getTotalModuleCount } from "../data/curriculum.js";
import { WhatsAppIcon, CheckIcon, AwardIcon, ShieldCheckIcon, TargetIcon, ArrowRightIcon } from "../components/Icons.jsx";
import { waLink } from "../data/content.js";

export default function CurriculumPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [modalLevel, setModalLevel] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalModules = getTotalModuleCount();

  const handleOpenEnquiry = (level) => {
    setModalLevel(level);
    setIsModalOpen(true);
  };

  const filteredLevels = curriculumLevels.filter((lvl) => {
    if (selectedFilter === "beginner") return lvl.levelNumber <= 2;
    if (selectedFilter === "intermediate") return lvl.levelNumber >= 3 && lvl.levelNumber <= 4;
    if (selectedFilter === "advanced") return lvl.levelNumber >= 5;
    return true;
  });

  const handleRoadmapSelect = (slug) => {
    const el = document.getElementById(`level-${slug}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Seo
        title="7-Level Chess Curriculum & Syllabus | Exchange Chess Academy"
        description="A complete learning journey from your first move to independent competitive mastery. 7 Levels, 169 structured modules, and a 5-stage assessment framework."
        path="/curriculum"
      />

      <PageHeader
        eyebrow="Flagship Academy Syllabus"
        title="A Complete Journey from Your First Move to Independent Mastery"
        lede="Explore our original, academically-structured 7-level chess curriculum. Designed for serious students, each level represents a distinct stage in how a chess player thinks, sees, and plays."
        crumb="Curriculum"
      />

      {/* Stats Quick Ribbon */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: "clamp(32px, 4vw, 48px)" }}>
        <div className="container">
          <div className="curriculum-stats-ribbon">
            <div className="curriculum-stat-item">
              <strong>7 Distinct Levels</strong>
              <span>DISCOVER → EVOLVE</span>
            </div>
            <div className="curriculum-stat-item">
              <strong>{totalModules} Modules</strong>
              <span>Structured & Numbered</span>
            </div>
            <div className="curriculum-stat-item">
              <strong>5-Stage Methodology</strong>
              <span>LEARN → PRACTICE → APPLY → REVIEW → ADVANCE</span>
            </div>
            <div className="curriculum-stat-item">
              <strong>25+ Years Experience</strong>
              <span>FIDE Rated Master Coach</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Transformation Journey Roadmap */}
      <section className="section section--alt" style={{ paddingTop: "clamp(32px, 4vw, 48px)", paddingBottom: "clamp(48px, 6vw, 72px)" }}>
        <div className="container">
          <Reveal>
            <CurriculumRoadmap onSelectLevel={handleRoadmapSelect} />
          </Reveal>
        </div>
      </section>

      {/* Level Filter & Cards Grid */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Syllabus Breakdown</p>
            <h2>Explore the 7 Levels of Mastery</h2>
            <p className="lede" style={{ marginInline: "auto", marginTop: 12 }}>
              Select a stage below or filter by proficiency level to examine the target student profile, developed skills, and full module catalog.
            </p>

            <div className="curriculum-filter-bar">
              <button
                type="button"
                className={`filter-btn ${selectedFilter === "all" ? "is-active" : ""}`}
                onClick={() => setSelectedFilter("all")}
              >
                All 7 Levels
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedFilter === "beginner" ? "is-active" : ""}`}
                onClick={() => setSelectedFilter("beginner")}
              >
                Beginner (Levels 1-2)
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedFilter === "intermediate" ? "is-active" : ""}`}
                onClick={() => setSelectedFilter("intermediate")}
              >
                Intermediate (Levels 3-4)
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedFilter === "advanced" ? "is-active" : ""}`}
                onClick={() => setSelectedFilter("advanced")}
              >
                Advanced &amp; Competitive (Levels 5-7)
              </button>
            </div>
          </Reveal>

          <div className="curriculum-grid">
            {filteredLevels.map((lvl) => (
              <Reveal key={lvl.id}>
                <CurriculumLevelCard level={lvl} onOpenEnquiry={handleOpenEnquiry} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Stage Assessment Methodology */}
      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <LearningLoopVisualizer />
          </Reveal>
        </div>
      </section>

      {/* Curriculum Evaluation & Advisor Box */}
      <section className="section">
        <div className="container">
          <Reveal className="curriculum-advisor-box">
            <div className="curriculum-advisor-box__content">
              <span className="eyebrow">Personalized Level Assessment</span>
              <h2>Not Sure Which Level Suits Your Current Game?</h2>
              <p className="lede">
                Our coach conducts a complimentary 15-minute level evaluation to pinpoint your exact tactical, positional, and opening understanding before assigning a curriculum starting point.
              </p>
              <ul className="feature-list" style={{ marginTop: 20 }}>
                <li><CheckIcon size={18} />Evaluates tactical vision, board blunders, and calculation depth</li>
                <li><CheckIcon size={18} />Assesses opening repertoire and endgame principles</li>
                <li><CheckIcon size={18} />Provides a customized study roadmap tailored to your goals</li>
              </ul>
              <div className="curriculum-advisor-box__ctas">
                <button
                  type="button"
                  className="btn btn-gold btn-lg"
                  onClick={() => handleOpenEnquiry(curriculumLevels[0])}
                >
                  <span>Request Level Evaluation</span>
                  <ArrowRightIcon size={18} />
                </button>
                <a
                  className="btn btn-whatsapp btn-lg"
                  href={waLink("Hi Coach, I'd like to request a 15-minute chess level assessment to know which curriculum level fits me.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={18} />
                  <span>WhatsApp Coach Direct</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CurriculumEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedLevel={modalLevel}
      />
    </>
  );
}
