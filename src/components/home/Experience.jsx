'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
    {
        title: 'Arrival Coordination',
        text: 'We organize the first impression before guests ever step inside.',
    },
    {
        title: 'Guest Greeting',
        text: 'A polished, professional welcome designed to match the tone of the event.',
    },
    {
        title: 'Vehicle Management',
        text: 'Smooth, discreet handling from arrival to departure.',
    },
];

export default function Experience() {
    return (
        <section className="bg-linear-to-b from-[#0B0B0F] via-[#0E0E13] to-[#0B0B0F] px-6 md:px-16 lg:px-24 2xl:px-32 py-24 md:py-32">
            <div className="mx-auto max-w-7xl 2xl:max-w-400">
                {/* HERO SPLIT */}
                <div className="grid gap-14 xl:grid-cols-[0.9fr_1.1fr] xl:items-center mb-24">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <p className="text-[#ffc400] text-base font-semibold tracking-[0.45em] uppercase mb-5">The Experience</p>

                        <div className="w-12 h-px bg-[#ffc400] mb-6" />

                        <h2 className="text-4xl md:text-6xl font-light text-white leading-tight tracking-tight">A refined arrival experience from start to finish.</h2>

                        <p className="mt-8 text-base leading-8 text-white/75 lg:text-lg lg:leading-9 max-w-xl">
                            Every arrival is carefully managed to create a seamless guest experience, combining professionalism, efficiency, and hospitality from curbside to departure.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group relative overflow-hidden rounded-4xl border border-white/10"
                    >
                        <div className="absolute top-8 left-8 z-20 h-px w-16 bg-[#ffc400]" />

                        <div className="relative aspect-16/10">
                            <Image src="/hero-poster.jpg" alt="Elite Valet Experience" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" priority={false} />

                            <div className="absolute inset-0 bg-linear-to-t from-[#0B0B0F]/70 via-[#0B0B0F]/20 to-transparent" />
                        </div>
                    </motion.div>
                </div>

                {/* PROCESS */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 40, scale: 0.96 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{
                                delay: index * 0.12,
                                duration: 0.75,
                                ease: 'easeOut',
                            }}
                            className="group relative flex min-h-72 flex-col items-center justify-center px-8 py-14 text-center md:px-10 xl:min-h-80 xl:px-14"
                        >
                            {index !== 0 && <div className="absolute left-0 top-1/2 hidden h-32 w-px -translate-y-1/2 bg-linear-to-b from-transparent via-white/15 to-transparent md:block" />}

                            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                                <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc400]/10 blur-3xl" />
                            </div>

                            <span className="relative z-10 mb-6 text-xl font-light text-[#ffc400] transition-all duration-500 group-hover:scale-110">0{index + 1}</span>

                            <h3 className="relative z-10 mb-5 text-2xl font-light text-white transition-colors duration-500 group-hover:text-[#ffc400]">{step.title}</h3>

                            <p className="relative z-10 max-w-sm text-base leading-8 text-white/75 lg:text-lg">{step.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
