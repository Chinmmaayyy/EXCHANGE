import { useOutletContext } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { ClockIcon, AwardIcon, HomeIcon, UsersIcon, ShieldCheckIcon, WhatsAppIcon, CalendarIcon, QuoteIcon } from "./Icons.jsx";
import { waLink } from "../data/content.js";

export default function Hero({ onOpenModal: propOnOpenModal }) {
  const context = useOutletContext();
  const onOpenModal = propOnOpenModal || context?.onOpenModal;

  return (
    <section className="hero" id="home">
      <div className="container hero__grid">
        <Reveal className="hero__copy">
          <p className="eyebrow">Exchange Chess Academy · Mumbai</p>
          <h1>Master Chess. Build Confidence. Think Ahead.</h1>
          <p className="lede">
            Personalized 1-to-1 chess coaching at your home or online, led by Amar Ravindra More — a
            FIDE-rated coach with 25+ years of chess teaching experience across Mumbai.
          </p>
          <div className="hero__ctas">
            <button className="btn btn-primary btn-lg" onClick={onOpenModal}>
              <CalendarIcon size={19} />
              Book Skill Assessment
            </button>
            <a
              className="btn btn-whatsapp btn-lg"
              href={waLink("Hi, I'd like to enquire about chess coaching sessions.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={19} />
              Enquire on WhatsApp
            </a>
          </div>
          <div className="hero__trust">
            <span className="hero__trust-item"><ClockIcon />25+ Years Teaching</span>
            <span className="hero__trust-item"><UsersIcon />1,500+ Students Taught</span>
            <span className="hero__trust-item"><AwardIcon />FIDE ID 46637966</span>
            <span className="hero__trust-item"><HomeIcon />Home &amp; Online Coaching</span>
          </div>
        </Reveal>

        <Reveal className="hero__art">
          <div className="hero__photo-frame">
            <img
              className="hero__photo"
              src="/assets/hero-teaching.webp"
              alt="A chess coach guiding a young student through a move during a 1-to-1 lesson"
              width="1100"
              height="825"
            />
            <div className="hero__quote-overlay">
              <QuoteIcon size={20} className="hero__quote-icon" />
              <p>
                &ldquo;Every student learns at their own pace. At Exchange Chess Academy, our structured coaching helps
                students build confidence, improve concentration, strengthen strategic thinking, and enjoy the game of chess in a positive learning environment.&rdquo;
              </p>
            </div>
          </div>

          <div className="hero__trust-card">
            <span className="hero__trust-card__icon"><ShieldCheckIcon size={20} /></span>
            <div>
              <strong>Verified, Factual Credentials</strong>
              <span>FIDE-Rated · 25+ Years · 1,500+ Students Taught</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
