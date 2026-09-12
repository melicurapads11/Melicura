import { nav, contact } from '../content'
import logo from '../assets/images/logo.webp'
import darkFoliageBg from '../assets/backgrounds/dark-foliage.webp'
import SectionBackground from './SectionBackground'
import { PhoneIcon, MailIcon, MapPinIcon, IndiaFlagIcon } from './icons'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20">
      <SectionBackground src={darkFoliageBg} overlay="plum-strong" position="20% center" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(220,165,75,0.06),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <img src={logo} alt="Melicura logo" className="h-12 w-12 rounded-full shadow-gold" />
              <span className="font-display text-xl text-cream-50">
                Melicura<span className="align-super text-[0.5em] text-gold-400">™</span>
              </span>
            </a>
            <p className="mt-4 font-display italic text-gold-300">
              “Gentle by Nature. Trusted by Women.”
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream-100/60">
              Herbal Sanitary Pads by Sri Murugan Enterprises.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-400/80">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-cream-100/65 transition-colors hover:text-gold-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-400/80">
              Company
            </h4>
            <div className="mt-5 space-y-3 text-sm text-cream-100/65">
              <p className="font-medium text-cream-100/85">{contact.company}</p>
              <p className="leading-relaxed">{contact.manufacturerAddress}</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-400/80">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-cream-100/65">
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{contact.careAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="h-4 w-4 shrink-0 text-gold-400" />
                <a
                  href={`tel:${contact.phone.split('/')[0].trim().replace(/\s+/g, '')}`}
                  className="hover:text-gold-300"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={`mailto:${contact.email}`} className="hover:text-gold-300">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-cream-50/10 py-7 sm:flex-row">
          <p className="text-xs text-cream-100/50">© 2026 Melicura™. All rights reserved.</p>
          <div className="flex items-center gap-2 text-xs text-cream-100/50">
            <IndiaFlagIcon className="h-4 w-4 text-gold-400" />
            Made in India
          </div>
        </div>
      </div>
    </footer>
  )
}
