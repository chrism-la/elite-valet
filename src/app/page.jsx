import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Stats from '@/components/home/Stats';
import Experience from '@/components/home/Experience';
import CTA from '@/components/home/CTA';
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
