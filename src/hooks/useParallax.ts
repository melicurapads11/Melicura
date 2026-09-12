import { useEffect, useRef } from 'react'

/**
 * Subtle scroll-linked translateY on the returned ref, for a gentle parallax
 * feel on hero backgrounds. Uses a single rAF-throttled passive scroll
 * listener (no per-frame polling) and a transform-only style so it stays
 * GPU-cheap. No-ops on small screens and under prefers-reduced-motion.
 */
export function useParallax<T extends HTMLElement>(strength = 0.15) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || window.innerWidth < 768) return

    let ticking = false

    const update = () => {
      const rect = el.getBoundingClientRect()
      const offset = rect.top * strength
      el.style.transform = `translate3d(0, ${offset}px, 0)`
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [strength])

  return ref
}
