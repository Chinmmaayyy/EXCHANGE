import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import {
  BuildingIcon,
  CheckIcon,
  WhatsAppIcon,
  ShieldCheckIcon,
  GraduationCapIcon,
  TargetIcon,
  BrainIcon,
  PuzzleIcon,
  BookOpenIcon,
  HandshakeIcon,
  AwardIcon,
} from "../components/Icons.jsx";
import {
  schoolsTaught,
  schoolProgramTypes,
  schoolProgramFormats,
  schoolProgramBenefits,
  formatSchoolWhatsAppMessage,
  waLink,
} from "../data/content.js";

const BENEFIT_ICONS = {
  target: TargetIcon,
  brain: BrainIcon,
  puzzle: PuzzleIcon,
  book: BookOpenIcon,
  handshake: HandshakeIcon,
  trophy: AwardIcon,
};

const initialForm = {
  schoolName: "",
  contactName: "",
  designation: "",
  phone: "",
  email: "",
  location: "",
  studentsCount: "",
  programType: schoolProgramTypes[0],
  frequency: "Weekly (1 Session / Week)",
  message: "",
};

export default function SchoolProgramsPage() {
  const { onOpenSchoolModal } = useOutletContext() || {};
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { schoolName, contactName, designation, phone, email, location } = form;

    if (!schoolName.trim() || !contactName.trim() || !designation.trim() || !phone.trim() || !email.trim() || !location.trim()) {
      setStatus("Please fill in all required fields marked with *.");
      return;
    }

    const waText = formatSchoolWhatsAppMessage(form);
    setStatus("Opening WhatsApp with your school enquiry proposal request...");
    window.open(waLink(waText), "_blank", "noopener");
    setTimeout(() => {
      setStatus("");
    }, 1200);
  }

  return (
    <>
      <Seo
        title="Chess Programs for Schools & Educational Institutions | Exchange Chess Academy"
        description="Partner with Exchange Chess Academy to introduce structured, engaging chess programs for schools in Mumbai. Taught by FIDE-rated coach Amar Ravindra More with 25+ years teaching experience."
        path="/school-programs"
      />

      <PageHeader
        eyebrow="Institutional Partnerships"
        title="Structured Chess Programs for Schools"
        lede="Partner with Exchange Chess Academy to introduce structured, engaging chess programs that help students develop concentration, strategic thinking, problem-solving, discipline, and decision-making skills."
        crumb="Schools"
      />

      {/* Credibility Strip */}
      <section className="school-trust-strip">
        <div className="container">
          <div className="school-trust-strip__inner">
            <div className="school-trust-strip__badge">
              <ShieldCheckIcon size={20} />
              <span>Designed for Schools. Structured for Students. Delivered by Experienced Chess Coaches.</span>
            </div>
            <div className="school-trust-strip__list">
              <span className="school-trust-strip__label">Experience at Leading Schools:</span>
              <div className="school-trust-strip__chips">
                {schoolsTaught.map((school) => (
                  <span key={school} className="school-trust-chip">
                    <GraduationCapIcon size={14} />
                    {school}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value for Schools / Benefits Section */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              <BrainIcon size={16} /> Educational Value
            </p>
            <h2>Why Introduce Chess at Your School?</h2>
            <p className="lede" style={{ marginInline: "auto", marginTop: 14 }}>
              Chess is more than a board game — it is an intellectual sport that enhances cognitive development, academic focus, and character building in young minds.
            </p>
          </Reveal>

          <div className="school-benefits-grid">
            {schoolProgramBenefits.map((b) => {
              const Icon = BENEFIT_ICONS[b.icon] || TargetIcon;
              return (
                <Reveal key={b.title} className="school-benefit-card">
                  <div className="school-benefit-card__icon">
                    <Icon size={24} />
                  </div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flexible Program Structure Section */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="split">
            <div className="split__copy">
              <p className="eyebrow">
                <BuildingIcon size={16} /> Flexible Offerings
              </p>
              <h2>Programs Tailored to Your Institution's Needs</h2>
              <p className="lede" style={{ marginTop: 14 }}>
                Flexible programs designed around your school's schedule, student strength, and educational requirements.
              </p>
              <p className="body-text" style={{ marginTop: 12 }}>
                Whether you wish to incorporate chess into your regular co-curricular timetable, offer it as an after-school academy, or establish a competitive school chess team, we provide a structured curriculum and expert coaching.
              </p>

              <div className="school-formats-list">
                <h3>Available Program Formats:</h3>
                <div className="school-formats-grid">
                  {schoolProgramFormats.map((fmt) => (
                    <div key={fmt} className="school-format-item">
                      <CheckIcon size={18} />
                      <span>{fmt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="school-proposal-notice">
                <p>
                  <strong>No one-size-fits-all pricing.</strong> Get a customized proposal designed around your institution's specific timetable and student count.
                </p>
                <button
                  className="btn btn-navy"
                  style={{ marginTop: 16 }}
                  onClick={() => onOpenSchoolModal && onOpenSchoolModal()}
                >
                  <BuildingIcon size={18} />
                  <span>Enquire About School Programs</span>
                </button>
              </div>
            </div>

            <div className="split__visual">
              <div className="school-classroom-card">
                <div className="school-classroom-card__img-frame">
                  <img
                    src="/gallery/coaching/coaching-03.webp"
                    alt="Chess session at Euro School Airoli with FIDE rated coach Amar Ravindra More"
                    loading="lazy"
                    className="school-classroom-card__img"
                  />
                  <div className="school-classroom-card__overlay">
                    <span className="school-classroom-card__tag">Real School Classroom Session</span>
                    <p>FIDE Rated Coach Amar Ravindra More guiding students at Euro School, Airoli.</p>
                  </div>
                </div>
                <div className="school-classroom-card__features">
                  <div className="school-mini-feature">
                    <strong>25+ Years</strong>
                    <span>School Teaching Experience</span>
                  </div>
                  <div className="school-mini-feature">
                    <strong>1,500+</strong>
                    <span>Students Taught</span>
                  </div>
                  <div className="school-mini-feature">
                    <strong>Structured</strong>
                    <span>Curriculum &amp; Progression</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Dedicated School Partnership Enquiry Form Section */}
      <section className="section" id="school-enquiry-form">
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              <BuildingIcon size={16} /> Direct School Inquiry
            </p>
            <h2>Request a School Partnership Proposal</h2>
            <p className="lede" style={{ marginInline: "auto", marginTop: 14 }}>
              Fill out the form below to receive a customized chess program proposal for your school or educational institution.
            </p>
          </Reveal>

          <Reveal className="school-form-card">
            <form onSubmit={handleSubmit} className="modal-form" noValidate>
              <div className="form-grid">
                <div className="form-field span-2">
                  <label htmlFor="pgSchoolName">School / Educational Institution Name *</label>
                  <input
                    id="pgSchoolName"
                    type="text"
                    required
                    placeholder="e.g. Sharda Mandir School / Euro School"
                    value={form.schoolName}
                    onChange={update("schoolName")}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="pgContactName">Contact Person Name *</label>
                  <input
                    id="pgContactName"
                    type="text"
                    required
                    placeholder="e.g. Mr. Sanjay Kulkarni"
                    value={form.contactName}
                    onChange={update("contactName")}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="pgDesignation">Designation *</label>
                  <input
                    id="pgDesignation"
                    type="text"
                    required
                    placeholder="e.g. Principal / Activity Coordinator"
                    value={form.designation}
                    onChange={update("designation")}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="pgPhone">Phone Number *</label>
                  <input
                    id="pgPhone"
                    type="tel"
                    required
                    placeholder="e.g. +91 98200 12345"
                    value={form.phone}
                    onChange={update("phone")}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="pgEmail">Email Address *</label>
                  <input
                    id="pgEmail"
                    type="email"
                    required
                    placeholder="e.g. principal@school.edu.in"
                    value={form.email}
                    onChange={update("email")}
                  />
                </div>

                <div className="form-field span-2">
                  <label htmlFor="pgLocation">School Location / Address *</label>
                  <input
                    id="pgLocation"
                    type="text"
                    required
                    placeholder="e.g. Bandra West, Mumbai"
                    value={form.location}
                    onChange={update("location")}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="pgStudents">Est. Number of Students</label>
                  <input
                    id="pgStudents"
                    type="text"
                    placeholder="e.g. 40–60 students"
                    value={form.studentsCount}
                    onChange={update("studentsCount")}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="pgProgramType">Preferred Program Type</label>
                  <select id="pgProgramType" value={form.programType} onChange={update("programType")}>
                    {schoolProgramTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-field span-2">
                  <label htmlFor="pgFrequency">Preferred Frequency / Schedule</label>
                  <input
                    id="pgFrequency"
                    type="text"
                    placeholder="e.g. 2 sessions per week, After-school 3:30–4:30 PM"
                    value={form.frequency}
                    onChange={update("frequency")}
                  />
                </div>

                <div className="form-field span-2">
                  <label htmlFor="pgMessage">Message / Additional Requirements</label>
                  <textarea
                    id="pgMessage"
                    rows="3"
                    placeholder="Provide any specific goals, grade levels, or schedule preferences for your school..."
                    value={form.message}
                    onChange={update("message")}
                  />
                </div>
              </div>

              <div className="modal-actions" style={{ marginTop: 24 }}>
                <button type="submit" className="btn btn-whatsapp btn-lg btn-block">
                  <WhatsAppIcon size={19} />
                  Request a School Proposal
                </button>
                {status && (
                  <p className="form-status" role="status" aria-live="polite">
                    {status}
                  </p>
                )}
                <p className="modal-note">
                  Submitting will open a pre-formatted message directly in WhatsApp to reach Coach Amar Ravindra More.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
