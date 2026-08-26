import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { PlusIcon } from "./Icons.jsx";
import { faqs } from "../data/content.js";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section" id="faq">
      <div className="container">
        <Reveal className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>Frequently Asked Questions</p>
          <h2>Common Questions About Chess Coaching</h2>
        </Reveal>
        <Reveal className="accordion">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`accordion-item${isOpen ? " is-open" : ""}`} key={item.q}>
                <button
                  className="accordion-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  {item.q}
                  <span className="accordion-trigger__icon"><PlusIcon /></span>
                </button>
                <div className="accordion-panel">
                  <div className="accordion-panel__inner">
                    <div className="accordion-panel__content">{item.a}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
