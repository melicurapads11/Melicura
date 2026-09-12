import { whyMelicura } from '../content'
import { iconMap } from './iconMap'
import Reveal from './Reveal'
import SectionBackground from './SectionBackground'
import SectionDivider from './SectionDivider'
import darkLeafBg from '../assets/backgrounds/leaf-droplets.webp'

export default function FeatureGrid() {
  return (
    <section id="why-melicura" className="relative py-24 sm:py-32">
      <SectionBackground src={darkLeafBg} overlay="plum-strong" position="center 35%" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,165,75,0.08),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label justify-center">
            <span className="h-px w-8 bg-gold-400" />
            Why Melicura
            <span className="h-px w-8 bg-gold-400" />
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-cream-50 sm:text-4xl lg:text-[2.6rem]">
            Twelve reasons women trust Melicura every day
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream-100/70 sm:text-lg">
            Thoughtful, herbal-infused protection — built into every layer of the pad.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyMelicura.map((f, i) => {
            const Icon = iconMap[f.icon]
            return (
              <Reveal
                key={f.title}
                delay={((i % 3) + 1) as 1 | 2 | 3}
                className="group relative overflow-hidden rounded-2xl border border-cream-50/10 bg-plum-800/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-plum-800"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-400/10 text-gold-300 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold-400/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg text-cream-50">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-100/65">{f.desc}</p>
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold-400/[0.04] transition-transform duration-500 group-hover:scale-150" />
              </Reveal>
            )
          })}
        </div>
      </div>

      <SectionDivider color="fill-olive-50" />
    </section>
  )
}
