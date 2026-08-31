import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PhoneIcon, WhatsAppIcon, MenuIcon, CloseIcon } from "./Icons.jsx";
import { navLinks, mobileNavLinks, waLink, PHONE_DISPLAY } from "../data/content.js";

export default function Header({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);
    return () => document.body.classList.remove("nav-open");
  }, [navOpen]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setNavOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const closeNav = () => setNavOpen(false);

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container nav">
          <Link to="/" className="brand" aria-label="Exchange Chess Academy — home">
            <img className="brand__mark" src="/assets/logo-mark.webp" alt="" width="26" height="42" />
            <span className="brand__text">
              <span className="brand__name">Exchange Chess Academy</span>
              <span className="brand__sub">Chess Coaching · Mumbai</span>
            </span>
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {navLinks.map((l) => (
              <Link key={l.href} to={l.href}>{l.label}</Link>
            ))}
          </nav>

          <div className="nav__actions">
            <button className="btn btn-outline nav__enquire-btn" onClick={onOpenModal}>
              Enquire
            </button>
            <a
              className="btn btn-whatsapp"
              href={waLink("Hi, I'd like to know more about chess coaching at Exchange Chess Academy.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} />
              <span>WhatsApp</span>
            </a>
            <button
              className="nav__toggle"
              aria-label={navOpen ? "Close menu" : "Open menu"}
              aria-expanded={navOpen}
              aria-controls="mobileNav"
              onClick={() => setNavOpen((v) => !v)}
            >
              {navOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav${navOpen ? " is-open" : ""}`} id="mobileNav">
        <div className="mobile-nav__inner">
          {mobileNavLinks.map((l) => (
            <Link key={l.href} className="mobile-nav__link" to={l.href} onClick={closeNav}>
              {l.label}
            </Link>
          ))}
          <div className="mobile-nav__cta">
            <a
              className="btn btn-whatsapp btn-block btn-lg"
              href={waLink("Hi, I'd like to know more about chess coaching at Exchange Chess Academy.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeNav}
            >
              <WhatsAppIcon size={18} />
              Enquire on WhatsApp
            </a>
            <a className="btn btn-outline btn-block btn-lg" href="tel:+919892865594" onClick={closeNav}>
              <PhoneIcon size={18} />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
