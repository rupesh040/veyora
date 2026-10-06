"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import contentData from "@/src/data";
import type { NavbarData } from "@/src/types/content";

const navbar = contentData.navbar as NavbarData;

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const { logo, navigation, cta, mobile, theme } = navbar;

  return (
    <div>
      <nav
        aria-label="Main navigation"
        style={{ backgroundColor: theme.background }}
        className="relative z-50 w-full"
      >
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12">
          <Link
            href="/"
            aria-label={logo.alt}
            className="relative flex-shrink-0"
          >
            <Image
              src={logo.image}
              alt={logo.alt}
              width={160}
              height={40}
              priority
              className="h-16 w-auto object-contain"
            />
          </Link>

          <ul className="hidden items-center gap-1 md:flex lg:gap-2">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="group relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 lg:px-4 lg:text-base"
                    style={{
                      color: active ? theme.accent : theme.mutedText,
                    }}
                  >
                    <span
                      className="transition-colors duration-200 group-hover:text-white"
                      style={
                        active ? { color: theme.accent } : {}
                      }
                    >
                      {item.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-3 right-3 h-[2px] transition-all duration-200 lg:left-4 lg:right-4"
                      style={{
                        backgroundColor: theme.accent,
                        opacity: active ? 1 : 0,
                      }}
                    />
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-3 right-3 h-[2px] opacity-0 transition-all duration-200 group-hover:opacity-100 lg:left-4 lg:right-4"
                      style={{
                        backgroundColor: theme.mutedText,
                      }}
                    />
                  </Link>
                </li>
              );
            })}
            <li className="ml-3 lg:ml-4">
              <Link
                href={cta.href}
                aria-label={cta.label}
                className="group flex items-center gap-2 rounded-sm px-5 py-2.5 text-sm font-semibold tracking-wider transition-all duration-300 hover:gap-3 lg:px-6 lg:text-base"
                style={{
                  backgroundColor: theme.accent,
                  color: theme.ctaText,
                }}
              >
                {cta.label}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </li>
          </ul>

          <button
            type="button"
            aria-label={mobileOpen ? mobile.closeLabel : mobile.menuLabel}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex cursor-pointer items-center justify-center rounded-sm p-2 transition-colors duration-200 md:hidden"
            style={{ color: theme.text }}
          >
            {mobileOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        className={`fixed inset-0 z-40 flex flex-col transition-all duration-300 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: theme.background }}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        <nav
          aria-label="Mobile menu"
          className={`relative flex h-full flex-col pt-20 transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-8">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center justify-between border-b py-4 text-lg font-medium tracking-wide transition-colors duration-200"
                    style={{
                      color: active ? theme.accent : theme.text,
                      borderColor: "rgba(255,255,255,0.08)",
                    }}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: theme.accent }}
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="px-6 pb-12">
            <Link
              href={cta.href}
              onClick={() => setMobileOpen(false)}
              aria-label={cta.label}
              className="group flex w-full items-center justify-center gap-3 rounded-sm py-4 text-base font-semibold tracking-wider transition-all duration-300"
              style={{
                backgroundColor: theme.accent,
                color: theme.ctaText,
              }}
            >
              {cta.label}
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
