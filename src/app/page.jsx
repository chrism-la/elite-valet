import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Experience from '@/components/Experience';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

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
