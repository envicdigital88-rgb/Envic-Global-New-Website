import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface Person {
  name: string;
  role: string;
  department: string;
  bio: string;
  color: string;
  photo: string;
}

interface TeamCarouselProps {
  team: Person[];
}

const DEPT_BADGE: Record<string, string> = {
  Leadership:            'bg-emerald-50/90  text-emerald-700  border-emerald-200',
  Operations:            'bg-teal-50/90     text-teal-700     border-teal-200',
  'Business Development':'bg-sky-50/90      text-sky-700      border-sky-200',
  Technology:            'bg-violet-50/90   text-violet-700   border-violet-200',
  'Client Success':      'bg-orange-50/90   text-orange-700   border-orange-200',
  'People & Culture':    'bg-rose-50/90     text-rose-700     border-rose-200',
};

/** Soft radial glow colour per gradient class */
const GLOW: Record<string, string> = {
  'from-envic-500 to-emerald-600': '16,185,129',
  'from-teal-500 to-cyan-600':     '20,184,166',
  'from-sky-500 to-blue-600':      '14,165,233',
  'from-violet-500 to-purple-600': '139,92,246',
  'from-indigo-500 to-blue-700':   '99,102,241',
  'from-pink-500 to-rose-600':     '236,72,153',
  'from-orange-500 to-amber-600':  '249,115,22',
  'from-fuchsia-500 to-purple-600':'217,70,239',
  'from-lime-500 to-green-600':    '132,204,22',
};

function PersonCard({
  person,
  size,
  onClick,
}: {
  person: Person;
  size: 'hero' | 'side';
  onClick?: () => void;
}) {
  const badge = DEPT_BADGE[person.department] ?? 'bg-white/90 text-envic-700 border-envic-200';
  const initials = person.name.split(' ').map((n) => n[0]).join('');

  if (size === 'side') {
    return (
      <div
        onClick={onClick}
        className="cursor-pointer select-none"
        role="button"
        aria-label={`View ${person.name}`}
      >
        <div className={`relative rounded-2xl overflow-hidden aspect-[2/3] bg-white/5 border border-white/10`}>
          {person.photo ? (
            <img
              src={person.photo}
              alt={person.name}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fb = e.currentTarget.nextElementSibling as HTMLElement | null;
                if (fb) fb.style.display = 'flex';
              }}
            />
          ) : null}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${person.color} items-center justify-center text-white font-display font-extrabold text-3xl`}
            style={{ display: person.photo ? 'none' : 'flex' }}
          >
            {initials}
          </div>
          {/* dim overlay */}
          <div className="absolute inset-0 bg-ink/40" />
        </div>
        <p className="mt-2 text-center text-xs text-white/40 font-medium truncate px-1">
          {person.name.split(' ')[0]}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl overflow-hidden bg-white shadow-2xl">
      {/* Top accent bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${person.color}`} />

      {/* Portrait */}
      <div className="relative aspect-[3/4] bg-ink-bg overflow-hidden">
        {person.photo ? (
          <img
            src={person.photo}
            alt={person.name}
            className="absolute inset-0 w-full h-full object-cover object-top"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fb = e.currentTarget.nextElementSibling as HTMLElement | null;
              if (fb) fb.style.display = 'flex';
            }}
          />
        ) : null}
        {/* Initials fallback */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${person.color} items-center justify-center text-white font-display font-extrabold text-8xl`}
          style={{ display: person.photo ? 'none' : 'flex' }}
        >
          {initials}
        </div>

        {/* Fade to white at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white via-white/70 to-transparent" />

        {/* Dept badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-bold backdrop-blur-md ${badge}`}>
            {person.department}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="px-6 pb-6 -mt-3 relative z-10">
        <h3 className="font-display text-xl font-extrabold text-ink leading-snug">
          {person.name}
        </h3>
        <p className="mt-0.5 text-sm font-semibold text-envic-600">{person.role}</p>
        <p className="mt-3 text-xs leading-relaxed text-ink-muted line-clamp-3">{person.bio}</p>
      </div>
    </div>
  );
}

export default function TeamCarousel({ team }: TeamCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = team.length;

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const goTo = useCallback(
    (i: number) => {
      setDirection(i > index ? 1 : -1);
      setIndex(i);
    },
    [index],
  );

  // ── Auto-play: advance every 4 s, pause on hover ──
  const isHovered = useRef(false);
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered.current) {
        setDirection(1);
        setIndex((i) => (i + 1) % total);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [total]);

  const current  = team[index];
  const prevPerson = team[(index - 1 + total) % total];
  const nextPerson = team[(index + 1) % total];


  const rgb = GLOW[current.color] ?? '16,185,129';

  const cardVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 90 : -90, opacity: 0, scale: 0.94 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit:  (dir: number) => ({ x: dir < 0 ? 90 : -90, opacity: 0, scale: 0.94 }),
  };

  return (
    <section
      className="relative bg-ink py-24 overflow-hidden"
      onMouseEnter={() => { isHovered.current = true; }}
      onMouseLeave={() => { isHovered.current = false; }}
    >

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Dynamic glow behind hero card */}
      <motion.div
        key={current.color}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{ background: `radial-gradient(circle,rgba(${rgb},0.22) 0%,transparent 70%)` }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

        {/* ── Heading ── */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-envic-400 mb-3">
            Our Team
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Meet the People Behind ENVIC
          </h2>
          <p className="mt-4 text-base text-white/50 max-w-xl mx-auto">
            A dedicated crew of specialists who make every client experience seamless.
          </p>
        </div>

        {/* ── 3-card row ── */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8">

          {/* Prev peek */}
          <motion.div
            key={`prev-${prevPerson.name}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden sm:block flex-shrink-0 w-36 md:w-44 opacity-40 hover:opacity-60 transition-opacity duration-200"
          >
            <PersonCard person={prevPerson} size="side" onClick={prev} />
          </motion.div>

          {/* Hero card */}
          <div className="relative flex-shrink-0 w-72 sm:w-80 lg:w-[22rem]">
            {/* Ring glow */}
            <div
              className="absolute -inset-3 rounded-[2rem] blur-2xl pointer-events-none"
              style={{ background: `rgba(${rgb},0.12)` }}
            />
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current.name}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 320, damping: 32 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                }}
                className="relative"
              >
                <PersonCard person={current} size="hero" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next peek */}
          <motion.div
            key={`next-${nextPerson.name}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden sm:block flex-shrink-0 w-36 md:w-44 opacity-40 hover:opacity-60 transition-opacity duration-200"
          >
            <PersonCard person={nextPerson} size="side" onClick={next} />
          </motion.div>
        </div>

        {/* ── Navigation ── */}
        <div className="flex items-center justify-center gap-5 mt-12">
          <button
            onClick={prev}
            aria-label="Previous team member"
            className="p-3 rounded-full bg-white/10 text-white border border-white/15 hover:bg-white/20 hover:border-white/30 transition-all"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {team.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to ${team[i].name}`}
                className={`rounded-full transition-all duration-300 ${
                  i === index
                    ? 'bg-envic-400 w-7 h-3'
                    : 'bg-white/25 hover:bg-white/45 w-3 h-3'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next team member"
            className="p-3 rounded-full bg-white/10 text-white border border-white/15 hover:bg-white/20 hover:border-white/30 transition-all"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Counter */}
        <p className="text-center mt-4 text-xs text-white/30 tabular-nums">
          {index + 1} / {total}&nbsp;·&nbsp;
          <span className="text-white/50 font-semibold">{current.name}</span>
        </p>

      </div>
    </section>
  );
}