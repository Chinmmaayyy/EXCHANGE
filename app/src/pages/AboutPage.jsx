import Reveal from "../components/Reveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Seo from "../components/Seo.jsx";
import { GraduationCapIcon, UsersIcon, WhatsAppIcon, PhoneIcon, ShieldCheckIcon, AwardIcon } from "../components/Icons.jsx";
import { waLink, coachCredentials, schoolsTaught, WHATSAPP_NUMBER } from "../data/content.js";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About the Coach | Amar Ravindra More | Exchange Chess Academy"
        description="Amar Ravindra More is a FIDE-rated chess coach in Mumbai with 25+ years of teaching experience and 1,500+ students taught, including at Sharda Mandir School and Arya Vidya Mandir School."
        path="/about"
      />
      <PageHeader
        eyebrow="About the Coach"
        title="Amar Ravindra More"
        lede="Chess Coach, Exchange Chess Academy — FIDE-rated, with 25+ years of chess teaching experience across Mumbai."
        crumb="About"
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Meet Your Coach</p>
            <h2>25+ Years of Dedicated Chess Teaching</h2>
          </Reveal>

          <div className="about__grid">
            <Reveal>
              <div className="coach-photo">
                <img
                  className="coach-photo__img"
                  src="/assets/coach-portrait.jpg"
                  alt="Amar Ravindra More, chess coach at Exchange Chess Academy, Mumbai"
                  width="700"
                  height="911"
                />
                <div className="coach-photo__badge">FIDE ID 46637966 · Standard Rating 1603</div>
              </div>

              <div className="coach-badges">
                <span className="tag"><AwardIcon size={14} />FIDE Rated Player</span>
                <span className="tag"><ShieldCheckIcon size={14} />Verified Facts Only</span>
              </div>

              <div className="coach-mini-stats">
                <div className="coach-mini-stats__item">
                  <div className="coach-mini-stats__num">1603</div>
                  <div className="coach-mini-stats__label">Standard</div>
                </div>
                <div className="coach-mini-stats__item">
                  <div className="coach-mini-stats__num">25+</div>
                  <div className="coach-mini-stats__label">Years</div>
                </div>
                <div className="coach-mini-stats__item">
                  <div className="coach-mini-stats__num">1,500+</div>
                  <div className="coach-mini-stats__label">Students</div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="about__body">
                <p className="body-text">
                  Amar Ravindra More is a FIDE-rated chess coach based in Mumbai, with 25+ years of experience
                  and 1,500+ students taught across schools, home coaching and online sessions. His coaching
                  is built around patient, structured, one-to-one attention — helping every student progress
                  at a pace suited to them, whether they are picking up the pieces for the first time or
                  preparing seriously for tournament play.
                </p>
                <p className="body-text">
                  Over the years, he has taught chess at {schoolsTaught.join(", ")}, alongside personal 1-to-1
                  coaching, small group sessions and home visits across Mumbai.
                </p>
              </div>

              <div className="credentials-panel">
                <p className="eyebrow" style={{ marginBottom: 4 }}>Official Credentials</p>
                <h2 className="credentials-panel__title">Professional Profile &amp; FIDE Record</h2>
                <p className="credentials-panel__sub">Every field below is a verified, factual detail — nothing here is estimated.</p>
                <dl className="credentials-grid">
                  {coachCredentials.map((c) => (
                    <div className="credentials-grid__item" key={c.label}>
                      <dt>{c.label}</dt>
                      <dd>{c.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="approach-panel">
                <p className="approach-panel__title"><ShieldCheckIcon size={18} />Coaching Approach</p>
                <p>
                  Every student begins with an honest assessment of their current level. From there, coaching
                  is built around individual pace and goals — clear fundamentals first, then tactics, strategy
                  and calculation — rather than a fixed batch syllabus applied to everyone alike.
                </p>
                <div className="approach-panel__footer">
                  <div className="approach-panel__tags">
                    <span className="tag">Individual Pace</span>
                    <span className="tag">Strong Fundamentals</span>
                    <span className="tag">Home &amp; Online</span>
                  </div>
                  <div className="approach-panel__ctas">
                    <a
                      className="btn btn-whatsapp"
                      href={waLink("Hi, I'd like to know more about coaching with Amar Ravindra More.")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon size={17} />
                      WhatsApp
                    </a>
                    <a className="btn btn-outline" href={`tel:+${WHATSAPP_NUMBER}`}>
                      <PhoneIcon size={17} />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="about__facts">
                <div className="fact-card">
                  <GraduationCapIcon size={20} />
                  <div>
                    <div className="fact-card__label">Schools Taught</div>
                    <div className="fact-card__value">{schoolsTaught.length} schools across Mumbai</div>
                  </div>
                </div>
                <div className="fact-card">
                  <UsersIcon size={20} />
                  <div>
                    <div className="fact-card__label">Coaching Formats</div>
                    <div className="fact-card__value">1-to-1 · Small Groups · Home · Online</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal className="post-cta" style={{ marginTop: 0 }}>
            <h2>Ready to Start?</h2>
            <p>Reach out on WhatsApp to discuss your goals and find the right coaching plan.</p>
            <div className="post-cta__ctas">
              <a
                className="btn btn-whatsapp btn-lg"
                href={waLink("Hi, I'd like to know more about coaching with Amar Ravindra More.")}
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
    </>
  );
}
