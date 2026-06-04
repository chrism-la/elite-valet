'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        const form = e.currentTarget;

        setIsSubmitting(true);
        setStatus('');

        try {
            const formData = new FormData(form);

            const payload = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                email: formData.get('email'),
                eventDate: formData.get('eventDate'),
                location: formData.get('location'),
                guestCount: formData.get('guestCount'),
                message: formData.get('message'),
            };

            if (!payload.name || !payload.phone || !payload.email) {
                setStatus('Please complete your name, phone number, and email before submitting.');
                setIsSubmitting(false);
                return;
            }

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setStatus('Thank you! Your request has been submitted successfully. A member of our team will contact you shortly.');
                form.reset();
            } else {
                setStatus('Unable to send your request at this time. Please call (800) 990-4382 or email info@elitecarvalet.com.');
            }
        } catch (error) {
            setStatus('Unable to send your request at this time. Please call (800) 990-4382 or email info@elitecarvalet.com.');
        } finally {
            setIsSubmitting(false);
        }
    }
    return (
        <section className="px-6 pt-16 pb-28 md:px-16 md:pt-20 lg:px-24 2xl:px-32">
            <div className="mx-auto grid max-w-6xl gap-10 xl:max-w-7xl 2xl:max-w-400 xl:grid-cols-[1.1fr_0.9fr] xl:gap-14">
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
                    className="relative overflow-hidden border border-white/50 bg-white/4 p-6 md:p-8 xl:p-10"
                >
                    <div className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full bg-[#ffc400]/8 blur-3xl" />

                    <div className="relative z-10">
                        <div className="grid gap-5 md:grid-cols-2">
                            <Field label="Name" type="text" name="name" />
                            <Field label="Phone" type="tel" name="phone" />
                            <Field label="Email" type="email" name="email" />
                            <Field label="Event Date" type="date" name="eventDate" />
                            <Field label="Event Location or venue" type="text" name="location" />
                            <Field label="Estimated Guests / cars" type="text" name="guestCount" />
                        </div>

                        <div className="mt-5">
                            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-white">Message</label>

                            <textarea
                                name="message"
                                rows="6"
                                placeholder="Please include any additional details about your event, venue, parking logistics, guest arrival requirements, permit considerations, reserved parking areas, lot access, or any special instructions that may help us prepare for your event."
                                className="w-full resize-none border border-white/75 bg-black/25 px-4 py-3 text-base text-white outline-none transition focus:border-[#ffc400]/60"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-7 rounded-full px-7 py-3 text-base xl:text-[19px] font-semibold tracking-wide text-black bg-linear-to-r from-[#C9A227] via-[#E6C75A] to-[#C9A227] shadow-[0_0_20px_rgba(201,162,39,0.25)] hover:scale-[1.03] active:scale-[0.98] transition"
                        >
                            {isSubmitting ? 'Sending...' : 'Submit Request'}
                        </button>
                        {status && <p className={`mt-4 text-sm ${status.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}>{status}</p>}
                    </div>
                </motion.form>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
                    className="relative overflow-hidden border border-white/15 bg-white/4 p-6 md:p-8 xl:p-10 xl:self-start"
                >
                    <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#ffc400]/8 blur-3xl" />

                    <div className="relative z-10">
                        <p className="mb-5 text-base font-semibold uppercase tracking-[0.45em] text-[#ffc400]">Direct Contact</p>

                        <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl">Prefer to reach out directly?</h2>

                        <p className="mt-6 text-base leading-8 text-white/75 lg:text-lg lg:leading-9">Contact Elite Valet for availability, pricing, and event-specific valet coordination.</p>

                        <div className="mt-8 space-y-5">
                            <ContactItem icon={Phone} label="Phone" value="1 (800) 990-4382" href="tel:18009904382" />
                            <ContactItem icon={Mail} label="Email" value="info@elitecarvalet.com" href="mailto:info@elitecarvalet.com" />
                            <ContactItem icon={MapPin} label="Service Area" value="Los Angeles County" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function Field({ label, type, name }) {
    return (
        <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-white">{label}</label>

            <input
                type={type}
                name={name}
                className="
    w-full border border-white/75 bg-black/30 px-4 py-3 text-sm text-white
    outline-none transition
    placeholder:text-white/25
    focus:border-[#ffc400]/50
    [&::-webkit-calendar-picker-indicator]:invert
    [&::-webkit-calendar-picker-indicator]:opacity-70
    [&::-webkit-datetime-edit]:text-white/40
"
            />
        </div>
    );
}

function ContactItem({ icon: Icon, label, value, href }) {
    const content = (
        <div className="group flex items-start gap-4 border border-white/15 bg-black/20 p-4 transition hover:border-[#ffc400]/40">
            <Icon className="mt-1 h-5 w-5 text-[#ffc400] transition-transform duration-300 group-hover:scale-110" />

            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/45">{label}</p>

                <p className="mt-1 text-base text-white/85">{value}</p>
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
