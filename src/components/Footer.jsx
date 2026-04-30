'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#0B0B0F] px-6 md:px-16 pt-16 pb-10 border-t border-white/10">
            <div className="max-w-6xl mx-auto">
                {/* TOP */}
                <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-12">
                    {/* LOGO + INFO */}
                    <div className="max-w-sm">
                        <img src="/elite-logo.png" alt="Elite Valet" className="h-10 mb-6 opacity-90" />

                        <p className="text-white/50 text-sm leading-relaxed">Premium valet service for private events, hospitality, and high-end venues across Los Angeles.</p>
                    </div>

                    {/* LINKS */}
                    <div className="flex flex-col md:flex-row gap-10 md:gap-16 text-sm">
                        <div className="flex flex-col gap-3">
                            <p className="text-white text-sm tracking-wide mb-2">Navigation</p>
                            <Link href="/about" className="text-white/50 hover:text-white transition">
                                About
                            </Link>
                            <Link href="/service-areas" className="text-white/50 hover:text-white transition">
                                Service Areas
                            </Link>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="text-white text-sm tracking-wide mb-2">Contact</p>
                            <a href="mailto:yourbusiness@email.com" className="text-white/50 hover:text-white transition">
                                yourbusiness@email.com
                            </a>
                            <a href="tel:1234567890" className="text-white/50 hover:text-white transition">
                                (123) 456-7890
                            </a>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="text-white text-sm tracking-wide mb-2">Social</p>
                            <a href="#" className="text-white/50 hover:text-white transition">
                                Instagram
                            </a>
                            <a href="#" className="text-white/50 hover:text-white transition">
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 border-t border-white/10 pt-6">
                    <p>© {new Date().getFullYear()} Elite Valet. All rights reserved.</p>

                    <p>Built with precision.</p>
                </div>
            </div>
        </footer>
    );
}
