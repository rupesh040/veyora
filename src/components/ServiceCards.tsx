"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import content from '../data';
const data = content.services;
const { services } = data;

export default function ServiceCards() {
  return (
    <section className="bg-[#fcfaf8] py-4 sm:py-8 lg:py-12 px-5 sm:px-8 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 text-center sm:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#101522] sm:text-5xl"
          >
            {data.cardHeadingStart} <span className="text-[#d8003f]">{data.cardHeadingHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-gray-600"
          >
            {data.cardDescription}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service: any, index: number) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-[16px] border border-gray-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(216,0,63,0.1)] hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="mb-3 text-xl font-bold text-[#101522] transition-colors group-hover:text-[#d8003f]">
                    {service.title}
                  </h3>
                  <p className="mb-6 flex-1 text-[15px] leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                  
                  <Link 
                    href={service.link}
                    className="mt-auto inline-flex items-center font-semibold text-[#d8003f] transition-colors hover:text-[#a90032]"
                  >
                    {data.cardButtonText} 
                    <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
