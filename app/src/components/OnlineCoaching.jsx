import { useOutletContext } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { CheckIcon, WhatsAppIcon, MonitorIcon, TrendingUpIcon, UsersIcon, CalendarIcon } from "./Icons.jsx";
import { waLink } from "../data/content.js";

const points = [
  "Live one-to-one instruction",
  "Personalized lesson plans",
  "Game analysis and review",
  "Focused tactical training",
  "Flexible scheduling from anywhere",
];

// Sample tactical position pieces (high contrast SVG rendering)
const initialPosition = [
  // Black pieces (white crisp fill with dark stroke)
  { x: 4, y: 0, p: "♚", color: "#ffffff" },
  { x: 3, y: 0, p: "♛", color: "#ffffff" },
  { x: 2, y: 0, p: "♝", color: "#ffffff" },
  { x: 5, y: 2, p: "♞", color: "#ffffff" },
  { x: 0, y: 1, p: "♟", color: "#ffffff" },
  { x: 1, y: 1, p: "♟", color: "#ffffff" },
  { x: 2, y: 1, p: "♟", color: "#ffffff" },
  { x: 4, y: 3, p: "♟", color: "#ffffff" },
  { x: 6, y: 1, p: "♟", color: "#ffffff" },
  { x: 7, y: 1, p: "♟", color: "#ffffff" },

  // White pieces (bright gold fill with dark stroke)
  { x: 4, y: 7, p: "♔", color: "#ffd700" },
  { x: 3, y: 7, p: "♕", color: "#ffd700" },
  { x: 2, y: 4, p: "♗", color: "#ffd700" },
  { x: 5, y: 5, p: "♘", color: "#ffd700" },
  { x: 0, y: 6, p: "♙", color: "#ffd700" },
  { x: 1, y: 6, p: "♙", color: "#ffd700" },
  { x: 3, y: 4, p: "♙", color: "#ffd700" },
  { x: 4, y: 4, p: "♙", color: "#ffd700" },
  { x: 6, y: 6, p: "♙", color: "#ffd700" },
  { x: 7, y: 6, p: "♙", color: "#ffd700" },
];

export default function OnlineCoaching({ onOpenModal: propOnOpenModal }) {
  const context = useOutletContext();
  const onOpenModal = propOnOpenModal || context?.onOpenModal;

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
                <svg viewBox="0 0 8 8" className="screen-mock__board" role="img" aria-label="Chess board with active game session">
                  {Array.from({ length: 64 }, (_, i) => {
                    const x = i % 8;
                    const y = Math.floor(i / 8);
                    const dark = (x + y) % 2 === 1;
                    return (
                      <rect
                        key={i}
                        x={x}
                        y={y}
                        width="1"
                        height="1"
                        fill={dark ? "#14294a" : "#f6ecce"}
                      />
                    );
                  })}

                  {initialPosition.map((piece, idx) => (
                    <text
                      key={idx}
                      x={piece.x + 0.5}
                      y={piece.y + 0.82}
                      fontSize="0.82"
                      textAnchor="middle"
                      fill={piece.color}
                      stroke="#071426"
                      strokeWidth="0.02"
                      fontWeight="bold"
                      style={{ userSelect: "none", filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.5))" }}
                    >
                      {piece.p}
                    </text>
                  ))}
                </svg>
                <div className="screen-mock__side">
                  <span className="screen-mock__chip"><MonitorIcon size={15} />Screen share</span>
                  <span className="screen-mock__chip"><TrendingUpIcon size={15} />Game analysis</span>
                  <span className="screen-mock__chip"><UsersIcon size={15} />Live coaching</span>
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
            Pricing available on request
          </p>
          <div className="split__ctas">
            <button className="btn btn-primary btn-lg" onClick={() => onOpenModal && onOpenModal("Online Coaching")}>
              <CalendarIcon size={18} />
              Book Skill Assessment
            </button>
            <a
              className="btn btn-whatsapp btn-lg"
              href={waLink("Hi, I'd like to ask for the rate for online chess coaching.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} />
              Ask for Online Rate
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
