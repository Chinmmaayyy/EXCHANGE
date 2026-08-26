import { PhoneIcon, WhatsAppIcon } from "./Icons.jsx";
import { WHATSAPP_NUMBER, waLink } from "../data/content.js";

export default function StickyCta() {
  return (
    <>
      <div className="sticky-cta-spacer"></div>
      <div className="sticky-cta">
        <a className="btn btn-outline" href={`tel:+${WHATSAPP_NUMBER}`}>
          <PhoneIcon size={18} />
          Call
        </a>
        <a
          className="btn btn-whatsapp"
          href={waLink("Hi, I'd like to enquire about chess coaching sessions.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={18} />
          WhatsApp
        </a>
      </div>
    </>
  );
}
