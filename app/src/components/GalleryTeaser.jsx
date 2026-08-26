import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { CameraIcon, BoardIcon, ClockIcon, UsersIcon, ArrowRightIcon } from "./Icons.jsx";
import { galleryGroups } from "../data/content.js";

const ICONS = { camera: CameraIcon, board: BoardIcon, clock: ClockIcon, users: UsersIcon };

// Prefer real photos over "photo to be added" placeholders for the homepage teaser.
const allItems = galleryGroups.flatMap((group) => group.items);
const realPhotos = allItems.filter((item) => item.isPhoto);
const preview = realPhotos.slice(0, 6);

export default function GalleryTeaser() {
  return (
    <section className="section section--alt" id="gallery">
      <div className="container">
        <Reveal className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>Gallery</p>
          <h2>Coaching Moments &amp; Milestones</h2>
          <p className="lede" style={{ marginInline: "auto", marginTop: 14 }}>
            Photographs from coaching sessions, equipment and academy history.
          </p>
        </Reveal>

        <div className="gallery-grid">
          {preview.map((item, i) => {
            const Icon = !item.isPhoto ? ICONS[item.icon] : null;
            return (
              <Link className="gallery-item" to="/gallery" key={i}>
                {item.isPhoto ? (
                  <>
                    <img src={item.image} alt={item.caption} loading="lazy" width="1024" height="572" />
                    <span className="gallery-caption">{item.label}</span>
                  </>
                ) : (
                  <span className="gallery-placeholder">
                    <Icon size={30} />
                    <span className="gallery-placeholder__label">{item.label}</span>
                    <span className="gallery-placeholder__sub">Photo to be added</span>
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        <Reveal className="teaser-cta" style={{ justifyContent: "center" }}>
          <Link className="btn btn-outline" to="/gallery">
            View Full Gallery
            <ArrowRightIcon size={17} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
