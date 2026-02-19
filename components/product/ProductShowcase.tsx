"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const productImages = [
    {
        src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=80",
        alt: "Camera body front view",
        caption: "Full-Frame Precision",
        description: "The Lumina X1 houses a 61-megapixel back-illuminated full-frame CMOS sensor paired with the BIONZ XR™ processing engine.",
    },
    {
        src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1600&q=80",
        alt: "Camera side angle",
        caption: "Built for the Field",
        description: "Weather-sealed magnesium alloy body, operating in temperatures from -10°C to 40°C. Dust-proof, moisture-proof, enduring.",
    },
    {
        src: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=1600&q=80",
        alt: "Lens mount detail",
        caption: "Native E-Mount System",
        description: "Full compatibility with over 70 native lenses. Ultra-fast data transfer between body and optics for real-time AF computation.",
    },
];

export const ProductShowcase = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const items = sectionRef.current.querySelectorAll(".showcase-item");

        items.forEach((item) => {
            gsap.fromTo(
                item,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        end: "top 40%",
                        scrub: 1,
                    },
                }
            );
        });
    }, []);

    return (
        <section id="product" ref={sectionRef} className="relative w-full bg-black py-32 overflow-hidden">
            <div className="mx-auto max-w-[1600px] px-6 md:px-12">
                {/* Section Header */}
                <div className="mb-24 max-w-2xl">
                    <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-zinc-300">
                        The Product
                    </span>
                    <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white">
                        Every Angle, <br />
                        <span className="text-zinc-500">Every Detail.</span>
                    </h2>
                </div>

                {/* Product Image Grid */}
                <div className="space-y-32">
                    {productImages.map((img, index) => (
                        <div
                            key={index}
                            className={`showcase-item flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                                } items-center gap-12 md:gap-20`}
                        >
                            {/* Image */}
                            <div className="relative w-full md:w-3/5 aspect-[3/2] overflow-hidden rounded-2xl">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                    unoptimized
                                />
                                {/* Vignette */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                            </div>

                            {/* Text */}
                            <div className="w-full md:w-2/5">
                                <span className="mb-4 block font-mono text-xs text-zinc-600 uppercase tracking-widest">
                                    0{index + 1} — Detail
                                </span>
                                <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                                    {img.caption}
                                </h3>
                                <p className="text-zinc-400 font-light leading-relaxed text-base">
                                    {img.description}
                                </p>
                                <div className="mt-8 h-px w-16 bg-white/20" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
