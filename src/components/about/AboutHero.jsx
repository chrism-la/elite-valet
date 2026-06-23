'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function AboutHero() {
    const { scrollY } = useScroll();
    const textY = useTransform(scrollY, [0, 400], [0, 60]);
    const textOpacity = useTransform(scrollY, [0, 300], [1, 0.15]);

    return (
        <section className="relative h-[85vh] min-h-155 w-full overflow-hidden flex items-center justify-center text-center px-6 md:px-16 lg:px-24 2xl:px-32">
            {/* VIDEO / POSTER */}
            <motion.div
                initial={{ opacity: 0, filter: 'blur(14px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.6, ease: 'easeOut' }}
                className="absolute inset-0 h-full w-full"
            >
                <video className="h-full w-full object-cover object-center scale-[1.04]" autoPlay muted loop playsInline preload="metadata" poster="/hero-poster.JPG">
                    <source src="/about-hero.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* OVERLAYS */}
            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-0 bg-linear-to-b from-black/15 via-black/40 to-[#0B0B0F]" />

            <div className="absolute inset-0 bg-linear-to-r from-[#0B0B0F]/20 via-transparent to-[#0B0B0F]/20" />

            {/* TEXT */}
            <motion.div style={{ y: textY, opacity: textOpacity }} className="relative z-10 max-w-6xl">
                <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="text-5xl md:text-7xl 2xl:text-8xl font-light leading-[1.05] tracking-tight text-white"
                >
                    Where first impressions are
                    <motion.span initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.9, ease: 'easeOut' }} className="block">
                        handled with{' '}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.55, duration: 0.7, ease: 'easeOut' }}
                            className="text-[#ffc400] italic drop-shadow-[0_0_22px_rgba(255,196,0,0.35)]"
                        >
                            intention
                        </motion.span>
                        .
                    </motion.span>
                </motion.h1>
            </motion.div>
        </section>
    );
}
