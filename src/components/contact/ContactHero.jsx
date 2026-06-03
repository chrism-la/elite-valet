'use client';

import { motion } from 'framer-motion';

export default function ContactHero() {
    return (
        <section className="relative overflow-hidden px-6 pt-36 pb-24 md:px-16 md:pt-40 md:pb-28 lg:px-24 2xl:px-32">
            {/* Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 h-120 w-120 rounded-full bg-[#ffc400]/15 blur-[140px] translate-x-1/3 -translate-y-1/3" />

                <div className="absolute bottom-0 left-0 h-100 w-100 rounded-full bg-white/6 blur-[130px] -translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl 2xl:max-w-400">
                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-5 text-base font-semibold uppercase tracking-[0.45em] text-[#ffc400]"
                >
                    Request Service
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75 }}
                    className="max-w-5xl xl:max-w-6xl text-4xl font-light leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
                >
                    Tell us about your event.
                    <span className="block text-white/70">We’ll help handle the arrival.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.7 }}
                    className="mt-8 max-w-3xl text-base leading-8 text-white/75 md:text-lg md:leading-9"
                >
                    Share a few details about your location, date, and expected guest volume. Elite Valet will follow up to coordinate the best valet solution for your event, venue, restaurant,
                    wedding, or private gathering.
                </motion.p>

                <div className="mt-10 h-px w-24 bg-linear-to-r from-[#ffc400] to-transparent" />
            </div>
        </section>
    );
}
