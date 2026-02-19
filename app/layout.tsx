import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
    title: "Lumina X1 — Cinematic Imaging Redefined",
    description:
        "The Lumina X1 is a professional cinema camera featuring a 61MP full-frame sensor, 8K 60p RAW recording, and AI-driven stabilization. Built for the world's most demanding filmmakers.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased bg-black text-white">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
