import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon, QuoteIcon, ChevronDownIcon } from 'lucide-react';
import { BRAND, IMAGES, SERVICES, SECTORS, STATS, PROCESS, TESTIMONIALS, CLIENT_LOGOS } from '../data/site';
import { Section, SectionHeading, Reveal, PrimaryButton, GhostButton, Eyebrow } from '../components/ui';
import { Component as LunarGravityCard } from '../components/ui/lunar-gravity-card';
import { CTABand } from '../components/CTABand';
import TestimonialsSection from '../components/ui/testimonials-3';

const SERVICE_CATEGORIES = [
  { title: 'Customer Support', items: ['Inbound and Outbound Call Center Services', 'Live Chat Support', 'Email Support'] },
  { title: 'Human Resources', items: ['Recruitment and Staffing', 'Employee Onboarding'] },
  { title: 'Back-Office Support', items: ['Document Management', 'Order Processing'] },
  { title: 'Legal Services', items: ['Legal Document Review'] },
  { title: 'IT Services', items: ['IT Help Desk', 'Software Development and Maintenance', 'Network Management'] },
  { title: 'Sales and Marketing', items: ['Lead Generation', 'Telemarketing', 'Sales Support'] },
  { title: 'Data Management', items: ['Data Entry', 'Data Processing', 'Data Analysis', 'Database Management'] },
  { title: 'Healthcare Services', items: ['Medical Coding and Billing', 'Claims Processing', 'Patient Support'] },
  { title: 'Customer Experience Management', items: ['Customer Feedback Analysis', 'Loyalty Programs', 'Customer Journey Mapping', 'Complaint Management'] },
  { title: 'Finance and Accounting', items: ['Bookkeeping', 'Accounts Payable/Receivable', 'Financial Reporting', 'Payroll Processing'] },
];

const HOW_TO_USE_STEPS = [
  { step: '01', title: 'Reach Out to Our Team', body: 'Contact us via phone, email, or our website to discuss your business needs and explore how we can assist you.' },
  { step: '02', title: 'Consultation and Needs Assessment', body: 'Schedule a consultation with our experts to assess your specific requirements and tailor our services to meet your objectives.' },
  { step: '03', title: 'Review and Approve Proposal', body: 'We will provide a detailed proposal outlining our solutions. Review the proposal and approve it to move forward.' },
  { step: '04', title: 'Seamless Service Integration', body: 'Our team will seamlessly integrate with your operations, providing exceptional support to enhance your business efficiency.' },
];

