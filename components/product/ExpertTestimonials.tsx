"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experts = [
    {
        name: "Hiroshi Tanaka",
        title: "Academy Award–Winning Cinematographer",
        quote:
            "The Lumina X1 captures light in a way I've never experienced before. The dynamic range is extraordinary — it responds to scenes the way my eyes do. This camera has changed how I approach every shot.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    {
        name: "Sofia Mendez",
        title: "National Geographic Photographer",
        quote:
            "In the harshest conditions — from Arctic tundras to desert storms — the X1 never failed me. The weather sealing is exceptional, and the autofocus is the fastest I've ever trusted with wildlife.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    },
    {
        name: "Marcus Chen",
        title: "Lead DP, Riviera Studios",
        quote:
            "We shot an entire feature film on the X1. The 8K RAW internal recording with our existing lens ecosystem made the transition effortless. The color science is simply best-in-class.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    },
];

export const ExpertTestimonials = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const cards = sectionRef.current.querySelectorAll(".expert-card");
        cards.forEach((card, i) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                }
            );
        });
    }, []);

    return (
        <section id="experts" ref={sectionRef} className="relative w-full bg-zinc-950 py-32 overflow-hidden">
            {/* Subtle radial background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_60%)] pointer-events-none" />

            <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
                {/* Section Header */}
                <div className="mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
                    <div className="max-w-2xl">
                        <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-zinc-300">
                            Expert Opinions
                        </span>
                        <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white">
                            Trusted by <span className="text-zinc-500">Professionals.</span>
                        </h2>
                    </div>
                    <p className="max-w-sm text-zinc-500 font-light leading-relaxed">
                        Hear from the world's most acclaimed cinematographers and photographers who rely on the Lumina X1.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {experts.map((expert, index) => (
                        <div
                            key={index}
                            className="expert-card group relative flex flex-col justify-between rounded-2xl bg-zinc-900/50 border border-white/5 p-8 md:p-10 transition-all duration-500 hover:border-white/15 hover:bg-zinc-900/80"
                        >
                            {/* Quote Icon */}
                            <Quote
                                size={32}
                                className="mb-8 text-zinc-700 transition-colors group-hover:text-white/30"
                            />

                            {/* Quote Text */}
                            <p className="mb-10 text-base leading-relaxed text-zinc-300 font-light italic">
                                &ldquo;{expert.quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="mt-auto flex items-center gap-4 border-t border-white/5 pt-6">
                                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-white/10">
                                    <Image
                                        src={expert.avatar}
                                        alt={expert.name}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">{expert.name}</p>
                                    <p className="text-xs text-zinc-500">{expert.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
