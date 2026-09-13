import { productSpec, disclaimer } from '../content'
import Reveal from './Reveal'
import SectionBackground from './SectionBackground'
import SectionDivider from './SectionDivider'
import backDesign from '../assets/images/back-design.webp'
import aloeBg from '../assets/backgrounds/hero-aloe.webp'

const commonRows: [string, string][] = [
  ['Brand', productSpec.brand],
  ['Category', productSpec.category],
  ['Manufacturer / Marketer', productSpec.manufacturer],
  ['Best Before', productSpec.bestBefore],
  ['Pack', '6 N Pads'],
]

export default function ProductDetails() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <SectionBackground src={aloeBg} overlay="cream-strong" position="70% center" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label justify-center">
            <span className="h-px w-8 bg-gold-400" />
            Product Details
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-plum-900 sm:text-4xl lg:text-[2.6rem]">
            Specifications
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-br from-plum-800 to-plum-900" />
              <img
                src={backDesign}
                alt="Melicura package back panel showing product specifications"
                className="w-full rounded-2xl shadow-card"
                loading="lazy"
                width={1300}
                height={971}
              />
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="overflow-hidden rounded-2xl border border-plum-900/10 bg-white shadow-soft">
              {/* Size variant header row */}
              <div className="grid grid-cols-3 border-b border-plum-900/8 bg-plum-900 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gold-300">
                <span>Specification</span>
                <span className="text-center">XL</span>
                <span className="text-center">XXL</span>
              </div>
              {/* Variant-specific rows */}
              <div className="grid grid-cols-3 items-center border-b border-plum-900/8 bg-cream-50/60 px-6 py-4 gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-plum-800/50">Size</span>
                <span className="text-center font-display text-base text-plum-900">XL – Extra Long</span>
                <span className="text-center font-display text-base text-plum-900">XXL – Extra Extra Long</span>
              </div>
              <div className="grid grid-cols-3 items-center border-b border-plum-900/8 px-6 py-4 gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-plum-800/50">Length</span>
                <span className="text-center font-display text-base text-plum-900">280 mm</span>
                <span className="text-center font-display text-base text-plum-900">320 mm</span>
              </div>
              {/* Common rows */}
              {commonRows.map(([label, value], i) => (
                <div
                  key={label}
                  className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${
                    i !== commonRows.length - 1 ? 'border-b border-plum-900/8' : ''
                  } ${i % 2 === 0 ? 'bg-cream-50/60' : ''}`}
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-plum-800/50">
                    {label}
                  </span>
                  <span className="font-display text-base text-plum-900">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-gold-400/30 bg-gold-200/10 px-6 py-5">
              <p className="text-xs leading-relaxed text-plum-800/70">
                <span className="font-semibold text-plum-800">Disclaimer:</span> {disclaimer}
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <SectionDivider color="fill-plum-900" />
    </section>
  )
}
