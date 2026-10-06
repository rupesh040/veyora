"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ExternalLink,
  MapPin,
  Minus,
  Plus,
} from "lucide-react";

import content from '../data';

export default function LocationSection() {
  const data = content.locationSection;
  const { latitude, longitude } = data;

  const [mapType, setMapType] = useState<
    "roadmap" | "satellite"
  >("roadmap");

  const [zoom, setZoom] = useState(10);

  const mapUrl = useMemo(() => {
    const params = new URLSearchParams({
      q: `${latitude},${longitude}`,
      z: String(zoom),
      output: "embed",
    });

    if (mapType === "satellite") {
      params.set("t", "k");
    }

    return `https://www.google.com/maps?${params.toString()}`;
  }, [mapType, zoom]);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  const zoomIn = () => {
    setZoom((current) => Math.min(current + 1, 20));
  };

  const zoomOut = () => {
    setZoom((current) => Math.max(current - 1, 3));
  };

  const toggleMapType = () => {
    setMapType((current) =>
      current === "roadmap"
        ? "satellite"
        : "roadmap",
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f8f5] px-3 py-3 sm:px-5 sm:py-5 lg:px-6 lg:py-6">
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.03,
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
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative h-[430px] overflow-hidden rounded-[4px] bg-[#e8eee7] sm:h-[500px] md:h-[560px] lg:h-[620px] xl:h-[680px]"
      >
        <motion.iframe
          key={`${mapType}-${zoom}`}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.35,
          }}
          title="Veyora USA Location"
          src={mapUrl}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/[0.03]" />

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
            y: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-4 top-4 z-20 w-[calc(100%-32px)] max-w-[365px] overflow-hidden rounded-xl border border-[#d8d8d8] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] sm:left-6 sm:top-6 sm:w-[365px] md:left-8 md:top-8"
        >
          <div className="border-l-[5px] border-[#d8003f] px-5 py-4 sm:px-6 sm:py-5">
            <div className="flex items-start gap-3">
              <MapPin
                size={24}
                strokeWidth={2.5}
                className="mt-0.5 shrink-0 text-[#c9003b]"
              />

              <div>
                <h2 className="text-base font-bold leading-tight text-[#111318] sm:text-lg">
                  {data.title}
                </h2>

                <p className="mt-1 text-sm leading-[1.4] text-[#17191f]/80 sm:text-base">
                  {data.address}
                </p>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-[#c9003b] transition-colors duration-300 hover:text-[#111318] sm:text-base"
                >
                  Open in Maps
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.button
          type="button"
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          onClick={toggleMapType}
          aria-label="Toggle map and satellite view"
          className="absolute right-4 top-4 z-20 flex items-center gap-3 rounded-xl border border-[#d8d8d8] bg-white/95 px-3 py-2.5 shadow-[0_8px_25px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:right-6 sm:top-6 sm:px-4 sm:py-3 md:right-8 md:top-8"
        >
          <span
            className={`relative flex h-5 w-9 items-center rounded-full p-0.5 transition-colors duration-300 ${
              mapType === "satellite"
                ? "bg-[#d8003f]"
                : "bg-[#cfcfcf]"
            }`}
          >
            <span
              className={`h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${
                mapType === "satellite"
                  ? "translate-x-4"
                  : "translate-x-0"
              }`}
            />
          </span>

          <span className="hidden text-sm font-semibold text-[#17191f] sm:block">
            {mapType === "satellite"
              ? "Satellite"
              : "Map"}
          </span>

          <span className="text-xs font-medium text-[#17191f]/50 sm:hidden">
            {mapType === "satellite"
              ? "SAT"
              : "MAP"}
          </span>
        </motion.button>

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
            delay: 0.6,
          }}
          className="absolute bottom-5 right-5 z-20 flex flex-col overflow-hidden rounded-xl border border-[#d8d8d8] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.15)] sm:bottom-7 sm:right-7"
        >
          <button
            type="button"
            onClick={zoomIn}
            disabled={zoom >= 20}
            aria-label="Zoom in"
            className="flex h-12 w-12 items-center justify-center border-b border-[#dedede] text-[#111318] transition-all duration-300 hover:bg-[#d8003f] hover:text-white disabled:pointer-events-none disabled:opacity-30 sm:h-14 sm:w-14"
          >
            <Plus
              size={22}
              strokeWidth={2}
            />
          </button>

          <button
            type="button"
            onClick={zoomOut}
            disabled={zoom <= 3}
            aria-label="Zoom out"
            className="flex h-12 w-12 items-center justify-center text-[#111318] transition-all duration-300 hover:bg-[#d8003f] hover:text-white disabled:pointer-events-none disabled:opacity-30 sm:h-14 sm:w-14"
          >
            <Minus
              size={22}
              strokeWidth={2}
            />
          </button>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="pointer-events-none absolute bottom-5 left-5 z-10 hidden rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-[#17191f] shadow-md backdrop-blur-sm sm:block"
        >
          {mapType === "satellite"
            ? "Satellite View"
            : "Map View"}
        </motion.div>
      </motion.div>
    </section>
  );
}