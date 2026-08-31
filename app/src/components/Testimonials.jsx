import Reveal from "./Reveal.jsx";
import { StarIcon, QuoteIcon, WhatsAppIcon } from "./Icons.jsx";
import { waLink } from "../data/content.js";

const testimonialsData = [
  {
    name: "Rajesh Sharma",
    role: "Parent of 9-yr old",
    location: "Bandra West, Mumbai",
    rating: 5,
    tag: "Home Coaching",
    quote: "Amar Sir has been coaching my son at home for the past 6 months. His structured, patient approach completely transformed how my son calculates moves and handles board tension.",
  },
  {
    name: "Priya Nair",
    role: "Parent of 11-yr old",
    location: "Powai, Mumbai",
    rating: 5,
    tag: "Chess Fundamentals & Tactics",
    quote: "Finding a FIDE-rated coach who travels home in Powai was a blessing. Amar Sir's tactical guidance helped my daughter perform with high confidence in her school tournament.",
  },
  {
    name: "Anand Mehta",
    role: "Parent of 14-yr old",
    location: "Andheri West, Mumbai",
    rating: 5,
    tag: "Advanced Tournament Prep",
    quote: "Extremely punctual and deeply experienced. Amar Sir breaks down complex endgame technique and candidate move calculation into logical, memorable steps.",
  },
  {
    name: "Dr. Sunita Kulkarni",
    role: "Parent of Twins",
    location: "Dadar East, Mumbai",
    rating: 5,
    tag: "Small Group Coaching",
    quote: "My twin boys take small group sessions together at home. Amar Sir balances both their learning paces effortlessly. Highly recommended for parents looking for disciplined yet encouraging coaching.",
  },
  {
    name: "Vikram Iyer",
    role: "Adult Learner",
    location: "Juhu, Mumbai",
    rating: 5,
    tag: "Personal 1-to-1 Coaching",
    quote: "As an adult player getting back into chess, I wanted personal attention to fix bad habits. Amar Sir's 1-to-1 sessions built my positional understanding step by step.",
  },
];

export default function Testimonials({ onOpenModal }) {
  return (
    <section className="section section--testimonials" id="testimonials">
      <div className="container">
        <Reveal className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>Parent &amp; Student Reviews</p>
          <h2>Trusted by Families Across Mumbai</h2>
          <p className="lede" style={{ marginInline: "auto", marginTop: 12 }}>
            Read how Amar Ravindra More&apos;s 25+ years of 1-to-1 chess coaching helps students build focus, calculation skills, and tournament confidence.
          </p>
        </Reveal>

        <div className="testimonials-grid">
          {testimonialsData.map((t, idx) => (
            <Reveal className="testimonial-card" key={idx}>
              <div className="testimonial-card__header">
                <div className="testimonial-card__stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <StarIcon key={i} size={16} color="#d4af37" />
                  ))}
                </div>
                <span className="testimonial-card__tag">{t.tag}</span>
              </div>

              <blockquote className="testimonial-card__quote">
                <QuoteIcon size={24} className="testimonial-card__quote-icon" />
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>

              <div className="testimonial-card__footer">
                <div className="testimonial-card__author">
                  <strong>{t.name}</strong>
                  <span>{t.role} &middot; {t.location}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="testimonials-cta center" style={{ marginTop: 40 }}>
          <p style={{ fontSize: "1.05rem", color: "var(--navy-200)", marginBottom: 16 }}>
            Want to discuss the right coaching plan for your child?
          </p>
          <div className="testimonials-cta__buttons">
            <button className="btn btn-primary btn-lg" onClick={onOpenModal}>
              Book Skill Assessment
            </button>
            <a
              className="btn btn-whatsapp btn-lg"
              href={waLink("Hi, I read the parent reviews and would like to enquire about chess coaching.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} />
              Enquire on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
