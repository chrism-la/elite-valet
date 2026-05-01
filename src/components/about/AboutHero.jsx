'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutHero() {
    const { scrollY } = useScroll();
    const textY = useTransform(scrollY, [0, 400], [0, 60]);
    const textOpacity = useTransform(scrollY, [0, 300], [1, 0.15]);
    return (
        <section className="relative h-[85vh] min-h-155 w-full overflow-hidden flex items-center justify-center text-center px-6 md:px-16">
            {/* VIDEO / POSTER */}
            <motion.div
                initial={{ opacity: 0, filter: 'blur(14px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.6, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full"
            >
                <video className="w-full h-full object-cover scale-[1.04]" autoPlay muted loop playsInline preload="metadata" poster="/hero-poster.jpg">
                    <source src="/wrong.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/65" />
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black/90" />

            {/* TEXT */}
            <motion.div style={{ y: textY, opacity: textOpacity }} className="relative z-10 max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="text-5xl md:text-7xl font-light leading-[1.1] tracking-tight text-white"
                >
                    Where first impressions are
                    <motion.span initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.9, ease: 'easeOut' }} className="block">
                        handled with{' '}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.55, duration: 0.7, ease: 'easeOut' }}
                            className="text-[#C9A227] italic drop-shadow-[0_0_18px_rgba(201,162,39,0.35)]"
                        >
                            intention
                        </motion.span>
                        .
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85, duration: 0.8, ease: 'easeOut' }}
                    className="mt-8 text-white/55 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
                >
                    Every arrival is structured, timed, and executed to reflect the standard of your event.
                </motion.p>
            </motion.div>
        </section>
    );
}
