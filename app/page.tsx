import SequencePlayer from "@/components/hero/SequencePlayer";
import { CameraFeatureCards } from "@/components/features/CameraFeatureCards";
import { PhotoGallery } from "@/components/gallery/PhotoGallery";
import { StorySection } from "@/components/story/StorySection";
import { ProductShowcase } from "@/components/product/ProductShowcase";
import { ExpertTestimonials } from "@/components/product/ExpertTestimonials";
import { SpecsSection } from "@/components/product/SpecsSection";

export default function Home() {
    return (
        <main className="relative w-full bg-black">
            {/* 1. Cinematic Scroll Sequence */}
            <SequencePlayer />

            {/* 2. Brand Philosophy — Scroll text reveal */}
            <StorySection />

            {/* 3. Product Showcase — Large images + descriptions */}
            <ProductShowcase />

            {/* 4. Core Features — 3D tilt cards */}
            <CameraFeatureCards />

            {/* 5. Full Specifications Grid */}
            <SpecsSection />

            {/* 6. Expert Testimonials */}
            <ExpertTestimonials />

            {/* 7. WebGL Photo Gallery */}
            <PhotoGallery />
        </main>
    );
}
