import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: 'section' | 'div';
};

export function Section({ children, className = '', id, as = 'section' }: SectionProps) {
  const Tag = as;
  return (
    <Tag id={id} className={`w-full py-20 lg:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
    </Tag>);

}

export function Eyebrow({ children, tone = 'light' }: {children: React.ReactNode;tone?: 'light' | 'dark';}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${
      tone === 'dark' ? 'bg-white/10 text-envic-300' : 'bg-envic-50 text-envic-700'}`
      }>
      
      <span className="h-1.5 w-1.5 rounded-full bg-envic-500" />
      {children}
    </span>);

}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'left',
  tone = 'light'






}: {eyebrow?: string;title: string;body?: string;align?: 'left' | 'center';tone?: 'light' | 'dark';}) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
        tone === 'dark' ? 'text-white' : 'text-ink'}`
        }>
        
        {title}
      </h2>
      {body &&
      <p className={`mt-5 text-base leading-relaxed ${tone === 'dark' ? 'text-white/70' : 'text-ink-muted'}`}>
          {body}
        </p>
      }
    </div>);

}

export function Reveal({
  children,
  delay = 0,
  className = ''




}: {children: React.ReactNode;delay?: number;className?: string;}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      
      {children}
    </motion.div>);

}

export function PrimaryButton({ to, children }: {to: string;children: React.ReactNode;}) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 rounded-full bg-envic-500 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-envic-600 hover:shadow-lift">
      
      {children}
      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>);

}

export function GhostButton({ to, children }: {to: string;children: React.ReactNode;}) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-full border border-ink-line bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-envic-300 hover:bg-envic-50">
      
      {children}
    </Link>);

}

export function PageHero({
  eyebrow,
  title,
  body,
  image,
  imageClassName = "aspect-[4/3] object-cover"
}: {eyebrow: string;title: string;body: string;image?: string;imageClassName?: string;}) {
  return (
    <section className="relative w-full overflow-hidden bg-ink-bg">
      <div className="dotted-ring pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-[0.12]" />
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:py-24">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">{body}</p>
        </div>
        {image &&
        <div className="relative">
            <div className="absolute -bottom-6 -left-6 hidden h-28 w-28 rounded-3xl bg-envic-500/15 lg:block" />
            <img
            src={image}
            alt=""
            className={`relative w-full rounded-4xl shadow-soft ${imageClassName}`} />
          
          </div>
        }
      </div>
    </section>);

}