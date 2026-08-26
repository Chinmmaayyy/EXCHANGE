import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Seo from "../components/Seo.jsx";
import Lightbox from "../components/Lightbox.jsx";
import EditableCaption from "../components/EditableCaption.jsx";
import CaptionExportPanel from "../components/CaptionExportPanel.jsx";
import { CameraIcon, BoardIcon, ClockIcon, UsersIcon } from "../components/Icons.jsx";
import { galleryGroups } from "../data/content.js";
import useCaptionEdits from "../hooks/useCaptionEdits.js";

const ICONS = { camera: CameraIcon, board: BoardIcon, clock: ClockIcon, users: UsersIcon };

export default function GalleryPage() {
  const [activeItem, setActiveItem] = useState(null);
  const { isEditMode, edits, updateField, getValue, clearAll } = useCaptionEdits();

  return (
    <>
      <Seo
        title="Gallery | Exchange Chess Academy"
        description="Photographs from chess coaching sessions, equipment and the academy's history — Exchange Chess Academy, Mumbai."
        path="/gallery"
      />
      <PageHeader
        eyebrow="Gallery"
        title="Coaching Moments & Milestones"
        lede="Photographs from coaching sessions, equipment and academy history, organized by category."
        crumb="Gallery"
      />

      {galleryGroups.map((group, gi) => (
        <section className={`section section--gallery-group${gi % 2 === 1 ? " section--alt" : ""}`} key={group.key} id={group.key}>
          <div className="container">
            <Reveal className="section-head">
              <p className="eyebrow">{group.title}</p>
              <p className="lede" style={{ marginTop: 6 }}>{group.desc}</p>
            </Reveal>
            <div className="gallery-grid">
              {group.items.map((item, i) => {
                const Icon = !item.isPhoto ? ICONS[item.icon] : null;
                const label = isEditMode ? getValue(item, "label") : item.label;
                return (
                  <div key={i}>
                    <button className="gallery-item" onClick={() => setActiveItem(item)}>
                      {item.isPhoto ? (
                        <>
                          <img src={item.image} alt={item.caption} loading="lazy" width="1024" height="572" />
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
      ))}

      <Lightbox item={activeItem} onClose={() => setActiveItem(null)} />
      {isEditMode && <CaptionExportPanel edits={edits} clearAll={clearAll} />}
    </>
  );
}
