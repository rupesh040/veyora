"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import contentData from "@/src/data";
import type { TestimonialsData, TestimonialItem } from "@/src/types/content";

const testimonialsData = contentData.testimonials as TestimonialsData;
const testimonials = testimonialsData.items;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [direction, setDirection] = useState(1);

  const total = testimonials.length;

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % total);
  };

  const previousSlide = () => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % total);
    }, 6000);

    return () => clearInterval(interval);
  }, [total]);

  const visibleTestimonials = [-1, 0, 1].map((offset) => {
    const index = (activeIndex + offset + total) % total;

    return {
      ...testimonials[index],
      position: offset,
    };
  });

  return (
    <section className="relative overflow-hidden bg-[#faf9f7] px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14 xl:px-16 xl:py-16">
      <BackgroundDecorations />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <Header
          data={testimonialsData}
          onPrevious={previousSlide}
          onNext={nextSlide}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 sm:mt-12 lg:mt-14"
        >
          <div className="hidden grid-cols-3 gap-6 lg:grid xl:gap-8">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard
                key={`${testimonial.id}-${testimonial.position}`}
                testimonial={testimonial}
                active={testimonial.position === 0}
              />
            ))}
          </div>

          <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:hidden">
            {visibleTestimonials.slice(0, 2).map((testimonial) => (
              <TestimonialCard
                key={`${testimonial.id}-${testimonial.position}`}
                testimonial={testimonial}
                active={testimonial.position === 0}
              />
            ))}
          </div>
          <div className="overflow-hidden sm:hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, { offset, velocity }) => {
                  if (offset.x > 40 || velocity.x > 250) {
                    previousSlide();
                  } else if (offset.x < -40 || velocity.x < -250) {
                    nextSlide();
                  }
                }}
                initial={{
                  opacity: 0,
                  x: direction * 40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction * -40,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="cursor-grab active:cursor-grabbing"
              >
                <TestimonialCard
                  testimonial={{
                    ...testimonials[activeIndex],
                    position: 0,
                  }}
                  active
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
        <div className="mt-7 flex items-center justify-center gap-3 sm:mt-10 sm:gap-5">
          <CarouselButton
            direction="left"
            onClick={previousSlide}
            className="md:hidden"
          />

          <Pagination
            activeIndex={activeIndex}
            total={total}
            onSelect={goToSlide}
          />

          <CarouselButton
            direction="right"
            onClick={nextSlide}
            className="md:hidden"
          />
        </div>
      </div>
    </section>
  );
}

function Header({
  data,
  onPrevious,
  onNext,
}: {
  data: TestimonialsData;
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative text-center"
    >
      <div className="inline-flex rounded-full border-2 border-[#e8b5bc] bg-white/70 px-6 py-1.5 sm:px-7 sm:py-2">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#17191f] sm:text-sm">
          {data.badge}
        </span>
      </div>

      <h2 className="mx-auto mt-4 max-w-[1100px] text-[clamp(2.1rem,5vw,4.5rem)] font-bold leading-[1.04] tracking-[-0.045em] text-[#101522] sm:mt-6">
        {data.heading.line1}{" "}
        <span className="text-[#d8003f]">{data.heading.highlight}</span>
      </h2>

      <p className="mx-auto mt-3.5 max-w-[750px] text-base leading-relaxed text-[#17191f]/85 sm:mt-5 sm:text-lg md:text-xl">
        {data.description}
      </p>
      <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 items-center gap-3 md:flex">
        <CarouselButton
          direction="left"
          onClick={onPrevious}
        />

        <CarouselButton
          direction="right"
          onClick={onNext}
        />
      </div>
    </motion.div>
  );
}

