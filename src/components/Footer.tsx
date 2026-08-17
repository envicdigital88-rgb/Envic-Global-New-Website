import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from 'lucide-react';
import { BRAND, NAV, SERVICES } from '../data/site';

export function Footer() {
  return (
    <footer className="w-full bg-ink text-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="inline-flex rounded-2xl bg-white px-4 py-3">
              <img src={BRAND.logo} alt={BRAND.name} className="h-8 w-auto" />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
              Colombo-based BPO delivering customer support, lead generation and back-office
              operations for energy, telecom and home improvement businesses across the UK and US.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
              { Icon: LinkedinIcon, label: 'LinkedIn' },
              { Icon: FacebookIcon, label: 'Facebook' },
              { Icon: InstagramIcon, label: 'Instagram' }].
              map(({ Icon, label }) =>
              <a
                key={label}
                href="#"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-envic-500">
                
                  <Icon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-envic-400">
              Company
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {NAV.map((item) =>
              <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-envic-400">
              Services
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {SERVICES.map((s) =>
              <li key={s.slug}>
                  <Link to="/services" className="transition-colors hover:text-white">
                    {s.title}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-envic-400">
              Get in touch
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-envic-400" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-white">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-envic-400" />
                <div>
                  <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`} className="block hover:text-white">
                    {BRAND.phone}
                  </a>
                  <a href={`tel:${BRAND.ukPhone.replace(/\s/g, '')}`} className="block hover:text-white">
                    {BRAND.ukPhone} (UK)
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-envic-400" />
                <span>{BRAND.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>);

}