import { WhatsAppIcon } from "./Icons.jsx";
import { waLink } from "../data/content.js";

export default function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={waLink("Hi, I'd like to enquire about chess coaching sessions.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
