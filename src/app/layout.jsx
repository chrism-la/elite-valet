import './globals.css';

export const metadata = {
    title: 'Elite Valet',
    description: 'Luxury valet service',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-scroll-behavior="smooth">
            <body className="bg-[#0B0B0F] text-white antialiased">
                <div className="relative min-h-screen overflow-x-hidden bg-[#0B0B0F]">
                    <div className="pointer-events-none fixed inset-0 z-0">
                        <div className="absolute top-0 left-1/2 h-176 w-176 -translate-x-1/2 rounded-full bg-[#ffc400]/2.5 blur-[180px]" />
                        <div className="absolute top-[45%] -right-56 h-128 w-lg rounded-full bg-white/[0.018] blur-[160px]" />
                    </div>

                    <div className="relative z-10">{children}</div>
                </div>
            </body>
        </html>
    );
}
