import { useState } from 'react'
import packageFrontXL from '../assets/images/package-front.webp'
import packageFrontXXL from '../assets/images/package-front-xxl.webp'
import backDesign from '../assets/images/back-design.webp'
import showcaseBg from '../assets/backgrounds/leaves-bowl.webp'
import Reveal from './Reveal'
import SectionBackground from './SectionBackground'
import SectionDivider from './SectionDivider'
import { LeafIcon, LayersIcon, DropletIcon, WingIcon, FlaskIcon, SparkleIcon } from './icons'

const details = [
  { icon: LeafIcon, title: 'Herbal Infused', desc: 'Goodness of 3 herbs — Melia Dubia, Aloe Vera & Mint.' },
  { icon: SparkleIcon, title: 'Herbs Benefits', desc: 'Nature-powered care infused into every layer.' },
  { icon: LayersIcon, title: '6 Layer Protection', desc: 'Complete peace of mind, layer by layer.' },
  { icon: DropletIcon, title: 'Quick Absorption up to 80ml', desc: 'Stays dry and comfortable throughout the day.' },
  { icon: WingIcon, title: 'Dual Wings & Wider Back', desc: 'Extra security exactly where you need it.' },
  { icon: FlaskIcon, title: 'Free from Artificial Fragrance', desc: 'No synthetic scents — pure and gentle on skin.' },
]

const variants = [
  {
    label: 'XL',
    sublabel: 'Extra Long',
    length: '280mm',
    image: packageFrontXL,
    alt: 'Melicura Herbal Sanitary Pads XL 280mm, 6 pad pack',
  },
  {
    label: 'XXL',
    sublabel: 'Extra Extra Long',
    length: '320mm',
    image: packageFrontXXL,
    alt: 'Melicura Herbal Sanitary Pads XXL 320mm, 6 pad pack',
  },
]

export default function ProductShowcase() {
  const [activeVariant, setActiveVariant] = useState(0)
  const v = variants[activeVariant]

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
          <p className="mt-3 text-sm font-medium text-olive-700 italic">
            Gentle by Nature. Trusted by Women. For Women, By Women.
          </p>

          {/* Size switcher */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-plum-900/12 bg-white/80 p-1 shadow-soft backdrop-blur-sm">
            {variants.map((variant, i) => (
              <button
                key={variant.label}
                id={`variant-btn-${variant.label.toLowerCase()}`}
                onClick={() => setActiveVariant(i)}
                className={`relative rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ${
                  activeVariant === i
                    ? 'bg-plum-900 text-gold-300 shadow-md'
                    : 'text-plum-700 hover:text-plum-900'
                }`}
              >
                {variant.label}
                <span className="ml-1.5 text-xs font-normal opacity-75">· {variant.length}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1.15fr_1fr] lg:gap-8">
          {/* Left detail cards */}
          <div className="order-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:order-1 lg:grid-cols-1">
            {details.slice(0, 3).map((d, i) => (
              <DetailCard key={d.title} {...d} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} align="right" />
            ))}
          </div>

          {/* Center product image — switches between XL and XXL */}
          <Reveal className="order-1 lg:order-2" delay={2}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(139,137,73,0.18),transparent_65%)] blur-2xl" />
              <img
                key={v.label}
                src={v.image}
                alt={v.alt}
                className="w-full drop-shadow-2xl transition-all duration-500"
                loading="lazy"
                width={1300}
                height={968}
              />
              {/* Size badge overlay */}
              <div className="absolute right-2 top-2 rounded-full bg-plum-900/80 px-3 py-1 text-xs font-bold text-gold-300 backdrop-blur-sm">
                {v.label} · {v.length}
              </div>
            </div>
          </Reveal>

          {/* Right detail cards */}
          <div className="order-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {details.slice(3, 6).map((d, i) => (
              <DetailCard key={d.title} {...d} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} align="left" />
            ))}
          </div>
        </div>

        {/* Back design secondary visual with 3D Anatomy */}
        <Reveal className="mt-24 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="rounded-3xl border border-plum-900/10 bg-cream-50/95 p-8 sm:p-10 shadow-card backdrop-blur-md">
              <p className="section-label">
                <span className="h-px w-8 bg-gold-500" />
                Pad Structure &amp; Anatomy
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold text-plum-950 sm:text-3xl">
                A closer look at what protects you
              </h3>
              <p className="mt-5 text-base leading-relaxed text-plum-900/85">
                The herbal comfort patch runs through the centre of every Melicura pad — engineered with a 6-layer 3D anatomy and wider-back design for confident, all-round protection.
              </p>
              <ul className="mt-6 space-y-3.5 text-sm font-medium text-plum-900">
                <li className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-gold-700">✓</span>
                  <span>XL — 280mm &amp; XXL — 320mm extra long lengths</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-gold-700">✓</span>
                  <span>Herbal comfort patch at core with Melia Dubia, Aloe Vera &amp; Mint</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-gold-700">✓</span>
                  <span>6-layer quick-absorbing protection up to 80ml</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-gold-700">✓</span>
                  <span>Wider back with dual wings for stay-in-place security</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="relative mx-auto w-full">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-plum-900/25 via-gold-400/15 to-transparent blur-xl" />
              <div className="overflow-hidden rounded-2xl border border-plum-900/15 bg-plum-950/20 p-2 shadow-2xl backdrop-blur-sm sm:p-3">
                <img
                  src={backDesign}
                  alt="Melicura Pad 3D Anatomy of Comfort and 6-layer structure"
                  className="w-full rounded-xl shadow-lg transition-transform duration-500 hover:scale-[1.01]"
                  loading="lazy"
                  width={1300}
                  height={971}
                />
              </div>
              <p className="mt-3 text-center text-xs font-semibold text-plum-900/70">
                Packaging back view — Anatomy of Comfort &amp; 6-Layer Protection
              </p>
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
