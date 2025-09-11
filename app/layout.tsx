import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'ServiceBook Pros — AI-First Field Service Management',
  description: 'All-in-one CRM for electricians and trades: scheduling & dispatch, voice-to-invoice, QuickBooks sync, price books, and offline-friendly mobile.',
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
        url: '/brand/servicebook-logo.svg',
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
    images: ['/brand/servicebook-logo.svg'],
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${poppins.className}`}>
      <body className="bg-light-gray text-professional-gray antialiased">
        {children}
      </body>
    </html>
  );
}
