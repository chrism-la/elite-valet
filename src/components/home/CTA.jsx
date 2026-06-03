'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
    return (
        <section className="bg-[#0B0B0F] px-6 md:px-16 lg:px-24 2xl:px-32 py-20 md:py-28">
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="relative overflow-hidden mx-auto max-w-7xl 2xl:max-w-400 text-center border border-white/10 bg-white/3 px-6 md:px-12 xl:px-16 py-16 md:py-24"
            >
                {/* Atmosphere */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#ffc400]/8 blur-3xl" />
                </div>

                <div className="relative z-10">
                    <p className="text-[#ffc400] text-base font-semibold tracking-[0.45em] uppercase mb-5">Request Service</p>

                    <div className="w-12 h-px bg-[#ffc400] mx-auto mb-6" />

                    <h2 className="text-4xl md:text-6xl font-light text-white leading-tight tracking-tight max-w-5xl mx-auto">Ready to elevate your guest arrival experience?</h2>

                    <p className="mt-8 text-white/75 text-base leading-8 lg:text-lg lg:leading-9 max-w-3xl mx-auto">
                        Request valet service for your next private event, hospitality venue, wedding, restaurant, or corporate gathering.
                    </p>

                    <Link
                        href="/contact"
                        className="group mt-12 inline-flex items-center rounded-full bg-linear-to-r from-[#C9A227] via-[#E6C75A] to-[#C9A227] shadow-[0_0_20px_rgba(201,162,39,0.25)] px-9 py-4 text-sm font-medium tracking-wide text-black transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,196,0,0.35)]"
                    >
                        Request a Quote
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
