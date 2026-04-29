import './globals.css';

export const metadata = {
    title: 'Elite Valet',
    description: 'Luxury valet service',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
