'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import CountUp from '@/components/CountUp';

const stats = [
    { number: 15, suffix: '+', label: 'Years Experience' },
    { number: 250, suffix: 'K +', label: 'Cars Parked' },
    { number: 450, suffix: '+', label: 'Events Managed' },
    { number: 100, suffix: '%', label: 'Licensed & Insured' },
];

export default function Stats() {
    return (
        <section className="bg-[#0B0B0F] px-6 md:px-16 lg:px-24 2xl:px-32 py-20 md:py-24">
            <div className="mx-auto max-w-7xl 2xl:max-w-400">
                {/* HEADER */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }} className="mb-20 max-w-5xl">
                    <p className="text-[#ffc400] text-base font-semibold tracking-[0.45em] uppercase mb-5">Our Experience</p>

                    <div className="w-12 h-px bg-[#ffc400] mb-6" />

                    <h2 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">
                        <span className="text-white">Licensed & Insured</span>
                        <span className="text-white/55"> — delivering a higher standard of valet service.</span>
                    </h2>
                </motion.div>

                {/* STATS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 xl:gap-24">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 40, scale: 0.96 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.7,
                                ease: 'easeOut',
                            }}
                            className="group flex flex-col items-start"
                        >
                            <div className="flex flex-col items-start gap-5">
                                {/* Icon */}
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ffc400]/40 transition-all duration-500 group-hover:border-[#ffc400]/70 group-hover:shadow-[0_0_30px_rgba(255,196,0,0.12)]">
                                    <Check className="h-5 w-5 text-[#ffc400] transition-transform duration-500 group-hover:scale-110" />
                                </div>

                                {/* Number */}
                                <h3 className="text-4xl md:text-5xl font-light tracking-tight">
                                    <span className="text-[#ffc400]">
                                        <CountUp end={stat.number} />
                                    </span>

                                    <span className="text-white ml-1.5 text-2xl md:text-3xl align-top">{stat.suffix}</span>
                                </h3>

                                {/* Label */}
                                <p className="text-white/65 text-lg tracking-wide">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
