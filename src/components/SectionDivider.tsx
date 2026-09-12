interface SectionDividerProps {
  color: string
  flip?: boolean
  className?: string
}

/**
 * A soft organic curve that bridges two adjacent sections, echoing a leaf
 * silhouette rather than a hard straight edge. `color` is a Tailwind fill
 * class (e.g. "fill-cream-50") matching the section it sits in front of.
 */
export default function SectionDivider({ color, flip = false, className = '' }: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 -bottom-px z-10 ${flip ? 'rotate-180' : ''} ${className}`}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="h-12 w-full sm:h-20"
      >
        <path
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,40 L1440,90 L0,90 Z"
          className={color}
        />
      </svg>
    </div>
  )
}
