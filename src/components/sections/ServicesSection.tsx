
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Clapperboard,
  Smartphone,
  Image as ImageIcon,
  ArrowUpRight,
  Check,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Long-form",
    subtitle: "Video Editing",
    description:
      "Transform property footage into compelling cinematic experiences that showcase every detail and keep viewers engaged.",
    features: [
      "Real estate films & property tours",
      "Cinematic storytelling",
      "Color grading & sound design",
      "Professional pacing & transitions",
    ],
    icon: Clapperboard,
    accent: "purple",
    label: "CINEMATIC STORYTELLING",
  },
  {
    number: "02",
    title: "Short-form",
    subtitle: "Video Editing",
    description:
      "Create attention-grabbing vertical videos designed to make properties stand out across today's social platforms.",
    features: [
      "Instagram Reels & YouTube Shorts",
      "Dynamic cuts & motion graphics",
      "Captions & sound synchronization",
      "Vertical-first editing",
    ],
    icon: Smartphone,
    accent: "orange",
    label: "SOCIAL-FIRST CONTENT",
  },
  {
    number: "03",
    title: "Thumbnail",
    subtitle: "Design",
    description:
      "Craft visually striking thumbnails that communicate the value of a property and make people want to discover more.",
    features: [
      "Real estate video thumbnails",
      "Visual composition & hierarchy",
      "Professional image treatment",
      "Platform-ready exports",
    ],
    icon: ImageIcon,
    accent: "purple",
    label: "VISUAL FIRST IMPRESSIONS",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 45, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#09090d] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-purple-700/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-orange-500/[0.07] blur-[140px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 flex flex-col justify-between gap-7 md:mb-20 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-orange-400" />
              <span className="text-[10px] font-semibold tracking-[0.32em] text-orange-300">
                WHAT I DO
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Services<span className="text-purple-400">.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/45 sm:text-base">
            Every frame has a purpose. Every detail contributes to a visual
            experience that makes a property memorable.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-5 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const isOrange = service.accent === "orange";

            return (
              <motion.article
                key={service.number}
                variants={shouldReduceMotion ? undefined : cardVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -9, transition: { duration: 0.3 } }
                }
                className="group relative flex min-h-[530px] flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#111116] p-7 transition-colors duration-500 hover:border-white/20 sm:p-8"
              >
                {/* Card glow */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[100px] transition-opacity duration-500 group-hover:opacity-80 ${
                    isOrange ? "bg-orange-500/10" : "bg-purple-500/10"
                  }`}
                />

                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-white/30">
                    / {service.number}
                  </span>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
                      isOrange
                        ? "border-orange-400/20 bg-orange-400/[0.08] text-orange-300"
                        : "border-purple-400/20 bg-purple-400/[0.08] text-purple-300"
                    }`}
                  >
                    <Icon size={21} strokeWidth={1.6} />
                  </div>
                </div>

                <div className="relative mt-12">
                  <span
                    className={`text-[9px] font-semibold tracking-[0.24em] ${
                      isOrange ? "text-orange-300/75" : "text-purple-300/75"
                    }`}
                  >
                    {service.label}
                  </span>

                  <h3 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:text-[2.1rem]">
                    {service.title}
                    <span className="mt-1 block text-white/65">
                      {service.subtitle}
                    </span>
                  </h3>

                  <p className="mt-6 min-h-[88px] text-sm leading-7 text-white/45">
                    {service.description}
                  </p>
                </div>

                <div className="relative my-8 h-px w-full bg-white/[0.08]">
                  <div
                    className={`absolute left-0 top-0 h-px w-12 transition-all duration-500 group-hover:w-full ${
                      isOrange ? "bg-orange-400" : "bg-purple-400"
                    }`}
                  />
                </div>

                <ul className="relative space-y-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-[13px] leading-5 text-white/65"
                    >
                      <Check
                        size={15}
                        className={`mt-0.5 shrink-0 ${
                          isOrange ? "text-orange-300" : "text-purple-300"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-auto flex items-center justify-between pt-9">
                  <span className="text-[10px] font-medium tracking-[0.2em] text-white/25">
                    CREATIVE SERVICE
                  </span>

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 group-hover:rotate-45 group-hover:text-white ${
                      isOrange
                        ? "group-hover:border-orange-300/50 group-hover:bg-orange-400/10"
                        : "group-hover:border-purple-300/50 group-hover:bg-purple-400/10"
                    }`}
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Closing line */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center"
        >
          <p className="max-w-lg text-sm leading-7 text-white/40">
            From the first cut to the final frame, the goal is always the same:
            make every property look its best.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-white transition-colors hover:text-orange-300"
          >
            LET&apos;S WORK TOGETHER
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
