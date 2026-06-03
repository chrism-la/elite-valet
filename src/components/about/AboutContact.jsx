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
                className="relative overflow-hidden mx-auto max-w-7xl 2xl:max-w-400 border border-white/10 bg-white/3 px-6 py-14 md:p-16 xl:p-20"
            >
                {/* Atmosphere */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#ffc400]/8 blur-3xl" />
                </div>

                <div className="relative z-10">
                    <p className="text-[#ffc400] text-base font-semibold tracking-[0.45em] uppercase mb-5">Contact</p>

                    <div className="w-12 h-px bg-[#ffc400] mb-8" />

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 xl:gap-20">
                        <div className="md:col-span-6">
                            <h2 className="text-4xl md:text-6xl font-light leading-tight tracking-tight text-white">Request valet service for your next event.</h2>

                            <p className="mt-8 text-white/75 text-base leading-8 lg:text-lg lg:leading-9 max-w-xl">
                                For event inquiries, include the date, location, estimated guest count, and any special parking details.
                            </p>

                            <Link
                                href="/contact"
                                className="mt-10 inline-block rounded-full px-7 py-3 text-base xl:text-[19px] font-semibold tracking-wide text-black bg-linear-to-r from-[#C9A227] via-[#E6C75A] to-[#C9A227] shadow-[0_0_20px_rgba(201,162,39,0.25)] hover:scale-[1.03] active:scale-[0.98] transition"
                            >
                                Open Contact Form
                            </Link>
                        </div>

                        <div className="md:col-span-5 md:col-start-8 flex flex-col gap-6 text-base lg:text-lg">
                            <a href="mailto:info@elitecarvalet.com" className="group flex items-center gap-4 text-white/75 hover:text-[#ffc400] transition">
                                <Mail className="w-5 h-5 text-[#ffc400] transition-transform duration-300 group-hover:scale-110" />
                                info@elitecarvalet.com
                            </a>

                            <a href="tel:18009904382" className="group flex items-center gap-4 text-white/75 hover:text-[#ffc400] transition">
                                <Phone className="w-5 h-5 text-[#ffc400] transition-transform duration-300 group-hover:scale-110" />
                                1-(800)-990-4382
                            </a>

                            <div className="flex items-start gap-4 text-white/65 leading-8">
                                <CalendarDays className="mt-1 w-5 h-5 shrink-0 text-[#ffc400]" />
                                Available for private events, venues, and hospitality service.
                            </div>

                            <div className="flex items-start gap-4 text-white/65 leading-8">
                                <ShieldCheck className="mt-1 w-5 h-5 shrink-0 text-[#ffc400]" />
                                Secure booking details handled with professionalism and discretion.
                            </div>

                            <div className="pt-7 mt-4 border-t border-white/10 flex gap-4">
                                <a
                                    href="https://www.instagram.com/officialeliteparking/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-[#ffc400]/50 hover:text-[#ffc400]"
                                >
                                    <FaInstagram className="h-4 w-4" />
                                </a>

                                <a
                                    href="https://www.linkedin.com/company/elite-car-valet-llc/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-[#ffc400]/50 hover:text-[#ffc400]"
                                >
                                    <FaLinkedin className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
