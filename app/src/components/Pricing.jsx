import Reveal from "./Reveal.jsx";
import { WhatsAppIcon, CheckIcon, HomeIcon, MonitorIcon, UsersIcon } from "./Icons.jsx";
import { waLink, pricingPlans } from "../data/content.js";

const ICONS = { home: HomeIcon, monitor: MonitorIcon, users: UsersIcon };

export default function Pricing() {
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
                <a
                  className={`btn btn-block ${plan.featured ? "btn-whatsapp" : "btn-outline"}`}
                  href={waLink(plan.waText)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={17} />
                  {plan.cta}
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="pricing-note">
          Coaching plans can be tailored according to the student's level, requirements and schedule.
          Get in touch on WhatsApp to discuss what suits you best.
        </Reveal>
      </div>
    </section>
  );
}
