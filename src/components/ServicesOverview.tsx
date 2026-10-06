"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import content from '../data';
const data = content.servicesOverview;
const { services } = data;

export default function ServicesOverview() {
  return (
    <section className="relative overflow-hidden bg-[#fcfaf8]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ImagePanel />
        <ContentPanel />
      </div>
    </section>
  );
}

function ImagePanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -45 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative min-h-[500px] overflow-hidden bg-[#f9e9eb] sm:min-h-[600px] lg:min-h-[700px]"
    >
      <div className="absolute left-[5%] top-[5%] z-10 h-[70%] w-[76%] overflow-hidden rounded-[18px] sm:left-[8%] sm:w-[74%] lg:left-[9%] lg:w-[75%]">
        <Image
          src="/about/about-1.webp"
          alt="Veyora creative team"
          fill
          priority
          className="object-cover object-center transition-transform duration-1000 hover:scale-[1.03]"
          sizes="(max-width: 1023px) 90vw, 38vw"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50, x: 30 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute bottom-[5%] right-[7%] z-20 h-[39%] w-[47%] overflow-hidden rounded-[18px] border-[5px] border-[#fcfaf8] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)] sm:right-[7%] sm:w-[46%]"
      >
        <Image
          src="/about/about-2.webp"
          alt="Veyora brand identity"
          fill
          className="object-cover object-center transition-transform duration-700 hover:scale-105"
          sizes="(max-width: 1023px) 45vw, 23vw"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.45,
        }}
        className="absolute bottom-[3%] left-[5%] z-10 h-[17%] w-[25%] rounded-[20px] bg-[#f3cfd4] sm:left-[5%] sm:w-[27%]"
      />

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: "17%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.4,
        }}
        className="absolute bottom-[17%] left-[5%] z-30 w-[3px] bg-[#d8003f]"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#fcfaf8]/15 lg:to-[#fcfaf8]/40" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f9e9eb]/50 to-transparent lg:hidden" />
    </motion.div>
  );
}

function ContentPanel() {
  return (
    <div className="flex items-center bg-[#fcfaf8] px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-12 lg:py-20 xl:px-16">
      <div className="w-full max-w-[760px]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="inline-flex rounded-full border-2 border-[#d8003f] px-5 py-1.5 sm:px-6 sm:py-2">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#d8003f] sm:text-sm">
              {data.badge}
            </span>
          </div>

          <h2 className="mt-5 max-w-[720px] text-[clamp(2.2rem,4.5vw,4.6rem)] font-bold leading-[1.04] tracking-[-0.045em] text-[#101522]">
            {data.headingStart}{" "}
            <span className="text-[#c9003b]">
              {data.headingHighlight}
            </span>
          </h2>

          <p className="mt-6 max-w-[690px] text-[15px] leading-[1.6] text-[#17191f] sm:text-base md:text-lg lg:text-xl">
            {data.description}
          </p>
        </motion.div>

        <div className="mt-8 grid sm:grid-cols-2">
          {services.map((service: any, index: number) => (
            <ServiceItem
              key={service.number}
              service={service}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7"
        >
          <Link
            href={data.button1.link}
            className="group inline-flex items-center justify-center gap-4 rounded-lg bg-[#d8003f] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(216,0,63,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#c00037] sm:px-7 sm:py-3.5 sm:text-base"
          >
            <span>{data.button1.text}</span>

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>

          <Link
            href={data.button2.link}
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#17191f] transition-colors duration-300 hover:text-[#d8003f] sm:text-base"
          >
            <span>{data.button2.text}</span>

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function ServiceItem({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: 0.15 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group py-5 sm:py-6 ${
        index >= 2 ? "border-t border-black/[0.08]" : ""
      } ${
        index % 2 === 1
          ? "sm:border-l sm:border-t-0 sm:pl-7"
          : "sm:pr-7"
      }`}
    >
      <div className="flex gap-3 sm:gap-4">
        <span className="shrink-0 pt-0.5 text-[22px] font-semibold leading-none tracking-[-0.04em] text-[#c9003b] sm:text-[25px]">
          {service.number}
        </span>

        <div className="min-w-0">
          <h3 className="text-base font-bold leading-[1.25] tracking-[-0.025em] text-[#11151c] sm:text-lg lg:text-xl">
            {service.title}
          </h3>

          <p className="mt-2 max-w-[280px] text-sm leading-[1.5] text-[#17191f] sm:text-base lg:text-lg">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}