import React, { useState } from 'react';
import { ArrowUpRightIcon, CheckIcon, ChevronDownIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { SERVICES, SECTORS, PROCESS, FAQS, IMAGES } from '../data/site';
import { Section, SectionHeading, Reveal, PageHero, PrimaryButton } from '../components/ui';
import { CTABand } from '../components/CTABand';

const ENGAGEMENTS = [
{
  name: 'Pilot Pod',
  price: 'From 2 agents',
  body: 'Prove the model on one queue or one campaign before you scale.',
  includes: ['Dedicated agents', 'Shared team leader', 'Weekly reporting', '30-day rolling term']
},
{
  name: 'Dedicated Team',
  price: 'From 8 agents',
  body: 'Your own named squad with leadership, QA and coverage built to your hours.',
  includes: ['Named team leader', 'Dedicated QA analyst', 'Live dashboards', 'Recruit-to-spec hiring'],
  featured: true
},
{
  name: 'Managed Operation',
  price: '25+ agents',
  body: 'A full offshore function — multichannel, multi-shift, with operational ownership.',
  includes: ['Ops manager on account', 'Multi-shift coverage', 'Process re-engineering', 'Quarterly business reviews']
}];


export function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full bg-white">
      <PageHero
        eyebrow="Our services"
        title="Every part of the customer journey, handled"
        body="Support, sales and back-office capability delivered from Colombo to UK and US service standards — with the reporting to prove it."
        image={IMAGES.team} />
      

      <Section className="relative overflow-hidden bg-ink-bg">
        <div className="pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full border-[40px] border-envic-100/70" />
        <div className="relative">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="The right team for every important conversation"
              body="Pick the capability you need now. Add the next one when your operation is ready to grow."
            />
            <div className="flex shrink-0 items-center gap-4 border-l-2 border-envic-500 pl-5 lg:mb-2">
              <span className="font-display text-4xl font-bold text-ink">06</span>
              <span className="max-w-[9rem] text-xs font-semibold uppercase leading-relaxed tracking-[0.14em] text-ink-muted">Core capabilities, one accountable partner</span>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            {SERVICES.map((service, i) => {
              const featured = i === 0;
              const columnSpan = featured ? 'lg:col-span-7' : i === 1 ? 'lg:col-span-5' : 'lg:col-span-4';
              return (
                <Reveal key={service.slug} delay={i * 0.06} className={`h-full ${columnSpan}`}>
                  <article className={`group relative flex h-full min-h-[21rem] flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-8 ${
                    featured ? 'bg-ink text-white' : 'border border-ink-line bg-white text-ink'
                  }`}>
                    <div className="flex items-start justify-between gap-5">
                      <div className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${featured ? 'bg-envic-500 text-white' : 'bg-envic-50 text-envic-600'}`}>
                        <service.icon className="h-5 w-5" />
                      </div>
                      <span className={`font-display text-4xl font-bold leading-none ${featured ? 'text-white/10' : 'text-envic-100'}`}>{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="mt-10">
                      <h2 className={`font-display text-xl font-bold ${featured ? 'text-white' : 'text-ink'}`}>{service.title}</h2>
                      <p className={`mt-3 max-w-xl text-sm leading-relaxed ${featured ? 'text-white/70' : 'text-ink-muted'}`}>{service.summary}</p>
                    </div>
                    <ul className={`mt-auto space-y-2.5 border-t pt-6 ${featured ? 'border-white/10' : 'border-ink-line'}`}>
                      {service.points.map((point) =>
                        <li key={point} className={`flex items-start gap-3 text-sm ${featured ? 'text-white/80' : 'text-ink-soft'}`}>
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-envic-500" />
                          {point}
                        </li>
                      )}
                    </ul>
                    <ArrowUpRightIcon className={`absolute bottom-7 right-7 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${featured ? 'text-envic-400' : 'text-envic-500'}`} />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Sectors */}
      <Section className="bg-ink-bg">
        <SectionHeading
          align="center"
          eyebrow="Sectors we serve"
          title="Specialists, not generalists"
          body="We keep our focus narrow so our agents know your product, regulations and customers before day one." />
        
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {SECTORS.map((sector, i) =>
          <Reveal key={sector.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl bg-white p-8">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-envic-400">
                  <sector.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-ink">{sector.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{sector.body}</p>
              </div>
            </Reveal>
          )}
        </div>
      </Section>

      {/* Engagement models */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="Engagement models"
          title="Start small or hand over the whole function"
          body="Pricing is per agent, per month, all-in. No hidden platform fees or set-up charges." />
        
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {ENGAGEMENTS.map((plan, i) =>
          <Reveal key={plan.name} delay={i * 0.08}>
              <div
              className={`flex h-full flex-col rounded-4xl p-8 ${
              plan.featured ?
              'bg-ink text-white shadow-lift' :
              'border border-ink-line bg-white text-ink'}`
              }>
              
                {plan.featured &&
              <span className="mb-4 inline-flex w-fit rounded-full bg-envic-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                    Most popular
                  </span>
              }
                <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                <p className={`mt-1 text-sm font-semibold ${plan.featured ? 'text-envic-400' : 'text-envic-600'}`}>
                  {plan.price}
                </p>
                <p className={`mt-4 text-sm leading-relaxed ${plan.featured ? 'text-white/70' : 'text-ink-muted'}`}>
                  {plan.body}
                </p>
                <ul className={`mt-6 flex-1 space-y-2.5 border-t pt-6 text-sm ${plan.featured ? 'border-white/10 text-white/80' : 'border-ink-line text-ink-soft'}`}>
                  {plan.includes.map((item) =>
                <li key={item} className="flex items-start gap-3">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-envic-500" />
                      {item}
                    </li>
                )}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
        <div className="mt-10">
          <PrimaryButton to="/contact">Get a delivery blueprint</PrimaryButton>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-ink-bg">
        <SectionHeading eyebrow="Onboarding" title="What the first month looks like" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) =>
          <Reveal key={step.step} delay={i * 0.07}>
              <div className="h-full rounded-3xl bg-white p-7">
                <span className="font-display text-sm font-bold tracking-widest text-envic-600">{step.step}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{step.body}</p>
              </div>
            </Reveal>
          )}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <SectionHeading eyebrow="FAQ" title="The questions we get asked most" />
          <div className="divide-y divide-ink-line border-y border-ink-line">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left">
                    
                    <span className="font-display text-base font-semibold text-ink">{faq.q}</span>
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-envic-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen &&
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden">
                      
                        <p className="pb-6 pr-10 text-sm leading-relaxed text-ink-muted">{faq.a}</p>
                      </motion.div>
                    }
                  </AnimatePresence>
                </div>);

            })}
          </div>
        </div>
      </Section>

      <CTABand title="Tell us which function is hurting most." />
    </div>);

}