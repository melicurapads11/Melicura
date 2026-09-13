import logo from '../assets/images/logo.webp'
import packageFront from '../assets/images/package-front.webp'
import heroBg from '../assets/backgrounds/hero-aloe.webp'
import { ChevronDownIcon } from './icons'
import SectionBackground from './SectionBackground'
import SectionDivider from './SectionDivider'
import FloatingLeaves from './FloatingLeaves'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 lg:min-h-screen lg:flex lg:items-center lg:pt-28 lg:pb-20"
    >
      <SectionBackground src={heroBg} overlay="plum-side-r" position="30% 40%" priority zoom parallax />
      <FloatingLeaves />

      {/* Fine botanical line-art, layered above the photo for brand texture */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <svg
          className="absolute -left-20 top-10 h-[420px] w-[420px] text-gold-300/[0.10] sm:h-[560px] sm:w-[560px]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M100 10c40 20 70 55 70 95s-30 75-70 85c-40-10-70-45-70-85s30-75 70-95Z"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path d="M100 20v170M100 60c-25 5-45 20-55 40M100 60c25 5 45 20 55 40M100 110c-22 4-40 16-48 34M100 110c22 4 40 16 48 34" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
        {/* Left: brand copy */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="mb-6 flex justify-center opacity-0 animate-fade-up lg:justify-start" style={{ animationDelay: '0.1s' }}>
            <img src={logo} alt="Melicura logo" className="h-20 w-20 sm:h-24 sm:w-24 rounded-full shadow-gold" />
          </div>

          <p
            className="section-label justify-center opacity-0 animate-fade-up lg:justify-start text-olive-200"
            style={{ animationDelay: '0.22s' }}
          >
            <span className="h-px w-8 bg-gold-400/70" />
            Herbal Sanitary Pads
          </p>

          <h1
            className="mt-4 font-display text-4xl leading-[1.15] text-cream-50 opacity-0 animate-fade-up sm:text-5xl lg:text-[3.4rem]"
            style={{ animationDelay: '0.34s' }}
          >
            Gentle by Nature.
            <br />
            <span className="text-gold-300">Trusted by Women.</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-md text-base leading-relaxed text-cream-100/85 opacity-0 animate-fade-up sm:text-lg lg:mx-0"
            style={{ animationDelay: '0.46s' }}
          >
            Nature-inspired feminine care designed for comfort, freshness and confident everyday
            protection.
          </p>

          <div
            className="mt-9 flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-up sm:flex-row lg:justify-start"
            style={{ animationDelay: '0.58s' }}
          >
            <a href="#product" className="btn-primary w-full sm:w-auto">
              Explore Melicura
            </a>
            <a href="#about" className="btn-secondary w-full sm:w-auto">
              Learn More
            </a>
          </div>

          <div
            className="mt-12 flex items-center justify-center gap-6 text-cream-100/70 opacity-0 animate-fade-up lg:justify-start"
            style={{ animationDelay: '0.7s' }}
          >
            <div className="text-center lg:text-left">
              <p className="font-display text-2xl text-gold-300">6</p>
              <p className="text-xs uppercase tracking-wider">Layer Protection</p>
            </div>
            <span className="h-8 w-px bg-cream-100/20" />
            <div className="text-center lg:text-left">
              <p className="font-display text-2xl text-gold-300">80ml</p>
              <p className="text-xs uppercase tracking-wider">Quick Absorption</p>
            </div>
            <span className="h-8 w-px bg-cream-100/20" />
            <div className="text-center lg:text-left">
              <p className="font-display text-xl text-gold-300">XL &amp; XXL</p>
              <p className="text-xs uppercase tracking-wider">280mm &amp; 320mm</p>
            </div>
          </div>
        </div>

        {/* Right: product image */}
        <div
          className="relative order-1 opacity-0 animate-fade-in lg:order-2"
          style={{ animationDelay: '0.4s', animationDuration: '1.2s' }}
        >
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            <div className="absolute inset-0 -z-10 animate-float">
              <div className="mx-auto h-[90%] w-[90%] translate-y-6 rounded-full bg-[radial-gradient(circle,rgba(232,200,124,0.28),transparent_65%)] blur-2xl" />
            </div>
            <img
              src={packageFront}
              alt="Melicura Herbal Sanitary Pads — XL 280mm &amp; XXL 320mm, 6 pad pack"
              className="relative w-full drop-shadow-[0_35px_60px_rgba(0,0,0,0.45)] animate-float"
              width={1300}
              height={968}
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to learn more"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-cream-100/60 opacity-0 animate-fade-in sm:flex"
        style={{ animationDelay: '1.1s' }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDownIcon className="h-4 w-4 animate-bounce" />
      </a>

      <SectionDivider color="fill-cream-50" />
    </section>
  )
}
