"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  PieChart,
  Star,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = { PieChart, Star, Trophy, Users };

import content from '../data';
const { items: stats } = content.stats;


export default function Stats() {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 xl:px-12">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[14px] bg-[#101114] px-5 py-10 shadow-[0_15px_50px_rgba(0,0,0,0.15)] sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-12 lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.025),transparent_65%)]" />

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat: any, index: number) => {
            const Icon = iconMap[stat.icon];

            return (
              <StatItem
                key={stat.label}
                stat={stat}
                index={index}
                Icon={Icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatItem({
  stat,
  index,
  Icon,
}: {
  stat: (typeof stats)[number];
  index: number;
  Icon: LucideIcon;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.35,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    let startTime: number | null = null;
    let animationFrame: number;

    const duration = 1800;

    const animateCount = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1,
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(
        easedProgress * stat.value,
      );

      setCount(currentValue);

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animateCount);
      } else {
        setCount(stat.value);
      }
    };

    animationFrame =
      requestAnimationFrame(animateCount);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isInView, stat.value]);

  const formattedCount =
    stat.value === 8
      ? count.toString().padStart(2, "0")
      : count.toString();

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.96,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : undefined
      }
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative flex min-h-[220px] flex-col items-center justify-center px-5 py-8 text-center sm:min-h-[240px] lg:min-h-[280px] lg:px-6 lg:py-10 ${
        index < stats.length - 1
          ? "sm:border-r sm:border-white/15 lg:border-r"
          : ""
      } ${
        index < 2
          ? "border-b border-white/15 sm:border-b-0"
          : ""
      }`}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
          rotate: -10,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                scale: 1,
                rotate: 0,
              }
            : undefined
        }
        transition={{
          duration: 0.6,
          delay: index * 0.12 + 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mb-5 flex h-16 w-16 items-center justify-center sm:h-[72px] sm:w-[72px]"
      >
        <Icon
          size={62}
          strokeWidth={1.5}
          className="text-[#e50046] sm:size-[68px]"
        />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
              }
            : undefined
        }
        transition={{
          duration: 0.6,
          delay: index * 0.12 + 0.25,
        }}
        className="text-[48px] font-bold leading-none tracking-[-0.04em] text-white sm:text-[56px] md:text-[62px]"
      >
        {formattedCount}
        {stat.suffix}
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                scaleX: 1,
              }
            : undefined
        }
        transition={{
          duration: 0.5,
          delay: index * 0.12 + 0.4,
        }}
        className="mt-5 h-1 w-10 origin-center rounded-full bg-[#e50046] sm:w-11"
      />

      <motion.p
        initial={{
          opacity: 0,
          y: 12,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
              }
            : undefined
        }
        transition={{
          duration: 0.6,
          delay: index * 0.12 + 0.5,
        }}
        className="mt-5 text-sm font-medium uppercase tracking-[0.07em] text-white/90 sm:text-base"
      >
        {stat.label}
      </motion.p>
    </motion.div>
  );
}