import packageStudio from '../assets/images/package-front-studio.webp'
import gardenBg from '../assets/backgrounds/garden-path.webp'
import Reveal from './Reveal'
import SectionBackground from './SectionBackground'
import SectionDivider from './SectionDivider'
import { LeafIcon } from './icons'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <SectionBackground src={gardenBg} overlay="cream-strong" position="center 30%" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-gold-200/30 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] border border-olive-300/40" />
            <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-plum-800/[0.06]" />
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <img
                src={packageStudio}
                alt="Melicura Herbal Sanitary Pads package"
                className="w-full transition-transform duration-700 ease-out hover:scale-[1.04]"
                loading="lazy"
                width={1300}
                height={969}
              />
            </div>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={1}>
          <p className="section-label">
            <span className="h-px w-8 bg-gold-400" />
            About Melicura
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-plum-900 sm:text-4xl lg:text-[2.6rem]">
            Everyday feminine care, reimagined with the goodness of nature.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-plum-800/80 sm:text-lg">
            Melicura™ is a herbal sanitary pad brand from Sri Murugan Enterprises, created to bring
            together everyday feminine hygiene and nature-inspired herbal care. Every pad is
            designed around a simple philosophy —
          </p>
          <p className="mt-4 font-display text-xl italic text-plum-700 sm:text-2xl">
            “Gentle by Nature. Trusted by Women.”
          </p>
          <p className="mt-6 text-base leading-relaxed text-plum-800/80 sm:text-lg">
            Drawing on herbal ingredients long valued in traditional wellness practice, Melicura
            blends thoughtful, plant-inspired formulation with the comfort, protection and
            reliability women expect from their everyday essentials.
          </p>

          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-olive-200 bg-olive-50/60 p-5">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-olive-500/10 text-olive-600">
              <LeafIcon className="h-5 w-5" />
            </span>
            <p className="text-sm leading-relaxed text-plum-800/80">
              Inspired by herbal ingredients referenced in traditional Ayurvedic texts, Melicura is
              crafted for women who want everyday protection that feels close to nature.
            </p>
          </div>
        </Reveal>
      </div>

      <SectionDivider color="fill-plum-900" />
    </section>
  )
}
