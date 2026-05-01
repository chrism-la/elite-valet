'use client';

export default function AboutStory() {
    return (
        <section className="px-6 md:px-16 py-20 md:py-28">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                <div>
                    <h2 className="text-3xl md:text-5xl font-light leading-tight">A higher standard of guest arrival.</h2>
                </div>

                <div className="space-y-6 text-white/55 text-sm md:text-base leading-relaxed">
                    <p>Elite Valet provides polished valet service for private events, hospitality venues, restaurants, and high-end gatherings across Los Angeles.</p>

                    <p>Our focus is simple: create a smooth first impression, manage vehicles with care, and support every event with organized, professional service.</p>

                    <p>Fully licensed and insured, our team brings reliability, discretion, and attention to detail to every guest experience.</p>
                </div>
            </div>
        </section>
    );
}
