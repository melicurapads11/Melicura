import { useEffect, useState } from 'react'
import { nav } from '../content'
import { MenuIcon, CloseIcon } from './icons'
import logo from '../assets/images/logo.webp'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector<HTMLElement>(n.href))
      .filter((el): el is HTMLElement => !!el)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-plum-800/95 backdrop-blur-md shadow-card py-2.5'
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Melicura logo"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow-gold"
          />
          <span className="font-display text-xl sm:text-2xl tracking-wide text-cream-50">
            Melicura<span className="align-super text-[0.5em] text-gold-400">™</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-cream-100/90">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`relative py-1 transition-colors duration-300 hover:text-gold-300 ${
                  active === item.href ? 'text-gold-300' : ''
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold-400 transition-all duration-300 ${
                    active === item.href ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a href="#product" className="hidden lg:inline-flex btn-primary !py-2.5 !px-6 text-xs">
          Discover Melicura
        </a>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-cream-50 p-2 -mr-2"
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 pb-6 pt-2">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-3 text-base font-medium text-cream-100 transition-colors hover:bg-plum-700/60 hover:text-gold-300 ${
                  active === item.href ? 'text-gold-300' : ''
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#product"
              onClick={() => setOpen(false)}
              className="btn-primary w-full !py-3"
            >
              Discover Melicura
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
