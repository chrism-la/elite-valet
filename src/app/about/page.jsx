import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import GalleryGrid from '@/components/about/GalleryGrid';
import AboutContact from '@/components/about/AboutContact';

export const metadata = {
    title: 'About Elite Valet | Luxury Valet Service',
    description: 'Learn about Elite Valet and our premium valet service for private events, venues, and hospitality clients.',
};

export default function AboutPage() {
    return (
        <main className="bg-[#0B0B0F] text-white">
            <Navbar />
            <AboutHero />
            <AboutStory />
            <GalleryGrid />
            <AboutContact />
            <Footer />
        </main>
    );
}
