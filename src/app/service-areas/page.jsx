import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'About Elite Valet | Luxury Valet Service',
    description: 'Learn about Elite Valet and our premium valet service for private events, venues, and hospitality clients.',
};

export default function AboutPage() {
    return (
        <main className="bg-[#0B0B0F] text-white">
            <Navbar />
            <Footer />
        </main>
    );
}
