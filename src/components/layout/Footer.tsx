import Link from "next/link";
import Image from "next/image";
import { COMPANY, NAV_LINKS } from "@/lib/data";
import Icon from "@/components/ui/IconMap";

const Footer = () => (
  <footer className="relative border-t border-white/5 bg-[#050a18]">
    {/* Glow */}
    <div className="glow-line" />

    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/Asset-Lab-Square-Logo-100x100.jpg"
              alt="Asset Lab"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Asset<span className="gradient-text">Lab</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {COMPANY.tagline}
          </p>
          <div className="mt-6 flex gap-3">
            {["Facebook", "Twitter", "LinkedIn", "YouTube"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-blue-500/40 hover:text-blue-400 hover:bg-blue-500/5"
              >
                <span className="text-xs font-bold">{s[0]}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">Quick Links</h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="text-sm text-slate-400 transition-colors hover:text-blue-400">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">Contact</h4>
          <ul className="space-y-4">
            <li>
              <a href={COMPANY.phoneTel} className="flex items-start gap-3 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                <Icon name="Phone" className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                {COMPANY.phone}
              </a>
            </li>
            <li>
              <a href={COMPANY.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                <Icon name="MapPin" className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                {COMPANY.address}
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-400">
              <Icon name="Clock" className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
              {COMPANY.hours}
            </li>
          </ul>
        </div>

        {/* Philosophy */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">Our Philosophy</h4>
          <p className="text-sm leading-relaxed text-slate-400 italic">
            &ldquo;{COMPANY.philosophy}&rdquo;
          </p>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/5">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-slate-500 sm:flex-row">
        <span>{COMPANY.copyright}</span>
        <Link href="/privacy" className="hover:text-blue-400 transition-colors">
          Privacy Policy
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
