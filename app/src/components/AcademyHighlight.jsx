import { Link, useOutletContext } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { CalendarIcon, AwardIcon } from "./Icons.jsx";

export default function AcademyHighlight({ onOpenModal: propOnOpenModal }) {
  const context = useOutletContext();
  const onOpenModal = propOnOpenModal || context?.onOpenModal;

  return (
    <section className="section section--academy-highlight" id="academy-highlight">
      <div className="container split">
        <Reveal className="academy-copy">
          <p className="eyebrow">Welcome to Exchange Chess Academy</p>
          <h2 className="academy-title">
            From Fun Beginner Chess Classes to Advanced FIDE Coaching
          </h2>
          <p className="lede" style={{ marginTop: 16 }}>
            From a child&apos;s first move to FIDE tournament success, Exchange Chess Academy offers engaging,
            structured, and personalized chess coaching that builds confidence, strategic thinking, and lifelong skills.
          </p>

          <div className="academy-ctas">
            <button className="btn btn-primary btn-lg" onClick={onOpenModal}>
              <CalendarIcon size={19} />
              Book Skill Assessment
            </button>
            <Link className="academy-achieve-link" to="/achievements">
              <AwardIcon size={20} color="var(--gold-600)" />
              <span>Student Achievements</span>
            </Link>
          </div>
        </Reveal>

        <Reveal className="academy-visual-wrap">
          <div className="academy-card">
            <div className="academy-card__bg-pattern" aria-hidden="true"></div>
            <img
              className="academy-card__img"
              src="/assets/hero-coach.webp"
              alt="FIDE-rated chess coach Amar Ravindra More guiding students"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
