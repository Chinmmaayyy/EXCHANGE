import Reveal from "./Reveal.jsx";
import { CheckIcon, WhatsAppIcon, MonitorIcon } from "./Icons.jsx";
import { waLink } from "../data/content.js";

const points = [
  "Live one-to-one instruction",
  "Personalized lesson plans",
  "Game analysis and review",
  "Focused tactical training",
  "Flexible scheduling from anywhere",
];

export default function OnlineCoaching() {
  return (
    <section className="section section--alt" id="online-coaching">
      <div className="container split split--reverse">
        <Reveal>
          <div className="split__visual visual-panel visual-panel--screen">
            <div className="screen-mock" aria-hidden="true">
              <div className="screen-mock__bar">
                <span></span><span></span><span></span>
                <p className="screen-mock__title">Live 1-to-1 Session</p>
              </div>
              <div className="screen-mock__body">
                <svg viewBox="0 0 8 8" className="screen-mock__board" role="img" aria-label="Chess board">
                  {Array.from({ length: 64 }, (_, i) => {
                    const x = i % 8;
                    const y = Math.floor(i / 8);
                    const dark = (x + y) % 2 === 1;
                    return <rect key={i} x={x} y={y} width="1" height="1" fill={dark ? "#14294a" : "#f6ecce"} />;
                  })}
                </svg>
                <div className="screen-mock__side">
                  <span className="screen-mock__chip"><MonitorIcon size={15} />Screen share</span>
                  <span className="screen-mock__chip">Game analysis</span>
                  <span className="screen-mock__chip">Live coaching</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <p className="eyebrow">Online Chess Coaching</p>
          <h2>1-to-1 Online Chess Coaching</h2>
          <p className="lede" style={{ marginTop: 14 }}>
            Live, personalized online coaching for students who prefer to learn from the comfort of home
            — with the same individual attention as an in-person session.
          </p>
          <ul className="feature-list">
            {points.map((p) => (
              <li key={p}><CheckIcon size={19} />{p}</li>
            ))}
          </ul>
          <p style={{ marginTop: 22, fontWeight: 700, color: "var(--navy-900)" }}>
            ₹1,200 / hour for online coaching
          </p>
          <div className="split__ctas">
            <a
              className="btn btn-whatsapp btn-lg"
              href={waLink("Hi, I'd like to enquire about online chess coaching.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} />
              Enquire About Online Coaching
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
