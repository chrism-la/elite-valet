'use client';

import { motion } from 'framer-motion';

export default function CTA() {
    return (
        <section className="bg-[#0B0B0F] px-6 md:px-16 py-20 md:py-28">
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="max-w-6xl mx-auto text-center border border-white/10 bg-white/3 px-6 py-16 md:py-24"
            >
                <p className="text-[#C9A227] text-xs tracking-[0.45em] uppercase mb-5 opacity-90">Request Service</p>

                <div className="w-12 h-px bg-[#C9A227]/60 mx-auto mb-6" />

                <h2 className="text-4xl md:text-6xl font-light text-white leading-tight tracking-tight max-w-4xl mx-auto">Ready to elevate your guest arrival experience?</h2>

                <p className="mt-6 text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">Request valet service for your next private event, venue, or hospitality operation.</p>

                <a
                    href="mailto:yourbusiness@email.com"
                    className="mt-10 inline-block rounded-full px-8 py-4 text-sm tracking-wide text-black bg-linear-to-r from-[#C9A227] via-[#E6C75A] to-[#C9A227] shadow-[0_0_30px_rgba(201,162,39,0.25)] hover:scale-[1.03] active:scale-[0.98] transition"
                >
                    Request a Quote
                </a>
            </motion.div>
        </section>
    );
}
