"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const beforeSrc =
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80";
const afterSrc =
  "https://images.unsplash.com/photo-1604076947030-7b3b8a74a114?auto=format&fit=crop&w=1600&q=80";

export default function BeforeAfter() {
  const [split, setSplit] = useState(62);

  return (
    <section
      id="live-lab"
      className="relative mt-24 rounded-[38px] border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_120px_-40px_rgba(162,89,255,0.45)] backdrop-blur-2xl"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1 text-xs uppercase tracking-[0.36em] text-neon-blue/80">
            <Sparkles className="h-4 w-4 text-neon-purple" />
            Instant Transform Preview
          </div>
          <h2 className="mt-4 max-w-lg font-display text-3xl text-white">
            Blend imagination and realism with adaptive cinematic overlays.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/65">
            Slide to reveal how Nebula Forge re-lights, recolors, and detail-tracks any portrait. The
            neural mesh understands identity while the spectral engine pours in futuristic luminescence.
          </p>
        </div>
        <div className="text-sm uppercase tracking-[0.28em] text-white/40">
          {split < 50 ? "Identity Source" : "Futuristic Render"}
        </div>
      </div>

      <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-black/40">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={beforeSrc}
            alt="Identity capture before Nebula Forge treatment"
            fill
            className="object-cover"
            priority
          />
          <motion.div
            className="absolute inset-0 overflow-hidden"
            animate={{ width: `${split}%` }}
            transition={{ type: "spring", stiffness: 110, damping: 18, mass: 0.8 }}
          >
            <Image
              src={afterSrc}
              alt="Futuristic cinematic Nebula Forge render"
              fill
              className="object-cover"
              style={{
                filter: "contrast(1.1) saturate(1.25)",
                mixBlendMode: "screen"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/50 via-neon-purple/35 to-transparent mix-blend-screen" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(90,240,255,0.4),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(197,109,255,0.35),transparent_45%)] mix-blend-soft-light" />
          </motion.div>
          <motion.div
            className="absolute inset-y-0 w-1 bg-gradient-to-b from-neon-blue via-white to-neon-purple shadow-[0_0_25px_rgba(120,220,255,0.6)]"
            style={{ left: `calc(${split}% - 2px)` }}
            layout
          />
          <motion.button
            type="button"
            className="absolute top-1/2 h-14 w-14 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl"
            style={{ left: `calc(${split}% - 1.75rem)` }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <Sparkles className="mx-auto h-5 w-5 text-neon-blue" />
          </motion.button>
        </div>
        <div className="absolute inset-x-10 bottom-6 rounded-full border border-white/15 bg-white/[0.07] px-6 py-3 text-xs uppercase tracking-[0.26em] text-white/55">
          Drag to reveal transformation
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={split}
          onChange={(event) => setSplit(parseInt(event.target.value, 10))}
          className="absolute inset-x-10 bottom-6 h-1 appearance-none bg-transparent"
        />
      </div>
    </section>
  );
}
