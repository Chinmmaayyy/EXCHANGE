import { useEffect } from "react";
import { CloseIcon, CameraIcon, AwardIcon, StarIcon, BoardIcon, ClockIcon, UsersIcon } from "./Icons.jsx";

const ICONS = { camera: CameraIcon, award: AwardIcon, star: StarIcon, board: BoardIcon, clock: ClockIcon, users: UsersIcon };

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return;

    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.classList.add("nav-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("nav-open");
    };
  }, [item, onClose]);

  const isOpen = Boolean(item);
  const Icon = item && !item.isPhoto ? ICONS[item.icon] : null;

  return (
    <div
      className={`lightbox${isOpen ? " is-open" : ""}`}
      aria-hidden={!isOpen}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="lightbox__panel" role="dialog" aria-modal="true" aria-label="Gallery image preview">
        <button className="lightbox__close" aria-label="Close preview" onClick={onClose}>
          <CloseIcon size={20} />
        </button>
        <div className={`lightbox__media${item?.isPhoto ? " lightbox__media--photo" : ""}`}>
          {item?.isPhoto ? (
            <img src={item.image} alt={item.caption} loading="lazy" />
          ) : item ? (
            <span className="gallery-placeholder">
              {Icon && <Icon size={30} />}
              <span className="gallery-placeholder__label">{item.label}</span>
              <span className="gallery-placeholder__sub">Photo to be added</span>
            </span>
          ) : null}
        </div>
        <p className="lightbox__caption">{item?.caption}</p>
      </div>
    </div>
  );
}
