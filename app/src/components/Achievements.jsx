import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { AwardIcon, StarIcon, GraduationCapIcon, ArrowRightIcon } from "./Icons.jsx";
import { achievements } from "../data/content.js";

const ICONS = { award: AwardIcon, star: StarIcon, graduation: GraduationCapIcon };

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <Reveal className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>Achievements &amp; Experience</p>
          <h2>Recognition &amp; Teaching Milestones</h2>
        </Reveal>
        <div className="achieve-grid">
          {achievements.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal className="achieve-card" key={item.title}>
                <div className="achieve-card__icon"><Icon size={22} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="teaser-cta" style={{ justifyContent: "center" }}>
          <Link className="btn btn-outline" to="/achievements">
            View Achievement Photos
            <ArrowRightIcon size={17} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
