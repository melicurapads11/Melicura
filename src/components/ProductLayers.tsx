import { layers } from '../content'
import Reveal from './Reveal'
import SectionBackground from './SectionBackground'
import SectionDivider from './SectionDivider'
import darkFoliageBg from '../assets/backgrounds/dark-foliage.webp'
import padPartition from '../assets/images/pad-partition-clean.webp'


export default function ProductLayers() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-24 sm:py-32">
      <SectionBackground src={darkFoliageBg} overlay="plum-strong" position="80% center" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,137,73,0.12),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label justify-center">
            <span className="h-px w-8 bg-gold-400" />
            How It Works
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-cream-50 sm:text-4xl lg:text-[2.6rem]">
            Anatomy of Comfort
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream-100/70 sm:text-lg">
            Six thoughtfully engineered layers work together for protection that feels effortless.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Pad + Partition visual */}
          <Reveal className="flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Glow behind pad */}
              <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(139,137,73,0.28),transparent_60%)] blur-3xl" />
              <img
                src={padPartition}
                alt="Melicura pad cross-section showing the herbal partition layers"
                className="w-full drop-shadow-2xl transition-transform duration-700 hover:scale-[1.03]"
                loading="lazy"
                width={365}
                height={725}
              />
            </div>
          </Reveal>

          {/* Layer descriptions */}
          <div className="space-y-5">
            {layers.map((layer, i) => (
              <Reveal
                key={layer.name}
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                className="flex gap-4 rounded-xl border border-cream-50/10 bg-plum-800/40 p-4 transition-colors duration-300 hover:bg-plum-800/70"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-400/40 font-display text-sm text-gold-300">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-base text-cream-50">{layer.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-cream-100/65">{layer.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <SectionDivider color="fill-cream-100" />
    </section>
  )
}
