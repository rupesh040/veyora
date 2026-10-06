"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CalendarDays,
  Eye,
  FolderOpen,
  Users,
} from "lucide-react";

import content from '../data';
const { categories, recentPosts, articleSections, header, quote, sidebarCTA, sidebarHeadings } = content.blogDetail;

const iconMap: Record<string, any> = { CalendarDays, Eye, FolderOpen, Users };

export default function BlogDetailPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#111827]">
      <BlogContent />
    </main>
  );
}

function BlogContent() {
  return (
    <section className="relative bg-white px-5 py-12 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-12 lg:py-24 xl:px-16">
      <div className="mx-auto grid max-w-[1350px] gap-10 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_370px] xl:gap-14">
        <motion.article
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.08,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="min-w-0"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative aspect-[1.7/1] overflow-hidden rounded-lg"
          >
            <Image
              src={header.image}
              alt={header.imageAlt}
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 70vw"
            />
          </motion.div>

          <BlogMeta />

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-5 max-w-[900px] text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.045em] text-[#10234a]"
          >
            {header.titleStart}{" "}
            <span className="text-[#d8003f]">
              {header.titleHighlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="mt-6 max-w-[900px] text-base leading-[1.7] text-[#536074] sm:text-lg"
          >
            {header.description}
          </motion.p>

          <div className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
            {articleSections.map((section, index) => (
              <ArticleSection
                key={section.number}
                section={section}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-10 rounded-lg bg-[#fff0f2] px-6 py-7 sm:px-8 sm:py-8"
          >
            <div className="flex gap-5">
              <span className="text-5xl font-bold leading-none text-[#e00040]">
                “
              </span>

              <div>
                <p className="text-base font-semibold leading-[1.6] text-[#26334c] sm:text-lg">
                  {quote.text}
                </p>

                <p className="mt-4 text-sm text-[#536074] sm:text-base">
                  {quote.authorStart}
                  <span className="font-semibold text-[#d8003f]">
                    {quote.authorHighlight}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.article>

        <BlogSidebar />
      </div>
    </section>
  );
}

function BlogMeta() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#6b7280] sm:text-base"
    >
      {header.meta.map((m: any, i: number) => {
        const Icon = iconMap[m.icon];
        return (
          <MetaItem
            key={i}
            icon={<Icon size={16} />}
            text={m.text}
          />
        );
      })}
    </motion.div>
  );
}

function MetaItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="text-[#d8003f]">
        {icon}
      </span>

      {text}
    </span>
  );
}

function ArticleSection({
  section,
  index,
}: {
  section: (typeof articleSections)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex gap-5 sm:gap-7"
    >
      <div className="relative shrink-0">
        <div className="absolute left-0 top-0 h-full w-[5px] rounded-full bg-[#e00040]" />

        <div className="ml-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#fff0f2] text-sm font-bold text-[#e00040] sm:h-12 sm:w-12 sm:text-base">
          {section.number}
        </div>
      </div>

      <div className="pt-0.5">
        <h2 className="text-xl font-bold tracking-[-0.02em] text-[#10234a] sm:text-2xl">
          {section.title}
        </h2>

        <p className="mt-2 text-sm leading-[1.7] text-[#687388] sm:text-base">
          {section.description}
        </p>
      </div>
    </motion.div>
  );
}

function BlogSidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
      <motion.div
        initial={{
          opacity: 0,
          x: 35,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.7,
        }}
        className="rounded-lg border border-[#e4e7eb] bg-white p-5 shadow-[0_8px_25px_rgba(16,35,74,0.05)] sm:p-6"
      >
        <SidebarHeading title={sidebarHeadings.categories} />

        <div className="mt-4">
          {categories.map((category, index) => (
            <Link
              key={category}
              href="/blog"
              className={`group flex items-center justify-between gap-4 border-b border-[#edf0f3] px-2 py-3.5 text-sm font-semibold text-[#243451] transition-all duration-300 last:border-b-0 hover:bg-[#fff0f2] hover:px-3 hover:text-[#d8003f] sm:text-base ${
                index === 0
                  ? "bg-[#fff0f2] text-[#d8003f]"
                  : ""
              }`}
            >
              <span>{category}</span>

              <ArrowRight
                size={17}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: 35,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.7,
          delay: 0.1,
        }}
        className="rounded-lg border border-[#e4e7eb] bg-white p-5 shadow-[0_8px_25px_rgba(16,35,74,0.05)] sm:p-6"
      >
        <SidebarHeading title={sidebarHeadings.recentPosts} />

        <div className="mt-5 space-y-5">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group flex gap-3"
            >
              <div className="relative h-[68px] w-[82px] shrink-0 overflow-hidden rounded-md">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="82px"
                />
              </div>

              <div className="min-w-0">
                <h3 className="line-clamp-2 text-sm font-bold leading-[1.35] text-[#20324f] transition-colors duration-300 group-hover:text-[#d8003f]">
                  {post.title}
                </h3>

                <p className="mt-1.5 text-xs text-[#7a8494]">
                  {post.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.7,
          delay: 0.15,
        }}
        className="relative min-h-[280px] overflow-hidden rounded-lg bg-[#a9002f] p-6 text-white sm:p-7"
      >
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />

        <div className="relative z-10 max-w-[220px]">
          <h3 className="text-2xl font-bold leading-[1.15] sm:text-3xl">
            {sidebarCTA.title}
          </h3>

          <p className="mt-4 text-sm leading-[1.55] text-white/90">
            {sidebarCTA.description}
          </p>

          <Link
            href={sidebarCTA.buttonLink}
            className="group mt-6 inline-flex items-center gap-3 rounded-md bg-[#e00040] px-5 py-3 text-sm font-semibold transition-all duration-300 hover:bg-white hover:text-[#a9002f]"
          >
            {sidebarCTA.buttonText}

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </motion.div>
    </aside>
  );
}

function SidebarHeading({
  title,
}: {
  title: string;
}) {
  return (
    <div>
      <h2 className="text-xl font-bold tracking-[-0.025em] text-[#10234a] sm:text-2xl">
        {title}
      </h2>

      <div className="mt-2 h-[3px] w-7 bg-[#d8003f]" />
    </div>
  );
}