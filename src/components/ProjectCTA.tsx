"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import content from "../data";

export default function ProjectCTA() {
  const data = content.projectCTA;
  return (
    <section className="relative overflow-hidden bg-[#0d0e11] px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-10 xl:px-14">
      <div className="pointer-events-none absolute left-3 top-1/2 h-[78%] w-[3px] -translate-y-1/2 bg-[#e50046] sm:left-5 md:left-6 lg:left-8 xl:left-10" />

      <div className="relative mx-auto flex max-w-[1450px] flex-col gap-6 pl-8 sm:pl-10 md:pl-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:pl-14 xl:pl-16">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="min-w-0"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="text-xs font-medium uppercase tracking-[0.08em] text-white/90 sm:text-sm md:text-base"
          >
            {data.badge}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-3 whitespace-nowrap text-[clamp(1.25rem,3.1vw,4.2rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white sm:mt-4"
          >
            {data.headingStart}{" "}
            <span className="text-[#e50046]">{data.headingHighlight}</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="mt-3 text-sm leading-relaxed text-white/90 sm:mt-4 sm:text-base md:text-lg"
          >
            Let&apos;s turn your next big idea into a brand people remember.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex justify-start lg:shrink-0 lg:justify-end"
        >
          <Link
            href={data.buttonLink}
            className="group inline-flex items-center gap-4 rounded-full bg-[#e50046] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_25px_rgba(229,0,70,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f0004d] hover:shadow-[0_15px_35px_rgba(229,0,70,0.28)] sm:gap-5 sm:px-6 sm:py-3.5 sm:text-base md:px-7"
          >
            <span>{data.buttonText}</span>

            <ArrowRight
              size={21}
              strokeWidth={1.8}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}