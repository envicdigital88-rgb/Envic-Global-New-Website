import React from 'react';
import { QuoteIcon, StarIcon } from 'lucide-react';
import { CASE_STUDIES, CLIENT_LOGOS, TESTIMONIALS, IMAGES, SECTORS } from '../data/site';
import { Section, SectionHeading, Reveal, PageHero } from '../components/ui';
import { CTABand } from '../components/CTABand';

export function Clients() {
  return (
    <div className="w-full bg-white">
      <PageHero
        eyebrow="Our clients"
        title="Work we're proud to put our name on"
        body="From winter billing surges to installer pipelines, here is what our teams have changed for UK and US businesses."
        image={IMAGES.office} />
      

      {/* Logos */}
      <Section className="bg-white">
        <SectionHeading align="center" eyebrow="Who we work with" title="Brands across three sectors" />
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-4xl border border-ink-line bg-ink-line sm:grid-cols-4">
          {CLIENT_LOGOS.map((name) =>
          <div key={name} className="flex h-28 items-center justify-center bg-white px-4">
              <span className="text-center font-display text-base font-semibold text-ink/40">{name}</span>
            </div>
          )}
        </div>
      </Section>

      {/* Case studies */}
      <Section className="bg-ink-bg">
        <SectionHeading eyebrow="Case studies" title="Three problems, three fixes" />
        <div className="mt-14 space-y-6">
          {CASE_STUDIES.map((study, i) =>
          <Reveal key={study.title} delay={i * 0.06}>
              <article className="grid gap-8 rounded-4xl bg-white p-8 lg:grid-cols-[1.6fr_1fr] lg:items-center lg:p-10">
                <div>
                  <span className="inline-flex rounded-full bg-envic-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-envic-700">
                    {study.sector}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold leading-snug text-ink">{study.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">{study.body}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {study.metrics.map((metric) =>
                <div key={metric.label} className="rounded-3xl bg-ink-bg p-6 text-center">
                      <p className="font-display text-3xl font-extrabold tracking-tight text-envic-600">
                        {metric.value}
                      </p>
                      <p className="mt-2 text-xs font-medium text-ink-muted">{metric.label}</p>
                    </div>
                )}
                </div>
              </article>
            </Reveal>
          )}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-white">
        <SectionHeading align="center" eyebrow="Testimonials" title="In their words" />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) =>
          <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-ink-line p-8">
                <div className="flex items-center gap-1 text-envic-500">
                  {Array.from({ length: 5 }).map((_, idx) =>
                <StarIcon key={idx} className="h-4 w-4 fill-current" />
                )}
                </div>
                <QuoteIcon className="mt-6 h-6 w-6 text-envic-300" />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink-soft">“{t.quote}”</blockquote>
                <figcaption className="mt-7 border-t border-ink-line pt-5">
                  <p className="font-display text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-muted">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          )}
        </div>
      </Section>

      {/* Sector strip */}
      <Section className="bg-ink text-white">
        <SectionHeading tone="dark" eyebrow="Where we deliver most" title="Sectors our clients come from" />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {SECTORS.map((sector, i) =>
          <Reveal key={sector.title} delay={i * 0.07}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <sector.icon className="h-6 w-6 text-envic-400" />
                <h3 className="mt-5 font-display text-lg font-bold text-white">{sector.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{sector.body}</p>
              </div>
            </Reveal>
          )}
        </div>
      </Section>

      <CTABand title="Your case study could be next." />
    </div>);

}