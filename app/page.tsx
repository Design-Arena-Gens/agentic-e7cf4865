'use client';

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import ControlPanel from "@/components/ControlPanel";
import BeforeAfter from "@/components/BeforeAfter";
import FeatureGrid from "@/components/FeatureGrid";
import CinematicGallery from "@/components/CinematicGallery";
import Workflow from "@/components/Workflow";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const DynamicEffectCanvas = dynamic(() => import("@/components/EffectCanvas"), {
  ssr: false,
  loading: () => (
    <div className="aspect-[3/2] w-full animate-pulse rounded-3xl border border-white/10 bg-white/[0.03]" />
  )
});

type ControlState = {
  detailBoost: number;
  identityFocus: number;
  futurismLevel: number;
};

export default function Home() {
  const [controls, setControls] = useState<ControlState>({
    identityFocus: 0.72,
    detailBoost: 0.68,
    futurismLevel: 0.66
  });

  const subtleBackdrop = useMemo(
    () => ({
      background:
        "radial-gradient(circle at 10% 20%, rgba(90, 240, 255, 0.13), transparent 42%), radial-gradient(circle at 80% 0%, rgba(162, 89, 255, 0.12), transparent 40%), radial-gradient(circle at 40% 80%, rgba(120, 240, 255, 0.1), transparent 45%)"
    }),
    []
  );

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={subtleBackdrop}
        aria-hidden
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-12 lg:px-10 lg:py-16">
        <Hero />
        <section className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <DynamicEffectCanvas
            detailBoost={controls.detailBoost}
            identityFocus={controls.identityFocus}
            futurismLevel={controls.futurismLevel}
          />
          <ControlPanel values={controls} onChange={setControls} />
        </section>
        <BeforeAfter />
        <FeatureGrid />
        <CinematicGallery />
        <Workflow />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    </main>
  );
}
