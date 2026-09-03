import { useState, useEffect } from "react";
import { WhatsAppIcon, CloseIcon, BuildingIcon } from "./Icons.jsx";
import { waLink, schoolProgramTypes, formatSchoolWhatsAppMessage } from "../data/content.js";

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

export default function SchoolEnquiryModal({ isOpen, onClose }) {
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
      onClose();
    }, 1000);
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal-content school-modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="school-modal-title"
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <CloseIcon size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-badge">
            <BuildingIcon size={16} />
            <span>Institutional &amp; School Partnership</span>
          </div>
          <h2 id="school-modal-title" style={{ marginTop: 8 }}>
            Enquire About School Programs
          </h2>
          <p className="modal-sub">
            Partner with Exchange Chess Academy. Fill out your institution's details below to request a customized proposal.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="modal-form" noValidate>
          <div className="form-grid">
            <div className="form-field span-2">
              <label htmlFor="smSchoolName">School / Educational Institution Name *</label>
              <input
                id="smSchoolName"
                type="text"
                required
                placeholder="e.g. St. Xavier's High School / Euro School"
                value={form.schoolName}
                onChange={update("schoolName")}
                autoFocus
              />
            </div>

            <div className="form-field">
              <label htmlFor="smContactName">Contact Person Name *</label>
              <input
                id="smContactName"
                type="text"
                required
                placeholder="e.g. Dr. Rajesh Mehta"
                value={form.contactName}
                onChange={update("contactName")}
              />
            </div>

            <div className="form-field">
              <label htmlFor="smDesignation">Designation *</label>
              <input
                id="smDesignation"
                type="text"
                required
                placeholder="e.g. Principal / Sports Coordinator"
                value={form.designation}
                onChange={update("designation")}
              />
            </div>

            <div className="form-field">
              <label htmlFor="smPhone">Phone Number *</label>
              <input
                id="smPhone"
                type="tel"
                required
                placeholder="e.g. +91 98200 12345"
                value={form.phone}
                onChange={update("phone")}
              />
            </div>

            <div className="form-field">
              <label htmlFor="smEmail">Email Address *</label>
              <input
                id="smEmail"
                type="email"
                required
                placeholder="e.g. principal@school.edu.in"
                value={form.email}
                onChange={update("email")}
              />
            </div>

            <div className="form-field span-2">
              <label htmlFor="smLocation">School Location / Address *</label>
              <input
                id="smLocation"
                type="text"
                required
                placeholder="e.g. Bandra West, Mumbai"
                value={form.location}
                onChange={update("location")}
              />
            </div>

            <div className="form-field">
              <label htmlFor="smStudents">Est. Interested Students</label>
              <input
                id="smStudents"
                type="text"
                placeholder="e.g. 30–50 students"
                value={form.studentsCount}
                onChange={update("studentsCount")}
              />
            </div>

            <div className="form-field">
              <label htmlFor="smProgramType">Preferred Program Type</label>
              <select id="smProgramType" value={form.programType} onChange={update("programType")}>
                {schoolProgramTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field span-2">
              <label htmlFor="smFrequency">Preferred Frequency / Schedule</label>
              <input
                id="smFrequency"
                type="text"
                placeholder="e.g. 2 sessions per week, After school 3:30–4:30 PM"
                value={form.frequency}
                onChange={update("frequency")}
              />
            </div>

            <div className="form-field span-2">
              <label htmlFor="smMessage">Message / Additional Requirements</label>
              <textarea
                id="smMessage"
                rows="2"
                placeholder="Any specific goals, target age group, or school requirements..."
                value={form.message}
                onChange={update("message")}
              />
            </div>
          </div>

          <div className="modal-actions" style={{ marginTop: 20 }}>
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
              Your inquiry will open directly in WhatsApp to connect with Coach Amar Ravindra More.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
