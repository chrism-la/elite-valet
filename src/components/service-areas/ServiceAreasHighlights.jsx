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
        <section className="px-6 py-24 md:px-12 lg:px-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-14 max-w-2xl">
                    <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C9A227] md:text-sm">Valet Solutions</p>

                    <h2 className="text-3xl font-light tracking-tight md:text-5xl">Built for events, venues, and guest-first experiences.</h2>

                    <p className="mt-5 leading-8 text-white/55">
                        Whether the setting is a private home, a luxury venue, or a busy hospitality location, our team brings structure, presentation, and professionalism to the parking experience.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.55, delay: index * 0.08 }}
                                className="group border border-white/10 bg-white/3 p-7 transition hover:border-[#C9A227]/40 hover:bg-white/5"
                            >
                                <Icon className="mb-8 h-7 w-7 text-[#C9A227]" />

                                <h3 className="text-xl font-light text-white">{item.title}</h3>

                                <p className="mt-4 leading-7 text-white/50">{item.text}</p>

                                <div className="mt-8 h-px w-10 bg-white/10 transition group-hover:w-20 group-hover:bg-[#C9A227]/60" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
