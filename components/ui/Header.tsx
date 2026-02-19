"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Product", href: "#product" },
    { label: "Features", href: "#features" },
    { label: "Gallery", href: "#gallery" },
    { label: "Experts", href: "#experts" },
];

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled
                    ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
                    : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-12 py-5">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                        <span className="text-black text-xs font-black">X1</span>
                    </div>
                    <span className="text-white text-lg font-semibold tracking-tight hidden md:inline">
                        LUMINA
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-6">
                    <a
                        href="#contact"
                        className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black"
                    >
                        Pre-Order
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {menuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 py-8">
                    <nav className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-sm font-medium uppercase tracking-widest text-zinc-400 transition-colors hover:text-white"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="mt-4 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-xs font-semibold uppercase tracking-widest text-white"
                        >
                            Pre-Order
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};
