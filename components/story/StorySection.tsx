"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const StorySection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!containerRef.current || !textRef.current) return;

        const words = textRef.current.innerText.split(" ");
        textRef.current.innerHTML = "";

        words.forEach((word) => {
            const span = document.createElement("span");
            span.textContent = word + " ";
            span.style.opacity = "0.15";
            span.style.display = "inline";
            span.style.transition = "opacity 0.3s ease";
            textRef.current!.appendChild(span);
        });

        const spans = textRef.current.querySelectorAll("span");

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1.5,
            onUpdate: (self) => {
                const progress = self.progress;
                const activeIndex = Math.floor(progress * spans.length);
                spans.forEach((span, i) => {
                    (span as HTMLElement).style.opacity = i <= activeIndex ? "1" : "0.15";
                });
            },
        });
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[120vh] flex items-center justify-center bg-black px-6 md:px-12 py-40 overflow-hidden"
        >
            {/* Subtle ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none" />

            <div className="max-w-[1000px] mx-auto text-center relative z-10">
                <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-[0.5em] mb-16">
                    The Philosophy
                </span>
                <p
                    ref={textRef}
                    className="text-3xl md:text-5xl lg:text-[3.5rem] font-light leading-[1.3] tracking-tight text-white"
                    style={{ fontFamily: "var(--font-sans)" }}
                >
                    Captured by the lens of innovation. Every shadow tells a story, every
                    highlight reveals a truth. Design that disappears, leaving only you
                    and the moment.
                </p>
                <div className="mt-16 h-px w-20 mx-auto bg-white/10" />
            </div>
        </section>
    );
};
