import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { UserIcon, ArrowRightIcon } from "./Icons.jsx";

export default function CoachNetworkTeaser({ onOpenCoachModal }) {
  return (
    <section className="section section--coach-teaser">
      <div className="container">
        <Reveal className="coach-teaser-banner">
          <div className="coach-teaser-banner__content">
            <div className="coach-teaser-banner__badge">
              <UserIcon size={16} />
              <span>For Chess Trainers &amp; Instructors</span>
            </div>
            <h3>Are You a Passionate Chess Coach?</h3>
            <p>
              Exchange Chess Academy is building a network of dedicated freelance chess coaches for potential teaching collaborations based on student requirements and availability across Mumbai.
            </p>
          </div>
          <div className="coach-teaser-banner__ctas">
            <Link to="/coach-network" className="btn btn-gold btn-lg">
              <span>Join Our Coach Network</span>
              <ArrowRightIcon size={16} />
            </Link>
            <button
              className="btn btn-outline"
              onClick={() => onOpenCoachModal && onOpenCoachModal()}
            >
              <span>Connect as a Coach</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
