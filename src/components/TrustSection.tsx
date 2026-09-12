import { trustPoints } from '../content'
import { iconMap } from './iconMap'
import Reveal from './Reveal'
import SectionBackground from './SectionBackground'
import SectionDivider from './SectionDivider'
import mortarBg from '../assets/backgrounds/mortar-pestle.webp'

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <SectionBackground src={mortarBg} overlay="plum-strong" position="center 30%" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,165,75,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label justify-center">
            <span className="h-px w-8 bg-gold-400" />
            Trust &amp; Quality
            <span className="h-px w-8 bg-gold-400" />
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-cream-50 sm:text-4xl lg:text-[2.6rem]">
            Quality you can rely on
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream-100/70 sm:text-lg">
            Every Melicura pack carries the standards that matter — tested, gentle and
            responsibly made.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-8">
          {trustPoints.map((t, i) => {
            const Icon = iconMap[t.icon]
            return (
              <Reveal
                key={t.title}
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                className="group flex w-32 flex-col items-center gap-3 text-center sm:w-36"
              >
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold-400/50 text-gold-300 transition-all duration-500 group-hover:border-gold-400 group-hover:shadow-gold sm:h-28 sm:w-28">
                  <div className="absolute inset-1.5 rounded-full border border-dashed border-gold-400/30" />
                  <Icon className="h-9 w-9" />
                </div>
                <p className="text-xs font-semibold uppercase leading-snug tracking-wide text-cream-100/85 sm:text-sm">
                  {t.title}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>

      <SectionDivider color="fill-cream-50" />
    </section>
  )
}
