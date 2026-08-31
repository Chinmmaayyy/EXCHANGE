import { PhoneIcon, CalendarIcon } from "./Icons.jsx";
import { WHATSAPP_NUMBER } from "../data/content.js";

export default function StickyCta({ onOpenModal }) {
  return (
    <>
      <div className="sticky-cta-spacer"></div>
      <div className="sticky-cta" aria-label="Quick contact actions">
        <a className="btn btn-outline" href={`tel:+${WHATSAPP_NUMBER}`}>
          <PhoneIcon size={18} />
          <span>Call Coach</span>
        </a>
        <button className="btn btn-primary" onClick={onOpenModal}>
          <CalendarIcon size={18} />
          <span>Book Assessment</span>
        </button>
      </div>
    </>
  );
}
