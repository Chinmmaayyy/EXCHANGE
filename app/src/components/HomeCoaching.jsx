import Reveal from "./Reveal.jsx";
import { CheckIcon, WhatsAppIcon } from "./Icons.jsx";
import { waLink } from "../data/content.js";

const points = [
  "Personalized, undivided attention",
  "Convenient sessions at your home",
  "Suitable for both children and adults",
  "Learning paced to the individual student",
  "Structured, progressive chess development",
];

export default function HomeCoaching() {
  return (
    <section className="section" id="home-coaching">
      <div className="container split">
        <Reveal>
          <p className="eyebrow">Home Chess Coaching</p>
          <h2>Learn Chess at Your Home</h2>
          <p className="lede" style={{ marginTop: 14 }}>
            Amar Ravindra More travels to your home for personalized chess coaching, anywhere across
            Mumbai — so students can learn comfortably in a familiar environment.
          </p>
          <ul className="feature-list">
            {points.map((p) => (
              <li key={p}><CheckIcon size={19} />{p}</li>
            ))}
          </ul>
          <div className="split__ctas">
            <a
              className="btn btn-whatsapp btn-lg"
              href={waLink("Hi, I'd like to check availability for home chess coaching in my area.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} />
              Check Availability
            </a>
          </div>
        </Reveal>
        <Reveal>
          <div className="split__visual visual-panel visual-panel--photo">
            <img
              src="/assets/home-coaching.jpg"
              alt="Amar Ravindra More coaching two students at a home chess session in Mumbai"
              loading="lazy"
              width="1024"
              height="572"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
