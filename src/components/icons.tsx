import type { SVGProps } from 'react'

export type IconProps = SVGProps<SVGSVGElement>

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
}

export const LeafIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 20c0-8 5-14 14-15-1 9-6 14-14 15Z" />
    <path d="M5 20c2-4 5-7 9-9" />
  </svg>
)

export const ShieldIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

export const DropletIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11Z" />
  </svg>
)

export const FlaskIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M10 3h4" />
    <path d="M10 3v6L5 18a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" />
    <path d="M8 15h8" />
  </svg>
)

export const RulerIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="9" width="18" height="6" rx="1.5" transform="rotate(0 12 12)" />
    <path d="M7 9v3M11 9v3M15 9v3" />
  </svg>
)

export const FeatherIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20 4c-8 0-15 5-16 16 11-1 16-8 16-16Z" />
    <path d="M12 12L4 20" />
  </svg>
)

export const WindIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 8h10.5a2.5 2.5 0 1 0-2.4-3.2" />
    <path d="M3 16h13.5a2.5 2.5 0 1 1-2.4 3.2" />
    <path d="M3 12h16.5a2.5 2.5 0 1 0-2.4-3.2" />
  </svg>
)

export const HeartHandIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 20s-7-4.4-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 5c-2.5 4.6-9.5 9-9.5 9Z" />
  </svg>
)

export const RecycleIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 19H4.8a2 2 0 0 1-1.7-3l1.6-2.7" />
    <path d="M9.3 5 7.1 8.7l3 1.8" />
    <path d="M14.7 5H19a2 2 0 0 1 1.7 3l-1 1.8" />
    <path d="M17.3 15.5 19.4 19l-3.1.1" />
    <path d="M11 19.5h5.2" />
    <path d="M9 10.5 6.9 14" />
  </svg>
)

export const CottonIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="9" r="3" />
    <circle cx="15" cy="9" r="3" />
    <circle cx="12" cy="13" r="3" />
    <path d="M12 16v5" />
  </svg>
)

export const BadgeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="9" r="6" />
    <path d="M9 14.5 7.5 21 12 18.5 16.5 21 15 14.5" />
    <path d="M9.5 9l1.8 1.8L14.5 7" />
  </svg>
)

export const IndiaFlagIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 3v18" />
    <path d="M5 5h14l-2.5 3L19 11H5" />
  </svg>
)

export const WingIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 4c3 3 3 8 0 11-3-3-3-8 0-11Z" />
    <path d="M4 12c3-2 7-2 8 0-1 2-5 2-8 0Z" />
    <path d="M20 12c-3-2-7-2-8 0 1 2 5 2 8 0Z" />
  </svg>
)

export const PhoneIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 4h3.5l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 4 5.6 1.5 1.5 0 0 1 5 4Z" />
  </svg>
)

export const MailIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 6.5 12 13l8.5-6.5" />
  </svg>
)

export const MapPinIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.3" />
  </svg>
)

export const SendIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M21 3 3 10.5l7 2.5m11-10-4 17-7-6.5m11-10.5-11 10.5" />
  </svg>
)

export const MenuIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const CloseIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const ChevronDownIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
)

export const CheckIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12.5 9.5 17 19 7" />
  </svg>
)

export const SparkleIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  </svg>
)

export const ClockIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
)

export const LayersIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3 3 8l9 5 9-5-9-5Z" />
    <path d="M3 13l9 5 9-5" />
  </svg>
)

export const DisposeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 7h16" />
    <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    <path d="M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13" />
    <path d="M10 11v6M14 11v6" />
  </svg>
)

export const NoToxinIcon = FlaskIcon
