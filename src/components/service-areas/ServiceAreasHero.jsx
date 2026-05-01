'use client';

import { motion } from 'framer-motion';

export default function ServiceAreasHero() {
    return (
        <section className="relative overflow-hidden px-6 pt-36 pb-24 md:px-12 lg:px-20">
            {/* Ambient background (keep it subtle, not flashy) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_30%)]" />

            <div className="relative mx-auto max-w-7xl">
                <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
                    {/* Label */}
                    <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#C9A227] md:text-sm">Service Areas</p>

                    {/* Main headline */}
                    <h1 className="text-4xl font-light leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                        Valet service across the Los Angeles County's most
                        <span className="block text-white/70">high-demand locations.</span>
                    </h1>

                    {/* Supporting copy */}
                    <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
                        From Beverly Hills and West Hollywood to Studio City, Burbank, and Pasadena, Elite Valet provides professional parking solutions for private events, restaurants, and high-end
                        venues where presentation and efficiency matter.
                    </p>

                    {/* Subtle divider (luxury feel) */}
                    <div className="mt-10 h-px w-24 bg-linear-to-r from-[#C9A227] to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
