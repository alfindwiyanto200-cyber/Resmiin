import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Resmiin – Business Infrastructure Partner Terpercaya di Indonesia',
  description: 'Resmiin adalah Business Infrastructure Partner paling terpercaya di Indonesia. Layanan pendirian PT, CV, perizinan, konsultasi pajak, dan hukum.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main style={{ paddingTop: '76px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
