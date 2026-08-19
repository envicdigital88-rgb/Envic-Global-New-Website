import { Section, SectionHeading, Reveal, PageHero } from '../components/ui';
import { CTABand } from '../components/CTABand';
import { Code2Icon, SparklesIcon, CpuIcon, Globe2Icon, ExternalLinkIcon, ShieldCheckIcon } from 'lucide-react';

const SERVICES = [
  {
    title: 'Custom Web & App Development',
    body: 'High-performance websites, web applications, and custom digital platforms engineered with modern frameworks.',
    icon: Code2Icon,
  },
  {
    title: 'AI & Process Automation',
    body: 'Intelligent automation workflows, custom AI integrations, and smart tools to streamline business operations.',
    icon: CpuIcon,
  },
  {
    title: 'Digital Branding & UI/UX',
    body: 'Modern, high-converting digital interfaces, brand identities, and memorable customer experiences.',
    icon: SparklesIcon,
  },
  {
    title: 'Enterprise Tech Solutions',
    body: 'Scalable cloud infrastructure, secure integrations, and end-to-end technology consulting.',
    icon: ShieldCheckIcon,
  }
];

export function EnvicDigital() {
  return (
    <div className="w-full bg-white">
      <PageHero
        eyebrow="ENVIC Digital — A Division of ENVIC Global"
        title="Modern Technology for Ambitious Businesses"
        body="ENVIC Digital builds professional websites, digital branding, automation, AI, and custom software that help businesses of every size grow, work smarter, and connect with their customers."
        image="https://envicglobal.com/wp-content/uploads/2024/10/national-cancer-institute-NFvdKIhxYlU-unsplash-1024x683.jpg"
      />

      {/* Main Banner / Direct Link Callout */}
      <section className="bg-gradient-to-r from-cyan-900 via-ink to-envic-900 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:px-8 md:flex-row text-center md:text-left">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 ring-1 ring-cyan-400/30">
              <Globe2Icon className="h-3.5 w-3.5" />
              Official Website
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl text-white">
              Explore ENVIC Digital Online
            </h2>
            <p className="mt-1 text-sm text-cyan-100/80">
              Visit our main platform to view our live portfolio, pricing, and specialized tech services.
            </p>
          </div>
          <a
            href="https://www.envicdigital.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-cyan-400 px-7 py-4 font-display text-sm font-bold text-ink shadow-lg shadow-cyan-400/20 transition-all hover:bg-cyan-300 hover:scale-105"
          >
            <span>Visit envicdigital.com</span>
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Section className="bg-ink-bg">
        <SectionHeading
          eyebrow="What We Do"
          title="Technology Solutions Designed to Scale"
          body="From custom web platforms to AI integration, ENVIC Digital powers businesses with cutting-edge tech."
          align="center"
        />
        
        <div className="mt-14 grid gap-5 lg:grid-cols-4 sm:grid-cols-2">
          {SERVICES.map((val, i) => (
            <Reveal key={val.title} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-4xl bg-white p-8 transition-all hover:shadow-soft border border-ink-line">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
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
          title="“Building the digital backbone for modern global enterprises”"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
          <div className="p-4"><p className="font-display text-4xl font-extrabold text-cyan-400">100%</p><p className="mt-2 text-sm text-white/70">Custom Solutions</p></div>
          <div className="p-4"><p className="font-display text-4xl font-extrabold text-cyan-400">Modern</p><p className="mt-2 text-sm text-white/70">Web & AI Stack</p></div>
          <div className="p-4"><p className="font-display text-4xl font-extrabold text-cyan-400">End-to-End</p><p className="mt-2 text-sm text-white/70">Development & Design</p></div>
          <div className="p-4"><p className="font-display text-4xl font-extrabold text-cyan-400">ENVIC</p><p className="mt-2 text-sm text-white/70">Global Quality Standard</p></div>
        </div>
      </Section>

      <CTABand
        title="Ready to launch your digital project?"
        body="Visit ENVIC Digital today to explore our full service catalog or get a instant quote for your project."
      />
    </div>
  );
}
