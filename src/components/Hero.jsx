'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const { scrollY } = useScroll();

    const y = useTransform(scrollY, [0, 500], [0, 80]);
    const opacity = useTransform(scrollY, [0, 250], [1, 0]);
    const textY = useTransform(scrollY, [0, 400], [0, 40]);

    return (
        <div className="h-screen w-full relative overflow-hidden flex items-end">
            {/* VIDEO */}
            <motion.div initial={{ opacity: 0, filter: 'blur(14px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 1.6 }} className="absolute inset-0 w-full h-full">
                <video className="w-full h-full object-cover scale-[1.05]" autoPlay muted loop playsInline>
                    <source src="/hero.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/10" />

            {/* CONTENT */}
            <motion.div style={{ y, opacity }} className="relative w-full px-6 md:px-16 pb-24 md:pb-20">
                <motion.div style={{ y: textY }} className="max-w-xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="text-white/80 text-lg md:text-xl font-light leading-relaxed"
                    >
                        Luxury valet parking designed for private events, hotels, and high-profile venues — executed with{' '}
                        <span className="italic text-[#C9A227] drop-shadow-[0_0_16px_rgba(201,162,39,0.4)]">professionalism</span>.
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    );
}
