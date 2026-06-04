'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const services = [
    {
        title: 'Private Events',
        text: 'Professional valet service for private parties, celebrations, and exclusive gatherings.',
        icon: '/icons/red-carpet.png',
    },
    {
        title: 'Restaurants',
        text: 'Smooth guest arrivals and elevated parking support for upscale dining experiences.',
        icon: '/icons/restaurant.png',
    },
    {
        title: 'Hotels',
        text: 'Reliable valet operations designed for hospitality, luxury stays, and guest convenience.',
        icon: '/icons/hotels.png',
    },
    {
        title: 'Weddings',
        text: 'Elegant arrival coordination for ceremonies, receptions, and high-end celebrations.',
        icon: '/icons/wedding.png',
    },
    {
        title: 'Corporate Events',
        text: 'Polished valet service for business functions, brand events, and executive gatherings.',
        icon: '/icons/corporate.png',
    },
    {
        title: 'Concert Venues',
        text: 'Organized valet support for concerts, live entertainment, and high-traffic venue arrivals.',
        icon: '/icons/concert.png',
    },
];

export default function Services() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const headerY = useTransform(scrollYProgress, [0, 0.3, 0.75], [90, 0, -50]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.25, 0.7], [0, 1, 0.35]);
    const headerScale = useTransform(scrollYProgress, [0, 0.3], [0.96, 1]);

    const cardsY = useTransform(scrollYProgress, [0.15, 0.6], [100, 0]);
    const cardsOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);

    return (
        <section ref={sectionRef} className="relative bg-[#0B0B0F] px-6 md:px-16 lg:px-24 2xl:px-32 pt-20 pb-12 md:pt-28 md:pb-16">
            <div className="mx-auto max-w-7xl 2xl:max-w-400">
                <motion.div style={{ y: headerY, opacity: headerOpacity, scale: headerScale }} className="mb-12 md:mb-16 grid gap-10 xl:grid-cols-[1.15fr_0.85fr] xl:items-end">
                    <div className="max-w-4xl">
                        <p className="text-[#ffc400] text-base font-semibold tracking-[0.45em] uppercase mb-5">Our Services</p>

                        <div className="w-12 h-px bg-[#ffc400] mb-6" />

                        <h2 className="text-4xl md:text-6xl font-light text-white leading-tight tracking-tight">Parking service shaped around the guest experience.</h2>

                        <p className="mt-6 text-base leading-8 text-white/80 lg:text-lg lg:leading-9 max-w-2xl">
                            From private events to hospitality venues, our team brings a polished, organized, and discreet arrival experience.
                        </p>
                    </div>

                    <div className="hidden xl:flex justify-end">
                        <div className="max-w-md border-l border-[#ffc400]/80 pl-8">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ffc400]/90">Service Standard</p>

                            <p className="mt-4 text-lg leading-8 text-white/75">Refined attendants, organized arrivals, and a polished curbside presence designed to make every guest feel expected.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div style={{ y: cardsY, opacity: cardsOpacity }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                delay: index * 0.05,
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group relative overflow-hidden bg-[#0B0B0F] border border-transparent p-8 md:p-10 xl:p-12 min-h-72 xl:min-h-80 text-center flex flex-col items-center justify-center transition-all duration-700 ease-out hover:border-[#ffc400]/60"
                        >
                            <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 pointer-events-none">
                                <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#ffc400]/60 blur-3xl translate-x-1/3 -translate-y-1/3" />
                            </div>

                            <div className="relative z-10 transition-all duration-700 ease-out group-hover:-translate-y-2">
                                <div className="mb-8">
                                    <img
                                        src={service.icon}
                                        alt=""
                                        aria-hidden="true"
                                        className="
                                            h-16 w-16
                                            object-contain
                                            opacity-95
                                            transition-all duration-700 ease-out
                                            group-hover:scale-110
                                            group-hover:opacity-100
                                        "
                                        style={{
                                            filter: 'drop-shadow(0 0 12px rgba(255,196,0,0.25))',
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="relative z-10 transition-all duration-700 ease-out group-hover:translate-y-1">
                                <h3 className="text-white text-2xl font-semibold mb-5 transition-colors duration-500 group-hover:text-[#ffc400]">{service.title}</h3>

                                <p className="text-white/85 text-lg leading-8 max-w-sm">{service.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
