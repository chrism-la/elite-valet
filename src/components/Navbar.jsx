'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [areasOpen, setAreasOpen] = useState(false);

    const links = [
        { name: 'About', href: '/about' },
        { name: 'Service Areas', href: '/service-areas' },
        { name: 'Contact', href: '/about#contact' },
    ];
    const serviceAreas = ['Beverly Hills', 'Studio City', 'Hollywood', 'Sunset Plaza', 'Burbank', 'Los Angeles County'];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 w-full z-50">
            <motion.div
                animate={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(20px)',
                    borderColor: 'rgba(255,255,255,0.10)',
                }}
                transition={{ duration: 0.4 }}
                className="w-full border-b px-6 md:px-16 py-5 flex justify-between items-center shadow-lg shadow-black/20"
            >
                <Link href="/">
                    <img src="/elite-logo.png" alt="Elite Valet" className="h-10 md:h-11 object-contain opacity-90 hover:opacity-100 hover:scale-[1.06] transition duration-300 ease-out" />
                </Link>

                <div className="hidden md:flex gap-10 text-sm text-white/70">
                    <Link href="/about" className="relative group tracking-wide hover:text-white transition">
                        About
                        <span className="absolute left-0 -bottom-2 h-px w-0 bg-[#C9A227] transition-all duration-300 group-hover:w-full" />
                    </Link>

                    <div className="relative" onMouseEnter={() => setAreasOpen(true)} onMouseLeave={() => setAreasOpen(false)}>
                        <button className="flex items-center gap-1 tracking-wide hover:text-white transition">
                            Service Areas <ChevronDown className="w-3 h-3" />
                        </button>

                        <AnimatePresence>
                            {areasOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.25 }}
                                    className="absolute top-8 left-1/2 -translate-x-1/2 w-56 border border-white/10 bg-black/70 backdrop-blur-xl shadow-xl p-4"
                                >
                                    {serviceAreas.map((area) => (
                                        <Link key={area} href="/service-areas" className="block px-3 py-2 text-white/60 hover:text-white hover:bg-white/5 transition">
                                            {area}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/about#contact" className="relative group tracking-wide hover:text-white transition">
                        Contact
                        <span className="absolute left-0 -bottom-2 h-px w-0 bg-[#C9A227] transition-all duration-300 group-hover:w-full" />
                    </Link>
                </div>

                <a
                    href="mailto:yourbusiness@email.com"
                    className="hidden md:block rounded-full px-6 py-2.5 text-sm tracking-wide text-black bg-linear-to-r from-[#C9A227] via-[#E6C75A] to-[#C9A227] shadow-[0_0_20px_rgba(201,162,39,0.25)] hover:scale-[1.03] active:scale-[0.98] transition"
                >
                    Book Valet
                </a>

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
                                {/* ABOUT */}
                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                                    <Link href="/about" onClick={() => setOpen(false)} className="text-white text-xl font-light">
                                        About
                                    </Link>
                                </motion.div>

                                {/* SERVICE AREAS (ACCORDION) */}
                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                                    <button onClick={() => setAreasOpen((v) => !v)} className="flex items-center gap-2 text-white text-xl font-light">
                                        Service Areas
                                        <ChevronDown className={`w-4 h-4 transition ${areasOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {areasOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden mt-4 ml-4 flex flex-col gap-3"
                                            >
                                                {serviceAreas.map((area) => (
                                                    <Link key={area} href="/service-areas" onClick={() => setOpen(false)} className="text-white/50 text-base">
                                                        {area}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                {/* CONTACT */}
                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                                    <Link href="/about#contact" onClick={() => setOpen(false)} className="text-white text-xl font-light">
                                        Contact
                                    </Link>
                                </motion.div>
                            </div>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-10 pt-6 border-t border-white/10">
                                <a
                                    href="mailto:yourbusiness@email.com"
                                    className="inline-block mt-4 rounded-full px-6 py-2.5 text-sm tracking-wide text-black bg-linear-to-r from-[#C9A227] via-[#E6C75A] to-[#C9A227] shadow-[0_0_20px_rgba(201,162,39,0.25)] hover:scale-[1.03] active:scale-[0.98] transition"
                                >
                                    Book Valet
                                </a>
                            </motion.div>

                            <div className="mt-8 flex gap-5">
                                <a href="#" className="text-white/50 hover:text-white">
                                    <FaInstagram className="w-8 h-8" />
                                </a>

                                <a href="#" className="text-white/50 hover:text-white">
                                    <FaFacebook className="w-8 h-8" />
                                </a>
                                <a href="#" className="text-white/50 hover:text-white ">
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
