"use client";

import { motion } from "framer-motion";
import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-24 pb-16 pt-12">
      <motion.div
        className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:flex-row md:items-center md:justify-between"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-neon-blue/80">Nebula Forge</p>
          <p className="mt-3 max-w-lg text-sm text-white/60">
            Built for visionaries designing authentic, future-facing identities. Render anything you can
            dream while keeping every subject unmistakably themselves.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/40">
            © {new Date().getFullYear()} Nebula Forge Labs. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm uppercase tracking-[0.32em] text-white/50">
          <a
            href="https://github.com/nebulaforge"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] transition-all duration-300 hover:border-neon-blue/50 hover:text-neon-blue"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://x.com/nebulaforge"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] transition-all duration-300 hover:border-neon-purple/50 hover:text-neon-purple"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
