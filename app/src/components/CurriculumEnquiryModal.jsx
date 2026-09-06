import { useState, useEffect } from "react";
import { CloseIcon, WhatsAppIcon, PhoneIcon, CheckIcon } from "./Icons.jsx";
import { curriculumLevels, formatLevelWhatsAppMessage } from "../data/curriculum.js";
import { waLink, PHONE_DISPLAY } from "../data/content.js";

export default function CurriculumEnquiryModal({ isOpen, onClose, selectedLevel }) {
  const [studentName, setStudentName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [levelId, setLevelId] = useState(selectedLevel?.id || curriculumLevels[0].id);
  const [experience, setExperience] = useState("");
  const [mode, setMode] = useState("Home Coaching");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (selectedLevel) {
      setLevelId(selectedLevel.id);
    }
  }, [selectedLevel]);

  if (!isOpen) return null;

  const currentLevelObj = curriculumLevels.find((l) => l.id === levelId) || selectedLevel || curriculumLevels[0];

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();

    const textLines = [
      `♟️ *Curriculum Level Enquiry — Exchange Chess Academy*`,
      ``,
      `🎯 *Target Level:* Level 0${currentLevelObj.levelNumber} — ${currentLevelObj.title} (${currentLevelObj.subtitle})`,
      `👤 *Student Name:* ${studentName.trim() || "Not specified"}`,
      `👨‍👩‍👧 *Parent/Contact Person:* ${contactName.trim() || "Not specified"}`,
      `📞 *Phone:* ${phone.trim() || "Not specified"}`,
      `📧 *Email:* ${email.trim() || "Not specified"}`,
      `🏠 *Preferred Mode:* ${mode}`,
      `♟️ *Current Experience:* ${experience.trim() || "Beginner / Fresh Start"}`,
    ];
    if (notes.trim()) {
      textLines.push(`💬 *Additional Notes:* ${notes.trim()}`);
    }

    const fullMessage = textLines.join("\n");
    window.open(waLink(fullMessage), "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="eyebrow" style={{ marginBottom: 4 }}>Level Enquiry</span>
            <h3>Level 0{currentLevelObj.levelNumber}: {currentLevelObj.title}</h3>
            <p className="modal-subtitle">{currentLevelObj.subtitle}</p>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <CloseIcon size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmitWhatsApp} className="modal-form">
          <div className="form-group">
            <label htmlFor="curriculumLevelSelect">Selected Level</label>
            <select
              id="curriculumLevelSelect"
              value={levelId}
              onChange={(e) => setLevelId(e.target.value)}
              className="form-control"
            >
              {curriculumLevels.map((lvl) => (
                <option key={lvl.id} value={lvl.id}>
                  Level 0{lvl.levelNumber}: {lvl.title} ({lvl.subtitle})
                </option>
              ))}
            </select>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label htmlFor="studentName">Student Name</label>
              <input
                type="text"
                id="studentName"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="e.g. Aarav Sharma"
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactName">Parent / Contact Person</label>
              <input
                type="text"
                id="contactName"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="e.g. Rajesh Sharma"
                required
                className="form-control"
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label htmlFor="phone">Phone / WhatsApp Number</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +91 98200 12345"
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. name@example.com"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label htmlFor="coachingMode">Preferred Coaching Format</label>
              <select
                id="coachingMode"
                value={mode}
                onChange={(e) => setMode(e.target.value)}
                className="form-control"
              >
                <option value="Home Coaching">Home Coaching (Mumbai)</option>
                <option value="Online Coaching">Online 1-to-1 Coaching</option>
                <option value="Small Group Coaching">Small Group (2-3 Students)</option>
                <option value="School Program">School Program</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="experience">Current Chess Level</label>
              <input
                type="text"
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="e.g. Absolute beginner / Knows piece moves"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="notes">Questions or Specific Requirements</label>
            <textarea
              id="notes"
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any specific questions about Level 0{currentLevelObj.levelNumber}..."
              className="form-control"
            />
          </div>

          <div className="modal-actions">
            <button type="submit" className="btn btn-whatsapp btn-lg btn-block">
              <WhatsAppIcon size={20} />
              <span>Enquire on WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
