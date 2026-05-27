'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, CalendarDays, ShieldCheck } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function AboutContact() {
    return (
        <section id="contact" className="bg-[#0B0B0F] px-6 md:px-16 lg:px-24 2xl:px-32 py-20 md:py-28">
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="mx-auto max-w-7xl 2xl:max-w-375 border border-white/10 bg-white/3 px-6 py-14 md:p-16 xl:p-20"
            >
                <p className="text-[#C9A227] text-xs tracking-[0.45em] uppercase mb-5 opacity-90">Contact</p>

                <div className="w-12 h-px bg-[#C9A227]/60 mb-8" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-6">
                        <h2 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">Request valet service for your next event.</h2>

                        <p className="mt-6 text-white/50 text-sm md:text-base leading-relaxed max-w-xl">
                            For event inquiries, include the date, location, estimated guest count, and any special parking details.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-8 inline-block rounded-full px-7 py-3 text-sm tracking-wide text-black bg-linear-to-r from-[#C9A227] via-[#E6C75A] to-[#C9A227] shadow-[0_0_24px_rgba(201,162,39,0.22)] hover:scale-[1.03] active:scale-[0.98] transition"
                        >
                            Open Contact Form
                        </Link>
                    </div>

                    <div className="md:col-span-5 md:col-start-8 flex flex-col gap-5">
                        <a href="mailto:info@elitecarvalet.com" className="flex items-center gap-4 text-white/70 hover:text-white transition">
                            <Mail className="w-5 h-5 text-[#C9A227]" />
                            info@elitecarvalet.com
                        </a>

                        <a href="tel:18009904382" className="flex items-center gap-4 text-white/70 hover:text-white transition">
                            <Phone className="w-5 h-5 text-[#C9A227]" />
                            1-(800)-990-4382
                        </a>

                        <div className="flex items-center gap-4 text-white/55">
                            <CalendarDays className="w-5 h-5 text-[#C9A227]" />
                            Available for private events, venues, and hospitality service.
                        </div>

                        <div className="flex items-center gap-4 text-white/55">
                            <ShieldCheck className="w-5 h-5 text-[#C9A227]" />
                            Secure booking details handled with professionalism and discretion.
                        </div>

                        <div className="pt-6 mt-4 border-t border-white/10 flex gap-5">
                            <a href="#" className="text-white/50 hover:text-white hover:scale-110 transition">
                                <FaInstagram className="w-5 h-5" />
                            </a>

                            <a href="#" className="text-white/50 hover:text-white hover:scale-110 transition">
                                <FaLinkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
