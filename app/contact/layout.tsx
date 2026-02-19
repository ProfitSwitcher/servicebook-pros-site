import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — ServiceBook Pros',
  description:
    'Get in touch with ServiceBook Pros. Schedule a demo, start a free trial, or ask us anything.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
