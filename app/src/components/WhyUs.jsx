import Reveal from "./Reveal.jsx";
import { ClockIcon, AwardIcon, UserIcon, HomeIcon, MonitorIcon, UsersIcon, GraduationCapIcon, TrendingUpIcon } from "./Icons.jsx";
import { whyUs } from "../data/content.js";

const ICONS = {
  clock: ClockIcon,
  award: AwardIcon,
  user: UserIcon,
  home: HomeIcon,
  monitor: MonitorIcon,
  users: UsersIcon,
  graduation: GraduationCapIcon,
  trending: TrendingUpIcon,
};

export default function WhyUs() {
  return (
    <section className="section section--alt" id="why-us">
      <div className="container">
        <Reveal className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>Why Choose Exchange Chess Academy</p>
          <h2>A Coaching Approach Built on Experience</h2>
        </Reveal>
        <div className="why-grid">
          {whyUs.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal className="why-card" key={item.title}>
                <div className="why-card__icon"><Icon size={22} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
