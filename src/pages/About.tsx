import React from 'react';
import { IMAGES, STATS, VALUES, BRAND } from '../data/site';
import { Section, SectionHeading, Reveal, PageHero, Eyebrow } from '../components/ui';
import TeamCarousel from '../components/ui/team-carousel';
import { CTABand } from '../components/CTABand';
import { LinkedinIcon } from 'lucide-react';

const TIMELINE = [
{ year: '2019', title: 'Founded in Colombo', body: 'Started with a nine-seat pilot supporting a single UK energy broker.' },
{ year: '2021', title: 'First US accounts', body: 'Added overnight shifts and expanded into telecom customer care.' },
{ year: '2023', title: 'Dedicated pods model', body: 'Moved to named, client-owned teams with their own leads and QA analysts.' },
{ year: '2025', title: '250+ specialists', body: 'Three delivery floors, multichannel coverage and a partner network across two markets.' }];

const TEAM = [
  {
    name: 'Damien Joseph',
    role: 'Group CEO / Director',
    department: 'Leadership',
    color: 'from-envic-500 to-emerald-600',
    photo: '/team/damien-joseph.jpg',
  },
  {
    name: 'Minhar Azeez',
    role: 'Director',
    department: 'Leadership',
    color: 'from-emerald-500 to-teal-600',
    photo: '/team/minhar-azeez.jpg',
  },
  {
    name: 'Isuru Nilanka',
    role: 'Strategic Manager — Operations',
    department: 'Operations',
    color: 'from-teal-500 to-cyan-600',
    photo: '/team/isuru-nilanka.jpg',
  },
  {
    name: 'Chathurka Induwara',
    role: 'Business Development Specialist',
    department: 'Business Development',
    color: 'from-sky-500 to-blue-600',
    photo: '/team/chathurka-induwara.jpg',
  },
  {
    name: 'Deshan Nethmina',
    role: 'Web Solutions Specialist',
    department: 'Technology',
    color: 'from-violet-500 to-purple-600',
    photo: '/team/deshan-nethmina.jpg',
  },
  {
    name: 'Heshan Rajamanthri',
    role: 'Web Solutions Specialist',
    department: 'Technology',
    color: 'from-indigo-500 to-blue-700',
    photo: '/team/heshan-rajamanthri.jpg',
  },
  {
    name: 'Nuwangi Mahesha',
    role: 'Web Solutions Specialist',
    department: 'Technology',
    color: 'from-pink-500 to-rose-600',
    photo: '/team/nuwangi-mahesha.jpg',
  },
  {
    name: 'Nisula Dinayana',
    role: 'Business Development Specialist',
    department: 'Business Development',
    color: 'from-orange-500 to-amber-600',
    photo: '/team/nisula-dinayana.jpg',
  },
  {
    name: 'Zahra Faizal',
    role: 'Business Development Specialist',
    department: 'Business Development',
    color: 'from-fuchsia-500 to-purple-600',
    photo: '/team/zahra-faizal.jpg',
  },
  {
    name: 'Andrew Ariyathilake',
    role: 'Business Development Specialist',
    department: 'Business Development',
    color: 'from-lime-500 to-green-600',
    photo: '/team/andrew-ariyathilake.jpg',
  },
];

export function About() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  
  const heroImages = [
    '/team/FullTeam.jpeg',
    '/team/image1.jpeg',
    '/team/image2.jpeg',
    '/team/image3.jpeg',
    '/team/image4.jpeg',
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white">
      {/* Hero Section with Background Swipe Effect */}
      <section className="relative w-full overflow-hidden">
        {/* Animated Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentImageIndex 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={image}
                alt={`Team ${index + 1}`}
                className="h-full w-full object-cover object-center"
              />
              {/* Lighter gradient overlay - only on left side for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* Content - Positioned on left side only */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-28 sm:px-8 lg:py-40">
          <div className="max-w-xl">
            <Eyebrow tone="dark">About us</Eyebrow>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-5xl">
              Your Trusted Partner in Business Excellence
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/95 sm:text-lg">
              At ENVIC Global, we redefine outsourcing with dedicated teams that seamlessly integrate with your business.
            </p>
            
            {/* Image indicators */}
            <div className="mt-8 flex gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'w-8 bg-envic-400' 
                      : 'w-1.5 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Decorative gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>
      

      <Section className="bg-white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="Our story"
            title="Built to close the gap between offshore cost and onshore quality" />
          
          <div className="space-y-5 text-base leading-relaxed text-ink-muted">
            <p>
              Most companies try outsourcing because the maths works, and abandon it because the
              experience doesn't. Queues get longer, quality slips, and nobody can explain why.
            </p>
            <p>
              We started {BRAND.name} to fix the operating model rather than just the price. Every
              client gets a named team, a named leader and a weekly conversation about the numbers —
              the good and the bad.
            </p>
            <p>
              Today our specialists in Colombo handle customer conversations, pipeline and
              back-office operations for energy, telecom and home improvement businesses across the
              UK and US.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) =>
          <Reveal key={stat.label} delay={i * 0.07}>
              <div className="rounded-3xl bg-ink-bg p-7">
                <p className="font-display text-4xl font-extrabold tracking-tight text-envic-600">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-ink-muted">{stat.label}</p>
              </div>
            </Reveal>
          )}
        </div>
      </Section>

      {/* Mission + mascot */}
      <Section className="bg-ink-bg">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <div className="relative flex justify-center rounded-4xl bg-white p-10 shadow-soft">
              <div className="dotted-ring pointer-events-none absolute inset-0 rounded-4xl opacity-[0.08]" />
              <img src={BRAND.mascot} alt="Envi, the ENVIC Global mascot" className="relative h-64 w-auto object-contain" />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Meet Envi"
              title="Our mascot has one job: keep things unbothered"
              body="Envi is the little reminder behind everything we build — calm, dependable and quietly good at the hard stuff. When your queues are handled and your reports arrive on time, that's the point." />
            
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6">
                <h3 className="font-display text-base font-bold text-ink">Our mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Enhance customer satisfaction and drive growth through reliable, results-driven
                  outsourcing.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6">
                <h3 className="font-display text-base font-bold text-ink">Our vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  To be the offshore partner UK and US businesses recommend without hesitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-white">
        <SectionHeading align="center" eyebrow="What we stand for" title="Four principles we actually run on" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) =>
          <Reveal key={value.title} delay={i * 0.07}>
              <div className="h-full rounded-3xl border border-ink-line p-7 transition-colors hover:border-envic-200 hover:bg-envic-50/40">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-envic-50 text-envic-600">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-ink">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{value.body}</p>
              </div>
            </Reveal>
          )}
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-ink text-white">
        <SectionHeading tone="dark" eyebrow="Our journey" title="From nine seats to three delivery floors" />
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TIMELINE.map((item, i) =>
          <Reveal key={item.year} delay={i * 0.08}>
              <li className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <span className="font-display text-sm font-bold tracking-widest text-envic-400">{item.year}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{item.body}</p>
              </li>
            </Reveal>
          )}
        </ol>
      </Section>

      {/* Our Team */}
      <TeamCarousel team={TEAM} />

      <CTABand title="Want to see how we would run your operation?" />
    </div>);

}