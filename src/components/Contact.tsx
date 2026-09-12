import { useState, type FormEvent } from 'react'
import { contact } from '../content'
import { PhoneIcon, MailIcon, MapPinIcon, SendIcon } from './icons'
import Reveal from './Reveal'
import SectionBackground from './SectionBackground'
import gardenBg from '../assets/backgrounds/garden-path.webp'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbgjezvn'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <SectionBackground src={gardenBg} overlay="plum-strong" position="center 60%" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,137,73,0.10),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label justify-center">
            <span className="h-px w-8 bg-gold-400" />
            Contact Us
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-cream-50 sm:text-4xl lg:text-[2.6rem]">
            We'd love to hear from you
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Contact info */}
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-3xl border border-cream-50/10 bg-plum-800/70 p-8 backdrop-blur-sm">
              <h3 className="font-display text-xl text-cream-50">
                Melicura<span className="align-super text-[0.6em] text-gold-400">™</span>
              </h3>
              <p className="mt-1 text-sm text-gold-300">Manufactured &amp; Marketed by {contact.company}</p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-400/10 text-gold-300">
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-cream-50">Location</p>
                    <p className="mt-1 text-sm leading-relaxed text-cream-100/70">
                      {contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-400/10 text-gold-300">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-cream-50">Call Consumer Care</p>
                    <a
                      href={`tel:${contact.phone.split('/')[0].trim().replace(/\s+/g, '')}`}
                      className="mt-1 block text-sm text-cream-100/70 transition-colors hover:text-gold-300"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-400/10 text-gold-300">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-cream-50">Email</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="mt-1 block text-sm text-cream-100/70 transition-colors hover:text-gold-300"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact form (submits to Formspree) */}
          <Reveal delay={1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-cream-50/10 bg-cream-50 p-8 shadow-card sm:p-10"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-plum-800/60">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-plum-900/10 bg-white px-4 py-3 text-sm text-plum-900 placeholder:text-plum-800/35 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-plum-800/60">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full rounded-xl border border-plum-900/10 bg-white px-4 py-3 text-sm text-plum-900 placeholder:text-plum-800/35 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-plum-800/60">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-plum-900/10 bg-white px-4 py-3 text-sm text-plum-900 placeholder:text-plum-800/35 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-plum-800/60">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="How can we help?"
                    className="w-full resize-none rounded-xl border border-plum-900/10 bg-white px-4 py-3 text-sm text-plum-900 placeholder:text-plum-800/35 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary mt-6 w-full disabled:opacity-60 sm:w-auto"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
                <SendIcon className="h-4 w-4" />
              </button>

              <p
                role="status"
                className={`mt-4 text-sm transition-opacity duration-300 ${
                  status === 'success' || status === 'error' ? 'opacity-100' : 'opacity-0'
                } ${status === 'error' ? 'text-red-600' : 'text-olive-700'}`}
              >
                {status === 'error'
                  ? 'Something went wrong sending your message. Please try again or email us directly.'
                  : 'Thank you — your message has been sent. We’ll get back to you soon.'}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
