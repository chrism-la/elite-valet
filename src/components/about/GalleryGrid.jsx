'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const images = ['beverly-hills-event-1.webp', 'beverly-hills-event-2.webp', 'key-retrieval.webp', 'employee-supervisors.webp', 'castaway-employees-1.webp', 'cashier-employee.webp'];

export default function GalleryGrid() {
    return (
        <section className="bg-[#0B0B0F] px-6 md:px-16 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
                    {images.map((src, index) => (
                        <motion.div
                            key={src}
                            initial={{ opacity: 0, y: 32, scale: 0.97 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.22 }}
                            transition={{
                                delay: index * 0.06,
                                duration: 0.65,
                                ease: 'easeOut',
                            }}
                            className={`
                                relative overflow-hidden bg-white/10
                                h-72 sm:h-80
                                ${index === 0 ? 'md:col-span-3 md:h-105' : ''}
                                ${index === 1 ? 'md:col-span-3 md:h-90 md:mt-16' : ''}
                                ${index === 2 ? 'md:col-span-6 md:h-130' : ''}
                                ${index === 3 ? 'md:col-span-2 md:h-90' : ''}
                                ${index === 4 ? 'md:col-span-2 md:h-105 md:mt-12' : ''}
                                ${index === 5 ? 'md:col-span-2 md:h-90' : ''}
                            `}
                        >
                            <Image
                                src={`/Gallery/${src}`}
                                alt={`Elite Valet gallery image ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover transition duration-700 hover:scale-[1.03]"
                            />

                            <div className="absolute inset-0 bg-black/25" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
