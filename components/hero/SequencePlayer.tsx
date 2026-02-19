"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frameCount = 240; // Total frames from your folder
const images: HTMLImageElement[] = [];

// Preload images
const preloadImages = () => {
    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        // Format: ezgif-frame-001.jpg, ezgif-frame-010.jpg, ezgif-frame-100.jpg
        const paddedIndex = i.toString().padStart(3, "0");
        img.src = `/sequence/ezgif-frame-${paddedIndex}.jpg`;
        images.push(img);
    }
};

export default function SequencePlayer() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        // Initial preload
        let loadedCount = 0;

        // We can't really wait for all to load before showing anything in a real scenario without a loader
        // But for smooth scrub, we need them.
        // Let's implement a quick loader.

        const loadNext = (index: number) => {
            if (index > frameCount) {
                setImagesLoaded(true);
                return;
            }

            const img = new Image();
            const paddedIndex = index.toString().padStart(3, "0");
            img.src = `/sequence/ezgif-frame-${paddedIndex}.jpg`;
            img.onload = () => {
                loadedCount++;
                setLoadingProgress(Math.round((loadedCount / frameCount) * 100));
                images[index - 1] = img; // Store in array (0-indexed)
                loadNext(index + 1);
            };
            img.onerror = () => {
                // Skip or retry
                console.error(`Failed to load frame ${index}`);
                loadNext(index + 1);
            }
        };

        // Start loading
        // Using a more parallel approach for speed, but keeping order in array
        // Actually, parallel is better.
        let parallelLoaded = 0;
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const paddedIndex = i.toString().padStart(3, "0");
            img.src = `/sequence/ezgif-frame-${paddedIndex}.jpg`;
            img.onload = () => {
                parallelLoaded++;
                setLoadingProgress(Math.round((parallelLoaded / frameCount) * 100));
                if (parallelLoaded === frameCount) setImagesLoaded(true);
            }
            images[i - 1] = img;
        }

    }, []);

    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current || !containerRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        if (!context) return;

        // Set canvas dimensions
        canvas.width = 1920; // Full HD base
        canvas.height = 1080;

        const sequence = { frame: 0 };

        const render = () => {
            if (images[sequence.frame]) {
                // Draw image covering canvas (object-fit: cover equivalent)
                // Or just draw full if aspect ratio matches
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(images[sequence.frame], 0, 0, canvas.width, canvas.height);
            }
        };

        // Render first frame
        render();

        // GSAP ScrollTrigger
        const st = ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "+=300%",
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            refreshPriority: 1, // Process BEFORE the gallery pin
            onUpdate: (self) => {
                // Map scroll progress (0 to 1) to frame index
                const frameIndex = Math.min(
                    frameCount - 1,
                    Math.floor(self.progress * (frameCount - 1))
                );

                // We could animate 'sequence.frame' but for direct scrubbing:
                // sequence.frame = frameIndex;
                // render();

                // For smoother tweening between frames (if needed, but usually integer steps are fine for sequences)
                // Let's just snap to int for performance
                if (sequence.frame !== frameIndex) {
                    sequence.frame = frameIndex;
                    render();
                }
            },
        });

        return () => {
            st.kill();
        };
    }, [imagesLoaded]);

    return (
        <section ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
            {!imagesLoaded && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black text-white">
                    <div className="text-2xl font-light tracking-widest">LOADING EXPERIENCE {loadingProgress}%</div>
                </div>
            )}
            <canvas
                ref={canvasRef}
                className="w-full h-full object-cover"
                style={{ opacity: imagesLoaded ? 1 : 0, transition: "opacity 1s ease" }}
            />

            {/* Optional Overlay UI */}
            <div className="absolute bottom-10 left-10 text-white/50 text-sm">
                SCROLL TO EXPLORE
            </div>
        </section>
    );
}
