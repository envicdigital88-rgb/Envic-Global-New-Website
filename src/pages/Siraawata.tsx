import React from 'react';
import { Section, SectionHeading, Reveal, Eyebrow } from '../components/ui';
import { CTABand } from '../components/CTABand';
import { TargetIcon, EyeIcon, FlagIcon, UsersIcon, ShieldCheckIcon, RocketIcon } from 'lucide-react';

const VALUES = [
  {
    title: 'Our Mission',
    body: 'To make every Sri Lankan business discoverable online by creating a trusted platform where businesses and customers can connect, communicate and grow together.',
    icon: TargetIcon,
  },
  {
    title: 'Our Vision',
    body: "We believe finding businesses, products and services in Sri Lanka should be simple, transparent and intelligent. Tomorrow, we aim to become Sri Lanka's complete digital ecosystem.",
    icon: EyeIcon,
  },
  {
    title: 'Our Goal',
    body: "To become the first place every Sri Lankan visits when they're looking for anything local.",
    icon: FlagIcon,
  },
  {
    title: 'Community First',
    body: 'We believe local businesses are the backbone of Sri Lanka. Our mission is to help every entrepreneur reach more customers and grow with confidence.',
    icon: UsersIcon,
  },
  {
    title: 'Trust & Quality',
    body: 'Every business listing is reviewed to promote accurate information and build confidence between businesses and customers. Trust is at the heart of everything we do.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Innovation',
    body: 'Siraawata combines modern technology, intelligent search and AI-powered tools to simplify how Sri Lankans discover businesses, compare services and make better decisions.',
    icon: RocketIcon,
  }
];

export function Siraawata() {
  return (
    <div className="w-full bg-white">
      <section className="w-full">
        <img 
          src="/Screenshot 2026-08-17 180413.png" 
          alt="Siraawata Platform" 
          className="w-full h-auto object-cover border-b border-ink-line/20 shadow-soft relative z-10"
        />
      </section>

      <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-purple-50/30 pt-20 pb-24">
        {/* Decorative Background Orbs */}
        <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-purple-400/10 blur-[100px] pointer-events-none" />
        <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 h-[600px] w-[600px] rounded-full bg-green-400/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-5 sm:px-8">
          <div className="mb-8 flex justify-center">
            {/* Custom Siraawata Theme Eyebrow */}
            <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-700 ring-1 ring-purple-500/20 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
              Siraawata
            </span>
          </div>
          
          <h1 className="font-display text-4xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
            Where Sri Lanka's Businesses <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-green-500 drop-shadow-sm">
              Connect, Grow & Thrive
            </span>
          </h1>
          
          <p className="mx-auto mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-ink-muted/90 font-medium">
            Siraawata is building Sri Lanka's digital business ecosystem bringing businesses, professionals, products and customers together on one powerful platform. From discovering trusted local services to promoting businesses, buying and selling products, and exploring new opportunities, Siraawata makes it easier than ever to connect across the island.
          </p>
        </div>
      </section>

      <Section className="bg-ink-bg">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionHeading
            align="center"
            title="Why We Built Siraawata"
            body="We saw thousands of amazing Sri Lankan businesses struggling to be found online while customers spent too much time searching across multiple websites and social media pages. We believed there had to be a better way. Siraawata was created to bring everything together in one place making it easier to discover, compare and connect with trusted businesses throughout Sri Lanka."
          />
        </div>
        
        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2">
          {VALUES.map((val, i) => (
            <Reveal key={val.title} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-4xl bg-white p-8 transition-all hover:shadow-soft">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                  <val.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink">{val.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{val.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        title="Ready to Join Sri Lanka's Growing Business Network?"
        body="Create your free business profile today and start reaching customers across the island. Whether you're a small startup or an established brand, Siraawata gives your business the visibility it deserves."
      />
    </div>
  );
}
