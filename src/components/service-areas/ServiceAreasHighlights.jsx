'use client';

import { motion } from 'framer-motion';
import { Building2, GlassWater, Hotel, UsersRound } from 'lucide-react';

const highlights = [
    {
        icon: Building2,
        title: 'Private Properties',
        text: 'Discreet valet support for private residences, estates, and invite-only gatherings where presentation and trust matter.',
    },
    {
        icon: Hotel,
        title: 'Hospitality Venues',
        text: 'Professional parking service for restaurants, hotels, lounges, and venues that need a polished guest arrival.',
    },
    {
        icon: GlassWater,
        title: 'Luxury Events',
        text: 'Valet coordination for weddings, galas, fundraisers, celebrations, and high-end social events across Los Angeles.',
    },
    {
        icon: UsersRound,
        title: 'Corporate Functions',
        text: 'Organized arrival and departure support for business events, company gatherings, studios, offices, and private venues.',
    },
];

export default function ServiceAreasHighlights() {
    return (
        <section className="px-6 py-24 md:px-12 lg:px-20 xl:px-24 2xl:px-32">
            <div className="mx-auto max-w-7xl 2xl:max-w-375">
                <div className="mb-14 max-w-3xl">
                    <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C9A227] md:text-sm">Valet Solutions</p>

                    <h2 className="text-3xl font-light tracking-tight md:text-5xl">Built for events, venues, and guest-first experiences.</h2>

                    <p className="mt-5 leading-8 text-white/55">
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
                                transition={{ duration: 0.55, delay: index * 0.08 }}
                                className="group relative overflow-hidden border border-white/10 bg-white/3 p-7 xl:p-8 transition duration-700 hover:border-[#C9A227]/20"
                            >
                                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                                    <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-[#C9A227]/10 blur-3xl translate-x-1/3 -translate-y-1/3" />
                                </div>
                                <Icon className="relative z-10 mb-8 h-7 w-7 text-[#C9A227] opacity-80 transition duration-500 group-hover:opacity-100" />
                                <h3 className="relative z-10 text-xl font-light text-white">{item.title}</h3>

                                <p className="relative z-10 mt-4 leading-7 text-white/50">{item.text}</p>

                                <div className="mt-8 h-px w-10 bg-white/10 transition group-hover:w-20 group-hover:bg-[#C9A227]/60" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
