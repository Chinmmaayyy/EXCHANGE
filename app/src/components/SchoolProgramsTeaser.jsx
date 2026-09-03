import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { BuildingIcon, CheckIcon, ArrowRightIcon, GraduationCapIcon } from "./Icons.jsx";
import { schoolsTaught } from "../data/content.js";

export default function SchoolProgramsTeaser({ onOpenSchoolModal }) {
  return (
    <section className="section section--school-teaser">
      <div className="container">
        <Reveal className="split">
          <div className="split__copy">
            <p className="eyebrow">
              <BuildingIcon size={16} />
              Institutional Partnerships
            </p>
            <h2>Bring Structured Chess Programs to Your School</h2>
            <p className="lede" style={{ marginTop: 14 }}>
              Partner with Exchange Chess Academy to introduce structured, engaging chess programs that help students develop concentration, strategic thinking, problem-solving, discipline, and decision-making skills.
            </p>

            <ul className="feature-list" style={{ marginTop: 22 }}>
              <li>
                <CheckIcon size={19} />
                <span>Customized programs tailored to your school's timetable &amp; batch strength</span>
              </li>
              <li>
                <CheckIcon size={19} />
                <span>Conducted by FIDE-rated Coach Amar Ravindra More (25+ years experience)</span>
              </li>
              <li>
                <CheckIcon size={19} />
                <span>Covers after-school activities, weekly sessions, chess clubs &amp; tournaments</span>
              </li>
            </ul>

            <div className="teaser-cta" style={{ marginTop: 28 }}>
              <Link to="/school-programs" className="btn btn-navy">
                <span>Explore School Programs</span>
                <ArrowRightIcon size={16} />
              </Link>
              <button
                className="btn btn-outline"
                onClick={() => onOpenSchoolModal && onOpenSchoolModal()}
              >
                <span>Request a Proposal</span>
              </button>
            </div>
          </div>

          <div className="split__visual">
            <div className="school-teaser-card">
              <div className="school-teaser-card__image-wrap">
                <img
                  src="/gallery/coaching/coaching-02.webp"
                  alt="Chess coaching session at Euro School, Airoli with Coach Amar Ravindra More"
                  loading="lazy"
                  className="school-teaser-card__img"
                />
                <div className="school-teaser-card__badge">
                  <GraduationCapIcon size={16} />
                  <span>Trusted by Top Mumbai Schools</span>
                </div>
              </div>
              <div className="school-teaser-card__content">
                <p className="school-teaser-card__title">Proven School Coaching Record</p>
                <p className="school-teaser-card__sub">
                  Experience delivering structured chess curriculum at leading educational institutions across Mumbai:
                </p>
                <div className="school-teaser-card__tags">
                  {schoolsTaught.map((school) => (
                    <span key={school} className="school-chip">
                      <GraduationCapIcon size={14} />
                      {school}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