function AccordionItem({ title, items }: { title: string; items: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-ink-line rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-envic-50/50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-display text-base font-bold text-ink">{title}</span>
        <ChevronDownIcon className={`h-5 w-5 text-envic-500 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul className="px-5 pb-4 space-y-1.5 border-t border-ink-line bg-envic-50/30">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 pt-2">
              <CheckIcon className="h-4 w-4 flex-shrink-0 text-envic-500" />
              <span className="text-sm text-ink-muted">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

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
              <span key={`${i}-${name}`} className="font-display text-base md:text-lg font-semibold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <Section className="bg-white">
        <div className="text-center mb-14">
          <Eyebrow>Why Choose Us</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink">
            Lower Your Costs. Boost Your Leads.<br className="hidden sm:block" /> Simplify Your Business with ENVIC
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: (
                <svg className="h-8 w-8 text-envic-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-4-4h8M9 3h6a2 2 0 012 2v1H7V5a2 2 0 012-2zM3 10h18v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9z" />
                </svg>
              ),
              title: 'Easy System & Trusted: Save Your Money',
              img: IMAGES.office,
            },
            {
              icon: (
                <svg className="h-8 w-8 text-envic-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-1a4 4 0 00-4-4h-1M9 20H4v-1a4 4 0 014-4h1m6-4a4 4 0 11-8 0 4 4 0 018 0zm6 0a3 3 0 11-6 0 3 3 0 016 0zM3 10a3 3 0 116 0 3 3 0 01-6 0z" />
                </svg>
              ),
              title: 'Dedicated Customer Support Team Members',
              img: IMAGES.team,
            },
            {
              icon: (
                <svg className="h-8 w-8 text-envic-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z" />
                </svg>
              ),
              title: 'Professional Corporate BPO Services',
              img: IMAGES.about,
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="group rounded-3xl border border-ink-line bg-white overflow-hidden hover:-translate-y-1 hover:shadow-soft hover:border-envic-200 transition-all">
                <div className="flex items-center gap-3 px-6 pt-6 pb-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-envic-50 flex items-center justify-center transition-colors group-hover:bg-envic-500 group-hover:[&_svg]:text-white">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-base font-bold text-ink leading-snug">{item.title}</h3>
                </div>
                <div className="px-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-52 object-cover"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* About ENVIC Global */}
      <Section className="bg-ink-bg">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <div className="relative">
              <img
                src={IMAGES.cta}
                alt="About ENVIC Global"
                className="aspect-[4/3] w-full rounded-4xl object-cover shadow-soft"
              />
              <div className="absolute -right-4 -bottom-8 hidden rounded-3xl bg-envic-500 px-6 py-5 text-white shadow-lift sm:block">
                <p className="font-display text-3xl font-extrabold">5+</p>
                <p className="text-xs font-medium text-white/85">Years Of Experience</p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="About ENVIC Global"
              title="Empowering UK & US Businesses with Smart Outsourcing"
              body="ENVIC Global is a Sri Lanka-based outsourcing company supporting businesses across the UK and US. We specialize in delivering high-quality voice support, back-office operations, marketing services, and IT-enabled solutions to help our clients reduce costs and scale efficiently."
            />
            <p className="mt-4 text-sm leading-relaxed text-ink-muted max-w-lg">
              With deep expertise across industries like energy, telecom, home improvement, finance, healthcare, and travel, our team is dedicated to providing exceptional service and building long-term partnerships.
            </p>
            <ul className="mt-8 space-y-3">
              {['Leading BPO Services', 'Trusted Expertise', 'Commitment to Excellence'].map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-envic-500" />
                  <span className="text-sm font-semibold text-ink">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex gap-4 flex-wrap">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-envic-500 px-6 py-3 text-sm font-bold text-white hover:bg-envic-600 transition-colors">
                Meet Our Team <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-ink-line bg-white px-6 py-3 text-sm font-bold text-ink hover:border-envic-300 transition-colors">
                Contact Us <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

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

      {/* Our Services — Full Accordion */}
      <Section className="bg-white">
        <div className="text-center mb-14">
          <Eyebrow>Our Services</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink">
            Explore Our Popular Services That We Provide
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {SERVICE_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.04}>
              <AccordionItem title={cat.title} items={cat.items} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Free Trial Banner */}
      <Section className="bg-ink text-white">
        <div className="grid gap-10 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <Reveal>
            <div className="flex flex-col items-center justify-center rounded-3xl bg-envic-500 px-10 py-8 text-center shadow-lift">
              <span className="font-display text-6xl font-extrabold leading-none">7</span>
              <span className="mt-1 text-lg font-bold uppercase tracking-widest text-white/80">Days</span>
              <span className="mt-2 text-sm font-semibold text-envic-100">Free Trial</span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <div className="text-envic-400">
                <Eyebrow>Free Trial</Eyebrow>
              </div>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-white">
                Try Our Answering Service for Free
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70 max-w-xl">
                If you're not sure how a telephone answering service would work in your business, or whether we'd be the right provider for you, try us free for 7 days with no obligation. We'll onboard you like we would any customer, then demonstrate how our professional answering service can improve your customer service and help you grow — without paying a penny.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-envic-500 px-7 py-4 text-sm font-bold text-white hover:bg-envic-400 transition-colors whitespace-nowrap shadow-lg"
            >
              Request Your Free Trial
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
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

      {/* How to Utilize ENVIC's BPO Services */}
      <Section className="bg-ink-bg">
        <div className="text-center mb-14">
          <Eyebrow>Our Performance</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink">
            How to Utilize ENVIC Global's BPO Services
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {HOW_TO_USE_STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08}>
              <div className="relative h-full rounded-3xl bg-white border border-ink-line p-7 hover:border-envic-200 hover:shadow-soft transition-all">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display text-3xl font-extrabold text-envic-500/20">{step.step}</span>
                  <div className="h-10 w-10 rounded-full bg-envic-500 text-white flex items-center justify-center font-bold text-sm">
                    {parseInt(step.step)}
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Fun Facts */}
      <Section className="bg-envic-500 text-white">
        <div className="grid gap-8 md:grid-cols-3 text-center">
          {[
            { value: '1K+', label: 'Customer Profiles' },
            { value: '99%', label: 'Satisfied Customer' },
            { value: '05+', label: 'Years Of Experience' },
          ].map((fact, i) => (
            <Reveal key={fact.label} delay={i * 0.08}>
              <div className="py-4">
                <p className="font-display text-6xl font-extrabold text-white">{fact.value}</p>
                <p className="mt-3 text-base font-semibold text-white/80">{fact.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-ink-bg">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <Eyebrow>Clients Testimonials</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink">
            What Our Customers Say
          </h2>
        </div>
        <TestimonialsSection />
      </Section>

      <CTABand />
    </div>);

}