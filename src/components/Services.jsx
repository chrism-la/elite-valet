'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Car, Building2, GlassWater, BriefcaseBusiness, Heart, ShieldCheck } from 'lucide-react';

const services = [
    { title: 'Private Events', text: 'Professional valet service for private parties, celebrations, and exclusive gatherings.', icon: GlassWater },
    { title: 'Restaurants', text: 'Smooth guest arrivals and elevated parking support for upscale dining experiences.', icon: Building2 },
    { title: 'Hotels', text: 'Reliable valet operations designed for hospitality, luxury stays, and guest convenience.', icon: Car },
    { title: 'Weddings', text: 'Elegant arrival coordination for ceremonies, receptions, and high-end celebrations.', icon: Heart },
    { title: 'Corporate Events', text: 'Polished valet service for business functions, brand events, and executive gatherings.', icon: BriefcaseBusiness },
    { title: 'Luxury Venues', text: 'Discreet, organized, and professional valet support for premium venues.', icon: ShieldCheck },
];

export default function Services() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    // Header movement
    const headerY = useTransform(scrollYProgress, [0, 0.3, 0.75], [90, 0, -50]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.25, 0.7], [0, 1, 0.35]);
    const headerScale = useTransform(scrollYProgress, [0, 0.3], [0.96, 1]);

    // Cards container movement
    const cardsY = useTransform(scrollYProgress, [0.15, 0.6], [100, 0]);
    const cardsOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);

    // Parallax depth (≈30px difference)
    const iconY = useTransform(scrollYProgress, [0.1, 1], [30, -30]);
    const textY = useTransform(scrollYProgress, [0.2, 0.8], [15, -15]);

    return (
        <section ref={sectionRef} className="bg-[#0B0B0F] px-6 md:px-16 py-24 md:py-32">
            <div className="max-w-6xl mx-auto">
                {/* HEADER */}
                <motion.div style={{ y: headerY, opacity: headerOpacity, scale: headerScale }} className="mb-16 md:mb-20 max-w-4xl">
                    <p className="text-[#C9A227] text-xs tracking-[0.45em] uppercase mb-5 opacity-90">Our Services</p>
                    <div className="w-12 h-px bg-[#C9A227]/60 mb-6" />

                    <h2 className="text-4xl md:text-6xl font-light text-white leading-tight tracking-tight">Parking service shaped around the guest experience.</h2>

                    <p className="mt-6 text-white/50 text-sm md:text-base max-w-2xl leading-relaxed">
                        From private events to hospitality venues, our team brings a polished, organized, and discreet arrival experience.
                    </p>
                </motion.div>
                {/* CARDS */}
                <motion.div style={{ y: cardsY, opacity: cardsOpacity }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{
                                    delay: index * (typeof window !== 'undefined' && window.innerWidth < 768 ? 0.06 : 0.1),
                                    duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.55 : 0.7,
                                    ease: 'easeOut',
                                }}
                                className="bg-[#0B0B0F] p-8 md:p-10 min-h-64 text-center flex flex-col items-center justify-center"
                            >
                                <motion.div
                                    style={{ y: iconY }}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{
                                        delay: index * (typeof window !== 'undefined' && window.innerWidth < 768 ? 0.06 : 0.1) + 0.15,
                                        duration: 0.35,
                                        ease: 'easeOut',
                                    }}
                                >
                                    <Icon className="w-8 h-8 text-[#C9A227] mb-8 opacity-90" />
                                </motion.div>

                                <motion.div style={{ y: textY }}>
                                    <h3 className="text-white text-xl font-light mb-4">{service.title}</h3>

                                    <p className="text-white/55 text-sm leading-relaxed max-w-xs">{service.text}</p>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