function CarouselButton({
  direction,
  onClick,
  className = "",
}: {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Previous testimonial" : "Next testimonial"}
      className={`group flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border border-[#17191f]/30 bg-white/95 text-[#17191f] shadow-xs transition-all duration-300 hover:border-[#d8003f] hover:bg-[#d8003f] hover:text-white cursor-pointer active:scale-95 ${className}`}
    >
      {direction === "left" ? (
        <ChevronLeft
          size={20}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover:-translate-x-0.5"
        />
      ) : (
        <ChevronRight
          size={20}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
    </button>
  );
}

function TestimonialCard({
  testimonial,
  active,
}: {
  testimonial: TestimonialItem & {
    position: number;
  };
  active: boolean;
}) {
  return (
    <motion.article
      layout
      whileHover={{
        y: active ? -6 : -4,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`relative flex min-h-[380px] sm:min-h-[430px] flex-col overflow-hidden rounded-[18px] p-6 sm:p-8 md:p-9 shadow-[0_12px_35px_rgba(16,21,34,0.08)] transition-all duration-500 ${
        active
          ? "bg-[#111318] text-white"
          : "border border-[#eadbdd] bg-white text-[#11151c]"
      }`}
    >
      <div
        className={`text-[48px] sm:text-[56px] font-bold leading-[0.7] ${
          active ? "text-[#e00045]" : "text-[#d8003f]"
        }`}
      >
        “
      </div>

      <div className="mt-2 flex items-center gap-1.5 text-[#d8003f]">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className="text-[20px] sm:text-[23px] leading-none"
          >
            ★
          </span>
        ))}
      </div>

      <p
        className={`mt-6 sm:mt-7 max-w-[390px] text-[15px] sm:text-[17px] font-medium leading-[1.55] sm:leading-[1.5] ${
          active ? "text-white/95" : "text-[#17191f]"
        }`}
      >
        {testimonial.quote}
      </p>

      <div className="mt-auto flex flex-col items-center pt-7 sm:pt-8 text-center">
        <div
          className={`relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full ring-4 ${
            active ? "ring-[#e00045]/30 bg-white/20" : "ring-black/[0.06] bg-[#e7e4e1]"
          }`}
        >
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 80px, 96px"
          />
        </div>

        <h3
          className={`mt-3.5 sm:mt-4 text-base sm:text-lg font-bold ${
            active ? "text-white" : "text-[#11151c]"
          }`}
        >
          {testimonial.name}
        </h3>

        <p
          className={`mt-0.5 text-xs sm:text-sm ${
            active ? "text-white/75" : "text-[#17191f]/80"
          }`}
        >
          {testimonial.role}
        </p>
      </div>
    </motion.article>
  );
}

function Pagination({
  activeIndex,
  total,
  onSelect,
}: {
  activeIndex: number;
  total: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-1.5 sm:gap-2.5">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onSelect(index)}
          aria-label={`Go to testimonial ${index + 1}`}
          className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
            index === activeIndex
              ? "w-8 sm:w-16 md:w-22 bg-[#d8003f]"
              : "w-3 sm:w-8 md:w-12 bg-[#dedbd8] hover:bg-[#bdb9b6]"
          }`}
        />
      ))}
    </div>
  );
}

function BackgroundDecorations() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 12, 0],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-24 -top-20 h-72 w-72 rounded-full border-[32px] border-[#f4d9dc]/40 sm:h-96 sm:w-96"
      />

      <motion.div
        animate={{
          x: [0, -10, 0],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full border-[28px] border-[#f4d9dc]/30 sm:h-80 sm:w-80"
      />

      <div className="pointer-events-none absolute left-0 top-0 opacity-40">
        <DotPattern />
      </div>

      <div className="pointer-events-none absolute bottom-0 right-0 opacity-40">
        <DotPattern />
      </div>

      <motion.div
        animate={{
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[7%] top-[25%] hidden h-28 w-28 rounded-full border border-[#edcbd0]/40 lg:block"
      />
    </>
  );
}

function DotPattern() {
  return (
    <svg
      width="180"
      height="180"
      viewBox="0 0 180 180"
      fill="none"
      aria-hidden="true"
    >
      {Array.from({ length: 100 }).map((_, index) => {
        const row = Math.floor(index / 10);
        const column = index % 10;

        return (
          <circle
            key={index}
            cx={column * 18 + 3}
            cy={row * 18 + 3}
            r="1.5"
            fill="#d8003f"
            opacity={0.18 + ((row + column) % 3) * 0.05}
          />
        );
      })}
    </svg>
  );
}