import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'ServiceBook Pros — AI-First Field Service Management',
  description:
    'All-in-one CRM for electricians and trades: scheduling & dispatch, voice-to-invoice, QuickBooks sync, price books, and offline-friendly mobile.',
  metadataBase: new URL('https://servicebookpros.com'),
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'ServiceBook Pros',
    description:
      'AI-first field service management for trades. Schedule, dispatch, invoice, sync with QuickBooks, and more.',
    url: 'https://servicebookpros.com',
    siteName: 'ServiceBook Pros',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ServiceBook Pros',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ServiceBook Pros',
    description:
      'AI-first field service management for trades. Schedule, dispatch, invoice, sync with QuickBooks, and more.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-light-gray text-professional-gray antialiased font-sans`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
