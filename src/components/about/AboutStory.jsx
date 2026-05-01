'use client';

import { motion } from 'framer-motion';

export default function AboutStory() {
    return (
        <section className="bg-[#0B0B0F] px-6 md:px-16 py-20 md:py-28">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="md:col-span-5"
                >
                    <div className="w-10 h-px bg-white/20 mb-6" />

                    <h2 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">Built on experience. Defined by execution.</h2>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
                    className="md:col-span-6 md:col-start-7 space-y-8 text-white/55 text-[15px] md:text-base leading-relaxed"
                >
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                        Founded in 2013, Elite Car Valet has provided premium valet service across Los Angeles County, including Beverly Hills, Studio City, Hollywood, Sunset Plaza, and Burbank.
                    </motion.p>

                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.45 }}>
                        Our team brings real-world experience in managing private events, restaurants, hotels, and high-end venues — with a focus on timing, presentation, and operational precision.
                    </motion.p>

                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
                        Fully licensed and insured, we operate with a standard built on trust, consistency, and a level of service that reflects the expectations of the environments we work in.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
