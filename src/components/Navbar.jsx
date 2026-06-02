'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname();

    const [open, setOpen] = useState(false);
    const [areasOpen, setAreasOpen] = useState(false);

    const serviceAreas = [
        { name: 'Beverly Hills', href: '/service-areas#beverly-hills' },
        { name: 'Studio City', href: '/service-areas#studio-city' },
        { name: 'West Hollywood', href: '/service-areas#west-hollywood' },
        { name: 'Sunset Plaza', href: '/service-areas#sunset-plaza' },
        { name: 'Burbank', href: '/service-areas#burbank' },
        { name: 'Pasadena', href: '/service-areas#pasadena' },
        { name: 'Glendale', href: '/service-areas#glendale' },
    ];

    const isActive = (href) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    const navLinkClass = (href) =>
        `relative tracking-[0.08em] font-semibold text-base xl:text-[22px] transition duration-300 ${isActive(href) ? 'text-[#C9A227]' : 'text-white/85 hover:text-[#C9A227]'}`;

    return (
        <div className="fixed top-0 w-full z-50">
            <motion.div
                animate={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(20px)',
                    borderColor: 'rgba(255,255,255,0.10)',
                }}
                transition={{ duration: 0.4 }}
                className="w-full border-b px-6 md:px-16 xl:px-24 2xl:px-32 py-4 flex justify-between items-center shadow-lg shadow-black/20"
            >
                <Link href="/">
                    <img src="/elite-logo.png" alt="Elite Valet" className="h-14 md:h-22 object-contain opacity-90 hover:opacity-100 hover:scale-[1.06] transition duration-300 ease-out" />
                </Link>

                <div className="hidden md:flex items-center gap-12 xl:gap-16">
                    <Link href="/about" className={navLinkClass('/about')}>
                        About
                    </Link>

                    <div className="relative" onMouseEnter={() => setAreasOpen(true)} onMouseLeave={() => setAreasOpen(false)}>
                        <Link href="/service-areas" className={`${navLinkClass('/service-areas')} flex items-center gap-2`}>
                            Service Areas <ChevronDown className="w-4 h-4" />
                        </Link>

                        <AnimatePresence>
                            {areasOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.25 }}
                                    className="absolute top-10 left-1/2 -translate-x-1/2 w-64 border border-white/10 bg-black/75 backdrop-blur-xl shadow-xl p-4"
                                >
                                    {serviceAreas.map((area) => (
                                        <Link key={area.name} href={area.href} className="block px-3 py-2.5 text-base text-white/65 hover:text-[#C9A227] hover:bg-white/5 transition">
                                            {area.name}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/contact" className={navLinkClass('/contact')}>
                        Contact
                    </Link>
                </div>

                <Link
                    href="/contact"
                    className="hidden md:block rounded-full px-7 py-3 text-base xl:text-[19px] font-semibold tracking-wide text-black bg-linear-to-r from-[#C9A227] via-[#E6C75A] to-[#C9A227] shadow-[0_0_20px_rgba(201,162,39,0.25)] hover:scale-[1.03] active:scale-[0.98] transition"
                >
                    Book Valet
                </Link>

                <button onClick={() => setOpen((v) => !v)} className="md:hidden flex flex-col gap-1.5" aria-label="Toggle menu">
                    <motion.span animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} className="w-6 h-0.5 bg-white origin-center" />
                    <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.15 }} className="w-6 h-0.5 bg-white/80" />
                    <motion.span animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} className="w-6 h-0.5 bg-white/60 origin-center" />
                </button>
            </motion.div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        onClick={() => setOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    >
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                            className="absolute top-0 right-0 w-[82%] h-full bg-black/90 backdrop-blur-xl p-8 flex flex-col gap-8"
                        >
                            <motion.button onClick={() => setOpen(false)} whileHover={{ rotate: 90 }} whileTap={{ scale: 0.9 }} className="absolute top-6 right-6 text-white text-xl">
                                ✕
                            </motion.button>

                            <div className="mt-24 flex flex-col gap-6">
                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                                    <Link href="/about" onClick={() => setOpen(false)} className={`text-2xl font-semibold ${isActive('/about') ? 'text-[#C9A227]' : 'text-white'}`}>
                                        About
                                    </Link>
                                </motion.div>

                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                                    <div className="flex items-center justify-between">
                                        <Link href="/service-areas" onClick={() => setOpen(false)} className={`text-2xl font-semibold ${isActive('/service-areas') ? 'text-[#C9A227]' : 'text-white'}`}>
                                            Service Areas
                                        </Link>

                                        <button onClick={() => setAreasOpen((v) => !v)} aria-label="Toggle service areas">
                                            <ChevronDown className={`w-5 h-5 transition ${areasOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                    </div>

                                    <AnimatePresence>
                                        {areasOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden mt-4 ml-4 flex flex-col gap-3"
                                            >
                                                {serviceAreas.map((area) => (
                                                    <Link key={area.name} href={area.href} onClick={() => setOpen(false)} className="text-white/60 hover:text-[#C9A227] text-lg transition">
                                                        {area.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                                    <Link href="/contact" onClick={() => setOpen(false)} className={`text-2xl font-semibold ${isActive('/contact') ? 'text-[#C9A227]' : 'text-white'}`}>
                                        Contact
                                    </Link>
                                </motion.div>
                            </div>

                            <div className="mt-8 flex gap-5">
                                <a href="#" className="text-white/50 hover:text-[#C9A227] transition">
                                    <FaInstagram className="w-8 h-8" />
                                </a>

                                <a href="#" className="text-white/50 hover:text-[#C9A227] transition">
                                    <FaLinkedin className="w-8 h-8" />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
