import { useOutletContext } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { CheckIcon, WhatsAppIcon, MonitorIcon, TrendingUpIcon, UsersIcon, CalendarIcon } from "./Icons.jsx";
import { waLink } from "../data/content.js";
import ChessPieceSvg from "./ChessPieceSvg.jsx";

const points = [
  "Live one-to-one instruction",
  "Personalized lesson plans",
  "Game analysis and review",
  "Focused tactical training",
  "Flexible scheduling from anywhere",
];

// Board position matching standard tournament opening (Reference layout)
const boardPieces = [
  // Black pieces (top rows)
  { type: "bR", x: 0, y: 0 }, { type: "bN", x: 1, y: 0 }, { type: "bB", x: 2, y: 0 }, { type: "bQ", x: 3, y: 0 },
  { type: "bK", x: 4, y: 0 }, { type: "bB", x: 5, y: 0 }, { type: "bN", x: 6, y: 0 }, { type: "bR", x: 7, y: 0 },
  { type: "bP", x: 0, y: 1 }, { type: "bP", x: 1, y: 1 }, { type: "bP", x: 2, y: 1 }, { type: "bP", x: 3, y: 2 },
  { type: "bP", x: 4, y: 3 }, { type: "bP", x: 5, y: 1 }, { type: "bP", x: 6, y: 1 }, { type: "bP", x: 7, y: 1 },

  // White pieces (bottom rows)
  { type: "wP", x: 0, y: 6 }, { type: "wP", x: 1, y: 6 }, { type: "wP", x: 2, y: 6 }, { type: "wP", x: 3, y: 6 },
  { type: "wP", x: 4, y: 4 }, { type: "wN", x: 5, y: 5 }, { type: "wP", x: 5, y: 6 }, { type: "wP", x: 6, y: 6 }, { type: "wP", x: 7, y: 6 },
  { type: "wR", x: 0, y: 7 }, { type: "wN", x: 1, y: 7 }, { type: "wB", x: 2, y: 7 }, { type: "wQ", x: 3, y: 7 },
  { type: "wK", x: 4, y: 7 }, { type: "wB", x: 5, y: 7 }, { type: "wR", x: 7, y: 7 },
];

export default function OnlineCoaching({ onOpenModal: propOnOpenModal }) {
  const context = useOutletContext();
  const onOpenModal = propOnOpenModal || context?.onOpenModal;

  return (
    <section className="section section--alt" id="online-coaching">
      <div className="container split split--reverse">
        <Reveal className="split__copy">
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

        <Reveal className="split__visual">
          <div className="visual-panel visual-panel--screen">
            <div className="screen-mock" aria-hidden="true">
              <div className="screen-mock__bar">
                <span></span><span></span><span></span>
                <p className="screen-mock__title">Live 1-to-1 Session</p>
              </div>
              <div className="screen-mock__body">
                <svg viewBox="0 0 8 8" className="screen-mock__board" role="img" aria-label="Chess board with active game session">
                  {/* Tournament Green & Cream Board */}
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
                        fill={dark ? "#35654d" : "#eeeed2"}
                      />
                    );
                  })}

                  {/* Render Staunton Vector Pieces */}
                  {boardPieces.map((piece, idx) => (
                    <ChessPieceSvg key={idx} type={piece.type} x={piece.x} y={piece.y} />
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
      </div>
    </section>
  );
}
