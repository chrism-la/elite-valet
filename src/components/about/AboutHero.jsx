'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function AboutHero() {
    const { scrollY } = useScroll();
    const textY = useTransform(scrollY, [0, 400], [0, 60]);
    const textOpacity = useTransform(scrollY, [0, 300], [1, 0.15]);

    return (
        <section className="relative h-[85vh] min-h-155 w-full overflow-hidden flex items-center justify-center text-center px-6 md:px-16 lg:px-24 2xl:px-32">
            {/* IMAGE */}
            <motion.div
                initial={{ opacity: 0, filter: 'blur(14px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.6, ease: 'easeOut' }}
                className="absolute inset-0 h-full w-full"
            >
                <Image src="/hero-poster.JPG" alt="Elite Valet arrival experience" fill priority sizes="100vw" className="object-cover scale-[1.04]" />
            </motion.div>

            {/* OVERLAYS */}
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-linear-to-b from-black/35 via-black/60 to-[#0B0B0F]" />
            <div className="absolute inset-0 bg-linear-to-r from-[#0B0B0F]/35 via-transparent to-[#0B0B0F]/35" />

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

                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85, duration: 0.8, ease: 'easeOut' }}
                    className="mt-8 text-white/75 text-lg leading-8 md:text-xl md:leading-9 max-w-2xl mx-auto"
                >
                    Every arrival is structured and executed to reflect the standard of your event.
                </motion.p>
            </motion.div>
        </section>
    );
}
