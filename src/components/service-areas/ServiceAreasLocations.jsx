'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

const locations = [
    {
        name: 'Beverly Hills',
        slug: 'beverly-hills',
        image: '/service-areas/beverly-hills-park.webp',
        eyebrow: 'Luxury Events & Private Residences',
        title: 'Valet service designed for Beverly Hills standards.',
        text: 'Elite Valet supports private homes, luxury events, restaurants, and high-end venues throughout Beverly Hills with polished arrival experiences and professional guest handling.',
    },
    {
        name: 'Sunset Plaza',
        slug: 'sunset-plaza',
        image: '/service-areas/Sunset-Plaza-1.webp',
        eyebrow: 'Upscale Retail & Dining',
        title: 'Refined valet support for Sunset Plaza.',
        text: 'For high-visibility dining, retail, and event locations, our valet team helps create a confident first impression from the moment guests arrive.',
    },
    {
        name: 'Burbank',
        slug: 'burbank',
        image: '/service-areas/downtown-burbank.jpg',
        eyebrow: 'Studios, Corporate & Private Events',
        title: 'Reliable valet service throughout Burbank.',
        text: 'Elite Valet serves Burbank events, studios, businesses, and private venues with organized parking support built around timing, presentation, and guest convenience.',
    },
    {
        name: 'Glendale',
        slug: 'glendale',
        image: '/service-areas/Glendale.jpg',
        eyebrow: 'Events, Restaurants & Corporate Locations',
        title: 'Valet service for Glendale’s busiest destinations.',
        text: 'Elite Valet helps Glendale venues and event hosts manage guest parking with dependable service, clean presentation, and attentive on-site coordination.',
    },
    {
        name: 'Pasadena',
        slug: 'pasadena',
        image: '/service-areas/Pasadena.jpg',
        eyebrow: 'Weddings, Venues & Private Properties',
        title: 'Elegant valet service for Pasadena events.',
        text: 'From historic venues to private celebrations, our team provides professional valet service that supports a smooth arrival and departure experience.',
    },
    {
        name: 'Studio City',
        slug: 'studio-city',
        image: '/service-areas/studio-city-skyline.webp',
        eyebrow: 'Restaurants, Events & Entertainment',
        title: 'Smooth valet operations for Studio City venues.',
        text: 'From restaurant traffic to private gatherings and production-related events, our team helps manage parking flow with a clean, organized, and guest-focused approach.',
    },
    {
        name: 'West Hollywood',
        slug: 'west-hollywood',
        image: '/service-areas/west-hollywood-revolver.jpg',
        eyebrow: 'Hospitality & Nightlife',
        title: 'Professional valet service for West Hollywood arrivals.',
        text: 'West Hollywood venues require valet service that feels sharp, efficient, and composed. Elite Valet brings a polished presence for restaurants, lounges, hotels, and private events.',
    },
];

export default function ServiceAreasLocations() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');

        if (hash) {
            setActiveSection(hash);

            const timer = setTimeout(() => {
                setActiveSection('');
            }, 1800);

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <section className="px-6 py-20 md:px-12 lg:px-20 xl:px-24 2xl:px-32">
            <div className="mx-auto max-w-7xl 2xl:max-w-400">
                <div className="mb-16 max-w-4xl">
                    <p className="mb-5 text-base font-semibold uppercase tracking-[0.45em] text-[#ffc400]">Featured Locations</p>

                    <h2 className="text-3xl font-light tracking-tight md:text-5xl">Local service, tailored to each arrival.</h2>
                </div>

                <div className="space-y-20 md:space-y-28">
                    {locations.map((location, index) => {
                        const isReversed = index % 2 !== 0;

                        return (
                            <motion.article
                                id={location.slug}
                                key={location.name}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-120px' }}
                                transition={{ duration: 0.7 }}
                                className={`scroll-mt-32 grid items-center gap-10 xl:grid-cols-2 xl:gap-20 ${isReversed ? 'xl:[&>*:first-child]:order-2' : ''}`}
                            >
                                {/* Image */}
                                <div className="group relative h-90 overflow-hidden border border-white/10 bg-white/3 md:h-110 xl:h-120">
                                    <Image
                                        src={location.image}
                                        alt={`${location.name} valet service area`}
                                        fill
                                        className="object-cover opacity-85 transition duration-1000 group-hover:scale-[1.03] group-hover:opacity-100"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-[#0B0B0F]/85 via-[#0B0B0F]/20 to-transparent" />

                                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                        <MapPin className="h-4 w-4 text-[#ffc400]" />

                                        <span className="text-sm font-medium uppercase tracking-[0.25em] text-white/90">{location.name}</span>
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="max-w-xl">
                                    <p className="mb-5 text-base font-semibold uppercase tracking-[0.4em] text-[#ffc400]">{location.eyebrow}</p>

                                    <h3 className="text-3xl font-light leading-tight tracking-tight text-white md:text-5xl">{location.title}</h3>

                                    <p className="mt-6 text-base leading-8 text-white/75 lg:text-lg lg:leading-9">{location.text}</p>

                                    <div className="mt-8 h-px w-24 bg-linear-to-r from-[#ffc400] to-transparent" />
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
