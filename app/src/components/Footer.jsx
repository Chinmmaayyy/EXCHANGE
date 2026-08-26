import { Link } from "react-router-dom";
import { PhoneIcon, WhatsAppIcon, MapPinIcon } from "./Icons.jsx";
import { footerLinks, WHATSAPP_NUMBER, PHONE_DISPLAY } from "../data/content.js";
import { blogPosts } from "../data/blogPosts.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="footer-brand">
            <span className="footer-brand__badge">
              <img src="/assets/logo-mark.png" alt="" width="21" height="34" />
            </span>
            <span className="footer-brand__name">Exchange Chess Academy</span>
          </Link>
          <p className="footer-desc">
            Personalized 1-to-1 chess coaching in Mumbai — home and online — led by FIDE-rated coach
            Amar Ravindra More, with 25+ years of teaching experience.
          </p>
        </div>
        <div>
          <p className="footer-heading">Explore</p>
          <div className="footer-links">
            {footerLinks.map((l) => (
              <Link key={l.href} to={l.href}>{l.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-heading">Chess Coaching in Mumbai</p>
          <div className="footer-links">
            {blogPosts.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`}>{p.area}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-heading">Contact</p>
          <div className="footer-contact-item">
            <PhoneIcon size={18} />
            <a href={`tel:+${WHATSAPP_NUMBER}`}>{PHONE_DISPLAY}</a>
          </div>
          <div className="footer-contact-item">
            <WhatsAppIcon size={18} />
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">WhatsApp Enquiry</a>
          </div>
          <div className="footer-contact-item">
            <MapPinIcon size={18} />
            <span>Mumbai, Maharashtra</span>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Exchange Chess Academy. All rights reserved.</span>
        <span>Chess coaching in Mumbai — home &amp; online.</span>
      </div>
    </footer>
  );
}
