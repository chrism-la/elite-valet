import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';

export const metadata = {
    title: 'Contact Elite Valet | Request Valet Service',
    description: 'Request premium valet service for private events, restaurants, hotels, venues, and hospitality locations across Los Angeles.',
};

export default function ContactPage() {
    return (
        <main className="bg-[#0B0B0F] text-white">
            <Navbar />
            <ContactHero />
            <ContactForm />
            <Footer />
        </main>
    );
}
