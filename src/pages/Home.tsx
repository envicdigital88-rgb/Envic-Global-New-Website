import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon, QuoteIcon } from 'lucide-react';
import { BRAND, IMAGES, SERVICES, SECTORS, STATS, PROCESS, TESTIMONIALS, CLIENT_LOGOS } from '../data/site';
import { Section, SectionHeading, Reveal, PrimaryButton, GhostButton, Eyebrow } from '../components/ui';
import { Component as LunarGravityCard } from '../components/ui/lunar-gravity-card';
import { CTABand } from '../components/CTABand';

export function Home() {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="w-full relative">
        <LunarGravityCard className="!min-h-[calc(100vh-80px)]" />
        <div
          className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 bg-envic-50/50 hover:bg-envic-100 border border-envic-200 rounded-full flex items-center justify-center z-50 text-envic-600 backdrop-blur-md transition-all hover:scale-110 shadow-sm"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            <path d="M2 12h20"></path>
          </svg>
        </div>
      </section>

      {/* Logo strip */}
      <section className="w-full border-y border-ink-line bg-white py-8 overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 mb-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted">
            Trusted by teams across energy, telecom and home improvement
          </p>
        </div>
        
        {/* Infinite Marquee Container */}
        <div className="relative flex w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-x-16 px-8 hover:[animation-play-state:paused]">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((name, i) => (
              <span key={`${i}-${name}`} className="font-display text-base md:text-lg font-semibold text-ink/35 whitespace-nowrap">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <Section className="bg-white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) =>
          <Reveal key={stat.label} delay={i * 0.07}>
              <div className="rounded-3xl border border-ink-line bg-ink-bg p-7">
                <p className="font-display text-4xl font-extrabold tracking-tight text-envic-600">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-ink-muted">{stat.label}</p>
              </div>
            </Reveal>
          )}
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-ink-bg">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title="Outsourced teams that feel like your own"
            body="Pick a single function or build a full offshore operation. Every engagement comes with named leadership, live reporting and a weekly review." />
          
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-envic-600">
            
            View all services
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) =>
          <Reveal key={service.slug} delay={i % 3 * 0.07}>
              <article className="group h-full rounded-3xl border border-ink-line bg-white p-7 transition-all hover:-translate-y-1 hover:border-envic-200 hover:shadow-soft">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-envic-50 text-envic-600 transition-colors group-hover:bg-envic-500 group-hover:text-white">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{service.summary}</p>
              </article>
            </Reveal>
          )}
        </div>
      </Section>

      {/* Sectors */}
      <Section className="bg-white">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative">
              <img
                src={IMAGES.team}
                alt="Customer support agents at work"
                className="aspect-[4/3] w-full rounded-4xl object-cover shadow-soft" />
              
              <div className="absolute -right-4 -bottom-8 hidden rounded-3xl bg-envic-500 px-6 py-5 text-white shadow-lift sm:block">
                <p className="font-display text-3xl font-extrabold">3</p>
                <p className="text-xs font-medium text-white/85">core sectors</p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Sector expertise"
              title="We already know your industry's edge cases"
              body="Deep specialisation means less ramp-up and fewer escalations. Our agents arrive knowing the regulations, the jargon and the moments customers churn." />
            
            <div className="mt-10 space-y-4">
              {SECTORS.map((sector, i) =>
              <Reveal key={sector.title} delay={i * 0.08}>
                  <div className="flex gap-5 rounded-3xl border border-ink-line p-6 transition-colors hover:border-envic-200 hover:bg-envic-50/40">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink text-envic-400">
                      <sector.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink">{sector.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{sector.body}</p>
                    </div>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-ink text-white">
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="How it works"
          title="From first call to live team in four weeks"
          body="A deliberately simple onboarding — so you spend your time on the business, not on managing a transition." />
        
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) =>
          <Reveal key={step.step} delay={i * 0.08}>
              <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <span className="font-display text-sm font-bold tracking-widest text-envic-400">
                  {step.step}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{step.body}</p>
              </div>
            </Reveal>
          )}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-white">
        <SectionHeading
          align="center"
          eyebrow="Client voices"
          title="The results our partners talk about" />
        
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) =>
          <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-ink-line bg-ink-bg p-8">
                <QuoteIcon className="h-7 w-7 text-envic-400" />
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-ink-soft">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-7 border-t border-ink-line pt-5">
                  <p className="font-display text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-muted">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          )}
        </div>
      </Section>

      <CTABand />
    </div>);

}