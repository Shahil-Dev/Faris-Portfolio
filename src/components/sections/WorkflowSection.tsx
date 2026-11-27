
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Lightbulb,
  Clapperboard,
  SlidersHorizontal,
  Send,
  ArrowDown,
} from "lucide-react";

const workflow = [
  {
    number: "01",
    title: "Understanding the Vision",
    subtitle: "DISCOVER & DEFINE",
    description:
      "Every successful film begins with understanding the vision. I explore the property's identity, target audience, and creative direction before shaping the editing approach.",
    details: ["Project Brief", "Creative Direction", "Visual References"],
    icon: Lightbulb,
    accent: "#c4b5fd",
  },
  {
    number: "02",
    title: "Crafting the Story",
    subtitle: "STRUCTURE & STORYTELLING",
    description:
      "The footage is carefully organized into a compelling visual narrative. I build the sequence around pacing, composition, and the moments that best communicate the property's character.",
    details: ["Footage Selection", "Story Structure", "Visual Rhythm"],
    icon: Clapperboard,
    accent: "#fdba74",
  },
  {
    number: "03",
    title: "Precision Editing",
    subtitle: "REFINE & ENHANCE",
    description:
      "Every frame receives thoughtful attention through precise editing, transitions, sound design, and color grading. The goal is a cohesive cinematic experience without unnecessary distractions.",
    details: ["Precision Cuts", "Sound Design", "Color Grading"],
    icon: SlidersHorizontal,
    accent: "#93c5fd",
  },
  {
    number: "04",
    title: "Final Delivery",
    subtitle: "REVIEW & DELIVER",
    description:
      "The finished film goes through a final quality review before export. The final files are prepared according to the agreed format and platform requirements.",
    details: ["Quality Review", "Final Export", "File Delivery"],
    icon: Send,
    accent: "#a7f3d0",
  },
];

export default function WorkflowSection() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section
      id="workflow"
      className="relative isolate overflow-hidden bg-[#0a090d] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [0, 65, -25, 0],
                  y: [0, -40, 30, 0],
                  scale: [1, 1.2, 0.95, 1],
                }
          }
          transition={{
            duration: 22,
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
                  x: [0, -55, 20, 0],
                  y: [0, 45, -20, 0],
                }
          }
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-500/[0.07] blur-[150px]"
        />
      </div>

      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <motion.div
          initial={
            reducedMotion
              ? false
              : { opacity: 0, y: 40, filter: "blur(10px)" }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-20 flex flex-col justify-between gap-8 lg:mb-28 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 36 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px bg-orange-400"
              />
              <span className="text-[10px] font-semibold tracking-[0.32em] text-orange-300 sm:text-xs">
                FROM CONCEPT TO COMPLETION
              </span>
            </div>

            <div >
              <motion.h2
                initial={reducedMotion ? false : { y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl"
              >
                The Creative
              </motion.h2>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                initial={reducedMotion ? false : { y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.85,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-gradient-to-r from-purple-300 via-white to-orange-200 bg-clip-text text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-transparent sm:text-5xl lg:text-7xl"
              >
                Workflow.
              </motion.h2>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
              A considered process where every stage has a purpose,
              transforming raw footage into a polished cinematic experience.
            </p>
          </div>

          <div className="flex items-center gap-3 text-white/35">
            <span className="text-[10px] font-medium tracking-[0.2em]">
              FOUR STEPS
            </span>
            <span className="h-px w-10 bg-white/20" />
            <span className="text-[10px] tracking-[0.2em]">
              ONE CREATIVE JOURNEY
            </span>
          </div>
        </motion.div>

        {/* Desktop timeline */}
        <div className="relative hidden lg:block">
          <div className="absolute left-0 right-0 top-[31px] h-px bg-white/10" />

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-[31px] h-px bg-gradient-to-r from-purple-400 via-orange-300 to-purple-400"
          />

          <div className="grid grid-cols-4 gap-7">
            {workflow.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={
                    reducedMotion
                      ? false
                      : { opacity: 0, y: 55 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    delay: reducedMotion ? 0 : index * 0.16,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative"
                >
                  {/* Timeline node */}
                  <div className="relative z-10 mb-12 flex h-[63px] w-[63px] items-center justify-center rounded-full border border-white/15 bg-[#111016] transition-all duration-500 group-hover:border-purple-300/60 group-hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]">
                    <Icon
                      size={22}
                      strokeWidth={1.4}
                      style={{ color: step.accent }}
                    />

                    <span
                      className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#0a090d]"
                      style={{ backgroundColor: step.accent }}
                    />
                  </div>

                  <div className="mb-5 flex items-center gap-3">
                    <span className="text-[11px] font-semibold tracking-[0.2em] text-white/35">
                      STEP {step.number}
                    </span>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>

                  <p
                    className="mb-4 text-[9px] font-semibold tracking-[0.2em]"
                    style={{ color: step.accent }}
                  >
                    {step.subtitle}
                  </p>

                  <h3 className="min-h-[64px] text-xl font-medium leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-purple-200 xl:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-[13px] leading-[1.9] text-white/40">
                    {step.description}
                  </p>

                  <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detail}
                        initial={
                          reducedMotion
                            ? false
                            : { opacity: 0, x: -12 }
                        }
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.45 + index * 0.12 + detailIndex * 0.08,
                        }}
                        className="flex items-center gap-3 text-[11px] text-white/45"
                      >
                        <span
                          className="h-1 w-1 rounded-full"
                          style={{ backgroundColor: step.accent }}
                        />
                        {detail}
                      </motion.div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Tablet and mobile timeline */}
        <div className="relative lg:hidden">
          <div className="absolute bottom-10 left-[23px] top-8 w-px bg-gradient-to-b from-purple-400/70 via-orange-300/50 to-transparent" />

          <div className="space-y-12">
            {workflow.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={
                    reducedMotion
                      ? false
                      : { opacity: 0, x: -30 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    delay: reducedMotion ? 0 : index * 0.08,
                  }}
                  className="relative grid grid-cols-[48px_1fr] gap-5"
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#111016]">
                    <Icon
                      size={19}
                      strokeWidth={1.4}
                      style={{ color: step.accent }}
                    />
                  </div>

                  <div className="pb-2">
                    <p className="mb-3 text-[9px] font-semibold tracking-[0.2em] text-white/35">
                      STEP {step.number} — {step.subtitle}
                    </p>

                    <h3 className="text-xl font-medium leading-snug text-white sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-[13px] leading-[1.9] text-white/45 sm:text-sm">
                      {step.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {step.details.map((detail) => (
                        <span
                          key={detail}
                          className="border border-white/10 bg-white/[0.025] px-3 py-2 text-[9px] tracking-wide text-white/50"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={
            reducedMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
        >
          <p className="max-w-lg text-sm leading-7 text-white/40">
            Thoughtful planning. Intentional storytelling. Refined execution.
            Every stage contributes to the final experience.
          </p>

          <div className="flex items-center gap-3 text-[9px] font-semibold tracking-[0.2em] text-purple-300">
            THE PROCESS MATTERS
            <ArrowDown size={14} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
