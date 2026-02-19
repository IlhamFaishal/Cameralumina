"use client";

import React from "react";

const specCategories = [
    {
        category: "Imaging",
        specs: [
            { label: "Sensor", value: "61MP Full-Frame BSI CMOS" },
            { label: "Processor", value: "BIONZ XR™ Dual Engine" },
            { label: "ISO Range", value: "50 — 204,800 (Expandable)" },
            { label: "Dynamic Range", value: "16+ Stops" },
            { label: "Color Depth", value: "14-bit RAW" },
        ],
    },
    {
        category: "Video",
        specs: [
            { label: "Max Resolution", value: "8K 60p / 4K 120p" },
            { label: "Codec", value: "ProRes RAW HQ, H.265" },
            { label: "Bit Depth", value: "10-bit 4:2:2 (Internal)" },
            { label: "Log Profile", value: "S-Log3 / S-Cinetone" },
            { label: "Stabilization", value: "5-Axis IBIS + AI Assist" },
        ],
    },
    {
        category: "Body",
        specs: [
            { label: "Construction", value: "Magnesium Alloy" },
            { label: "Weather Seal", value: "IP53 Rated" },
            { label: "Weight", value: "750g (Body Only)" },
            { label: "Battery Life", value: "740 Shots / 180min Video" },
            { label: "Storage", value: "Dual CFexpress Type A" },
        ],
    },
    {
        category: "Autofocus",
        specs: [
            { label: "System", value: "759-Point Phase Detection" },
            { label: "Coverage", value: "93% Frame" },
            { label: "Subject Tracking", value: "Human, Animal, Vehicle" },
            { label: "Low-Light AF", value: "-6 EV" },
            { label: "Speed", value: "30 fps Continuous" },
        ],
    },
];

export const SpecsSection = () => {
    return (
        <section className="relative w-full bg-black py-32 border-t border-white/5">
            <div className="mx-auto max-w-[1600px] px-6 md:px-12">
                {/* Header */}
                <div className="mb-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
                    <div>
                        <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-zinc-300">
                            Technical Data
                        </span>
                        <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white">
                            Full Specifications.
                        </h2>
                    </div>
                    <p className="max-w-sm text-zinc-500 font-light leading-relaxed">
                        Every number engineered for professionals who demand absolute precision.
                    </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
                    {specCategories.map((cat) => (
                        <div key={cat.category} className="bg-zinc-950 p-8 md:p-12">
                            <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                                {cat.category}
                            </h3>
                            <ul className="space-y-5">
                                {cat.specs.map((spec) => (
                                    <li
                                        key={spec.label}
                                        className="flex items-center justify-between border-b border-white/5 pb-4"
                                    >
                                        <span className="text-sm text-zinc-500">{spec.label}</span>
                                        <span className="text-sm font-medium text-white text-right">
                                            {spec.value}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
