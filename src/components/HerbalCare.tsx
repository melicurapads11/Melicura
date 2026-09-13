import { herbs } from '../content'
import Reveal from './Reveal'
import SectionBackground from './SectionBackground'
import { CheckIcon } from './icons'

import kumariImg from '../assets/images/herb-kumari.webp'
import mahanimbaImg from '../assets/images/herb-mahanimba.webp'
import pudinaImg from '../assets/images/herb-pudina.webp'
import turmericBg from '../assets/backgrounds/turmeric-root.webp'

const images: Record<string, string> = {
  kumari: kumariImg,
  mahanimba: mahanimbaImg,
  pudina: pudinaImg,
}

export default function HerbalCare() {
  return (
    <section id="herbal-care" className="relative overflow-hidden py-24 sm:py-32">
      <SectionBackground src={turmericBg} overlay="cream-strong" position="center" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-olive-300 to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-olive-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-gold-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label justify-center text-olive-700">
            <span className="h-px w-8 bg-olive-500" />
            Herbal Care
            <span className="h-px w-8 bg-olive-500" />
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-plum-900 sm:text-4xl lg:text-[2.6rem]">
            Powered by Nature. Inspired by Ayurveda.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-plum-800/75 sm:text-lg">
            Melicura is enriched with three time-honoured herbs — Melia Dubia, Aloe Vera and Mint
            — traditionally valued for their natural care and support to women's comfort and hygiene.
          </p>
        </Reveal>

        <div className="mt-16 mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {herbs.map((herb, i) => (
            <Reveal
              key={herb.name}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="group flex flex-col items-center rounded-3xl border border-olive-200 bg-cream-50 p-7 text-center shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-olive-300/30 blur-md transition-all duration-500 group-hover:blur-lg group-hover:bg-gold-300/40" />
                <img
                  src={images[herb.image]}
                  alt={`${herb.name} (${herb.common})`}
                  className="relative h-28 w-28 rounded-full border-2 border-cream-50 object-cover shadow-md transition-transform duration-500 group-hover:scale-105 sm:h-32 sm:w-32"
                  loading="lazy"
                  width={440}
                  height={440}
                />
              </div>

              <h3 className="mt-6 font-display text-xl text-plum-900">{herb.name}</h3>
              <p className="text-sm italic text-olive-700">({herb.common})</p>

              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-gold-600">
                Traditionally known for
              </p>
              <ul className="mt-3 space-y-2 text-left">
                {herb.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-plum-800/75">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-olive-600" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-12 max-w-3xl rounded-2xl border border-olive-200 bg-cream-50/70 px-6 py-5 text-center">
          <p className="text-xs leading-relaxed text-plum-800/60">
            Traditional herbal references are drawn from classical Ayurvedic texts including
            Bhavaprakasha Nighantu, Dhanvantari Nighantu, Kaiyadeva Nighantu and Dravyaguna
            Vijnana. These describe traditional, time-honoured uses and are not clinical claims.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
