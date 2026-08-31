import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { CheckIcon, HomeIcon, MonitorIcon, UsersIcon, CalendarIcon } from "./Icons.jsx";
import { pricingPlans } from "../data/content.js";
import PricingChoiceModal from "./PricingChoiceModal.jsx";

const ICONS = { home: HomeIcon, monitor: MonitorIcon, users: UsersIcon };

export default function Pricing({ onOpenModal: propOnOpenModal }) {
  const context = useOutletContext();
  const onOpenModal = propOnOpenModal || context?.onOpenModal;
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectForm = (planName) => {
    if (onOpenModal) {
      onOpenModal(planName);
    }
  };

  return (
    <section className="section" id="pricing">
      <div className="container">
        <Reveal className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>Pricing</p>
          <h2>Simple, Transparent Pricing</h2>
          <p className="lede" style={{ marginInline: "auto", marginTop: 14 }}>
            One clear hourly rate — no packages to commit to, no hidden charges.
          </p>
        </Reveal>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => {
            const Icon = ICONS[plan.icon];
            return (
              <Reveal
                className={`price-card${plan.featured ? " price-card--featured" : ""}`}
                key={plan.name}
              >
                {plan.featured && <span className="price-card__flag">Most Popular</span>}
                <span className="price-card__icon"><Icon size={22} /></span>
                <h3>{plan.name}</h3>
                <p className="price-card__desc">{plan.desc}</p>
                <p className="price-card__price">
                  {plan.price}
                  <span>{plan.unit}</span>
                </p>
                <ul className="price-card__features">
                  {plan.features.map((f) => (
                    <li key={f}><CheckIcon size={17} />{f}</li>
                  ))}
                </ul>
                <button
                  className={`btn btn-block ${plan.featured ? "btn-primary" : "btn-outline"}`}
                  onClick={() => setSelectedPlan(plan)}
                >
                  <CalendarIcon size={17} />
                  {plan.cta}
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="pricing-note">
          Coaching plans can be tailored according to the student&apos;s level, requirements and schedule.
          Get in touch on WhatsApp or fill in the enquiry form to discuss what suits you best.
        </Reveal>
      </div>

      <PricingChoiceModal
        plan={selectedPlan}
        onClose={() => setSelectedPlan(null)}
        onSelectForm={handleSelectForm}
      />
    </section>
  );
}
