import { useState, useEffect } from "react";
import { WhatsAppIcon, CloseIcon, ShieldCheckIcon } from "./Icons.jsx";
import { waLink } from "../data/content.js";

const initialForm = {
  name: "",
  age: "",
  level: "Beginner",
  area: "",
  mode: "Home Coaching",
  timing: "",
  message: "",
};

export default function EnquiryModal({ isOpen, onClose, initialMode }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (initialMode) {
      setForm((f) => ({ ...f, mode: initialMode }));
    }
  }, [initialMode]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && isOpen) {
        handleDismiss();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

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

  function handleDismiss() {
    sessionStorage.setItem("modal_dismissed_at", Date.now().toString());
    onClose();
  }

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, age, level, area, mode, timing, message } = form;

    if (!name.trim() || !age.trim() || !level) {
      setStatus("Please enter your name, student age, and current level.");
      return;
    }

    const lines = [
      "🎯 *Chess Coaching Enquiry — Exchange Chess Academy*",
      "",
      `👤 *Parent / Student Name:* ${name.trim()}`,
      `👶 *Student Age:* ${age.trim()}`,
      `♟️ *Current Chess Level:* ${level}`,
      `🏠 *Coaching Format:* ${mode}`,
    ];
    if (area.trim()) lines.push(`📍 *Location / Area:* ${area.trim()}`);
    if (timing.trim()) lines.push(`⏰ *Preferred Timing:* ${timing.trim()}`);
    if (message.trim()) lines.push(`💬 *Message:* ${message.trim()}`);
    lines.push("");
    lines.push("Looking forward to connecting with Coach Amar Ravindra More!");

    setStatus("Opening WhatsApp with your enquiry...");
    sessionStorage.setItem("modal_dismissed_at", Date.now().toString());
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
    setTimeout(() => {
      setStatus("");
      onClose();
    }, 1000);
  }

  return (
    <div className="modal-backdrop" onClick={handleDismiss} role="presentation">
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          className="modal-close"
          onClick={handleDismiss}
          aria-label="Close modal"
        >
          <CloseIcon size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-badge">
            <ShieldCheckIcon size={16} />
            <span>FIDE Rated Coach &middot; 25+ Years Experience</span>
          </div>
          <h2 id="modal-title" style={{ marginTop: 8 }}>Book a Skill Assessment &amp; Enquiry</h2>
          <p className="modal-sub">
            Fill in your details below to send a formatted inquiry directly to FIDE-rated coach Amar Ravindra More on WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="modal-form" noValidate>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="mName">Parent / Student Name *</label>
              <input
                id="mName"
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={form.name}
                onChange={update("name")}
                autoFocus
              />
            </div>

            <div className="form-field">
              <label htmlFor="mAge">Student Age *</label>
              <input
                id="mAge"
                type="number"
                min="4"
                max="99"
                required
                inputMode="numeric"
                placeholder="e.g. 8"
                value={form.age}
                onChange={update("age")}
              />
            </div>

            <div className="form-field">
              <label htmlFor="mLevel">Current Chess Level *</label>
              <select id="mLevel" value={form.level} onChange={update("level")}>
                <option value="Beginner">Beginner (Rules &amp; basic moves)</option>
                <option value="Intermediate">Intermediate (Tactics &amp; openings)</option>
                <option value="Advanced / Tournament">Advanced / Tournament Prep</option>
                <option value="Not sure">Not sure yet</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="mArea">Area in Mumbai</label>
              <input
                id="mArea"
                type="text"
                placeholder="e.g. Bandra, Powai, Andheri..."
                value={form.area}
                onChange={update("area")}
              />
            </div>

            <div className="form-field span-2">
              <label>Preferred Coaching Format</label>
              <div className="radio-group">
                {["Home Coaching", "Online Coaching", "Small Group (2-3)"].map((opt) => (
                  <label key={opt} className="radio-pill">
                    <input
                      type="radio"
                      name="mMode"
                      value={opt}
                      checked={form.mode === opt}
                      onChange={update("mode")}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-field span-2">
              <label htmlFor="mTiming">Preferred Timing</label>
              <input
                id="mTiming"
                type="text"
                placeholder="e.g. Weekday evenings, Weekend mornings"
                value={form.timing}
                onChange={update("timing")}
              />
            </div>

            <div className="form-field span-2">
              <label htmlFor="mMessage">Message / Questions (optional)</label>
              <textarea
                id="mMessage"
                rows="2"
                placeholder="Any specific goals or questions for the coach..."
                value={form.message}
                onChange={update("message")}
              />
            </div>
          </div>

          <div className="modal-actions" style={{ marginTop: 20 }}>
            <button type="submit" className="btn btn-whatsapp btn-lg btn-block">
              <WhatsAppIcon size={19} />
              Send Formatted WhatsApp Enquiry
            </button>
            {status && <p className="form-status" role="status" aria-live="polite">{status}</p>}
            <p className="modal-note">Your enquiry will open directly in WhatsApp to message Coach Amar Ravindra More.</p>
          </div>
        </form>
      </div>
    </div>
  );
}
