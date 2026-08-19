import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { BRAND } from '../data/site';
import { Reveal } from './ui';

export function CTABand({
  title = 'Ready to hand off the work that slows you down?',
  body = 'Book a 30-minute discovery call. We will map your volumes, show you a delivery model and give you honest pricing — no obligation.'
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="w-full bg-white py-10 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-5xl bg-gradient-to-br from-envic-500 to-envic-700 px-6 py-14 sm:px-12 lg:px-16 lg:py-20 shadow-xl shadow-envic-500/20">
            {/* Decorative background elements */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-ink/10 blur-2xl" />
            
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_auto]">
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                  {title}
                </h2>
                <p className="mt-5 text-lg font-medium leading-relaxed text-envic-50">{body}</p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-bold text-white transition-all hover:bg-ink-muted hover:shadow-lg hover:-translate-y-0.5">
                    Book a call
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/25 hover:border-white/40">
                    {BRAND.email}
                  </a>
                </div>
              </div>
              <div className="hidden justify-self-end lg:block">
                <img 
                  src={BRAND.mascot} 
                  alt="" 
                  className="h-64 w-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105 hover:-rotate-2" 
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}