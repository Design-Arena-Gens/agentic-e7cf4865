"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {
    title: "Aurora Recon",
    description:
      "Iridescent armor mesh hugging the subject with refracted plasma highlights across the silhouette.",
    tags: ["Specular Armor", "Volumetric Light", "Identity Lock"],
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Neural Bloom",
    description:
      "Cinematic close-up capturing skin translucency with holographic aura pulses and crystalline grains.",
    tags: ["Skin Diffusion", "Lens Bloom", "Nano Detail"],
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Prismatic Drift",
    description:
      "Long exposure energy trails hugging the subject for a sense of motion while preserving micro identity markers.",
    tags: ["Motion Capture", "Energy Trails", "Spectral Hue"],
    src: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1600&q=80"
  }
];

export default function CinematicGallery() {
  return (
    <section className="relative mt-24">
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-neon-purple/80">Cinematic Output</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl text-white">
            High-fidelity, identity-led visuals ready for cinema, campaigns, and immersive worlds.
          </h2>
        </div>
        <p className="max-w-md text-sm text-white/60">
          Upload a subject reference, select mood layers, and watch Nebula Forge deliver production-ready
          stills and sequences with zero latency.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.12, duration: 0.55, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_20px_50px_-25px_rgba(90,150,255,0.65)]"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                fill
                priority={index === 0}
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-75 transition-opacity duration-500 group-hover:opacity-90" />
            </div>
            <div className="relative p-6">
              <h3 className="font-display text-xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
