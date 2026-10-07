"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import content from "../data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface PageBannerProps {
  title?: string;
  breadcrumb?: string;
  backgroundImage?: string;
}

export default function PageBanner({
  title,
  breadcrumb,
  backgroundImage,
}: PageBannerProps) {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter(Boolean);
  const basePath = "/" + (pathParts[0] || "");
  
  // @ts-ignore
  const pageData = content.pageHeroes[basePath] || content.pageHeroes["default"];

  const displayTitle = title || pageData.title;
  const displayBreadcrumb = breadcrumb || pageData.breadcrumb;
  const displayBackgroundImage = backgroundImage || pageData.backgroundImage;
  const breadcrumbItems = [{ label: "Home", href: "/" }];
  
  if (pathParts.length > 1) {
    for (let i = 0; i < pathParts.length - 1; i++) {
      const part = pathParts[i];
      let label = part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, " ");
      if (label.toLowerCase() === 'services') label = 'Service';
      if (label.toLowerCase() === 'blogs') label = 'Blog';
      
      const href = "/" + pathParts.slice(0, i + 1).join("/");
      breadcrumbItems.push({ label, href });
    }
  }

  return (
    <section className={`relative flex min-h-[200px] w-full items-center justify-center overflow-hidden sm:min-h-[240px] md:min-h-[270px] lg:min-h-[300px] ${inter.className}`}>
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${displayBackgroundImage})`,
        }}
      />


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 flex w-full flex-col items-center px-5 text-center sm:px-8"
      >
        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.75,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-[clamp(2.2rem,4vw,4rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white"
        >
          {displayTitle}
        </motion.h1>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.55,
          }}
          className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm sm:mt-6 sm:text-base md:text-lg"
        >
          {breadcrumbItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="cursor-pointer font-medium text-[#ff1744] transition-colors duration-300 hover:text-[#d8003f]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-[#ff1744]">
                  {item.label}
                </span>
              )}

              <ChevronRight
                size={18}
                strokeWidth={2}
                className="text-white/70 sm:size-5"
              />
            </div>
          ))}

          <span className="font-medium text-white">
            {displayBreadcrumb}
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.8,
        }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/15 to-transparent"
      />
    </section>
  );
}