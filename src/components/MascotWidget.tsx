import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, MessageCircleIcon, PhoneCallIcon, MailIcon } from 'lucide-react';
import { BRAND } from '../data/site';

export function MascotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          className="w-[19rem] overflow-hidden rounded-3xl border border-ink-line bg-white shadow-lift"
          role="dialog"
          aria-label="Contact ENVIC Global">
          
            <div className="flex items-center gap-3 bg-envic-500 px-5 py-4 text-white">
              <img src={BRAND.mascot} alt="" className="h-10 w-10 object-contain" />
              <div>
                <p className="font-display text-sm font-semibold">Hi, I'm Envi</p>
                <p className="text-xs text-white/80">Usually replies in a few minutes</p>
              </div>
            </div>
            <div className="space-y-2 p-4">
              <p className="px-1 pb-2 text-sm leading-relaxed text-ink-muted">
                Tell me what you need covered and I'll point you to the right team.
              </p>
              <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-2xl bg-ink-bg px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-envic-50">
              
                <MessageCircleIcon className="h-4 w-4 text-envic-600" />
                Send us a message
              </Link>
              <a
              href={`tel:${BRAND.ukPhone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 rounded-2xl bg-ink-bg px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-envic-50">
              
                <PhoneCallIcon className="h-4 w-4 text-envic-600" />
                {BRAND.ukPhone}
              </a>
              <a
              href={`mailto:${BRAND.email}`}
              className="flex items-center gap-3 rounded-2xl bg-ink-bg px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-envic-50">
              
                <MailIcon className="h-4 w-4 text-envic-600" />
                {BRAND.email}
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close contact panel' : 'Chat with Envi'}
        className="group relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lift ring-1 ring-ink-line transition-transform hover:scale-105">
        
        {open ?
        <XIcon className="h-6 w-6 text-ink" /> :

        <motion.img
          src={BRAND.mascot}
          alt=""
          className="h-12 w-12 object-contain"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} />

        }
        {!open &&
        <span className="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-envic-500" />
        }
      </button>
    </div>);

}