import type { CSSProperties } from 'react'

const LeafShape = ({ className, style }: { className?: string; style?: CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path
      d="M12 21c-6-3-9-8-9-13.5C3 4 6 2 9 2c1.8 0 3 1.3 3 3 0-1.7 1.2-3 3-3 3 0 6 2 6 5.5C21 13 18 18 12 21Z"
      fill="currentColor"
    />
  </svg>
)

interface Leaf {
  top: string
  left: string
  size: number
  delay: string
  duration: 'animate-leaf-drift-1' | 'animate-leaf-drift-2' | 'animate-leaf-drift-3'
  color: string
}

const leaves: Leaf[] = [
  { top: '18%', left: '8%', size: 16, delay: '0s', duration: 'animate-leaf-drift-1', color: 'text-gold-300' },
  { top: '65%', left: '92%', size: 20, delay: '4s', duration: 'animate-leaf-drift-2', color: 'text-olive-300' },
  { top: '35%', left: '85%', size: 14, delay: '9s', duration: 'animate-leaf-drift-3', color: 'text-gold-200' },
  { top: '80%', left: '15%', size: 18, delay: '13s', duration: 'animate-leaf-drift-1', color: 'text-olive-200' },
]

/**
 * Sparse, slow-drifting botanical particles. Purely decorative (aria-hidden),
 * CSS-driven (no per-frame JS cost), hidden on small screens and disabled
 * entirely under prefers-reduced-motion via the .leaf-particle rule in index.css.
 */
export default function FloatingLeaves() {
  return (
    <div className="leaf-particle-layer pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden md:block" aria-hidden="true">
      {leaves.map((leaf, i) => (
        <LeafShape
          key={i}
          className={`leaf-particle absolute ${leaf.duration} ${leaf.color}`}
          style={{
            top: leaf.top,
            left: leaf.left,
            width: leaf.size,
            height: leaf.size,
            animationDelay: leaf.delay,
          }}
        />
      ))}
    </div>
  )
}
