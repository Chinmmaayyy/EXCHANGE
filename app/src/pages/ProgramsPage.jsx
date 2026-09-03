import { Fragment } from "react";
import { Link, useOutletContext } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Seo from "../components/Seo.jsx";
import { BoardIcon, TrendingUpIcon, AwardIcon, UserIcon, UsersIcon, CheckIcon, WhatsAppIcon, ArrowRightIcon, BuildingIcon } from "../components/Icons.jsx";
import { programs } from "../data/content.js";
import { waLink } from "../data/content.js";

const ICONS = {
  board: BoardIcon,
  trending: TrendingUpIcon,
  award: AwardIcon,
  user: UserIcon,
  users: UsersIcon,
};

const progressionSteps = [
  { icon: "board", title: "Chess Fundamentals", sub: "Rules, board vision & basic tactics" },
  { icon: "trending", title: "Intermediate Development", sub: "Tactics, openings & middlegame" },
  { icon: "award", title: "Advanced & Tournament", sub: "Strategy, calculation & competition" },
];

export default function ProgramsPage() {
  const { onOpenSchoolModal } = useOutletContext() || {};

  return (
    <>
      <Seo
        title="Chess Coaching Programs | Exchange Chess Academy"
        description="Chess Fundamentals, Intermediate Development, Advanced & Tournament Training, and School Programs — taught by FIDE-rated coach Amar Ravindra More in Mumbai."
        path="/programs"
      />
      <PageHeader
        eyebrow="Chess Coaching Programs"
        title="Structured Chess Coaching for Every Level"
        lede="Coaching is designed around each student's current level and goals, not a fixed one-size-fits-all curriculum — from a first introduction to the pieces through to tournament preparation."
        crumb="Programs"
      />

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>The Progression Path</p>
            <h2>How Students Typically Move Forward</h2>
            <p className="lede" style={{ marginInline: "auto", marginTop: 14 }}>
              Most students move through these three stages, though pacing is always adjusted to the
              individual — some spend longer at one stage, others move faster.
            </p>
          </Reveal>
          <Reveal className="progress-path">
            {progressionSteps.map((step, i) => {
              const Icon = ICONS[step.icon];
              return (
                <Fragment key={step.title}>
                  <div className="progress-path__step">
                    <div className="progress-path__icon"><Icon size={22} /></div>
                    <strong>{step.title}</strong>
                    <span>{step.sub}</span>
                  </div>
                  {i < progressionSteps.length - 1 && (
                    <span className="progress-path__arrow"><ArrowRightIcon size={22} /></span>
                  )}
                </Fragment>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {programs.map((p, i) => {
            const Icon = ICONS[p.icon];
            return (
              <Reveal
                as="article"
                key={p.slug}
                className="split"
                style={{ marginBottom: "clamp(56px, 8vw, 88px)" }}
              >
                <div>
                  <div className="program-card__icon"><Icon size={26} strokeWidth={1.8} /></div>
                  <p className="program-card__tag">{p.tag}</p>
                  <h2>{p.title}</h2>
                  <p className="lede" style={{ marginTop: 10 }}>{p.desc}</p>
                  <p style={{ marginTop: 16, fontWeight: 700, color: "var(--navy-800)" }}>{p.level}</p>
                </div>
                <div>
                  <ul className="feature-list">
                    {p.details.map((d) => (
                      <li key={d}><CheckIcon size={19} />{d}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}

          {/* B2B School Programs Callout Card */}
          <Reveal as="article" className="split school-program-callout-card">
            <div>
              <div className="program-card__icon" style={{ background: "linear-gradient(135deg, var(--gold-600), var(--gold-500))", color: "var(--navy-950)" }}>
                <BuildingIcon size={26} strokeWidth={1.8} />
              </div>
              <p className="program-card__tag" style={{ color: "var(--gold-600)" }}>Institutional B2B Offering</p>
              <h2>Chess Programs for Schools</h2>
              <p className="lede" style={{ marginTop: 10 }}>
                Structured chess curriculum, after-school activities, and chess clubs for educational institutions across Mumbai.
              </p>
              <p style={{ marginTop: 16, fontWeight: 700, color: "var(--navy-800)" }}>
                Best for: Schools, Principals &amp; Activity Coordinators
              </p>
            </div>
            <div>
              <ul className="feature-list">
                <li><CheckIcon size={19} />Customized to fit your school's schedule, grade levels &amp; batch size</li>
                <li><CheckIcon size={19} />Delivered by FIDE-rated Coach Amar Ravindra More (25+ years experience)</li>
                <li><CheckIcon size={19} />Improves focus, critical thinking, problem-solving &amp; sportsmanship</li>
                <li><CheckIcon size={19} />Clear progression roadmap and inter-school tournament opportunities</li>
              </ul>
              <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 12 }}>
                <Link to="/school-programs" className="btn btn-navy">
                  <span>Explore School Programs</span>
                  <ArrowRightIcon size={16} />
                </Link>
                <button
                  className="btn btn-outline"
                  onClick={() => onOpenSchoolModal && onOpenSchoolModal()}
                >
                  Request Proposal
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal className="post-cta" style={{ marginTop: 0 }}>
            <h2>Not Sure Which Program Fits?</h2>
            <p>Share your (or your child's) current level on WhatsApp, and the right starting point will be suggested directly.</p>
            <div className="post-cta__ctas">
              <a
                className="btn btn-whatsapp btn-lg"
                href={waLink("Hi, I'd like help choosing the right chess coaching program.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={18} />
                Ask on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

