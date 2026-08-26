import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Seo from "../components/Seo.jsx";
import Lightbox from "../components/Lightbox.jsx";
import EditableCaption from "../components/EditableCaption.jsx";
import CaptionExportPanel from "../components/CaptionExportPanel.jsx";
import { AwardIcon, StarIcon, GraduationCapIcon, CameraIcon, WhatsAppIcon } from "../components/Icons.jsx";
import { achievements, achievementPhotos, waLink } from "../data/content.js";
import useCaptionEdits from "../hooks/useCaptionEdits.js";

const ICONS = { award: AwardIcon, star: StarIcon, graduation: GraduationCapIcon, camera: CameraIcon };

export default function AchievementsPage() {
  const [activeItem, setActiveItem] = useState(null);
  const { isEditMode, edits, updateField, getValue, clearAll } = useCaptionEdits();

  return (
    <>
      <Seo
        title="Achievements & Experience | Amar Ravindra More | Exchange Chess Academy"
        description="Chess achievements and teaching milestones for Amar Ravindra More — 3rd Prize, Entrants Chess Tournament 2008, Teacher Award from Pravinya Chess Academy, and school teaching experience."
        path="/achievements"
      />
      <PageHeader
        eyebrow="Achievements & Experience"
        title="Recognition & Teaching Milestones"
        lede="A record of Amar Ravindra More's chess achievements and teaching experience — every entry here is factual, with no invented awards or numbers."
        crumb="Achievements"
      />

      <section className="section">
        <div className="container">
          <div className="achieve-grid">
            {achievements.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <Reveal className="achieve-card" key={item.title}>
                  <div className="achieve-card__icon"><Icon size={22} /></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Trophy & Certificate Gallery</p>
            <h2>Moments From These Achievements</h2>
            <p className="lede" style={{ marginInline: "auto", marginTop: 14 }}>
              Photographs and certificates from these achievements.
            </p>
          </Reveal>
          <div className="gallery-grid">
            {achievementPhotos.map((item, i) => {
              const Icon = !item.isPhoto ? ICONS[item.icon] : null;
              const label = isEditMode ? getValue(item, "label") : item.label;
              return (
                <div key={i}>
                  <button className="gallery-item" onClick={() => setActiveItem(item)}>
                    {item.isPhoto ? (
                      <>
                        <img src={item.image} alt={item.caption} loading="lazy" />
                        <span className="gallery-caption">{label}</span>
                      </>
                    ) : (
                      <span className="gallery-placeholder">
                        <Icon size={30} />
                        <span className="gallery-placeholder__label">{label}</span>
                        <span className="gallery-placeholder__sub">Photo to be added</span>
                      </span>
                    )}
                  </button>
                  {isEditMode && (
                    <EditableCaption item={item} getValue={getValue} updateField={updateField} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Lightbox item={activeItem} onClose={() => setActiveItem(null)} />
      {isEditMode && <CaptionExportPanel edits={edits} clearAll={clearAll} />}

      <section className="section">
        <div className="container">
          <Reveal className="post-cta" style={{ marginTop: 0 }}>
            <h2>Work Toward Your Own Milestones</h2>
            <p>Structured coaching, from a first lesson through to tournament preparation.</p>
            <div className="post-cta__ctas">
              <a
                className="btn btn-whatsapp btn-lg"
                href={waLink("Hi, I'd like to know more about chess coaching at Exchange Chess Academy.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={18} />
                Enquire on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
