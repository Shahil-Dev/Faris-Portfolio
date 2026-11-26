
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Film, Play } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "LUXURY RESIDENCE",
    title: "A property deserves more than a simple walkthrough.",
    description:
      "Every architectural detail contributes to the story of a property. Cinematic pacing and thoughtful transitions bring that story to life.",
    gradient:
      "radial-gradient(ellipse at 65% 25%, rgba(139,92,246,0.35), transparent 48%), linear-gradient(135deg, #21172d, #101015 65%, #2a1712)",
  },
  {
    number: "02",
    category: "ARCHITECTURAL FILM",
    title: "Architecture becomes unforgettable through storytelling.",
    description:
      "Carefully composed visuals reveal the character of every space. Refined editing creates a seamless and immersive viewing experience.",
    gradient:
      "radial-gradient(ellipse at 30% 35%, rgba(255,118,40,0.24), transparent 48%), linear-gradient(135deg, #261b18, #111116 65%, #21152b)",
  },
  {
    number: "03",
    category: "PROPERTY SHOWCASE",
    title: "Every space has a story worth experiencing.",
    description:
      "From expansive interiors to the smallest architectural details, every frame has a purpose. The final film connects these moments into one visual journey.",
    gradient:
      "radial-gradient(ellipse at 70% 30%, rgba(139,92,246,0.3), transparent 48%), linear-gradient(135deg, #17152b, #101015 65%, #252019)",
  },
  {
    number: "04",
    category: "CINEMATIC PROPERTY FILM",
    title: "The right atmosphere changes how a property feels.",
    description:
      "Lighting, rhythm and sound work together to establish an atmosphere. Precise editing transforms raw footage into a cohesive cinematic experience.",
    gradient:
      "radial-gradient(ellipse at 40% 25%, rgba(255,118,40,0.22), transparent 48%), linear-gradient(135deg, #291b19, #111116 65%, #1d1629)",
  },
];

export default function LongFormSection() {
  const reduceMotion = useReducedMotion();

  const reveal = reduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 45 };

  return (
    <section
      id="long-form"
      className="relative overflow-hidden bg-[#09090d] px-5 py-24 text-white sm:px-8 lg:px-16 lg:py-32"
    >
      {/* Ambient lighting */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/[0.07] blur-[130px]"
        animate={reduceMotion ? undefined : { x: [0, 35, 0], y: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-500/[0.05] blur-[130px]"
        animate={reduceMotion ? undefined : { x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-[1440px]">

        {/* Section heading */}
        <motion.div
          initial={reveal}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <motion.span
                initial={reduceMotion ? false : { width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-purple-400"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-purple-300">
                Selected Works / 01
              </span>
            </div>

            <h2 className="font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Long-form
              <span className="block text-purple-400">Films.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
              Cinematic property films crafted with precision, atmosphere and
              a passion for visual storytelling.
            </p>
          </div>

         
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={reveal}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: reduceMotion ? 0 : index * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduceMotion ? undefined : { y: -7 }}
              className="group min-w-0"
            >
              {/* Video preview placeholder */}
              <div
                className="relative aspect-video overflow-hidden rounded-lg border border-white/10 transition-colors duration-500 group-hover:border-purple-400/50"
                style={{ background: project.gradient }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/[0.03]"
                  whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                />

                {/* Subtle light sweep */}
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-y-10 -left-1/2 z-[1] w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
                  initial={{ x: 0, opacity: 0 }}
                  whileInView={reduceMotion ? undefined : { x: "430%", opacity: [0, 1, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.35 + index * 0.14, ease: "easeInOut" }}
                />

                <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center">
                  <motion.div
                    whileHover={reduceMotion ? undefined : { scale: 1.14 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/[0.07] text-white/80 shadow-[0_0_25px_rgba(139,92,246,0.12)] backdrop-blur-md transition-colors duration-300 group-hover:border-purple-300/60 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_35px_rgba(139,92,246,0.3)]"
                  >
                    <Play size={19} fill="currentColor" className="ml-1" />
                  </motion.div>

                  <span className="mt-4 text-[9px] font-medium uppercase tracking-[0.3em] text-white/55">
                    Video preview coming soon
                  </span>
                </div>

                <div className="absolute left-5 top-5 z-[3]">
                  <span className="rounded border border-white/15 bg-black/25 px-3 py-1.5 text-[9px] tracking-[0.2em] text-white/70 backdrop-blur-md">
                    PROJECT {project.number}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 z-[3] flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/55">
                    {project.category}
                  </span>
                  <span className="text-[9px] text-white/40">16:9</span>
                </div>
              </div>

              {/* Project information */}
              <div className="pt-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-purple-300">
                    {project.category}
                  </span>

                  <span className="font-mono text-[10px] text-white/25">
                    {project.number} / 04
                  </span>
                </div>

                <h3 className="max-w-xl font-heading text-xl font-medium leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-purple-200 sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-xl text-xs leading-7 text-white/45 sm:text-sm">
                  {project.description}
                </p>

                <motion.div
                  className="mt-5 h-px w-full origin-left bg-white/10"
                  whileHover={reduceMotion ? undefined : {
                    scaleX: 1,
                    backgroundColor: "rgba(167,139,250,0.65)",
                  }}
                  transition={{ duration: 0.35 }}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
