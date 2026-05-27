'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
    return (
        <section className="px-6 pt-16 pb-28 md:px-16 md:pt-20">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <motion.form
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
                    className="border border-white/10 bg-white/[0.035] p-6 md:p-8"
                >
                    <div className="grid gap-5 md:grid-cols-2">
                        <Field label="Name" type="text" name="name" />
                        <Field label="Phone" type="tel" name="phone" />
                        <Field label="Email" type="email" name="email" />
                        <Field label="Event Date" type="text" name="eventDate" />
                        <Field label="Event Location" type="text" name="location" />
                        <Field label="Estimated Cars / Guests" type="text" name="guestCount" />
                    </div>

                    <div className="mt-5">
                        <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-white/40">Message</label>
                        <textarea
                            name="message"
                            rows="6"
                            className="w-full resize-none border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#C9A227]/50"
                            placeholder="Tell us about the event, venue, timing, or any parking details."
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-7 rounded-full bg-linear-to-r from-[#C9A227] via-[#E6C75A] to-[#C9A227] px-7 py-3 text-sm tracking-wide text-black shadow-[0_0_20px_rgba(201,162,39,0.22)] transition hover:scale-[1.03] active:scale-[0.98]"
                    >
                        Submit Request
                    </button>

                    <p className="mt-4 text-xs leading-6 text-white/35">
                        Form submission can be connected later. For now, visitors can also contact Elite Valet directly using the information provided.
                    </p>
                </motion.form>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
                    className="border border-white/10 bg-white/2.5 p-6 md:p-8 lg:self-start"
                >
                    <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C9A227]">Direct Contact</p>

                    <h2 className="text-3xl font-light tracking-tight md:text-4xl">Prefer to reach out directly?</h2>

                    <p className="mt-5 leading-8 text-white/50">Contact Elite Valet for availability, pricing, and event-specific valet coordination.</p>

                    <div className="mt-8 space-y-5">
                        <ContactItem icon={Phone} label="Phone" value="1 (800) 990-4382" href="tel:18009904382" />
                        <ContactItem icon={Mail} label="Email" value="info@elitecarvalet.com" href="mailto:info@elitecarvalet.com" />
                        <ContactItem icon={MapPin} label="Service Area" value="Los Angeles County" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function Field({ label, type, name }) {
    return (
        <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-white/40">{label}</label>
            <input
                type={type}
                name={name}
                className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#C9A227]/50"
            />
        </div>
    );
}

function ContactItem({ icon: Icon, label, value, href }) {
    const content = (
        <div className="flex items-start gap-4 border border-white/10 bg-black/20 p-4 transition hover:border-[#C9A227]/30">
            <Icon className="mt-1 h-4 w-4 text-[#C9A227]" />
            <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/35">{label}</p>
                <p className="mt-1 text-white/70">{value}</p>
            </div>
        </div>
    );

    return href ? (
        <a href={href} className="block">
            {content}
        </a>
    ) : (
        content
    );
}
