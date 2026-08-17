import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, ArrowUpRightIcon } from 'lucide-react';
import { BRAND, NAV } from '../data/site';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled ?
      'border-b border-ink-line bg-white/90 backdrop-blur-md' :
      'border-b border-transparent bg-white'}`
      }>
      
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label={`${BRAND.name} home`}>
          <img src={BRAND.logo} alt="" className="h-9 w-auto" />
          <span className="sr-only">{BRAND.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) =>
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
            `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            isActive ? 'text-envic-600' : 'text-ink-muted hover:text-ink'}`

            }>
            
              {({ isActive }) =>
            <>
                  {item.label}
                  {isActive &&
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 -z-10 rounded-full bg-envic-50"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }} />

              }
                </>
            }
            </NavLink>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-envic-500 px-5 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:bg-envic-600 hover:shadow-lift sm:inline-flex">
            
            Book a call
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-line text-ink transition-colors hover:bg-ink-bg lg:hidden">
            
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="overflow-hidden border-t border-ink-line bg-white lg:hidden">
          
            <nav aria-label="Mobile" className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
              <ul className="flex flex-col">
                {NAV.map((item) =>
              <li key={item.to}>
                    <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                  `block border-b border-ink-line/70 py-3.5 font-display text-lg font-semibold ${
                  isActive ? 'text-envic-600' : 'text-ink'}`

                  }>
                  
                      {item.label}
                    </NavLink>
                  </li>
              )}
              </ul>
              <Link
              to="/contact"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-envic-500 px-5 py-3.5 text-sm font-semibold text-white">
              
                Book a call
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}