'use client';

import { motion } from 'framer-motion';

export default function AboutStory() {
    return (
        <section className="relative overflow-hidden bg-[#0B0B0F] px-6 md:px-16 xl:px-24 2xl:px-32 py-20 md:py-28">
            {/* Ambient Glow */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gold glow */}
                <div className="absolute top-0 right-0 h-120 w-120 bg-[#ffc400]/15 blur-[140px] rounded-full translate-x-1/3 -translate-y-1/3" />

                {/* White glow */}
                <div className="absolute bottom-0 left-0 h-100 w-100 bg-white/6 blur-[130px] rounded-full -translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-400 grid grid-cols-1 gap-12 xl:grid-cols-12 xl:gap-24">
                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="xl:col-span-5"
                >
                    <div className="w-12 h-px bg-[#ffc400] mb-6" />

                    <h2 className="text-4xl md:text-6xl font-light leading-tight tracking-tight text-white">
                        Built on experience.
                        <span className="block text-white/60">Defined by execution.</span>
                    </h2>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
                    className="xl:col-span-6 xl:col-start-7 space-y-8 text-white/75 text-base leading-8 lg:text-lg lg:leading-9"
                >
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                        Founded in 2013, Elite Car Valet has provided premium valet service throughout Los Angeles County, including Beverly Hills, Studio City, Hollywood, Sunset Plaza, and Burbank.
                    </motion.p>

                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.45 }}>
                        Our team brings real-world experience managing private events, restaurants, hotels, and high-end venues, with a focus on timing, presentation, and operational precision.
                    </motion.p>

                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
                        Fully licensed and insured, we operate with a standard built on trust, consistency, and a level of service that reflects the expectations of the environments we serve.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
