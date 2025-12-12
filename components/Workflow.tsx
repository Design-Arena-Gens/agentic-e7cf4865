"use client";

import { motion } from "framer-motion";
import { BrainCircuit, CloudLightning, Cpu, Sparkles } from "lucide-react";

const workflow = [
  {
    title: "Identity Capture",
    description:
      "Upload a single portrait or multi-angle scan. Nebula Forge builds a biometric mesh that maps facial planes and micro-expression anchors.",
    icon: BrainCircuit,
    duration: "80 ms"
  },
  {
    title: "Neural Light Sculpting",
    description:
      "Relight the subject with volumetric global illumination, adaptive chroma matching, and cinematic tone curves tuned to your look.",
    icon: CloudLightning,
    duration: "110 ms"
  },
  {
    title: "Detail Amplification",
    description:
      "Spectral detail lattice enhances pores, fabrics, and accessories without hallucination, while maintaining noise-free clarity.",
    icon: Cpu,
    duration: "90 ms"
  },
  {
    title: "Futuristic Fusion",
    description:
      "Layer prismatic energy fields, holographic accents, and atmospheric particles for a bespoke futuristic finish.",
    icon: Sparkles,
    duration: "40 ms"
  }
];

export default function Workflow() {
  return (
    <section className="relative mt-24 rounded-[34px] border border-white/10 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent p-10">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.36em] text-neon-blue/80">Pipeline</p>
        <h2 className="mt-2 max-w-3xl font-display text-3xl text-white">
          A fully agentic pipeline that turns raw identity into cinematic sci-fi elegance instantly.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {workflow.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(80,220,255,0.17),transparent_55%)] opacity-0 transition-opacity duration-500 hover:opacity-100" />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] text-neon-blue">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg text-white">{step.title}</h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/55">
                    {step.duration}
                  </span>
                </div>
                <p className="text-sm text-white/65">{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
