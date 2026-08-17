import React from 'react';
import { Section, SectionHeading, Reveal, PageHero } from '../components/ui';
import { CTABand } from '../components/CTABand';
import { ShieldCheckIcon, TargetIcon, SparklesIcon, UsersIcon } from 'lucide-react';

const VALUES = [
  {
    title: 'Customizable Solutions',
    body: "Customizable and compliant services to fit your practice's needs.",
    icon: TargetIcon,
  },
  {
    title: '15+ Years Expertise',
    body: '15+ years of expertise in Revenue Cycle Management.',
    icon: UsersIcon,
  },
  {
    title: 'Tailored Strategies',
    body: 'Tailored strategies to maximize your practice’s profitability.',
    icon: SparklesIcon,
  },
  {
    title: 'High Clean Claim Rate',
    body: 'Nearly 99% clean claim rate and minimal denials.',
    icon: ShieldCheckIcon,
  }
];

export function Rcm() {
  return (
    <div className="w-full bg-white">
      <PageHero
        eyebrow="ENVIC RCM"
        title="Empowering Healthcare with Comprehensive RCM Solutions"
        body="At ENVIC RCM LLC, we bring over 15 years of expertise in Revenue Cycle Management (RCM) to healthcare providers. Our end-to-end RCM solutions are tailored to enhance the profitability of your practice. By minimizing claim errors and shortening payment cycles, we allow healthcare professionals to focus on what matters most—patient care."
        image="https://envicglobal.com/wp-content/uploads/2024/10/national-cancer-institute-NFvdKIhxYlU-unsplash-1024x683.jpg"
      />

      <Section className="bg-ink-bg">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose ENVIC RCM?"
          body="With a clean claim rate of nearly 99% and a rejection rate below 1%, ENVIC RCM LLC ensures faster payments and reduced administrative burdens. We are dedicated to helping you improve financial outcomes while you focus on delivering exceptional patient care."
          align="center"
        />
        
        <div className="mt-14 grid gap-5 lg:grid-cols-4 sm:grid-cols-2">
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

      <Section className="bg-ink text-white">
        <SectionHeading
          tone="dark"
          align="center"
          title="“When patients turn to doctors for help, doctors turn to ENVIC RCM for solutions”"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 text-center">
          <div className="p-4"><p className="font-display text-4xl font-extrabold text-envic-400">99%</p><p className="mt-2 text-sm text-white/70">Satisfied Customer</p></div>
          <div className="p-4"><p className="font-display text-4xl font-extrabold text-envic-400">15+</p><p className="mt-2 text-sm text-white/70">Experience Staff</p></div>
          <div className="p-4"><p className="font-display text-4xl font-extrabold text-envic-400">100%</p><p className="mt-2 text-sm text-white/70">Satisfaction Rate</p></div>
          <div className="p-4"><p className="font-display text-4xl font-extrabold text-envic-400">15+</p><p className="mt-2 text-sm text-white/70">Years Experience</p></div>
          <div className="p-4"><p className="font-display text-4xl font-extrabold text-envic-400">10+</p><p className="mt-2 text-sm text-white/70">Awards Winning</p></div>
        </div>
      </Section>

      <CTABand
        title="Ready to optimize your revenue cycle?"
        body="Let ENVIC RCM LLC streamline your revenue cycle, reduce administrative burdens, and improve your bottom line."
      />
    </div>
  );
}
