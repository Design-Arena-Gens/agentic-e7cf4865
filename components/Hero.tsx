"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, FlameKindling } from "lucide-react";

const stats = [
  { label: "Identity precision", value: "99.7%", detail: "Pose-locked structural fidelity" },
  { label: "Ultra detail boost", value: "12K", detail: "Adaptive pixel micro-contrast" },
  { label: "Render time", value: "320ms", detail: "Per transformation average" }
];

const featurePills = [
  "Cinematic relighting lattice",
  "Neural texture diffusion",
  "Hybrid photonic skin mapping"
];

export default function Hero() {
  return (
    <section className="relative z-10 flex flex-col gap-10 overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent p-12 shadow-[0_0_120px_-40px_rgba(79,209,255,0.65)] backdrop-blur-3xl lg:flex-row lg:items-center lg:p-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(90,240,255,0.2),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(162,89,255,0.25),transparent_55%)]" />
      <motion.div
        className="relative flex-1"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-1 text-xs uppercase tracking-[0.38em] text-neon-blue/90">
          <Sparkles className="h-4 w-4 text-neon-purple" />
          Nebula Forge Engine
        </div>
        <h1 className="max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          Generate ultra-realistic identity-first visuals with{" "}
          <span className="bg-gradient-to-r from-neon-blue via-white to-neon-purple bg-clip-text text-transparent">
            cinematic perfection
          </span>{" "}
          in milliseconds.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/80">
          Nebula Forge fuses neural relighting, volumetric detail amplification, and photonic tone
          mapping to create future-grade imagery that feels tactile, expressive, and impossibly
          real.
        </p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          <a
            href="#live-lab"
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-gradient-to-br from-neon-blue/80 via-neon-purple/80 to-neon-cyan/80 px-6 py-3 text-base font-semibold text-white shadow-[0_18px_30px_-18px_rgba(120,220,255,0.8)] drop-shadow-glow transition-all duration-300 hover:shadow-[0_25px_45px_-20px_rgba(120,220,255,0.95)]"
          >
            Launch the Forge
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
          </a>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white/70">
            <FlameKindling className="h-4 w-4 text-neon-purple" />
            AI-native look dev with instant previews
          </div>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-3 text-sm uppercase tracking-[0.24em] text-white/50">
          {featurePills.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs tracking-[0.3em]"
            >
              {pill}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="relative flex-1"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative flex flex-col gap-4 rounded-3xl border border-white/15 bg-slate-950/70 p-6 shadow-inner shadow-white/5">
          <div className="absolute -right-12 top-14 h-32 w-32 rounded-full bg-gradient-to-br from-neon-blue/60 to-neon-purple/60 blur-3xl" />
          <div className="absolute -left-8 bottom-10 h-28 w-28 rounded-full bg-gradient-to-br from-neon-purple/60 to-neon-cyan/60 blur-3xl" />
          <h2 className="font-display text-lg uppercase tracking-[0.4em] text-white/70">
            Runtime Metrics
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-60" />
                <p className="text-xs uppercase tracking-[0.32em] text-white/40">{stat.label}</p>
                <p className="mt-3 font-display text-3xl text-white">{stat.value}</p>
                <p className="mt-1 text-xs text-white/50">{stat.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/65">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05]">
                <Zap className="h-5 w-5 text-neon-blue" />
              </div>
              <div>
                <p className="font-display text-sm text-white">Neural Identity Lock</p>
                <p className="text-xs text-white/50">
                  Adaptive biometric mapping keeps your subjects recognisable across lighting shifts.
                </p>
              </div>
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-neon-blue/80">
              Active
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
