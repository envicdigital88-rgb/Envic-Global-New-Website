import React from 'react';
import { Section, SectionHeading, Reveal, PageHero } from '../components/ui';
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
      <PageHero
        eyebrow="Siraawata"
        title="Where Sri Lanka's Businesses Connect, Grow & Thrive"
        body="Siraawata is building Sri Lanka's digital business ecosystem bringing businesses, professionals, products and customers together on one powerful platform. From discovering trusted local services to promoting businesses, buying and selling products, and exploring new opportunities, Siraawata makes it easier than ever to connect across the island."
        image="https://www.siraawata.lk/72edb07c-cede-451a-8d20-c031cf58dae0.jpg"
      />

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
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-envic-50 text-envic-600">
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
