import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon, QuoteIcon } from 'lucide-react';
import { BRAND, IMAGES, SERVICES, SECTORS, STATS, PROCESS, TESTIMONIALS, CLIENT_LOGOS } from '../data/site';
import { Section, SectionHeading, Reveal, PrimaryButton, GhostButton, Eyebrow } from '../components/ui';
import { CTABand } from '../components/CTABand';

export function Home() {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-white">
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[42%] rounded-bl-[9rem] bg-envic-50 lg:block" />
        <div className="dotted-ring pointer-events-none absolute -left-20 top-40 h-64 w-64 rounded-full opacity-[0.10]" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:py-24">
          <div>
            <Eyebrow>Colombo · Serving UK &amp; US</Eyebrow>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-ink sm:text-5xl lg:text-[4rem]">
              A leading BPO for{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-envic-600">growing</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-1.5 left-0 z-0 h-3 w-full origin-left rounded bg-envic-200" />
                
              </span>{' '}
              UK &amp; US businesses
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
              Based in Sri Lanka, we deliver high-quality back-office solutions, lead generation and
              customer support for energy, telecom and home improvement companies — built to lift
              satisfaction and drive measurable growth.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <PrimaryButton to="/contact">Book a call</PrimaryButton>
              <GhostButton to="/services">Explore services</GhostButton>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {['Live in 3–4 weeks', 'GDPR-aligned delivery', 'From 2 agents up'].map((item) =>
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-ink-muted">
                  <CheckIcon className="h-4 w-4 text-envic-500" />
                  {item}
                </li>
              )}
            </ul>
          </div>

          <div className="relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              src={IMAGES.hero}
              alt="ENVIC Global team members collaborating in the Colombo office"
              className="aspect-[4/5] w-full rounded-[2.75rem] object-cover shadow-lift" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="absolute -bottom-6 left-4 flex items-center gap-4 rounded-3xl bg-white px-5 py-4 shadow-lift ring-1 ring-ink-line sm:left-6">
              
              <img src={BRAND.mascot} alt="" className="h-12 w-12 object-contain" />
              <div>
                <p className="font-display text-sm font-bold text-ink">96% average CSAT</p>
                <p className="text-xs text-ink-muted">across all live accounts</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo strip */}
      <section className="w-full border-y border-ink-line bg-white py-8">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted">
            Trusted by teams across energy, telecom and home improvement
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {CLIENT_LOGOS.map((name) =>
            <span key={name} className="font-display text-base font-semibold text-ink/35">
                {name}
              </span>
            )}
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