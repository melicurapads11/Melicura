import { benefits } from '../content'
import { iconMap } from './iconMap'
import Reveal from './Reveal'
import SectionBackground from './SectionBackground'
import SectionDivider from './SectionDivider'
import dropletsBg from '../assets/backgrounds/leaf-droplets-bright.webp'

export default function Benefits() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <SectionBackground src={dropletsBg} overlay="cream-soft" position="center 40%" />
      <div className="pointer-events-none absolute -left-16 top-0 h-72 w-72 rounded-full bg-olive-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-gold-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label justify-center">
            <span className="h-px w-8 bg-gold-400" />
            Benefits
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-plum-900 sm:text-4xl lg:text-[2.6rem]">
            Comfort for Every Day
          </h2>
          <p className="mt-5 text-base leading-relaxed text-plum-800/75 sm:text-lg">
            Safe, gentle and natural — designed to support your comfort from morning to night.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {benefits.map((b, i) => {
            const Icon = iconMap[b.icon]
            return (
              <Reveal
                key={b.title}
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                className="group flex flex-col items-center gap-4 rounded-2xl bg-white/90 p-6 text-center shadow-soft ring-1 ring-plum-900/5 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:bg-white hover:shadow-card"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-plum-700 to-plum-800 text-gold-300 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-sm leading-snug text-plum-900 sm:text-base">
                  {b.title}
                </h3>
              </Reveal>
            )
          })}
        </div>
      </div>

      <SectionDivider color="fill-plum-800" />
    </section>
  )
}
