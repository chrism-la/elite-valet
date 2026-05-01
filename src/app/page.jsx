import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Experience from '@/components/Experience';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Elite Valet | Luxury Valet Parking in Los Angeles',
    description: 'Premium valet parking services for private events, hotels, and high-end venues across Los Angeles. Licensed, insured, and professionally managed.',
};

export default function HomePage() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Services />
            <Stats />
            <Experience />
            <CTA />
            <Footer />
        </main>
    );
}
