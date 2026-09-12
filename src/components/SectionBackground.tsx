import { useParallax } from '../hooks/useParallax'

interface SectionBackgroundProps {
  src: string
  overlay:
    | 'plum-strong'
    | 'plum-soft'
    | 'plum-side-r'
    | 'plum-side-l'
    | 'cream-strong'
    | 'cream-soft'
    | 'cream-side-r'
    | 'cream-side-l'
  position?: string
  priority?: boolean
  zoom?: boolean
  parallax?: boolean
}

const overlayClasses: Record<SectionBackgroundProps['overlay'], string> = {
  'plum-strong': 'bg-plum-900/85',
  'plum-soft': 'bg-plum-900/70',
  'plum-side-r': 'bg-gradient-to-r from-plum-900/95 via-plum-900/75 to-plum-900/40',
  'plum-side-l': 'bg-gradient-to-l from-plum-900/95 via-plum-900/75 to-plum-900/40',
  'cream-strong': 'bg-cream-50/90',
  'cream-soft': 'bg-cream-50/78',
  'cream-side-r': 'bg-gradient-to-r from-cream-50/97 via-cream-50/85 to-cream-50/45',
  'cream-side-l': 'bg-gradient-to-l from-cream-50/97 via-cream-50/85 to-cream-50/45',
}

/**
 * Full-bleed decorative photo layer for a section. Always the first child of a
 * `relative overflow-hidden` section, with real content given `relative z-10`.
 * The overlay guarantees text-safe contrast regardless of the photo underneath.
 */
export default function SectionBackground({
  src,
  overlay,
  position = 'center',
  priority = false,
  zoom = false,
  parallax = false,
}: SectionBackgroundProps) {
  const parallaxRef = useParallax<HTMLImageElement>(0.12)

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <img
        ref={parallax ? parallaxRef : undefined}
        src={src}
        alt=""
        role="presentation"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        data-parallax={parallax || undefined}
        className={`h-[calc(100%+80px)] w-full object-cover ${zoom ? 'animate-bg-zoom' : ''}`}
        style={{ objectPosition: position }}
      />
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
    </div>
  )
}
