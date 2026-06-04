'use client';

import { motion } from 'framer-motion';
import { FaCrown, FaHotel, FaAward, FaBuildingColumns } from 'react-icons/fa6';

const highlights = [
    {
        icon: FaAward,
        title: 'Private Properties',
        text: 'Discreet valet support for private residences, estates, and invite-only gatherings where presentation and trust matter.',
    },
    {
        icon: FaHotel,
        title: 'Hospitality Venues',
        text: 'Professional parking service for restaurants, hotels, lounges, and venues that need a polished guest arrival.',
    },
    {
        icon: FaCrown,
        title: 'Luxury Events',
        text: 'Valet coordination for weddings, galas, fundraisers, celebrations, and high-end social events across Los Angeles.',
    },
    {
        icon: FaBuildingColumns,
        title: 'Corporate Functions',
        text: 'Organized arrival and departure support for business events, company gatherings, studios, offices, and private venues.',
    },
];

export default function ServiceAreasHighlights() {
    return (
        <section className="px-6 py-24 md:px-12 lg:px-20 xl:px-24 2xl:px-32">
            <div className="mx-auto max-w-7xl 2xl:max-w-400">
                <div className="mb-14 max-w-4xl">
                    <p className="mb-5 text-base font-semibold uppercase tracking-[0.45em] text-[#ffc400]">Valet Solutions</p>

                    <h2 className="text-3xl font-light tracking-tight md:text-5xl">Built for events, venues, and guest-first experiences.</h2>

                    <p className="mt-6 text-base leading-8 text-white/75 lg:text-lg lg:leading-9 max-w-3xl">
                        Whether the setting is a private home, a luxury venue, or a busy hospitality location, our team brings structure, presentation, and professionalism to the parking experience.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.08,
                                }}
                                className="group relative overflow-hidden border border-white/10 bg-white/3 p-7 xl:p-8 transition-all duration-700 hover:border-[#ffc400]/30"
                            >
                                {/* Glow */}
                                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                                    <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[#ffc400]/12 blur-3xl translate-x-1/3 -translate-y-1/3" />
                                </div>

                                {/* Icon */}
                                <Icon
                                    className="
        relative z-10
        mb-8
        h-8 w-8
        text-[#ffc400]
        drop-shadow-[0_0_10px_rgba(255,196,0,0.18)]
        transition-all duration-500
        group-hover:scale-110
    "
                                />

                                {/* Title */}
                                <h3 className="relative z-10 text-2xl font-light text-white transition-colors duration-500 group-hover:text-[#ffc400]">{item.title}</h3>

                                {/* Text */}
                                <p className="relative z-10 mt-5 text-base leading-8 text-white/75">{item.text}</p>

                                {/* Divider */}
                                <div className="mt-8 h-px w-10 bg-white/10 transition-all duration-500 group-hover:w-20 group-hover:bg-[#ffc400]/60" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
