'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServiceAreasCTA() {
    return (
        <section className="px-6 pb-28 pt-8 md:px-12 lg:px-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                className="mx-auto max-w-7xl overflow-hidden border border-white/10 bg-white/4 px-8 py-14 md:px-14 md:py-20"
            >
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <div>
                        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C9A227] md:text-sm">Request Service</p>

                        <h2 className="max-w-3xl text-3xl font-light leading-tight tracking-tight text-white md:text-5xl">Planning valet service for a Los Angeles location?</h2>
                    </div>

                    <div className="lg:text-right">
                        <p className="mb-6 leading-8 text-white/55">
                            Whether your event is in Beverly Hills, Studio City, West Hollywood, Burbank, Pasadena, Glendale, or a nearby area, Elite Valet can help create a smooth arrival experience.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 border border-[#C9A227]/50 px-6 py-4 text-xs uppercase tracking-[0.22em] text-[#C9A227] transition hover:bg-[#C9A227] hover:text-black md:text-sm"
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
