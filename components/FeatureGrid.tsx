"use client";

import { motion } from "framer-motion";
import { Aperture, Hexagon, Layers, Sparkle } from "lucide-react";

const features = [
  {
    title: "Identity Amplification Core",
    description:
      "Proprietary neural identity mesh locks facial structure, gaze, and micro-expression while amplifying texture realism.",
    accent: "Identity",
    icon: Aperture
  },
  {
    title: "Volumetric Detail Lattice",
    description:
      "Spectral detail synthesis pairs displacement micro-geometry with cinematic lighting, delivering tactility in every pixel.",
    accent: "Detail",
    icon: Layers
  },
  {
    title: "Futuristic Chromatic Engine",
    description:
      "Multi-band chroma fuses glacial blues, plasma purples, and luminous neons for a future-forward aesthetic without artifacts.",
    accent: "Futurism",
    icon: Hexagon
  },
  {
    title: "Instantaneous Fusion Pipeline",
    description:
      "GPU-accelerated rendering compresses an entire studio workflow into a sub-second transformation cycle.",
    accent: "Speed",
    icon: Sparkle
  }
];

export default function FeatureGrid() {
  return (
    <section className="relative z-10 mt-24">
      <div className="mb-10 flex flex-col items-start gap-3 text-left sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.38em] text-neon-blue/80">Capabilities</p>
          <h2 className="mt-2 max-w-xl font-display text-3xl text-white">
            Next-generation AI effects sculpted for cinematic fidelity and adaptive storytelling.
          </h2>
        </div>
        <p className="max-w-lg text-sm text-white/60">
          Every module in Nebula Forge is built for human identity at the core. We fuse neural
          photogrammetry with imaginative illumination to create visuals that feel simultaneous—both
          real and aspirational.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent p-6"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(71,200,255,0.18),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(162,89,255,0.22),transparent_45%)]" />
              </div>
              <div className="relative flex items-start gap-4">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.05] text-neon-blue">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-blue/20 via-transparent to-neon-purple/20 blur-lg" />
                  <Icon className="relative h-6 w-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/50">
                    {feature.accent}
                  </div>
                  <h3 className="mt-3 font-display text-xl text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
