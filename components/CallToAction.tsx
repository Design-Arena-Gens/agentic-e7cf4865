"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative mt-28 overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-neon-blue/20 via-transparent to-neon-purple/15 p-10 shadow-[0_60px_120px_-80px_rgba(90,200,255,0.9)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(90,240,255,0.25),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(162,89,255,0.25),transparent_45%)] opacity-80" />
      <motion.div
        className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Deploy Nebula Forge</p>
          <h2 className="mt-4 font-display text-3xl text-white">
            Bring hyper-real identity visuals to your cinematic universe, brand world, or immersive
            experience.
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Launch the API, integrate into Unreal, or connect with our creative technologists for bespoke
            look development. The future of visual identity is rendered in real time.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <a
            href="mailto:hello@nebulaforge.ai"
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-6 py-3 font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-white/20"
          >
            <Cpu className="h-4 w-4 text-neon-blue" />
            Request Private Access
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
          </a>
          <span className="text-xs uppercase tracking-[0.34em] text-white/50">
            24h onboarding • enterprise ready • gpu native
          </span>
        </div>
      </motion.div>
    </section>
  );
}
