"use client";

import Image from "next/image";
import { motion } from "motion/react";
import contentData from "@/src/data";
import type { ContentData, OurTeamMember } from "@/src/types/content";

export default function OurTeam() {
  const teamData = (contentData as ContentData).ourTeam!;

  if (!teamData) return null;

  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12 lg:py-28 xl:px-16">
      <div className="mx-auto max-w-[1450px]">
        <Header
          badge={teamData.badge}
          heading={teamData.heading}
          description={teamData.description}
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 sm:gap-6 lg:gap-6 xl:gap-7">
          {teamData.members.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Header({
  badge,
  heading,
  description,
}: {
  badge: string;
  heading: { line1: string; highlight: string };
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-[950px] text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center justify-center rounded-full border border-[#d8003f] px-5 py-1 sm:px-6 sm:py-1.5"
      >
        <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#d8003f] sm:text-sm">
          {badge}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-5 text-[clamp(2.2rem,4.5vw,3.8rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#11151c] sm:mt-6"
      >
        {heading.line1}{" "}
        <span className="text-[#c9003b]">{heading.highlight}</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-3.5 max-w-[800px] text-base leading-relaxed text-[#374151] sm:mt-4 sm:text-lg md:text-xl"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

function TeamCard({
  member,
  index,
}: {
  member: OurTeamMember;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: 0.08 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex flex-col overflow-hidden rounded-[14px] border border-[#e5e7eb] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_34px_rgba(0,0,0,0.08)]"
    >
      <div className="relative aspect-[1/1.03] w-full overflow-hidden bg-[#f3f4f6]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
        />
      </div>
      <div className="h-[2.5px] w-full bg-[#d8003f]" aria-hidden="true" />
      <div className="flex flex-1 flex-col justify-between p-4.5 sm:p-5">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-[#111827] sm:text-[19px]">
            {member.name}
          </h3>

          <p className="mt-0.5 text-sm font-semibold text-[#d8003f] sm:text-[15px]">
            {member.role}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-end gap-2">
          {member.socials?.facebook && (
            <a
              href={member.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on Facebook`}
              className="flex h-6 w-6 items-center justify-center rounded-full border border-[#111827] text-[#111827] transition-all duration-200 hover:border-[#d8003f] hover:bg-[#d8003f] hover:text-white sm:h-6.5 sm:w-6.5"
            >
              <FacebookIcon className="h-3 w-3" />
            </a>
          )}

          {member.socials?.x && (
            <a
              href={member.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on X`}
              className="flex h-6 w-6 items-center justify-center rounded-full border border-[#111827] text-[#111827] transition-all duration-200 hover:border-[#d8003f] hover:bg-[#d8003f] hover:text-white sm:h-6.5 sm:w-6.5"
            >
              <XIcon className="h-3 w-3" />
            </a>
          )}
          {member.socials?.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="flex h-6 w-6 items-center justify-center rounded-full border border-[#111827] text-[#111827] transition-all duration-200 hover:border-[#d8003f] hover:bg-[#d8003f] hover:text-white sm:h-6.5 sm:w-6.5"
            >
              <LinkedinIcon className="h-3 w-3" />
            </a>
          )}

          {member.socials?.instagram && (
            <a
              href={member.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on Instagram`}
              className="flex h-6 w-6 items-center justify-center rounded-full border border-[#111827] text-[#111827] transition-all duration-200 hover:border-[#d8003f] hover:bg-[#d8003f] hover:text-white sm:h-6.5 sm:w-6.5"
            >
              <InstagramIcon className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}