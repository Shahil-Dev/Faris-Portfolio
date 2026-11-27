
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Clapperboard, Film, Layers3 } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Story Before Effects",
    description:
      "Every edit begins with a clear story. Visual effects should strengthen the message, never distract from it.",
    icon: Film,
  },
  {
    number: "02",
    title: "Details Define Quality",
    description:
      "From precise cuts to sound design, every small decision contributes to a more refined final experience.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Emotion Creates Impact",
    description:
      "The goal is not simply to show a property, but to communicate the atmosphere and feeling of the space.",
    icon: Clapperboard,
  },
];

export default function AboutSection() {
  const reducedMotion = useReducedMotion() ?? false;

  const reveal = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#0a090d] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [0, 60, 0],
                  y: [0, -40, 0],
                  scale: [1, 1.15, 1],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 top-20 h-[450px] w-[450px] rounded-full bg-purple-600/[0.10] blur-[150px]"
        />

        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [0, -50, 0],
                  y: [0, 45, 0],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-500/[0.07] blur-[150px]"
        />
      </div>

      <div className="mx-auto max-w-[1400px]">
        {/* Section label */}
        <motion.div
          variants={reveal}
          initial={reducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 flex items-center gap-3"
        >
          <span className="h-px w-9 bg-orange-400" />
          <span className="text-[10px] font-semibold tracking-[0.32em] text-orange-300 sm:text-xs">
            THE PERSON BEHIND THE FRAME
          </span>
        </motion.div>

        {/* Main profile layout */}
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Portrait area */}
          <motion.div
            initial={
              reducedMotion
                ? false
                : { opacity: 0, x: -55, scale: 0.96 }
            }
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[480px]"
          >
            {/* Decorative frame */}
            <div className="absolute -right-3 -top-3 h-full w-full rounded-[3px] border border-purple-400/25 sm:-right-5 sm:-top-5" />

            <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#382044] via-[#17131e] to-[#261a19]">
              {/* Replace this placeholder with the actual portrait */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                  animate={
                    reducedMotion
                      ? undefined
                      : {
                          scale: [1, 1.08, 1],
                          opacity: [0.2, 0.4, 0.2],
                        }
                  }
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute h-[65%] w-[65%] rounded-full bg-purple-500/30 blur-[90px]"
                />

                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md">
                  <Clapperboard
                    size={29}
                    strokeWidth={1}
                    className="text-white/60"
                  />
                </div>

                <p className="relative mt-5 text-[9px] font-medium tracking-[0.25em] text-white/45">
                  PORTRAIT PLACEHOLDER
                </p>
                <p className="relative mt-2 text-[10px] text-white/25">
                  Replace with your photograph
                </p>
              </div>

              {/* Cinematic overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-white/[0.03]" />
              <div className="absolute inset-0 border border-white/[0.08]" />

              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.1,
                  delay: 0.15,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent"
              />

              <div className="absolute bottom-6 left-6">
                <span className="text-[9px] font-medium tracking-[0.25em] text-white/55">
                  CREATIVE IDENTITY
                </span>
              </div>
            </div>

            {/* Floating decorative index */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="absolute -bottom-5 -right-3 flex items-center gap-3 border border-white/10 bg-[#17131d] px-5 py-4 shadow-2xl sm:-right-8"
            >
              <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(251,146,60,0.8)]" />
              <span className="text-[9px] tracking-[0.2em] text-white/65">
                CREATIVE MINDSET
              </span>
            </motion.div>
          </motion.div>

          {/* About content */}
          <div className="relative">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="mb-5 text-[10px] font-semibold tracking-[0.25em] text-purple-300">
                A LITTLE INTRODUCTION
              </p>

              <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                Faris
                <span className="block bg-gradient-to-r from-purple-300 via-white to-orange-200 bg-clip-text text-transparent">
                  Jihan.
                </span>
              </h2>

              <p className="mt-7 text-lg font-medium leading-relaxed text-white/80 sm:text-xl">
                I turn real estate visuals into cinematic stories that
                connect with people.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-[1.95] text-white/45 sm:text-base">
                My approach to video editing is built around storytelling,
                visual composition, and thoughtful pacing. I focus on creating
                polished real estate films that highlight the character of a
                property and make its presentation more engaging.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-[1.95] text-white/45 sm:text-base">
                For me, great editing is more than arranging footage. It is
                about shaping the viewer&apos;s experience through rhythm,
                atmosphere, sound, and detail.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="border border-purple-300/20 bg-purple-400/[0.07] px-4 py-2 text-[9px] font-medium tracking-[0.16em] text-purple-200">
                  REAL ESTATE FILM EDITING
                </span>
                <span className="border border-orange-300/20 bg-orange-400/[0.05] px-4 py-2 text-[9px] font-medium tracking-[0.16em] text-orange-200">
                  VISUAL STORYTELLING
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Creative philosophy */}
        <div className="mt-32 border-t border-white/10 pt-12 sm:mt-40">
          <motion.div
            variants={reveal}
            initial={reducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >
            <div>
              <p className="mb-4 text-[10px] font-semibold tracking-[0.28em] text-orange-300">
                WHAT GUIDES MY WORK
              </p>
              <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                My Creative Philosophy
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/40">
              A thoughtful approach to every frame, every transition, and
              every story.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.div
                  key={principle.number}
                  initial={
                    reducedMotion
                      ? false
                      : { opacity: 0, y: 40 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.75,
                    delay: reducedMotion ? 0 : index * 0.14,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={
                    reducedMotion ? undefined : { y: -7 }
                  }
                  className="group relative overflow-hidden border border-white/[0.08] bg-white/[0.02] p-7 transition-colors duration-500 hover:border-purple-300/25 hover:bg-white/[0.035] sm:p-8"
                >
                  <div className="mb-12 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.2em] text-white/30">
                      {principle.number} / 03
                    </span>

                    <Icon
                      size={21}
                      strokeWidth={1.4}
                      className="text-purple-300/70 transition-colors duration-300 group-hover:text-orange-300"
                    />
                  </div>

                  <h4 className="text-xl font-medium tracking-tight text-white">
                    {principle.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-white/40">
                    {principle.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-orange-400 transition-all duration-700 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
