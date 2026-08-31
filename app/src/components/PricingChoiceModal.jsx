import { useEffect } from "react";
import { WhatsAppIcon, CloseIcon, CalendarIcon } from "./Icons.jsx";
import { waLink } from "../data/content.js";

export default function PricingChoiceModal({ plan, onClose, onSelectForm }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && plan) onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [plan, onClose]);

  if (!plan) return null;

  const handleWhatsApp = () => {
    window.open(waLink(plan.waText), "_blank", "noopener");
    onClose();
  };

  const handleFillForm = () => {
    onClose();
    onSelectForm(plan.name);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal-content pricing-choice-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="choice-title"
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <CloseIcon size={20} />
        </button>

        <div className="modal-header center" style={{ textAlign: "center" }}>
          <p className="eyebrow" style={{ justifyContent: "center" }}>{plan.name} &middot; {plan.price}</p>
          <h2 id="choice-title">How would you like to proceed?</h2>
          <p className="modal-sub">
            Choose your preferred way to reach out for {plan.name}.
          </p>
        </div>

        <div className="pricing-choice-grid">
          <button className="pricing-choice-card choice-form" onClick={handleFillForm}>
            <div className="pricing-choice-card__icon">
              <CalendarIcon size={26} />
            </div>
            <h3>Fill Enquiry Form</h3>
            <p>Complete a quick 30-second form on our website to request a coaching assessment slot.</p>
            <span className="btn btn-primary btn-block">Fill Form</span>
          </button>

          <button className="pricing-choice-card choice-whatsapp" onClick={handleWhatsApp}>
            <div className="pricing-choice-card__icon whatsapp-bg">
              <WhatsAppIcon size={26} />
            </div>
            <h3>Chat on WhatsApp</h3>
            <p>Connect directly with Coach Amar Ravindra More on WhatsApp for instant replies.</p>
            <span className="btn btn-whatsapp btn-block">WhatsApp Chat</span>
          </button>
        </div>
      </div>
    </div>
  );
}
