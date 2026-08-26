import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { PhoneIcon, WhatsAppIcon, MapPinIcon, WalletIcon } from "./Icons.jsx";
import { WHATSAPP_NUMBER, PHONE_DISPLAY, GPAY_DISPLAY, waLink } from "../data/content.js";

const initialForm = {
  name: "",
  age: "",
  level: "",
  area: "",
  mode: "Home Coaching",
  timing: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, age, level, area, mode, timing, message } = form;

    if (!name.trim() || !age.trim() || !level) {
      setStatus("Please fill in your name, age and chess level.");
      return;
    }

    const lines = [
      "Hi, I'd like to enquire about chess coaching at Exchange Chess Academy.",
      "",
      `Name: ${name.trim()}`,
      `Age: ${age.trim()}`,
      `Chess Level: ${level}`,
      `Coaching Mode: ${mode}`,
    ];
    if (area.trim()) lines.push(`Preferred Area: ${area.trim()}`);
    if (timing.trim()) lines.push(`Preferred Timing: ${timing.trim()}`);
    if (message.trim()) lines.push(`Message: ${message.trim()}`);

    setStatus("Opening WhatsApp with your enquiry...");
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
  }

  return (
    <section className="section section--alt" id="contact">
      <div className="container">
        <Reveal className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>Contact</p>
          <h2>Book a Chess Coaching Session</h2>
          <p className="lede" style={{ marginInline: "auto", marginTop: 14 }}>
            Reach out on WhatsApp for the fastest response, or fill in the enquiry form and it will open
            directly in WhatsApp for you to send.
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <address className="contact-card">
              <h3>Amar Ravindra More</h3>
              <p className="contact-card__role">Exchange Chess Academy</p>

              <div className="contact-line">
                <PhoneIcon size={19} />
                <a href={`tel:+${WHATSAPP_NUMBER}`}>{PHONE_DISPLAY}</a>
              </div>
              <div className="contact-line">
                <WhatsAppIcon size={19} />
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp: {PHONE_DISPLAY}
                </a>
              </div>
              <div className="contact-line">
                <MapPinIcon size={19} />
                <span>Home coaching across Mumbai</span>
              </div>
              <div className="contact-line">
                <WalletIcon size={19} />
                <span>GPay: {GPAY_DISPLAY}</span>
              </div>

              <div className="contact-card__ctas">
                <a
                  className="btn btn-whatsapp btn-lg btn-block"
                  href={waLink("Hi, I'd like to book a chess coaching session.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={18} />
                  Enquire on WhatsApp
                </a>
                <a className="btn btn-outline btn-block" href={`tel:+${WHATSAPP_NUMBER}`}>
                  <PhoneIcon size={18} />
                  Call Now
                </a>
              </div>
            </address>
          </Reveal>

          <Reveal>
            <form className="form-card" onSubmit={handleSubmit} noValidate>
              <h3 style={{ marginBottom: 20 }}>Send an Enquiry</h3>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="fName">Parent / Student Name</label>
                  <input id="fName" name="name" type="text" required autoComplete="name" value={form.name} onChange={update("name")} />
                </div>
                <div className="form-field">
                  <label htmlFor="fAge">Age</label>
                  <input id="fAge" name="age" type="number" min="3" max="99" required inputMode="numeric" value={form.age} onChange={update("age")} />
                </div>
                <div className="form-field">
                  <label htmlFor="fLevel">Current Chess Level</label>
                  <select id="fLevel" name="level" required value={form.level} onChange={update("level")}>
                    <option value="" disabled>Select level</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced / Tournament</option>
                    <option>Not sure</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="fArea">Preferred Area (Mumbai)</label>
                  <input id="fArea" name="area" type="text" placeholder="e.g. Bandra, Andheri..." value={form.area} onChange={update("area")} />
                </div>
                <div className="form-field span-2">
                  <label>Home / Online Coaching</label>
                  <div className="radio-group">
                    {["Home Coaching", "Online Coaching", "Not sure"].map((opt) => (
                      <label className="radio-pill" key={opt}>
                        <input type="radio" name="mode" value={opt} checked={form.mode === opt} onChange={update("mode")} />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="form-field span-2">
                  <label htmlFor="fTiming">Preferred Timing</label>
                  <input id="fTiming" name="timing" type="text" placeholder="e.g. Weekday evenings" value={form.timing} onChange={update("timing")} />
                </div>
                <div className="form-field span-2">
                  <label htmlFor="fMessage">Message (optional)</label>
                  <textarea id="fMessage" name="message" rows="3" value={form.message} onChange={update("message")} />
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-whatsapp btn-lg btn-block">
                  <WhatsAppIcon size={18} />
                  Send Enquiry via WhatsApp
                </button>
                <p className="form-status" role="status" aria-live="polite">{status}</p>
                <p className="form-note">Your message opens in WhatsApp, ready to send directly to Amar Ravindra More.</p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
