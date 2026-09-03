import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import {
  UserIcon,
  WhatsAppIcon,
  ShieldCheckIcon,
  TargetIcon,
  BrainIcon,
  HomeIcon,
  ClockIcon,
  HandshakeIcon,
  ArrowRightIcon,
} from "../components/Icons.jsx";
import {
  coachCoachingTypes,
  coachEligibilityPoints,
  coachNetworkSteps,
  formatCoachWhatsAppMessage,
  waLink,
} from "../data/content.js";

const ELIGIBILITY_ICONS = {
  target: TargetIcon,
  brain: BrainIcon,
  user: UserIcon,
  home: HomeIcon,
  clock: ClockIcon,
  handshake: HandshakeIcon,
};

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  location: "",
  chessExp: "",
  teachingExp: "",
  rating: "",
  availability: "",
  coachingType: coachCoachingTypes[4], // Any Suitable Opportunity
  preferredAreas: "",
  additionalInfo: "",
};

export default function CoachNetworkPage() {
  const { onOpenCoachModal } = useOutletContext() || {};
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { fullName, phone, email, location } = form;

    if (!fullName.trim() || !phone.trim() || !email.trim() || !location.trim()) {
      setStatus("Please fill in all required fields marked with *.");
      return;
    }

    const waText = formatCoachWhatsAppMessage(form);
    setStatus("Opening WhatsApp with your freelance coach application...");
    window.open(waLink(waText), "_blank", "noopener");
    setTimeout(() => {
      setStatus("");
    }, 1200);
  }

  return (
    <>
      <Seo
        title="Join Our Freelance Chess Coach Network | Exchange Chess Academy"
        description="Are you passionate about teaching chess? Exchange Chess Academy is building a network of dedicated freelance chess coaches across Mumbai for potential coaching collaborations."
        path="/coach-network"
      />

      <PageHeader
        eyebrow="Coaching Network"
        title="Join Our Chess Coaching Network"
        lede="Are you passionate about teaching chess? Exchange Chess Academy is building a network of dedicated freelance chess coaches for potential coaching opportunities based on student and program requirements across Mumbai."
        crumb="Coach Network"
      />

      {/* Freelance Transparency Banner */}
      <section className="coach-transparency-strip">
        <div className="container">
          <div className="coach-transparency-strip__inner">
            <ShieldCheckIcon size={20} />
            <span>
              <strong>Freelance Coaching Network:</strong> Opportunities are offered on a freelance, project, or assignment basis aligned with student availability and location requirements across Mumbai.
            </span>
          </div>
        </div>
      </section>

      {/* Who Should Apply Section */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              <UserIcon size={16} /> Candidate Profile
            </p>
            <h2>Who We Look For</h2>
            <p className="lede" style={{ marginInline: "auto", marginTop: 14 }}>
              We welcome chess trainers, experienced players, and instructors who share a dedication to structured chess education and student growth.
            </p>
          </Reveal>

          <div className="school-benefits-grid">
            {coachEligibilityPoints.map((pt) => {
              const Icon = ELIGIBILITY_ICONS[pt.icon] || UserIcon;
              return (
                <Reveal key={pt.title} className="school-benefit-card">
                  <div className="school-benefit-card__icon">
                    <Icon size={24} />
                  </div>
                  <h3>{pt.title}</h3>
                  <p>{pt.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works (3-Step Process) */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              How It Works
            </p>
            <h2>Simple 3-Step Process</h2>
            <p className="lede" style={{ marginInline: "auto", marginTop: 14 }}>
              Connect with Exchange Chess Academy in three straightforward steps.
            </p>
          </Reveal>

          <div className="coach-steps-grid">
            {coachNetworkSteps.map((step, i) => (
              <Reveal key={step.step} className="coach-step-card">
                <span className="coach-step-card__num">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="coach-disclaimer-box" style={{ marginTop: 36 }}>
            <p>
              <strong>Please Note:</strong> Registration in our coaching network enables profile evaluation for potential freelance assignments. Assignments are shared based on active student demand, location convenience, and mutual schedule match.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Embedded Freelance Coach Application Form */}
      <section className="section" id="coach-application-form">
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              <UserIcon size={16} /> Coach Application
            </p>
            <h2>Apply to Join Our Network</h2>
            <p className="lede" style={{ marginInline: "auto", marginTop: 14 }}>
              Submit your background details below to register your interest for freelance chess coaching opportunities.
            </p>
          </Reveal>

          <Reveal className="school-form-card">
            <form onSubmit={handleSubmit} className="modal-form" noValidate>
              <div className="form-grid">
                <div className="form-field span-2">
                  <label htmlFor="pgCoachName">Full Name *</label>
                  <input
                    id="pgCoachName"
                    type="text"
                    required
                    placeholder="e.g. Vikram Sharma"
                    value={form.fullName}
                    onChange={update("fullName")}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="pgCoachPhone">Phone Number *</label>
                  <input
                    id="pgCoachPhone"
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={form.phone}
                    onChange={update("phone")}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="pgCoachEmail">Email Address *</label>
                  <input
                    id="pgCoachEmail"
                    type="email"
                    required
                    placeholder="e.g. vikram.coach@gmail.com"
                    value={form.email}
                    onChange={update("email")}
                  />
                </div>

                <div className="form-field span-2">
                  <label htmlFor="pgCoachLocation">Current Location / Area in Mumbai *</label>
                  <input
                    id="pgCoachLocation"
                    type="text"
                    required
                    placeholder="e.g. Andheri West, Mumbai"
                    value={form.location}
                    onChange={update("location")}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="pgChessExp">Chess Playing Background</label>
                  <input
                    id="pgChessExp"
                    type="text"
                    placeholder="e.g. 8 years competitive play, State player"
                    value={form.chessExp}
                    onChange={update("chessExp")}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="pgTeachingExp">Teaching / Coaching Experience</label>
                  <input
                    id="pgTeachingExp"
                    type="text"
                    placeholder="e.g. 2 years home coaching &amp; club instruction"
                    value={form.teachingExp}
                    onChange={update("teachingExp")}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="pgRating">Current Chess Rating (Optional)</label>
                  <input
                    id="pgRating"
                    type="text"
                    placeholder="e.g. FIDE 1600 / Unrated"
                    value={form.rating}
                    onChange={update("rating")}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="pgCoachingType">Preferred Coaching Format</label>
                  <select id="pgCoachingType" value={form.coachingType} onChange={update("coachingType")}>
                    {coachCoachingTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-field span-2">
                  <label htmlFor="pgAvailability">Weekly Availability</label>
                  <input
                    id="pgAvailability"
                    type="text"
                    placeholder="e.g. Weekday evenings (5–8 PM), Weekend mornings"
                    value={form.availability}
                    onChange={update("availability")}
                  />
                </div>

                <div className="form-field span-2">
                  <label htmlFor="pgPreferredAreas">Preferred Teaching Areas in Mumbai</label>
                  <input
                    id="pgPreferredAreas"
                    type="text"
                    placeholder="e.g. Bandra, Juhu, Khar, Andheri"
                    value={form.preferredAreas}
                    onChange={update("preferredAreas")}
                  />
                </div>

                <div className="form-field span-2">
                  <label htmlFor="pgInfo">Additional Information (Optional)</label>
                  <textarea
                    id="pgInfo"
                    rows="3"
                    placeholder="Provide any details about your coaching methodology, preferred student age groups, or achievements..."
                    value={form.additionalInfo}
                    onChange={update("additionalInfo")}
                  />
                </div>
              </div>

              <div className="modal-actions" style={{ marginTop: 24 }}>
                <button type="submit" className="btn btn-whatsapp btn-lg btn-block">
                  <WhatsAppIcon size={19} />
                  Connect as a Chess Coach
                </button>
                {status && (
                  <p className="form-status" role="status" aria-live="polite">
                    {status}
                  </p>
                )}
                <p className="modal-note">
                  Submitting will open a pre-formatted WhatsApp application directly to connect with Coach Amar Ravindra More.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
