import packageFront from '../assets/images/package-front.webp'
import padFramed from '../assets/images/pad-framed.webp'
import showcaseBg from '../assets/backgrounds/leaves-bowl.webp'
import Reveal from './Reveal'
import SectionBackground from './SectionBackground'
import SectionDivider from './SectionDivider'
import { LeafIcon, LayersIcon, DropletIcon, WingIcon, FeatherIcon, RulerIcon } from './icons'

const details = [
  { icon: FeatherIcon, title: 'Thin, Soft & Comfortable', desc: 'A refined, body-hugging feel throughout the day.' },
  { icon: LeafIcon, title: 'Herbal Infused', desc: 'Herbal care for sensitive skin, in every pad.' },
  { icon: LayersIcon, title: '6 Layer Protection', desc: 'Complete peace of mind, layer by layer.' },
  { icon: DropletIcon, title: 'Ultra Quick Absorption', desc: 'Keeps you dry and comfortable.' },
  { icon: WingIcon, title: 'Dual Wings & Wider Back', desc: 'Extra security exactly where you need it.' },
  { icon: RulerIcon, title: 'Extra Long — 280mm', desc: 'XL coverage for long-lasting protection.' },
]

export default function ProductShowcase() {
  return (
    <section id="product" className="relative overflow-hidden py-24 sm:py-32">
      <SectionBackground src={showcaseBg} overlay="cream-side-l" position="center 25%" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label justify-center">
            <span className="h-px w-8 bg-gold-400" />
            The Product
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-plum-900 sm:text-4xl lg:text-[2.6rem]">
            Melicura™ Herbal Sanitary Pads
          </h2>
          <p className="mt-5 text-base leading-relaxed text-plum-800/75 sm:text-lg">
            XL · Extra Long · 280mm · 6 N Pads
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1.15fr_1fr] lg:gap-8">
          {/* Left detail cards */}
          <div className="order-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:order-1 lg:grid-cols-1">
            {details.slice(0, 3).map((d, i) => (
              <DetailCard key={d.title} {...d} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} align="right" />
            ))}
          </div>

          {/* Center product image */}
          <Reveal className="order-1 lg:order-2" delay={2}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(139,137,73,0.18),transparent_65%)] blur-2xl" />
              <img
                src={packageFront}
                alt="Melicura Herbal Sanitary Pads XL package, front view"
                className="w-full drop-shadow-2xl"
                loading="lazy"
                width={1300}
                height={969}
              />
            </div>
          </Reveal>

          {/* Right detail cards */}
          <div className="order-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {details.slice(3, 6).map((d, i) => (
              <DetailCard key={d.title} {...d} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} align="left" />
            ))}
          </div>
        </div>

        {/* Back design secondary visual */}
        <Reveal className="mt-24 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="section-label">
              <span className="h-px w-8 bg-gold-400" />
              Pad Structure
            </p>
            <h3 className="mt-4 font-display text-2xl text-plum-900 sm:text-3xl">
              A closer look at what protects you
            </h3>
            <p className="mt-5 text-base leading-relaxed text-plum-800/75">
              The herbal comfort patch runs through the centre of every Melicura pad — visible
              from the extra-long, wider-back design engineered for confident, all-round
              protection.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-plum-800/80">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" /> Extra long length for
                long-lasting protection
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" /> Herbal comfort patch at
                the core
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" /> Wider back with dual
                wings for extra security
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-xs">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-plum-800" />
              <img
                src={padFramed}
                alt="Melicura pad structure showing the herbal comfort patch and extra long design"
                className="w-full rounded-2xl shadow-card"
                loading="lazy"
                width={700}
                height={970}
              />
            </div>
          </div>
        </Reveal>
      </div>

      <SectionDivider color="fill-plum-900" />
    </section>
  )
}

function DetailCard({
  icon: Icon,
  title,
  desc,
  delay,
  align,
}: {
  icon: (p: import('./icons').IconProps) => JSX.Element
  title: string
  desc: string
  delay: 1 | 2 | 3 | 4
  align: 'left' | 'right'
}) {
  return (
    <Reveal
      delay={delay}
      className={`rounded-2xl border border-plum-800/10 bg-white p-5 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card ${
        align === 'right' ? 'lg:text-right' : 'lg:text-left'
      }`}
    >
      <div className={`flex items-center gap-3 ${align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-olive-500/10 text-olive-600">
          <Icon className="h-5 w-5" />
        </span>
        <h4 className="font-display text-base text-plum-900">{title}</h4>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-plum-800/70">{desc}</p>
    </Reveal>
  )
}
