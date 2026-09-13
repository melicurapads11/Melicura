import { useState, useEffect, useCallback, useRef } from 'react'
import { whatsappConfig } from '../content'
import slide1 from '../assets/images/hero-slide-1.webp'
import slide2 from '../assets/images/hero-slide-2.webp'
import slide3 from '../assets/images/hero-slide-3.webp'
import slide4 from '../assets/images/hero-slide-4.webp'
import { LeafIcon, LayersIcon, DropletIcon, FlaskIcon } from './icons'

const heroSlides = [
  {
    image: slide1,
    alt: 'Melicura Herbal Sanitary Pads — Gentle by Nature. Trusted by Women.',
    title: 'Gentle by Nature',
    subtitle: 'Trusted by Women across generations',
    cta: 'Shop Now',
    link: whatsappConfig.url,
  },
  {
    image: slide2,
    alt: 'Melicura Sanitary Pads — Thin, Soft, Comfortable Everyday Care',
    title: 'Thin. Soft. Comfortable.',
    subtitle: 'Designed for effortless everyday ease and freedom',
    cta: 'Shop Now',
    link: whatsappConfig.url,
  },
  {
    image: slide3,
    alt: 'Herbal Infused Protection — Aloe Vera, Neem & Mint with 6-Layer Care',
    title: 'Herbal Infused Care',
    subtitle: '6 Layer Leak Protection • Enriched with 3 Active Herbs',
    cta: 'Shop Now',
    link: whatsappConfig.url,
  },
  {
    image: slide4,
    alt: 'Melicura XL 280mm & XXL 320mm Herbal Sanitary Pads Pack',
    title: 'Melicura XL & XXL',
    subtitle: 'Ultra Quick 80ml Absorption • 100% Fragrance & Toxin Free',
    cta: 'Shop Now',
    link: whatsappConfig.url,
  },
]

const trustBadges = [
  {
    icon: LeafIcon,
    title: '100% Herbal Infused',
    desc: 'Melia Dubia, Aloe Vera & Mint',
  },
  {
    icon: LayersIcon,
    title: '6 Layer Protection',
    desc: 'Complete peace of mind',
  },
  {
    icon: DropletIcon,
    title: '80ml Quick Absorption',
    desc: 'Instant dryness & freshness',
  },
  {
    icon: FlaskIcon,
    title: 'Zero Artificial Fragrance',
    desc: 'Toxin-free, skin-friendly care',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const isSwiping = useRef(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }, [])

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx)
  }

  // Auto-play slideshow continuously every 4 seconds (Zoycare style)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 4000)
    return () => clearInterval(timer)
  }, [nextSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  // Touch swipe support for mobile & tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
    isSwiping.current = true
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping.current) return
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!isSwiping.current || touchStartX.current === null || touchEndX.current === null) {
      isSwiping.current = false
      return
    }
    const distance = touchStartX.current - touchEndX.current
    if (distance > 45) nextSlide()
    else if (distance < -45) prevSlide()
    touchStartX.current = null
    touchEndX.current = null
    isSwiping.current = false
  }

  return (
    <section id="home" className="relative w-full overflow-hidden bg-plum-950 pt-20 sm:pt-24">
      {/* Full-Width Zoycare-Style Hero Banner Slideshow */}
      <div
        className="relative w-full overflow-hidden select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides Track */}
        <div
          className="flex w-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className="relative w-full flex-shrink-0 flex items-center justify-center bg-gradient-to-b from-plum-950 via-plum-900/90 to-plum-950"
            >
              {/* Responsive Banner Container */}
              <div className="relative w-full h-[280px] xs:h-[340px] sm:h-[440px] md:h-[520px] lg:h-[600px] xl:h-[660px] flex items-center justify-center overflow-hidden">
                {/* Background ambient glow matching slide theme */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_75%)] pointer-events-none" />

                {/* Banner Image with responsive object fit */}
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-contain object-center transition-transform duration-1000 ease-out"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />

                {/* Subtle gradient vignette at bottom for seamless blend */}
                <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-plum-950 via-plum-950/50 to-transparent pointer-events-none" />

                {/* Overlaid Banner Action Bar (Zoycare style Shop Now CTA) */}
                <div className="absolute bottom-5 sm:bottom-7 inset-x-3 sm:inset-x-8 max-w-7xl mx-auto flex items-center justify-between pointer-events-none">
                  <div className="hidden sm:block text-left drop-shadow-md max-w-md">
                    <span className="inline-block px-3 py-0.5 rounded-full bg-gold-400/25 text-gold-300 border border-gold-400/30 text-xs font-semibold tracking-wider uppercase backdrop-blur-md mb-1 shadow-sm">
                      {slide.title}
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-cream-100/95 drop-shadow truncate">
                      {slide.subtitle}
                    </p>
                  </div>

                  <a
                    href={whatsappConfig.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto ml-auto inline-flex items-center gap-2 rounded-full bg-gold-400 hover:bg-gold-300 text-plum-950 px-5 sm:px-7 py-2 sm:py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-gold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 shrink-0 group"
                  >
                    <span>Shop Now</span>
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrow: Previous */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-2.5 sm:left-6 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-plum-950/70 hover:bg-gold-400 text-cream-100 hover:text-plum-950 border border-gold-300/30 backdrop-blur-md shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none"
        >
          <svg className="h-5 w-5 rotate-90" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Navigation Arrow: Next */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-2.5 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-plum-950/70 hover:bg-gold-400 text-cream-100 hover:text-plum-950 border border-gold-300/30 backdrop-blur-md shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none"
        >
          <svg className="h-5 w-5 -rotate-90" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Bottom Pagination Dots / Pill Indicators */}
        <div className="absolute bottom-2 sm:bottom-3 inset-x-0 z-30 flex items-center justify-center gap-2">
          {heroSlides.map((_, idx) => {
            const isActive = idx === currentSlide
            return (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive ? 'w-8 bg-gold-400 shadow-gold' : 'w-2 bg-cream-100/40 hover:bg-cream-100/80'
                }`}
              />
            )
          })}
        </div>
      </div>

      {/* Trust & Features Ribbon directly beneath the Slideshow (Zoycare D2C Style) */}
      <div className="w-full border-t border-gold-400/20 bg-plum-900/90 backdrop-blur-md py-4 sm:py-6 px-4 sm:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon
            return (
              <div key={idx} className="flex items-center gap-3 text-left">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-gold-400/15 border border-gold-400/30 text-gold-300 shadow-sm">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-cream-50 leading-tight">
                    {badge.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-cream-100/70 truncate">{badge.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


