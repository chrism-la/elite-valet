'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    const links = [
        { name: 'About', href: '/about' },
        { name: 'Service Areas', href: '/service-areas' },
        { name: 'Contact', href: '/about#contact' },
    ];

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
                    <img src="/elite-logo.png" alt="Elite Valet" className="h-8 md:h-9 object-contain opacity-90 hover:opacity-100 transition" />
                </Link>

                <div className="hidden md:flex gap-10 text-sm text-white/70">
                    {links.map((link) => (
                        <Link key={link.name} href={link.href} className="relative group tracking-wide hover:text-white transition">
                            {link.name}
                            <span className="absolute left-0 -bottom-2 h-px w-0 bg-[#C9A227] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <a href="mailto:yourbusiness@email.com" className="hidden md:block px-5 py-2 bg-white text-black rounded-full text-sm tracking-wide hover:scale-[1.03] active:scale-[0.98] transition">
                    Book
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
                                {links.map((link, i) => (
                                    <motion.div key={link.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.1 }}>
                                        <Link href={link.href} onClick={() => setOpen(false)} className="text-white text-xl font-light">
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-10 pt-6 border-t border-white/10">
                                <p className="text-white/40 text-xs tracking-[0.3em] uppercase">Request</p>

                                <a href="mailto:yourbusiness@email.com" className="mt-4 inline-block px-5 py-3 bg-white text-black rounded-full text-sm tracking-wide">
                                    Book Valet
                                </a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
