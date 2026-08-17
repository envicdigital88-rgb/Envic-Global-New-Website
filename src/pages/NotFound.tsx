import React from 'react';
import { BRAND } from '../data/site';
import { PrimaryButton, GhostButton } from '../components/ui';

export function NotFound() {
  return (
    <section className="flex w-full items-center justify-center bg-ink-bg px-5 py-24 sm:px-8">
      <div className="max-w-lg text-center">
        <img src={BRAND.mascot} alt="" className="mx-auto h-36 w-auto object-contain" />
        <p className="mt-6 font-display text-sm font-bold uppercase tracking-[0.22em] text-envic-600">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink">
          This page went off shift
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-muted">
          The page you were looking for was moved, renamed or never existed. Let's get you back to
          something useful.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <PrimaryButton to="/">Back to home</PrimaryButton>
          <GhostButton to="/contact">Contact us</GhostButton>
        </div>
      </div>
    </section>);

}