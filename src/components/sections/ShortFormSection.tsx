"use client";

import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { Play, Smartphone, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const shortFilms = [
  {
    number: "01",
    category: "LUXURY PROPERTY",
    title: "Every detail deserves its own spotlight.",
    description:
      "Bring the finest architectural details into focus with carefully crafted vertical storytelling. Create an immersive experience that makes every second count.",
    gradient: "from-[#6d3c8c] via-[#382044] to-[#15121c]",
    accent: "#c084fc",
    scene: "ARCHITECTURAL DETAILS",
  },
  {
    number: "02",
    category: "PROPERTY TOUR",
    title: "Make every space feel worth exploring.",
    description:
      "Turn property walkthroughs into engaging visual journeys built for modern audiences. Guide viewers through the atmosphere, layout, and character of every space.",
    gradient: "from-[#9b542c] via-[#512b27] to-[#191218]",
    accent: "#fb923c",
    scene: "INTERIOR EXPERIENCE",
  },
  {
    number: "03",
    category: "REAL ESTATE REELS",
    title: "Capture attention before the scroll continues.",
    description:
      "Combine dynamic pacing with purposeful transitions to create memorable short-form content. Every frame is designed to communicate more in less time.",
    gradient: "from-[#354d72] via-[#202c45] to-[#11131d]",
    accent: "#93c5fd",
    scene: "CINEMATIC STORYTELLING",
  },
  {
    number: "04",
    category: "LIFESTYLE FILM",
    title: "Sell the feeling, not just the property.",
    description:
      "Showcase the lifestyle behind a property through atmosphere, movement, and visual rhythm. Create short films that make a space feel unforgettable.",
    gradient: "from-[#66513a] via-[#3b3029] to-[#17131a]",
    accent: "#fdba74",
    scene: "LIFESTYLE VISUALS",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 55, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function FilmCard({
  film,
  index,
  reducedMotion,
}: {
  film: (typeof shortFilms)[number];
  index: number;
  reducedMotion: boolean;
}) {
  const cardRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseY, {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  });

  const springY = useSpring(mouseX, {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  });

  const rotateX = useTransform(springX, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(springY, [-0.5, 0.5], [-7, 7]);

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    if (reducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {
          opacity: 0,
          y: 85,
          scale: 0.92,
          filter: "blur(14px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            duration: 0.9,
            delay: reducedMotion ? 0 : index * 0.15,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      style={
        reducedMotion
          ? undefined
          : {
              rotateX,
              rotateY,
              transformPerspective: 1000,
            }
      }
      className="group min-w-0"
    >
      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                y: [0, -7, 0],
              }
        }
        transition={{
          duration: 5 + index * 0.7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.35,
        }}
        className={`relative mx-auto aspect-[9/16] w-full max-w-[330px] overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br ${film.gradient} shadow-[0_20px_65px_rgba(0,0,0,0.35)] transition-[border-color,box-shadow] duration-500 group-hover:border-white/25 group-hover:shadow-[0_30px_90px_rgba(0,0,0,0.55)]`}
      >
        {/* Animated preview atmosphere */}
        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  scale: [1, 1.2, 1],
                  rotate: [0, 8, 0],
                  opacity: [0.2, 0.4, 0.2],
                }
          }
          transition={{
            duration: 9 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-1/4 top-[12%] h-[65%] w-[85%] rounded-full blur-3xl"
          style={{ backgroundColor: film.accent }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(255,255,255,0.13),transparent_55%)]" />

        {/* Architectural composition */}
        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  y: [0, -8, 0],
                  scale: [1, 1.035, 1],
                }
          }
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-x-[12%] top-[18%] h-[45%] border border-white/15 bg-white/[0.035] backdrop-blur-[2px]"
        >
          <div className="absolute inset-x-[12%] top-[12%] h-px bg-white/20" />
          <div className="absolute bottom-0 left-[18%] h-[70%] w-px bg-white/15" />
          <div className="absolute bottom-0 right-[18%] h-[85%] w-px bg-white/15" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />
          <div className="absolute bottom-0 left-[12%] h-[45%] w-[30%] border border-white/10 bg-black/10" />
          <div className="absolute bottom-0 right-[12%] h-[55%] w-[24%] border border-white/10 bg-black/10" />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20" />

        {/* Top label */}
        <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between">
          <span className="text-[9px] font-semibold tracking-[0.2em] text-white/75">
            FILM {film.number}
          </span>
          <span className="rounded-full border border-white/15 bg-black/20 px-2.5 py-1 text-[8px] tracking-wider text-white/65 backdrop-blur-md">
            9:16
          </span>
        </div>

        {/* Scene label */}
        <div className="absolute left-5 top-[48%] z-10 -translate-y-1/2">
          <p
            className="mb-2 text-[8px] font-semibold tracking-[0.25em]"
            style={{ color: film.accent }}
          >
            {film.scene}
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 36 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
            className="h-px bg-white/50"
          />
        </div>

        {/* Play button */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <motion.div
            whileHover={reducedMotion ? undefined : { scale: 1.18 }}
            whileTap={reducedMotion ? undefined : { scale: 0.9 }}
            animate={
              reducedMotion
                ? undefined
                : {
                    boxShadow: [
                      "0 0 0 0px rgba(255,255,255,0.12)",
                      "0 0 0 14px rgba(255,255,255,0)",
                    ],
                  }
            }
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white shadow-[0_0_35px_rgba(255,255,255,0.12)] backdrop-blur-xl"
          >
            <Play size={19} fill="currentColor" className="ml-1" />
          </motion.div>
        </div>

        {/* Animated light sweep */}
        {!reducedMotion && (
          <motion.div
            initial={{ x: "-160%", opacity: 0 }}
            whileHover={{ x: "450%", opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent"
          />
        )}

        {/* Bottom label */}
        <div className="absolute inset-x-5 bottom-5 z-10">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[8px] tracking-[0.2em] text-white/45">
              VIDEO PREVIEW
            </span>
            <span className="h-px w-8 bg-white/30" />
          </div>
          <p className="text-[9px] font-medium tracking-[0.12em] text-white/65">
            PREVIEW COMING SOON
          </p>
        </div>
      </motion.div>

      {/* Card information */}
      <div className="mx-auto mt-6 max-w-[330px]">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[9px] font-semibold tracking-[0.2em] text-purple-300/80">
            {film.category}
          </span>
          <ArrowUpRight
            size={15}
            className="text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-300"
          />
        </div>

        <h3 className="text-xl font-medium leading-snug tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-purple-200">
          {film.title}
        </h3>

        <p className="mt-3 text-[13px] leading-[1.8] text-white/40">
          {film.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function ShortFormSection() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="short-form"
      className="relative isolate overflow-hidden bg-[#0a090d] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      {/* Moving ambient lights */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 90, -30, 0],
                  y: [0, 55, -35, 0],
                  scale: [1, 1.25, 0.9, 1],
                }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/[0.12] blur-[140px]"
        />

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, -75, 30, 0],
                  y: [0, -50, 35, 0],
                  scale: [1, 0.85, 1.2, 1],
                }
          }
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-500/[0.09] blur-[140px]"
        />
      </div>

      <div className="mx-auto max-w-[1400px]">
        {/* Animated heading */}
        <motion.div
          variants={reveal}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 flex flex-col justify-between gap-7 md:mb-20 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-5 flex items-center gap-3"
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 36 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px bg-orange-400"
              />
              <span className="text-[10px] font-semibold tracking-[0.32em] text-orange-300 sm:text-xs">
                SHORT-FORM VIDEO SHOWCASE
              </span>
            </motion.div>

            <div className="">
              <motion.h2
                initial={shouldReduceMotion ? false : { y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.85,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl"
              >
                Short-form
              </motion.h2>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                initial={shouldReduceMotion ? false : { y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-gradient-to-r from-purple-300 via-white to-orange-200 bg-clip-text text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-transparent sm:text-5xl lg:text-7xl"
              >
                Stories
              </motion.h2>
            </div>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 max-w-lg text-sm leading-7 text-white/45 sm:text-base"
            >
              Short-form films designed to stop the scroll, create emotion, and
              make every second of a property worth watching.
            </motion.p>
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex items-center gap-3 text-white/35"
          >
          
          </motion.div>
        </motion.div>

        {/* Staggered video cards */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-10">
          {shortFilms.map((film, index) => (
            <FilmCard
              key={film.number}
              film={film}
              index={index}
              reducedMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
