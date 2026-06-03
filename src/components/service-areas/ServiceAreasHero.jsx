'use client';

import { motion } from 'framer-motion';

export default function ServiceAreasHero() {
    return (
        <section className="relative overflow-hidden px-6 pt-36 pb-24 md:px-12 lg:px-20 xl:px-24 2xl:px-32">
            {/* Ambient background (keep it subtle, not flashy) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,196,0,0.26),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_35%)]" />

            <div className="relative mx-auto max-w-7xl 2xl:max-w-400">
                <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl xl:max-w-4xl">
                    {/* Label */}
                    <p className="mb-5 text-base font-semibold uppercase tracking-[0.45em] text-[#ffc400]">Service Areas</p>

                    {/* Main headline */}
                    <h1 className="text-4xl font-light leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                        Valet service across Los Angeles County’s most
                        <span className="block text-white/70">high-demand locations.</span>
                    </h1>

                    {/* Supporting copy */}
                    <p className="mt-8 max-w-3xl text-base leading-8 text-white/75 lg:text-lg lg:leading-9">
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
