
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
} from "lucide-react";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function FooterSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/[0.08] bg-[#08080c] px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-80 w-[600px] -translate-x-1/2 rounded-full bg-purple-600/[0.08] blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 gap-12 border-b border-white/[0.08] pb-14 md:grid-cols-[1.3fr_0.7fr_0.7fr] md:gap-8"
        >
          {/* Brand statement */}
          <div>
            <a
              href="#top"
              aria-label="Back to homepage"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-400/10 text-sm font-bold text-purple-300">
                F.
              </span>
              <span className="text-xs font-semibold tracking-[0.2em] text-white">
                REAL ESTATE FILMS
              </span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/40">
              Thoughtful editing. Cinematic storytelling. Visual experiences
              that bring properties to life.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.25em] text-white/35">
              EXPLORE
            </h3>

            <nav aria-label="Footer navigation" className="mt-6">
              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.25em] text-white/35">
              CONNECT
            </h3>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/40">
              Have a project in mind? Start a conversation and let&apos;s
              create something meaningful.
            </p>

            <a
              href="#contact"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-purple-300 transition-colors hover:text-orange-300"
            >
              Get in touch
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#contact"
                aria-label="Contact by email"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-all hover:border-purple-400/40 hover:bg-purple-400/10 hover:text-white"
              >
                <Mail size={17} />
              </a>
              <a
                href="#contact"
                aria-label="Instagram contact"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-all hover:border-purple-400/40 hover:bg-purple-400/10 hover:text-white"
              >
                <IoLogoInstagram  size={17} />
              </a>
              <a
                href="#contact"
                aria-label="LinkedIn contact"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-all hover:border-purple-400/40 hover:bg-purple-400/10 hover:text-white"
              >
                <FaLinkedin  size={17} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] tracking-wide text-white/30">
            © {new Date().getFullYear()} · All rights reserved.
          </p>

          <p className="text-[10px] tracking-[0.16em] text-white/25">
            DESIGNED TO TELL STORIES
          </p>

          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.16em] text-white/45 transition-colors hover:text-white"
          >
            BACK TO TOP
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-purple-400/40 group-hover:text-purple-300">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

