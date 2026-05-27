'use client';

import { motion } from 'framer-motion';

export default function ContactHero() {
    return (
        <section className="relative overflow-hidden px-6 pt-36 pb-24 md:px-16 md:pt-40 md:pb-28 lg:px-24 2xl:px-32">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 h-105 w-105 rounded-full bg-[#C9A227]/10 blur-[120px] translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 h-90 w-90 rounded-full bg-white/5 blur-[120px] -translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl 2xl:max-w-375">
                <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-5 text-xs uppercase tracking-[0.35em] text-[#C9A227] md:text-sm">
                    Request Service
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75 }}
                    className="max-w-4xl xl:max-w-5xl text-4xl font-light leading-tight tracking-tight md:text-6xl lg:text-7xl"
                >
                    Tell us about your event. We’ll help handle the arrival.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.7 }}
                    className="mt-6 max-w-2xl text-base leading-8 text-white/55 md:text-lg"
                >
                    Share a few details about your location, date, and expected guest volume. Elite Valet will follow up to coordinate the best valet solution for your event or venue.
                </motion.p>
            </div>
        </section>
    );
}
