"use client";

import React from "react";
import { Aperture, Zap, Activity, ArrowRight } from "lucide-react";

interface FeatureCardProps {
    title: string;
    description: string;
    specs: string[];
    icon: React.ReactNode;
    index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, specs, icon, index }) => {
    return (
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/10 p-8 md:p-10 transition-all duration-500 hover:border-white/30 hover:bg-zinc-900/80">
            {/* Number Badge */}
            <div className="absolute top-8 right-8 font-mono text-xs font-bold text-zinc-700 opacity-50 group-hover:text-white group-hover:opacity-100 transition-colors">
                0{index + 1}
            </div>

            <div>
                {/* Icon Area */}
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-white ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                    {icon}
                </div>

                <h3 className="mb-4 text-2xl md:text-3xl font-medium text-white tracking-tight">
                    {title}
                </h3>

                <p className="mb-8 text-sm leading-relaxed text-zinc-400 font-light max-w-[90%]">
                    {description}
                </p>
            </div>

            <div className="mt-auto">
                <div className="h-px w-full bg-white/5 mb-6 group-hover:bg-white/20 transition-colors" />
                <ul className="space-y-3">
                    {specs.map((spec, i) => (
                        <li key={i} className="flex items-center text-[10px] md:text-xs font-mono uppercase tracking-wider text-zinc-500 group-hover:text-zinc-300 transition-colors">
                            <span className="mr-2 h-1 w-1 rounded-full bg-zinc-700 group-hover:bg-white transition-colors" />
                            {spec}
                        </li>
                    ))}
                </ul>

                <div className="mt-8 flex items-center text-xs font-bold text-white uppercase tracking-widest opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
            </div>
        </div>
    );
};

export const CameraFeatureCards = () => {
    return (
        <section className="relative w-full bg-black py-32 border-t border-zinc-900">
            {/* Radial sheen background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />

            <div className="mx-auto max-w-[1400px] px-6">

                {/* Header content */}
                <div className="mb-24 flex flex-col md:flex-row items-end justify-between gap-10">
                    <div className="max-w-2xl">
                        <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-zinc-300">
                            System Core
                        </span>
                        <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white">
                            Unmatched <span className="text-zinc-600">Power.</span>
                        </h2>
                    </div>
                    <div className="md:text-right max-w-sm">
                        <p className="text-zinc-500 font-light leading-relaxed">
                            Designed for the most demanding production environments.
                            Reliability meets next-generation imaging pipeline.
                        </p>
                    </div>
                </div>

                {/* Grid Layout with Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FeatureCard
                        index={0}
                        title="8K 60P RAW"
                        description="Unlimited grading potential with 16-bit linear RAW recording directly to internal media."
                        specs={["8192 x 4320", "12-Bit ProRes", "Dual Base ISO"]}
                        icon={<Aperture size={28} strokeWidth={1.5} />}
                    />
                    <FeatureCard
                        index={1}
                        title="Dynamic Range"
                        description="Capture the deepest shadows and brightest highlights simultaneously with our new sensor architecture."
                        specs={["16+ Stops", "LogC4", "Low Noise Floor"]}
                        icon={<Zap size={28} strokeWidth={1.5} />}
                    />
                    <FeatureCard
                        index={2}
                        title="Neural Stabilizer"
                        description="5-Axis stabilization assisted by AI to mimic professional steadicam movement."
                        specs={["5-Axis IBIS", "Active Track 5.0", "Gyro Metadata"]}
                        icon={<Activity size={28} strokeWidth={1.5} />}
                    />
                </div>
            </div>
        </section>
    );
};
