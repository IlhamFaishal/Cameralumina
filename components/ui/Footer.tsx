"use client";

import React from "react";
import { Instagram, Twitter, Youtube, ArrowUpRight } from "lucide-react";

const footerLinks = {
    Product: ["Overview", "Specifications", "Accessories", "Firmware"],
    Support: ["Downloads", "User Manual", "Community", "Service Centers"],
    Company: ["About Us", "Careers", "Press Kit", "Contact"],
};

export const Footer = () => {
    return (
        <footer className="relative w-full bg-zinc-950 border-t border-white/5">
            {/* CTA Banner */}
            <div className="border-b border-white/5">
                <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
                    <div>
                        <span className="mb-4 block text-xs font-mono uppercase tracking-[0.3em] text-zinc-600">
                            Ready to create?
                        </span>
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white">
                            Begin Your <br />
                            Visual Journey.
                        </h2>
                    </div>
                    <a
                        href="#contact"
                        className="group flex items-center gap-3 rounded-full border border-white/20 bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-zinc-200"
                    >
                        Pre-Order Now
                        <ArrowUpRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </a>
                </div>
            </div>

            {/* Links Grid */}
            <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                                <span className="text-black text-xs font-black">X1</span>
                            </div>
                            <span className="text-white text-lg font-semibold tracking-tight">
                                LUMINA
                            </span>
                        </div>
                        <p className="text-sm text-zinc-500 font-light leading-relaxed mb-6">
                            Redefining cinematic imaging for the next generation of
                            visual storytellers.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-zinc-300">
                                {category}
                            </h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm text-zinc-500 transition-colors hover:text-white"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-zinc-600">
                        © 2026 Lumina Imaging Systems. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-xs text-zinc-600 hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-xs text-zinc-600 hover:text-white transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
