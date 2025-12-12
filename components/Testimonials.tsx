"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Aria Nakamoto",
    title: "Creative Director, Hyperion Studios",
    quote:
      "Nebula Forge let us iterate on hero shots in seconds. We kept the actor’s identity intact while exploring stylized cyber aesthetics that would have taken a VFX team weeks.",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Miles Carver",
    title: "Lead Photographer, SYN City",
    quote:
      "The level of detail is surreal—subsurface glow, fabric grain, reflections—it’s like capturing future light with a camera that doesn’t exist yet.",
    avatar: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Dr. Lila Chen",
    title: "Head of Visual R&D, Astral Labs",
    quote:
      "Identity-preserving diffusion is notoriously hard. Nebula Forge cracked the code—the system respects biometric nuance while letting us dream in neon.",
    avatar: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=400&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="relative mt-24 rounded-[36px] border border-white/10 bg-white/[0.03] p-10">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.36em] text-neon-blue/80">Trusted Voices</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl text-white">
            Adopted by creators, studios, and R&D teams chasing the next horizon of visual storytelling.
          </h2>
        </div>
        <p className="max-w-md text-sm text-white/60">
          From large-scale cinematic universes to bespoke brand identities, Nebula Forge is the fastest
          path to expressive, future-grade imagery.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.blockquote
            key={testimonial.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent p-6"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/15">
                <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
              </div>
              <div>
                <p className="font-display text-base text-white">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.28em] text-white/40">{testimonial.title}</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-white/70">{testimonial.quote}</p>
            <motion.div
              className="absolute -right-16 top-16 h-32 w-32 rounded-full bg-gradient-to-br from-neon-blue/25 to-neon-purple/25 blur-3xl opacity-0 transition-opacity duration-500 hover:opacity-100"
              aria-hidden
            />
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
