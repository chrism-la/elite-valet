'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServiceAreasCTA() {
    return (
        <section className="px-6 pb-28 pt-8 md:px-12 lg:px-20 xl:px-24 2xl:px-32">
            <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                className="mx-auto max-w-7xl 2xl:max-w-375 overflow-hidden border border-white/10 bg-white/4 px-8 py-14 md:px-14 md:py-20 xl:px-20"
            >
                <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr] xl:items-end xl:gap-16">
                    <div>
                        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C9A227] md:text-sm">Request Service</p>

                        <h2 className="max-w-4xl text-3xl font-light leading-tight tracking-tight text-white md:text-5xl">Planning valet service for a Los Angeles location?</h2>
                    </div>

                    <div className="lg:text-right">
                        <p className="mb-6 leading-8 text-white/55">
                            Whether your event is in Beverly Hills, Studio City, West Hollywood, Burbank, Pasadena, Glendale, or a nearby area, Elite Valet can help create a smooth arrival experience.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-xs uppercase tracking-[0.22em] text-black bg-linear-to-r from-[#C9A227] via-[#E6C75A] to-[#C9A227] shadow-[0_0_28px_rgba(201,162,39,0.22)] transition hover:scale-[1.03] active:scale-[0.98] md:text-sm"
                        >
                            Contact Elite Valet
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
