import Navbar from '@/components/Navbar';
import ServiceAreasHero from '@/components/service-areas/ServiceAreasHero';
import ServiceAreasLocations from '@/components/service-areas/ServiceAreasLocations';
import ServiceAreasHighlights from '@/components/service-areas/ServiceAreasHighlights';
import ServiceAreasCTA from '@/components/service-areas/ServiceAreasCTA';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Service Areas | Elite Valet Los Angeles',
    description:
        'Serving Beverly Hills, Hollywood, Studio City, Burbank and beyond, Elite Valet delivers refined, professional valet service for luxury events, hospitality venues, and private clients across Los Angeles.',
};

export default function ServiceAreasPage() {
    return (
        <main className="bg-[#0B0B0F] text-white">
            <Navbar />
            <ServiceAreasHero />
            <ServiceAreasLocations />
            <ServiceAreasHighlights />
            <ServiceAreasCTA />
            <Footer />
        </main>
    );
}
