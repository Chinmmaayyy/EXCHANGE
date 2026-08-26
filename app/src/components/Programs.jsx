import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { BoardIcon, TrendingUpIcon, AwardIcon, UserIcon, UsersIcon, ArrowRightIcon } from "./Icons.jsx";
import { programs } from "../data/content.js";

const ICONS = {
  board: BoardIcon,
  trending: TrendingUpIcon,
  award: AwardIcon,
  user: UserIcon,
  users: UsersIcon,
};

export default function Programs() {
  return (
    <section className="section section--alt" id="programs">
      <div className="container">
        <Reveal className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>Chess Coaching Programs</p>
          <h2>Structured Chess Coaching for Every Level</h2>
          <p className="lede" style={{ marginInline: "auto", marginTop: 14 }}>
            Coaching is designed around each student's current level and goals, not a fixed
            one-size-fits-all curriculum.
          </p>
        </Reveal>

        <div className="cards-grid">
          {programs.map((p) => {
            const Icon = ICONS[p.icon];
            return (
              <Reveal as="article" className="program-card" key={p.title}>
                <div className="program-card__icon">
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <p className="program-card__tag">{p.tag}</p>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <p className="program-card__level">{p.level}</p>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="teaser-cta" style={{ justifyContent: "center" }}>
          <Link className="btn btn-outline" to="/programs">
            View Full Program Details
            <ArrowRightIcon size={17} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
