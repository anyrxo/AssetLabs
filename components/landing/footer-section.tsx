"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";
import Image from "next/image";

const footerLinks = {
  Services: [
    { name: "Asset Management", href: "#services" },
    { name: "Data Collection", href: "#services" },
    { name: "Condition Audits", href: "#services" },
    { name: "Works Planning", href: "#services" },
  ],
  Company: [
    { name: "About Us", href: "#about" },
    { name: "Our Process", href: "#process" },
    { name: "Projects", href: "#projects" },
    { name: "Quality", href: "#" },
  ],
  Resources: [
    { name: "Case Studies", href: "#" },
    { name: "Industry Standards", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/asset-lab/" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-3 mb-6">
                <Image 
                  src="/images/Asset-Lab-Square-Logo.jpg" 
                  alt="Asset Lab" 
                  width={32} 
                  height={32} 
                />
                <span className="text-2xl font-display">
                  Asset<span className="text-muted-foreground">Lab</span>
                </span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                Helping organisations make good decisions. Asset management and data specialists
                based in Melbourne and Geelong, Victoria.
              </p>

              {/* Contact info */}
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <p>(03) 5242 8683</p>
                <p>info@assetlab.net.au</p>
                <p>79 Hodder St, Brighton East, VIC 3187</p>
              </div>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Asset Lab Pty Ltd. All rights reserved. ABN: 37 633 245 578
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2" title="79 Hodder Street, Brighton East, VIC 3187">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Melbourne & Geelong, Victoria
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
