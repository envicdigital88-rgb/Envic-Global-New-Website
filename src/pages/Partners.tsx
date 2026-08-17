import React from 'react';
import { CheckIcon } from 'lucide-react';
import { PARTNER_TYPES, IMAGES, BRAND } from '../data/site';
import { Section, SectionHeading, Reveal, PageHero, PrimaryButton } from '../components/ui';
import { CTABand } from '../components/CTABand';

const STEPS = [
{ step: '01', title: 'Introduce', body: 'Send us the opportunity or bring us into the conversation — whichever suits your relationship.' },
{ step: '02', title: 'Scope together', body: 'We build the delivery model and pricing with you, branded however the deal requires.' },
{ step: '03', title: 'We deliver', body: 'Our Colombo teams run the operation to the agreed SLAs, with you in every review.' },
{ step: '04', title: 'You get paid', body: 'Recurring commission or margin for as long as the account runs. Paid monthly, no clawbacks.' }];


const BENEFITS = [
'No minimum volume commitments',
'Named partner manager from day one',
'Co-branded proposals and pitch support',
'Transparent, per-seat pricing you can build margin on',
'Delivery reporting you can pass straight to your client',
'Rapid recruitment — most pods live within four weeks'];


export function Partners() {
  return (
    <div className="w-full bg-white">
      <PageHero
        eyebrow="Partners"
        title="Add offshore delivery to what you already sell"
        body="Agencies, consultancies and platforms partner with ENVIC Global to give their clients capacity without building an operation of their own."
        image={IMAGES.about} />
      

      <Section className="bg-white">
        <SectionHeading
          eyebrow="Partnership models"
          title="Three ways to work with us"
          body="Pick the model that fits your relationship with the client — refer it, white-label it, or plug us into your platform." />
        
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PARTNER_TYPES.map((type, i) =>
          <Reveal key={type.title} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-4xl border border-ink-line p-8 transition-all hover:border-envic-200 hover:shadow-soft">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-envic-50 text-envic-600">
                  <type.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink">{type.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{type.body}</p>
                <ul className="mt-6 space-y-2.5 border-t border-ink-line pt-6">
                  {type.perks.map((perk) =>
                <li key={perk} className="flex items-start gap-3 text-sm text-ink-soft">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-envic-500" />
                      {perk}
                    </li>
                )}
                </ul>
              </article>
            </Reveal>
          )}
        </div>
      </Section>

      <Section className="bg-ink-bg">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Why partner with us" title="Margin you can rely on, delivery you can defend" />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {BENEFITS.map((benefit, i) =>
              <Reveal key={benefit} delay={i * 0.05}>
                  <li className="flex items-start gap-3 rounded-2xl bg-white p-5 text-sm leading-relaxed text-ink-soft">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-envic-500" />
                    {benefit}
                  </li>
                </Reveal>
              )}
            </ul>
          </div>
          <Reveal>
            <div className="relative">
              <img
                src={IMAGES.cta}
                alt="An ENVIC Global agent supporting a client account"
                className="aspect-square w-full rounded-4xl object-cover shadow-soft" />
              
              <div className="absolute -bottom-6 -left-4 flex items-center gap-4 rounded-3xl bg-white px-5 py-4 shadow-lift ring-1 ring-ink-line">
                <img src={BRAND.mascot} alt="" className="h-11 w-11 object-contain" />
                <p className="max-w-[10rem] text-xs font-medium leading-snug text-ink-muted">
                  Your client sees your brand. Envi does the heavy lifting.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-ink text-white">
        <SectionHeading tone="dark" align="center" eyebrow="How it works" title="Four steps from introduction to income" />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) =>
          <Reveal key={step.step} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <span className="font-display text-sm font-bold tracking-widest text-envic-400">{step.step}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{step.body}</p>
              </div>
            </Reveal>
          )}
        </div>
        <div className="mt-12 flex justify-center">
          <PrimaryButton to="/contact">Become a partner</PrimaryButton>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading
          align="center"
          eyebrow="Clients Testimonials"
          title="What Our Customers Say About ENVIC Global" 
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-4 sm:grid-cols-2">
          {[
            { name: 'Abishek Rathode', role: 'Manager Claims', rating: '4.8' },
            { name: 'Michael Joseph', role: 'Director Operations', rating: '4.9' },
            { name: 'Robert Webstar', role: 'Head of Center', rating: '4.7' },
            { name: 'Ben Mark', role: 'Director Client Services', rating: '4.7' }
          ].map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-ink-line bg-ink-bg p-8 items-center text-center">
                <div className="text-envic-500 font-bold text-xl mb-4">{t.rating} / 5 Stars</div>
                <figcaption className="mt-auto pt-5">
                  <p className="font-display text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-muted">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <SectionHeading align="center" eyebrow="Popular Clients" title="We’ve 15+ Global Premium Clients" />
        </div>
      </Section>

      <CTABand
        title="Let's talk about your client pipeline."
        body="Tell us what your clients keep asking for. We'll show you how a partnership would work commercially and operationally." />
      
    </div>);

}