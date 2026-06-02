'use client';

import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#0B0B0F] px-6 md:px-16 lg:px-24 2xl:px-32 pt-20 pb-10 border-t border-white/10">
            <div className="mx-auto max-w-7xl 2xl:max-w-400">
                {/* TOP */}
                <div className="flex flex-col md:flex-row md:justify-between gap-12 xl:gap-32 mb-14">
                    {/* LOGO */}
                    <div className="max-w-md">
                        <div className="w-16 h-px bg-[#ffc400] mb-8" />
                        <img src="/elite-logo.png" alt="Elite Valet" className="h-11 mb-6 opacity-95" />

                        <p className="text-white/75 text-base leading-8">
                            Premium valet service for private events, hospitality venues, restaurants, weddings, and luxury destinations throughout Los Angeles County.
                        </p>
                    </div>

                    {/* LINKS */}
                    <div className="flex flex-col md:flex-row gap-12 md:gap-16 xl:gap-24">
                        <div className="flex flex-col gap-4">
                            <p className="text-[#ffc400] text-sm font-medium tracking-wide">Navigation</p>

                            <Link href="/about" className="text-white/60 hover:text-[#ffc400] transition">
                                About
                            </Link>

                            <Link href="/service-areas" className="text-white/60 hover:text-[#ffc400] transition">
                                Service Areas
                            </Link>

                            <Link href="/contact" className="text-white/60 hover:text-[#ffc400] transition">
                                Contact
                            </Link>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="text-[#ffc400] text-sm font-medium tracking-wide">Contact</p>

                            <a href="mailto:info@elitecarvalet.com" className="text-white/60 hover:text-[#ffc400] transition">
                                info@elitecarvalet.com
                            </a>

                            <a href="tel:18009904382" className="text-white/60 hover:text-[#ffc400] transition">
                                1-(800)-990-4382
                            </a>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="text-[#ffc400] text-sm font-medium tracking-wide">Social</p>

                            <div className="flex gap-4">
                                <a
                                    href="https://www.instagram.com/officialeliteparking/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-[#ffc400]/50 hover:text-[#ffc400]"
                                >
                                    <FaInstagram className="h-4 w-4" />
                                </a>

                                <a
                                    href="https://www.linkedin.com/company/elite-car-valet-llc/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-[#ffc400]/50 hover:text-[#ffc400]"
                                >
                                    <FaLinkedin className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 border-t border-white/10 pt-6">
                    <p className="text-sm text-white/40">© {new Date().getFullYear()} Elite Valet. All rights reserved.</p>

                    <a
                        href="https://www.linkedin.com/in/chrism-la"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-sm text-white/40 hover:text-[#ffc400] transition"
                    >
                        <span>Designed & developed by Christopher Morales</span>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-50 transition group-hover:opacity-100">
                            <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 17V10.66H6.26V17H8.34ZM7.3 9.78C7.97 9.78 8.52 9.23 8.52 8.56C8.52 7.89 7.97 7.34 7.3 7.34C6.63 7.34 6.08 7.89 6.08 8.56C6.08 9.23 6.63 9.78 7.3 9.78ZM17.92 17V13.52C17.92 11.66 16.93 10.54 15.33 10.54C14.5 10.54 13.94 11 13.62 11.44V10.66H11.54C11.57 11.18 11.54 17 11.54 17H13.62V13.46C13.62 13.27 13.64 13.08 13.69 12.95C13.84 12.57 14.17 12.18 14.75 12.18C15.5 12.18 15.8 12.75 15.8 13.58V17H17.92Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
