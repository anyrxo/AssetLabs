"use client";

import { useState } from "react";
import { COMPANY, REFERRAL_SOURCES } from "@/lib/data";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/IconMap";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="page-hero">
        <span className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
          Get In Touch
        </span>
        <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Contact Us
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-400 md:text-lg">
          We really appreciate you taking the time to get in touch.
        </p>
      </div>

      <section className="section-padding -mt-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_380px]">
          {/* Contact Form */}
          <GlassCard hover={false}>
            <h2 className="text-2xl font-semibold text-white mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                  <Icon name="ClipboardCheck" className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-white">Thank you!</h3>
                <p className="mt-2 text-slate-400">
                  We&apos;ve received your message and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-slate-300">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-slate-300">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-300">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="04XX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="referral" className="mb-1.5 block text-sm font-medium text-slate-300">
                    How did you find out about Asset Lab?
                  </label>
                  <select
                    id="referral"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="" className="bg-[#0f172a]">
                      — Please choose an option —
                    </option>
                    {REFERRAL_SOURCES.map((src) => (
                      <option key={src} value={src} className="bg-[#0f172a]">
                        {src}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 accent-blue-500"
                  />
                  <label htmlFor="consent" className="text-xs text-slate-400">
                    Yes, I consent to my data being stored according to the guidelines set out in the{" "}
                    <a href="/privacy" className="text-blue-400 hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                  Send Message
                  <Icon name="ArrowRight" className="h-4 w-4" />
                </Button>
              </form>
            )}
          </GlassCard>

          {/* Sidebar info */}
          <div className="space-y-5">
            <GlassCard hover={false} className="!p-6">
              <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Contact Info
              </h3>
              <ul className="space-y-5">
                <li>
                  <a href={COMPANY.phoneTel} className="flex items-start gap-3 text-slate-300 hover:text-blue-400 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <Icon name="Phone" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Phone</p>
                      <p className="font-medium">{COMPANY.phone}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={COMPANY.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-slate-300 hover:text-blue-400 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <Icon name="MapPin" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Address</p>
                      <p className="font-medium">{COMPANY.address}</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Icon name="Clock" className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Working Hours</p>
                    <p className="font-medium">{COMPANY.hours}</p>
                  </div>
                </li>
              </ul>
            </GlassCard>

            {/* Map embed */}
            <GlassCard hover={false} className="!p-0 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.5!2d145.0!3d-37.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU0JzAwLjAiUyAxNDXCsDAyJzI0LjAiRQ!5e0!3m2!1sen!2sau!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-70 grayscale"
                title="Asset Lab Location"
              />
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
