'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const images = ['beverly-hills-event-1.webp', 'beverly-hills-event-2.webp', 'key-retrieval.webp', 'employee-supervisors.webp', 'castaway-employees-1.webp', 'cashier-employee.webp'];

export default function GalleryGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {images.map((src, index) => (
                <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                        delay: index * 0.08,
                        duration: 0.7,
                        ease: 'easeOut',
                    }}
                    className={`
                        relative overflow-hidden bg-white/10
                        ${index === 0 ? 'md:col-span-3 h-80 md:h-105' : ''}
                        ${index === 1 ? 'md:col-span-3 h-80 md:h-90 md:mt-16' : ''}
                        ${index === 2 ? 'md:col-span-6 h-96 md:h-130' : ''}
                        ${index === 3 ? 'md:col-span-2 h-80 md:h-90' : ''}
                        ${index === 4 ? 'md:col-span-2 h-80 md:h-105 md:mt-12' : ''}
                        ${index === 5 ? 'md:col-span-2 h-80 md:h-90' : ''}
                    `}
                >
                    <Image
                        src={`/gallery/${src}`}
                        alt={`Valet service image ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition duration-700 hover:scale-105"
                    />
                </motion.div>
            ))}
        </div>
    );
}
