import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'ServiceBook Pros',
  description: 'AI-first field service management platform built for trades.',
  icons: {
    icon: '/favicon.svg',
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
