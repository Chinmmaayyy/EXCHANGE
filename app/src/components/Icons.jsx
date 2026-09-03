const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function PhoneIcon({ size = 19, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6 3h4l2 5-2.5 2.5a12 12 0 0 0 6 6L18 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z" />
    </svg>
  );
}

// Official WhatsApp brand glyph (filled, not a generic chat bubble).
export function WhatsAppIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function CheckIcon({ size = 19, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 12l5 5L20 6" />
    </svg>
  );
}

export function ClockIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

export function AwardIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="8" r="6" />
      <path d="M8.7 13.6L7 22l5-3 5 3-1.7-8.4" />
    </svg>
  );
}

export function HomeIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
    </svg>
  );
}

export function MonitorIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

export function UsersIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="9" cy="7" r="4" />
      <path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
      <path d="M17 3.5a4 4 0 0 1 0 7.4M23 21v-2a4 4 0 0 0-3-3.87" />
    </svg>
  );
}

export function UserIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
    </svg>
  );
}

export function GraduationCapIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
    </svg>
  );
}

export function TrendingUpIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-6 4 3 5-8" />
    </svg>
  );
}

export function BoardIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}

export function StarIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8z" />
    </svg>
  );
}

export function MapPinIcon({ size = 19, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function CameraIcon({ size = 30, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={1.6} {...props}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 17, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function MenuIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function CloseIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function PlusIcon({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.4} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function WalletIcon({ size = 19, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z" />
      <path d="M16 12h.01" />
      <path d="M3 9h18" />
    </svg>
  );
}

export function ShieldCheckIcon({ size = 19, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function CalendarIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export function QuoteIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

export function BuildingIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
    </svg>
  );
}

export function TargetIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export function BrainIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 11 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 13 18Z" />
      <path d="M12 5v14" />
    </svg>
  );
}

export function PuzzleIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.47 1.23 0 1.7l-1.568 1.568c-.23.23-.338.556-.289.878.14.928-.152 1.884-.872 2.604s-1.676 1.012-2.604.872c-.322-.049-.648.059-.878.289l-1.568 1.568c-.47.47-1.23.47-1.7 0l-1.568-1.568c-.23-.23-.556-.338-.878-.289-.928.14-1.884-.152-2.604-.872s-1.012-1.676-.872-2.604c.049-.322-.059-.648-.289-.878l-1.568-1.568c-.47-.47-.47-1.23 0-1.7l1.568-1.568c.23-.23.338-.556.289-.878-.14-.928.152-1.884.872-2.604s1.676-1.012 2.604-.872c.322.049.648-.059.878-.289l1.568-1.568c.47-.47 1.23-.47 1.7 0l1.568 1.568c.23.23.556.338.878.289.928-.14 1.884.152 2.604.872s1.012 1.676.872 2.604Z" />
    </svg>
  );
}

export function BookOpenIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

export function HandshakeIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...props}>
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4l-4.6-4.6a1 1 0 0 0-1.4 0L11 11" />
      <path d="m18 10 3-3a1 1 0 0 0 0-1.4L18.4 3a1 1 0 0 0-1.4 0L13 7" />
      <path d="M10 11 6.4 7.4a1 1 0 0 0-1.4 0L3 9.4a1 1 0 0 0 0 1.4L7 15" />
    </svg>
  );
}

