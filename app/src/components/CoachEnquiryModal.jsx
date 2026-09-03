import { useState, useEffect } from "react";
import { WhatsAppIcon, CloseIcon, UserIcon } from "./Icons.jsx";
import { waLink, coachCoachingTypes, formatCoachWhatsAppMessage } from "../data/content.js";

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

export default function CoachEnquiryModal({ isOpen, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

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
      onClose();
    }, 1000);
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal-content coach-modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="coach-modal-title"
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <CloseIcon size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-badge">
            <UserIcon size={16} />
            <span>Freelance Coaching Opportunities</span>
          </div>
          <h2 id="coach-modal-title" style={{ marginTop: 8 }}>
            Connect as a Chess Coach
          </h2>
          <p className="modal-sub">
            Join Exchange Chess Academy's network of freelance chess coaches. Submit your details below to explore coaching opportunities based on requirements and availability.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="modal-form" noValidate>
          <div className="form-grid">
            <div className="form-field span-2">
              <label htmlFor="cmName">Full Name *</label>
              <input
                id="cmName"
                type="text"
                required
                placeholder="e.g. Vikram Sharma"
                value={form.fullName}
                onChange={update("fullName")}
                autoFocus
              />
            </div>

            <div className="form-field">
              <label htmlFor="cmPhone">Phone Number *</label>
              <input
                id="cmPhone"
                type="tel"
                required
                placeholder="e.g. +91 98765 43210"
                value={form.phone}
                onChange={update("phone")}
              />
            </div>

            <div className="form-field">
              <label htmlFor="cmEmail">Email Address *</label>
              <input
                id="cmEmail"
                type="email"
                required
                placeholder="e.g. vikram.coach@gmail.com"
                value={form.email}
                onChange={update("email")}
              />
            </div>

            <div className="form-field span-2">
              <label htmlFor="cmLocation">Current Location / Area *</label>
              <input
                id="cmLocation"
                type="text"
                required
                placeholder="e.g. Andheri West, Mumbai"
                value={form.location}
                onChange={update("location")}
              />
            </div>

            <div className="form-field">
              <label htmlFor="cmChessExp">Chess Experience</label>
              <input
                id="cmChessExp"
                type="text"
                placeholder="e.g. Playing for 8 years, State player"
                value={form.chessExp}
                onChange={update("chessExp")}
              />
            </div>

            <div className="form-field">
              <label htmlFor="cmTeachingExp">Teaching Experience</label>
              <input
                id="cmTeachingExp"
                type="text"
                placeholder="e.g. 3 years home & school coaching"
                value={form.teachingExp}
                onChange={update("teachingExp")}
              />
            </div>

            <div className="form-field">
              <label htmlFor="cmRating">Chess Rating (Optional)</label>
              <input
                id="cmRating"
                type="text"
                placeholder="e.g. FIDE 1550 / Unrated"
                value={form.rating}
                onChange={update("rating")}
              />
            </div>

            <div className="form-field">
              <label htmlFor="cmCoachingType">Preferred Coaching Format</label>
              <select id="cmCoachingType" value={form.coachingType} onChange={update("coachingType")}>
                {coachCoachingTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field span-2">
              <label htmlFor="cmAvailability">Availability</label>
              <input
                id="cmAvailability"
                type="text"
                placeholder="e.g. Weekday evenings (5–8 PM), Weekend mornings"
                value={form.availability}
                onChange={update("availability")}
              />
            </div>

            <div className="form-field span-2">
              <label htmlFor="cmPreferredAreas">Preferred Teaching Areas in Mumbai</label>
              <input
                id="cmPreferredAreas"
                type="text"
                placeholder="e.g. Western Suburbs (Bandra to Borivali)"
                value={form.preferredAreas}
                onChange={update("preferredAreas")}
              />
            </div>

            <div className="form-field span-2">
              <label htmlFor="cmInfo">Additional Information (Optional)</label>
              <textarea
                id="cmInfo"
                rows="2"
                placeholder="Share any tournament achievements, teaching philosophy, or certifications..."
                value={form.additionalInfo}
                onChange={update("additionalInfo")}
              />
            </div>
          </div>

          <div className="modal-actions" style={{ marginTop: 20 }}>
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
              Submitting will open a formatted application message in WhatsApp to connect with Coach Amar Ravindra More.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
