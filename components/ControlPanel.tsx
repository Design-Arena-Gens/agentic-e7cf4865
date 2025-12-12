"use client";

import { motion } from "framer-motion";
import { Sparkles, Focus, ScanEye, Gauge } from "lucide-react";
import { cn } from "@/lib/utils";

type ControlState = {
  detailBoost: number;
  identityFocus: number;
  futurismLevel: number;
};

type ControlPanelProps = {
  values: ControlState;
  onChange: (values: ControlState) => void;
};

const sliderBlueprint = [
  {
    key: "identityFocus",
    label: "Identity Fidelity",
    description: "Preserve every contour while sculpting light and textures.",
    icon: Focus
  },
  {
    key: "detailBoost",
    label: "Detail Amplifier",
    description: "Micro-contrast, cinematic depth, and pixel-perfect clarity.",
    icon: Gauge
  },
  {
    key: "futurismLevel",
    label: "Futurism Infusion",
    description: "Holographic sheens and prismatic energy fields on demand.",
    icon: Sparkles
  }
] as const;

export default function ControlPanel({ values, onChange }: ControlPanelProps) {
  const handleInput = (key: keyof ControlState, next: number) => {
    onChange({
      ...values,
      [key]: next
    });
  };

  return (
    <motion.div
      layout
      className="grid gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl"
    >
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-white/60">
          <ScanEye className="h-4 w-4 text-neon-blue" />
          Live DNA Dial
        </div>
        <p className="font-display text-lg text-white/90">
          Calibrate how the engine infuses realism, identity, and futuristic energy into your visuals.
        </p>
      </div>

      <div className="grid gap-6">
        {sliderBlueprint.map(({ key, label, description, icon: Icon }) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06]">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-purple/30 via-neon-blue/40 to-neon-cyan/30 blur-lg" />
                  <Icon className="relative h-5 w-5 text-neon-blue drop-shadow-glow" />
                </div>
                <div>
                  <p className="font-display text-base text-white">{label}</p>
                  <p className="text-sm text-white/55">{description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-mono text-xs text-white/40 uppercase tracking-[0.3em]">Level</p>
                <p className="font-mono text-lg text-neon-blue">
                  {(values[key] * 100).toFixed(0).padStart(3, "0")}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={values[key]}
                onChange={(event) => handleInput(key, parseFloat(event.target.value))}
                className={cn(
                  "h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10",
                  "accent-neon-blue"
                )}
              />
              <div className="mt-2 flex justify-between text-[11px] uppercase tracking-[0.25em] text-white/35">
                <span>Pure</span>
                <span>Hyper-Real</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
