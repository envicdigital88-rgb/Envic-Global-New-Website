import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { BRAND } from '../data/site';
import { Reveal } from './ui';

export function CTABand({
  title = 'Ready to hand off the work that slows you down?',
  body = 'Book a 30-minute discovery call. We will map your volumes, show you a delivery model and give you honest pricing — no obligation.'



}: {title?: string;body?: string;}) {
  return (
    <section className="w-full bg-white pb-20 lg:pb-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-5xl bg-ink px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
            <div className="dotted-ring pointer-events-none absolute -left-16 -bottom-20 h-72 w-72 rounded-full opacity-20" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_auto]">
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                  {title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/70">{body}</p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-envic-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-envic-400">
                    
                    Book a call
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                    
                    {BRAND.email}
                  </a>
                </div>
              </div>
              <div className="hidden justify-self-end lg:block">
                <img src={BRAND.mascot} alt="" className="h-52 w-auto object-contain drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}