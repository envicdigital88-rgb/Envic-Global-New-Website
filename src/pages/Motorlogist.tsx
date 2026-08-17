import React from 'react';
import { Section, SectionHeading, Reveal, PageHero } from '../components/ui';
import { CTABand } from '../components/CTABand';
import { ShieldCheckIcon, ClockIcon, GlobeIcon, HeartHandshakeIcon, WrenchIcon } from 'lucide-react';
import { BRAND } from '../data/site';

const FEATURES = [
  {
    title: 'Extensive Experience',
    body: 'Extensive automotive experience to ensure top-notch care for your vehicle.',
    icon: GlobeIcon,
  },
  {
    title: 'Premium Parts',
    body: 'We use premium parts and advanced equipment for high-standard services.',
    icon: WrenchIcon,
  },
  {
    title: 'Affordable Rates',
    body: 'We offer affordable rates without compromising quality, providing great value.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Excellent Service',
    body: 'Dedicated to excellent service, ensuring your vehicle is in optimal condition.',
    icon: HeartHandshakeIcon,
  }
];

export function Motorlogist() {
  return (
    <div className="w-full bg-white">
      <PageHero
        eyebrow="ENVIC Motorlogist"
        title="We’re a Trusted and Professional Automotive Company"
        body="ENVIC Motorlogist, a proud division of ENVIC Global, we specialize in top-notch automotive repair and maintenance services for European vehicles, as well as any other light vehicles you may own. Our experienced technicians are dedicated to ensuring your vehicle runs smoothly and safely."
        image="https://envicglobal.com/wp-content/uploads/2024/09/about-s2.png" 
      />

      <Section className="bg-ink-bg">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose ENVIC Motorlogist?"
          body="At ENVIC Motorlogist, we pride ourselves on our personalized service, tailoring our approach to meet your specific needs. Our expert team is dedicated to providing cost-effective solutions using the latest technology and techniques, ensuring your vehicle receives the highest level of care."
          align="center"
        />
        
        <div className="mt-14 grid gap-5 lg:grid-cols-4 sm:grid-cols-2">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-4xl bg-white p-8 transition-all hover:shadow-soft">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-envic-50 text-envic-600">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink">{feature.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{feature.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <div className="relative">
              <img
                src={BRAND.mascot}
                alt="Envic Mascot Vicky"
                className="aspect-square w-full rounded-4xl object-contain shadow-soft bg-envic-50/50 p-8" 
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Meet Our Mascot" title="Vicky" />
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Vicky is our first employee, he is very innovative, loves helping people and is a huge brand ambassador of sustainability.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-ink-bg">
        <SectionHeading align="center" eyebrow="Company Statistics Analysis" title="Great Achievement For Us" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 text-center">
          <div className="p-4"><p className="font-display text-4xl font-extrabold text-envic-600">99%</p><p className="mt-2 text-sm text-ink-muted">Satisfied Customer</p></div>
          <div className="p-4"><p className="font-display text-4xl font-extrabold text-envic-600">15+</p><p className="mt-2 text-sm text-ink-muted">Experience Staff</p></div>
          <div className="p-4"><p className="font-display text-4xl font-extrabold text-envic-600">100%</p><p className="mt-2 text-sm text-ink-muted">Satisfaction Rate</p></div>
          <div className="p-4"><p className="font-display text-4xl font-extrabold text-envic-600">15+</p><p className="mt-2 text-sm text-ink-muted">Years Experience</p></div>
          <div className="p-4"><p className="font-display text-4xl font-extrabold text-envic-600">10+</p><p className="mt-2 text-sm text-ink-muted">Awards Winning</p></div>
        </div>
      </Section>

      <Section className="bg-ink text-white">
        <SectionHeading 
          tone="dark" 
          eyebrow="Our Services" 
          title="Exceptional Automotive Care" 
          body="Envic Motorlogist offers a wide range of services to keep your vehicle in top condition. Whether it's routine maintenance, complex mechanical repairs or custom upgrades, we've got you covered. our skilled technicians are equipped to handle all types of issues, ensuring your vehicle performs at its best at all times. Engine and transmission repair." 
        />
      </Section>

      <CTABand
        title="Ready to experience exceptional automotive care?"
        body="Contact us today to schedule an appointment or learn more about our services."
      />

      <div className="bg-envic-50 py-12 px-6 text-center">
        <h3 className="text-xl font-bold text-ink mb-4">Get In Touch</h3>
        <p className="text-ink-muted mb-2">workshop@envicglobal.com</p>
        <p className="text-ink-muted mb-2">076 593 4404 | 011 2281448</p>
        <p className="text-ink-muted">No. 44/1, Gampaha road, Ambagahawaththa, Minuwangoda, Sri Lanka</p>
      </div>
    </div>
  );
}
