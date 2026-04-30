'use client';

import { motion } from 'framer-motion';

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
        <section className="bg-linear-to-b from-[#0B0B0F] via-[#0E0E13] to-[#0B0B0F] px-6 md:px-16 py-24 md:py-32">
            <div className="max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-light text-white leading-tight tracking-tight">A refined arrival experience from start to finish.</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
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
                            className="flex flex-col items-center"
                        >
                            <span className="text-[#C9A227] text-sm mb-6">0{index + 1}</span>

                            <h3 className="text-white text-xl font-light mb-4">{step.title}</h3>

                            <p className="text-white/50 text-sm leading-relaxed max-w-xs">{step.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
