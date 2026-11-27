
"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";

const thumbnails = [
  {
    number: "01",
    category: "LUXURY RESIDENCE",
    title: "The Art of Luxury Living",
    gradient: "from-[#8b5cf6] via-[#42245c] to-[#15111c]",
    accent: "#c4b5fd",
    layout: "large",
  },
  {
    number: "02",
    category: "MODERN ARCHITECTURE",
    title: "Designed Beyond Ordinary",
    gradient: "from-[#c16c38] via-[#633622] to-[#1c1412]",
    accent: "#fdba74",
    layout: "small",
  },
  {
    number: "03",
    category: "PROPERTY MARKETING",
    title: "A New Perspective",
    gradient: "from-[#365a83] via-[#25344e] to-[#111722]",
    accent: "#93c5fd",
    layout: "small",
  },
  {
    number: "04",
    category: "EXCLUSIVE PROPERTY",
    title: "Where Elegance Begins",
    gradient: "from-[#79533e] via-[#44302b] to-[#171315]",
    accent: "#f0b98f",
    layout: "large",
  },
  {
    number: "05",
    category: "INTERIOR DESIGN",
    title: "Spaces That Inspire",
    gradient: "from-[#496b5a] via-[#263e35] to-[#111915]",
    accent: "#a7f3d0",
    layout: "small",
  },
  {
    number: "06",
    category: "LUXURY LIFESTYLE",
    title: "Beyond the Address",
    gradient: "from-[#72508b] via-[#3e2c50] to-[#17121c]",
    accent: "#d8b4fe",
    layout: "small",
  },
];

function ThumbnailCard({
  item,
  index,
}: {
  item: (typeof thumbnails)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion() ?? false;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 130,
    damping: 18,
  });

  const springY = useSpring(y, {
    stiffness: 130,
    damping: 18,
  });

  const rotateX = useTransform(springY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-7, 7]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function resetPosition() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      initial={
        reducedMotion
          ? false
          : { opacity: 0, y: 55, scale: 0.94 }
      }
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        delay: reducedMotion ? 0 : index * 0.1,
        ease: [0.22, 1, 0.36, 1],
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
      className="group relative cursor-default"
    >
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${item.gradient} shadow-[0_18px_50px_rgba(0,0,0,0.35)] transition-[border-color,box-shadow] duration-500 group-hover:border-white/25 group-hover:shadow-[0_25px_65px_rgba(0,0,0,0.55)]`}
      >
        {/* Abstract visual placeholder */}
        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  scale: [1, 1.12, 1],
                  rotate: [0, 3, 0],
                }
          }
          transition={{
            duration: 12 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-[10%] top-[-20%] h-[100%] w-[65%] rounded-full opacity-35 blur-[65px]"
          style={{ backgroundColor: item.accent }}
        />

        {/* Architectural shapes */}
        <div className="absolute inset-[12%] border border-white/15 bg-white/[0.025]">
          <div className="absolute bottom-0 left-[15%] h-[75%] w-[1px] bg-white/20" />
          <div className="absolute bottom-0 right-[20%] h-[90%] w-[1px] bg-white/20" />
          <div className="absolute bottom-[25%] left-0 right-0 h-px bg-white/15" />
          <div className="absolute bottom-0 left-[15%] h-[45%] w-[28%] border border-white/15 bg-black/10" />
          <div className="absolute bottom-0 right-[20%] h-[55%] w-[24%] border border-white/15 bg-black/10" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/15" />

        {/* Top metadata */}
        <div className="absolute inset-x-5 top-4 z-10 flex items-center justify-between">
          <span className="text-[9px] font-semibold tracking-[0.2em] text-white/65">
            DESIGN {item.number}
          </span>
          <ImageIcon size={15} className="text-white/50" />
        </div>

        {/* Thumbnail typography */}
        <div className="absolute inset-x-6 bottom-6 z-10">
          <motion.p
            animate={
              reducedMotion
                ? undefined
                : { opacity: [0.65, 1, 0.65] }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.3,
            }}
            className="mb-2 text-[8px] font-semibold tracking-[0.25em]"
            style={{ color: item.accent }}
          >
            {item.category}
          </motion.p>

          <h3 className="max-w-[85%] text-xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-2xl">
            {item.title}
          </h3>

          <div className="mt-3 flex items-center gap-2">
            <span className="h-px w-7 bg-white/50" />
            <span className="text-[8px] tracking-[0.18em] text-white/50">
              THUMBNAIL PREVIEW
            </span>
          </div>
        </div>

        {/* Hover light sweep */}
        <motion.div
          initial={{ x: "-150%", opacity: 0 }}
          whileHover={{ x: "400%", opacity: 1 }}
          transition={{ duration: 0.85, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 z-10 bg-purple-400/0 transition-colors duration-500 group-hover:bg-purple-400/[0.04]" />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-[9px] tracking-[0.2em] text-white/35">
          CONCEPT PREVIEW
        </span>
        <ArrowUpRight
          size={15}
          className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-300"
        />
      </div>
    </motion.div>
  );
}

export default function ThumbnailShowcase() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section
      id="thumbnails"
      className="relative isolate overflow-hidden bg-[#0a090d] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [0, 70, -30, 0],
                  y: [0, -40, 30, 0],
                  scale: [1, 1.2, 0.9, 1],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-purple-600/[0.10] blur-[150px]"
        />

        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [0, -60, 30, 0],
                  y: [0, 50, -20, 0],
                }
          }
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-500/[0.08] blur-[150px]"
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
          className="mb-16 flex flex-col justify-between gap-7 md:mb-20 md:flex-row md:items-end"
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
                VISUAL IMPACT IN A SINGLE FRAME
              </span>
            </div>

            <div className="">
              <motion.h2
                initial={reducedMotion ? false : { y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl"
              >
                First Impressions
              </motion.h2>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                initial={reducedMotion ? false : { y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-gradient-to-r from-purple-300 via-white to-orange-200 bg-clip-text text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-transparent sm:text-5xl lg:text-7xl"
              >
                Matter.
              </motion.h2>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
              Bold visual compositions crafted to capture attention,
              communicate value, and make every property stand out.
            </p>
          </div>

          <div className="text-[10px] font-medium tracking-[0.22em] text-white/35">
            <span className="text-purple-300">06</span> VISUAL CONCEPTS
          </div>
        </motion.div>

        {/* Thumbnail gallery */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-12">
          {thumbnails.map((item, index) => (
            <ThumbnailCard
              key={item.number}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center"
        >
          <p className="text-xs leading-6 text-white/35">
            Visual concepts shown as placeholders. Actual thumbnail designs
            will replace these previews.
          </p>

          <span className="text-[9px] font-medium tracking-[0.2em] text-purple-300/70">
            DESIGN · COMPOSITION · IMPACT
          </span>
        </motion.div>
      </div>
    </section>
  );
}
