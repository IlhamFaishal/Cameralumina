"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1600&q=80",
        title: "Moraine Lake",
        meta: "f/2.8 · 1/500s · ISO 200",
        lens: "Lumina 24-70mm f/2.8 GM",
    },
    {
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
        title: "Golden Hour Valley",
        meta: "f/4.0 · 1/250s · ISO 100",
        lens: "Lumina 70-200mm f/2.8 GM",
    },
    {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80",
        title: "Morning Fog",
        meta: "f/5.6 · 1/125s · ISO 400",
        lens: "Lumina 16-35mm f/2.8 GM",
    },
    {
        src: "https://images.unsplash.com/photo-1501862700950-18382cd41497?auto=format&fit=crop&w=1600&q=80",
        title: "Aurora Borealis",
        meta: "f/1.4 · 15s · ISO 3200",
        lens: "Lumina 14mm f/1.4 GM",
    },
    {
        src: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1600&q=80",
        title: "Wildlife in Motion",
        meta: "f/2.8 · 1/2000s · ISO 800",
        lens: "Lumina 200-600mm f/5.6-6.3",
    },
];

export const PhotoGallery = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [ready, setReady] = useState(false);

    // Wait for component to mount and images to start loading
    useEffect(() => {
        // Small delay to ensure DOM is measured correctly after other pinned sections
        const timer = setTimeout(() => setReady(true), 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!ready || !containerRef.current || !trackRef.current) return;

        const track = trackRef.current;

        // Force a refresh so ScrollTrigger re-measures all pin spacings above
        ScrollTrigger.refresh();

        const totalScrollWidth = track.scrollWidth - window.innerWidth;

        // Use a gsap.to tween with scrub instead of manual onUpdate for smoother result
        const tween = gsap.to(track, {
            x: -totalScrollWidth,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `+=${totalScrollWidth}`,
                pin: true,
                scrub: 1,
                anticipatePin: 1, // Prevents jump when entering pinned state
                invalidateOnRefresh: true, // Recalculate on resize
                refreshPriority: -1, // Process AFTER the hero pin (default priority 0)
            },
        });

        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
        };
    }, [ready]);

    return (
        <section
            id="gallery"
            ref={containerRef}
            className="relative w-full h-screen bg-black overflow-hidden"
        >
            {/* Header Overlay */}
            <div className="absolute top-10 left-8 md:left-16 z-10 pointer-events-none">
                <span className="block text-xs font-mono text-zinc-600 uppercase tracking-[0.3em] mb-2">
                    Shot on Lumina X1
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
                    The Gallery
                </h2>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 right-8 md:right-16 z-10 pointer-events-none flex items-center gap-2 text-zinc-500">
                <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
                <ArrowRight size={14} />
            </div>

            {/* Horizontal Track */}
            <div
                ref={trackRef}
                className="absolute top-0 left-0 h-full flex items-center gap-6 will-change-transform"
                style={{ paddingLeft: "4vw", paddingRight: "4vw", paddingTop: "90px" }}
            >
                {galleryImages.map((img, i) => (
                    <div
                        key={i}
                        className="group relative flex-shrink-0 h-[70vh] w-[45vw] md:w-[35vw] overflow-hidden rounded-xl"
                    >
                        {/* Image */}
                        <Image
                            src={img.src}
                            alt={img.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="35vw"
                            unoptimized
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Caption on Hover */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <h3 className="text-xl font-semibold text-white mb-1">
                                {img.title}
                            </h3>
                            <p className="text-xs font-mono text-zinc-300 mb-1">{img.meta}</p>
                            <p className="text-xs text-zinc-500">{img.lens}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
