import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import {
  ArrowRightIcon, AwardIcon, ShieldCheckIcon,
  GraduationCapIcon, UsersIcon, HomeIcon, MonitorIcon,
} from "./Icons.jsx";
import { schoolsTaught } from "../data/content.js";

const highlights = [
  { icon: GraduationCapIcon, title: "Taught in Mumbai schools", desc: "Sharda Mandir, Arya Vidya Mandir, Euro School and Universal School." },
  { icon: UsersIcon, title: "1-to-1 and small groups", desc: "Personal sessions, or small groups of 2–3 students." },
  { icon: HomeIcon, title: "Home coaching across Mumbai", desc: "The coach travels to the student's address." },
  { icon: MonitorIcon, title: "Live online coaching", desc: "The same individual attention, from home." },
];

export default function AboutTeaser() {
  return (
    <section className="section" id="about">
      <div className="container about__grid">
        <Reveal className="about__copy-col">
          <p className="eyebrow">About the Coach</p>
          <h2>Amar Ravindra More</h2>
          <p style={{ color: "var(--gold-600)", fontWeight: 700, marginTop: 6, marginBottom: 20 }}>
            Chess Coach, Exchange Chess Academy
          </p>

          <p className="body-text">
            A FIDE-rated chess coach based in Mumbai, with 25+ years of experience teaching chess to
            children and adults across {schoolsTaught.length} Mumbai schools, including Sharda Mandir
            School and Arya Vidya Mandir School. Coaching is built around patient, one-to-one attention at
            a pace suited to each student.
          </p>

          <ul className="about-highlights">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <li key={title}>
                <span className="about-highlights__icon"><Icon size={18} /></span>
                <div>
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="teaser-cta">
            <Link className="btn btn-outline" to="/about">
              Read Full Profile
              <ArrowRightIcon size={17} />
            </Link>
          </div>
        </Reveal>

        <Reveal className="about__photo-col">
          <div className="coach-photo">
            <img
              className="coach-photo__img"
              src="/assets/coach-portrait.webp"
              alt="Amar Ravindra More, chess coach at Exchange Chess Academy, Mumbai"
              width="720"
              height="900"
              loading="lazy"
            />
            <div className="coach-photo__badge">FIDE ID 46637966 · Standard Rating 1603</div>
          </div>

          <div className="coach-badges">
            <span className="tag"><AwardIcon size={14} />FIDE Rated Player</span>
            <span className="tag"><ShieldCheckIcon size={14} />Verified Facts Only</span>
          </div>

          <div className="coach-mini-stats">
            <div className="coach-mini-stats__item">
              <div className="coach-mini-stats__num">1603</div>
              <div className="coach-mini-stats__label">Standard</div>
            </div>
            <div className="coach-mini-stats__item">
              <div className="coach-mini-stats__num">25+</div>
              <div className="coach-mini-stats__label">Years</div>
            </div>
            <div className="coach-mini-stats__item">
              <div className="coach-mini-stats__num">1,500+</div>
              <div className="coach-mini-stats__label">Students</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
