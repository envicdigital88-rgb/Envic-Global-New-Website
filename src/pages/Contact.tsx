import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon, CheckCircle2Icon, Loader2Icon, ArrowRightIcon } from 'lucide-react';
import { BRAND, SERVICES, FAQS } from '../data/site';
import { Section, SectionHeading, Reveal, Eyebrow } from '../components/ui';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
'w-full rounded-2xl border border-ink-line bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink-muted/70 outline-none transition-colors focus:border-envic-400 focus:ring-2 focus:ring-envic-100';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: SERVICES[0].title,
    message: ''
  });

  const update = (key: keyof typeof form) => (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
  setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      setError('Please fill in your name, email and a short message.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus('error');
      setError('That email address does not look right.');
      return;
    }
    setError('');
    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 1100);
  };

  return (
    <div className="w-full bg-white">
      <section className="relative w-full overflow-hidden bg-ink-bg">
        <div className="dotted-ring pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-[0.12]" />
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Let's talk about what you need covered
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Send a message or book a 30-minute discovery call. We reply to every enquiry within one
            working day.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-start">
          {/* Form */}
          <Reveal>
            <div className="rounded-4xl border border-ink-line p-7 sm:p-10">
              {status === 'success' ?
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center py-12 text-center">
                
                  <img src={BRAND.mascot} alt="" className="h-24 w-auto object-contain" />
                  <CheckCircle2Icon className="mt-4 h-8 w-8 text-envic-500" />
                  <h2 className="mt-4 font-display text-2xl font-bold text-ink">Message received</h2>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
                    Thanks {form.name.split(' ')[0]} — a member of our team will be in touch within
                    one working day.
                  </p>
                  <button
                  type="button"
                  onClick={() => {
                    setForm({ name: '', email: '', company: '', service: SERVICES[0].title, message: '' });
                    setStatus('idle');
                  }}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink-bg">
                  
                    Send another message
                  </button>
                </motion.div> :

              <form onSubmit={onSubmit} noValidate>
                  <h2 className="font-display text-2xl font-bold text-ink">Send us a message</h2>
                  <p className="mt-2 text-sm text-ink-muted">Fields marked with * are required.</p>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
                        Full name *
                      </label>
                      <input id="name" className={inputClass} value={form.name} onChange={update('name')} placeholder="Jane Cooper" />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
                        Work email *
                      </label>
                      <input id="email" type="email" className={inputClass} value={form.email} onChange={update('email')} placeholder="jane@company.com" />
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium text-ink">
                        Company
                      </label>
                      <input id="company" className={inputClass} value={form.company} onChange={update('company')} placeholder="Company Ltd" />
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-2 block text-sm font-medium text-ink">
                        What do you need?
                      </label>
                      <select id="service" className={inputClass} value={form.service} onChange={update('service')}>
                        {SERVICES.map((s) =>
                      <option key={s.slug}>{s.title}</option>
                      )}
                        <option>Something else</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
                        How can we help? *
                      </label>
                      <textarea
                      id="message"
                      rows={5}
                      className={`${inputClass} resize-none`}
                      value={form.message}
                      onChange={update('message')}
                      placeholder="Tell us about your volumes, current setup and what's not working." />
                    
                    </div>
                  </div>

                  {status === 'error' && error &&
                <p role="alert" className="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                      {error}
                    </p>
                }

                  <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-envic-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-envic-600 disabled:cursor-not-allowed disabled:opacity-70">
                  
                    {status === 'submitting' ?
                  <>
                        <Loader2Icon className="h-4 w-4 animate-spin" />
                        Sending…
                      </> :

                  <>
                        Send message
                        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                  }
                  </button>
                </form>
              }
            </div>
          </Reveal>

          {/* Details */}
          <Reveal delay={0.1}>
            <div className="space-y-4">
              <div className="rounded-4xl bg-ink p-8 text-white">
                <h2 className="font-display text-lg font-bold">Talk to us directly</h2>
                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex items-start gap-4">
                    <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-envic-400" />
                    <div>
                      <p className="text-white/50">Email</p>
                      <a href={`mailto:${BRAND.email}`} className="font-medium text-white hover:text-envic-300">
                        {BRAND.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-envic-400" />
                    <div>
                      <p className="text-white/50">Phone</p>
                      <a href={`tel:${BRAND.ukPhone.replace(/\s/g, '')}`} className="block font-medium text-white hover:text-envic-300">
                        {BRAND.ukPhone} · UK
                      </a>
                      <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`} className="block font-medium text-white hover:text-envic-300">
                        {BRAND.phone} · LK
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-envic-400" />
                    <div>
                      <p className="text-white/50">Office</p>
                      <p className="font-medium text-white">{BRAND.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-envic-400" />
                    <div>
                      <p className="text-white/50">Hours</p>
                      <p className="font-medium text-white">Mon–Fri, covering UK &amp; US business hours</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex items-center gap-5 rounded-4xl bg-envic-50 p-7">
                <img src={BRAND.mascot} alt="" className="h-20 w-auto shrink-0 object-contain" />
                <p className="text-sm leading-relaxed text-envic-900">
                  Prefer a live conversation? Envi will point you at the right person — just use the
                  chat button in the corner.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-ink-bg">
        <SectionHeading align="center" eyebrow="Before you write" title="Answers to the usual questions" />
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {FAQS.map((faq, i) =>
          <Reveal key={faq.q} delay={i * 0.06}>
              <div className="h-full rounded-3xl bg-white p-7">
                <h3 className="font-display text-base font-bold text-ink">{faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{faq.a}</p>
              </div>
            </Reveal>
          )}
        </div>
      </Section>
    </div>);

}