"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  MeshDistortMaterial,
  OrbitControls,
  PerspectiveCamera
} from "@react-three/drei";
import { EffectComposer, Bloom, ChromaticAberration, Noise, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

type EffectCanvasProps = {
  detailBoost: number;
  identityFocus: number;
  futurismLevel: number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

function AnimatedCore({
  detailBoost,
  futurismLevel
}: {
  detailBoost: number;
  futurismLevel: number;
}) {
  const core = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!core.current) return;
    const t = clock.getElapsedTime();
    core.current.rotation.x = t * 0.35;
    core.current.rotation.y = t * 0.25;
    core.current.scale.setScalar(1 + Math.sin(t * 1.1) * 0.04 + detailBoost * 0.05);
  });

  return (
    <mesh ref={core}>
      <icosahedronGeometry args={[1.35, 6]} />
      <MeshDistortMaterial
        color="#6bcaff"
        speed={1.4 + futurismLevel * 0.8}
        distort={0.32 + detailBoost * 0.25}
        roughness={0.25}
        metalness={0.75}
        emissive="#72eaff"
        emissiveIntensity={1.5 + futurismLevel * 1.2}
        transparent
        opacity={0.92}
      />
    </mesh>
  );
}

function EnergyVeil({
  identityFocus,
  futurismLevel
}: {
  identityFocus: number;
  futurismLevel: number;
}) {
  const veil = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!veil.current) return;
    const t = clock.getElapsedTime();
    veil.current.rotation.x = Math.sin(t * 0.3) * 0.3;
    veil.current.rotation.y = t * 0.15;
    const material = veil.current.material as THREE.Material & { opacity?: number };
    if (material && typeof material.opacity === "number") {
      material.opacity = 0.55 + identityFocus * 0.25 + Math.sin(t * 0.7) * 0.05;
    }
  });

  return (
    <mesh ref={veil}>
      <sphereGeometry args={[1.75 + futurismLevel * 0.2, 64, 64]} />
      <MeshDistortMaterial
        color="#3b96ff"
        speed={0.6 + futurismLevel * 0.4}
        distort={0.18 + identityFocus * 0.12}
        radius={1.65}
        transparent
        opacity={0.55}
        wireframe
      />
    </mesh>
  );
}

function ParticleHalo({
  detailBoost,
  identityFocus,
  futurismLevel
}: {
  detailBoost: number;
  identityFocus: number;
  futurismLevel: number;
}) {
  const points = useRef<THREE.Points>(null);
  const count = 1800;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 2.4 + Math.random() * 0.8;
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, []);

  const velocities = useMemo(() => {
    const arr = new Float32Array(count);
    for (let i = 0; i < count; i += 1) {
      arr[i] = 0.12 + Math.random() * 0.25;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!points.current) return;
    const t = clock.getElapsedTime();
    const positionsArray = points.current.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < count; i += 1) {
      const idx = i * 3;
      const base = velocities[i];
      positionsArray.array[idx + 2] += Math.sin(t * base + idx) * 0.0015 * (detailBoost + 1);
      positionsArray.array[idx] += Math.sin(t * base * 0.9 + idx) * 0.001 * (identityFocus + 1);
      positionsArray.array[idx + 1] += Math.cos(t * base * 0.8 + idx) * 0.0012 * (futurismLevel + 1);
    }
    positionsArray.needsUpdate = true;
    points.current.rotation.y = t * 0.05 + futurismLevel * 0.02;
    points.current.rotation.x = Math.sin(t * 0.24) * 0.1;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        color="#9ff6ff"
        size={0.025 + detailBoost * 0.01}
        sizeAttenuation
        depthWrite={false}
        transparent
        opacity={0.85}
      />
    </points>
  );
}

export default function EffectCanvas({
  detailBoost,
  identityFocus,
  futurismLevel
}: EffectCanvasProps) {
  const bloomIntensity = clamp(0.55 + futurismLevel * 0.4, 0.55, 1.25);
  const chromaticOffset = useMemo(
    () =>
      new THREE.Vector2(
        0.001 + futurismLevel * 0.0015,
        0.001 + futurismLevel * 0.0012
      ),
    [futurismLevel]
  );
  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-[0_35px_120px_-50px_rgba(79,209,255,0.8)] backdrop-blur-xl">
      <Canvas dpr={[1, 2]} gl={{ antialias: true }}>
        <color attach="background" args={["#050410"]} />
        <fog attach="fog" args={["#050410", 6, 16]} />
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={42} />
          <ambientLight intensity={0.45 + futurismLevel * 0.35} />
          <directionalLight
            position={[5, 6, 3]}
            intensity={0.75 + detailBoost * 0.35}
            color="#8bd4ff"
          />
          <pointLight position={[-4, -3, -2]} intensity={0.5 + identityFocus * 0.25} color="#8a45ff" />
          <AnimatedCore detailBoost={detailBoost} futurismLevel={futurismLevel} />
          <EnergyVeil identityFocus={identityFocus} futurismLevel={futurismLevel} />
          <ParticleHalo
            detailBoost={detailBoost}
            identityFocus={identityFocus}
            futurismLevel={futurismLevel}
          />
          <Environment preset="night" />
          <EffectComposer multisampling={0}>
            <Bloom
              intensity={bloomIntensity}
              luminanceThreshold={0.25}
              luminanceSmoothing={0.45}
              height={600}
            />
            <ChromaticAberration
              offset={chromaticOffset}
              blendFunction={BlendFunction.NORMAL}
              radialModulation={false}
              modulationOffset={0}
            />
            <Noise premultiply opacity={0.04 + detailBoost * 0.03} />
            <Vignette eskil={false} offset={0.4} darkness={0.75} />
          </EffectComposer>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.6 + futurismLevel * 0.8}
          />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/8 via-transparent to-transparent mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_20%_20%,rgba(76,207,255,0.2),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(124,58,237,0.25),transparent_45%)] opacity-80 mix-blend-soft-light" />
    </div>
  );
}
