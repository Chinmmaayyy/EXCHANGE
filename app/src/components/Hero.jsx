import Reveal from "./Reveal.jsx";
import { ClockIcon, AwardIcon, HomeIcon, UsersIcon, ShieldCheckIcon, WhatsAppIcon, ArrowRightIcon } from "./Icons.jsx";
import { waLink } from "../data/content.js";

export default function Hero() {
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
            <a
              className="btn btn-whatsapp btn-lg"
              href={waLink("Hi, I'd like to enquire about chess coaching sessions.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={19} />
              Enquire on WhatsApp
            </a>
            <a className="btn btn-outline btn-lg" href="#programs">
              Explore Coaching
              <ArrowRightIcon size={17} />
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
              src="/assets/hero-coach.jpg"
              alt="Amar Ravindra More coaching a student at a school chess session in Mumbai"
              width="800"
              height="1000"
            />
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
