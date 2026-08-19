import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from 'lucide-react';
import { TESTIMONIALS } from '../../data/site';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const current = TESTIMONIALS[currentIndex] as { quote: string; name: string; role: string; rating?: number };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-16">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10 hidden sm:block">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="p-3 rounded-full bg-white text-ink border border-envic-200 shadow-soft hover:bg-envic-50 transition-colors"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10 hidden sm:block">
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="p-3 rounded-full bg-white text-ink border border-envic-200 shadow-soft hover:bg-envic-50 transition-colors"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="relative h-[420px] sm:h-[320px] w-full flex items-center justify-center overflow-hidden rounded-[2.5rem] bg-white border border-envic-200/60 shadow-sm">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 280, damping: 28 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 },
            }}
            className="absolute inset-0 flex flex-col justify-center items-center p-8 sm:p-14 text-center"
          >
            <div className="mb-5 text-envic-100">
              <QuoteIcon className="w-14 h-14 mx-auto" />
            </div>

            <div className="flex justify-center gap-1 mb-5">
              {[...Array(5)].map((_, idx) => (
                <svg key={idx} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote className="font-display text-lg sm:text-xl leading-relaxed text-ink/80 italic mb-7 max-w-2xl">
              "{current.quote}"
            </blockquote>

            <div className="flex items-center gap-3 mt-auto">
              <div className="h-11 w-11 rounded-full bg-gradient-to-br from-envic-400 to-envic-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                {current.name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="font-display text-base font-bold text-ink">{current.name}</p>
                <p className="text-xs font-semibold text-envic-600">
                  {current.role}{current.rating ? ` · ${current.rating} / 5` : ''}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex sm:hidden justify-center gap-4 mt-5">
        <button onClick={prev} className="p-2.5 rounded-full bg-white border border-envic-200 shadow-soft hover:bg-envic-50 transition-colors">
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <button onClick={next} className="p-2.5 rounded-full bg-white border border-envic-200 shadow-soft hover:bg-envic-50 transition-colors">
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`rounded-full transition-all duration-300 ${
              i === currentIndex
                ? 'bg-envic-500 w-6 h-3'
                : 'bg-envic-200 hover:bg-envic-300 w-3 h-3'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
