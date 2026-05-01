'use client';

export default function AboutContact() {
    return (
        <section id="contact" className="px-6 md:px-16 py-20 md:py-28">
            <div className="max-w-6xl mx-auto border border-white/10 bg-white/3 px-6 py-16 md:p-16">
                <p className="text-[#C9A227] text-xs tracking-[0.45em] uppercase mb-5 opacity-90">Contact</p>

                <div className="w-12 h-px bg-[#C9A227]/60 mb-8" />

                <h2 className="text-4xl md:text-6xl font-light leading-tight max-w-3xl">Request valet service for your next event.</h2>

                <div className="mt-10 flex flex-col md:flex-row gap-6 md:gap-12 text-white/60 text-sm">
                    <a href="mailto:yourbusiness@email.com" className="hover:text-white transition">
                        yourbusiness@email.com
                    </a>

                    <a href="tel:1234567890" className="hover:text-white transition">
                        (123) 456-7890
                    </a>

                    <a href="#" className="hover:text-white transition">
                        Instagram
                    </a>
                </div>
            </div>
        </section>
    );
}
