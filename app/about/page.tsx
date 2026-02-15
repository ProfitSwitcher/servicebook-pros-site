import type { Metadata } from 'next';
import Link from 'next/link';
import { Wrench, Heart, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — ServiceBook Pros',
  description:
    'ServiceBook Pros is built by trades professionals who understand the daily grind of running a field service business.',
};

const values = [
  {
    icon: Wrench,
    title: 'Built by Tradespeople',
    description:
      'Our founding team includes licensed electricians and HVAC technicians who lived the pain of clunky software. We build what we wish we had.',
  },
  {
    icon: Heart,
    title: 'Customer-First',
    description:
      'Every feature starts with a conversation with a real pro. We listen, prototype, and iterate until the tool fits the workflow — not the other way around.',
  },
  {
    icon: Lightbulb,
    title: 'AI That Helps, Not Hinders',
    description:
      'We believe AI should save you time on paperwork so you can spend more time on skilled work. Our AI handles the busywork while you stay in control.',
  },
];

const milestones = [
  { year: '2021', event: 'Founded in Austin, TX by a team of licensed electricians and software engineers.' },
  { year: '2022', event: 'Launched beta with 50 electrical contractors across Texas.' },
  { year: '2023', event: 'Released voice-to-invoice AI and expanded to HVAC and generator trades.' },
  { year: '2024', event: 'Crossed 2,500 active pros and launched QuickBooks two-way sync.' },
  { year: '2025', event: 'Introduced customer portal, service agreements, and offline-first mobile apps.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-servicebook-navy to-[#2a5a8f] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            ServiceBook Pros started in a truck cab — sketched on the back of a work order by an
            electrician tired of fighting software that was never built for the trades.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-servicebook-navy text-center mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-professional-gray text-center leading-relaxed max-w-3xl mx-auto">
            Give every trades professional — from solo operators to growing crews — an AI-powered
            platform that makes running a field service business as satisfying as doing the work
            itself. No bloat. No busywork. Just the tools you need to schedule, dispatch, invoice,
            and get paid.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-light-gray px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-servicebook-navy text-center mb-12">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="p-6 bg-white border rounded-lg shadow-sm text-center">
                <div className="h-14 w-14 rounded-full bg-servicebook-bright/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-7 w-7 text-servicebook-bright" />
                </div>
                <h3 className="text-xl font-semibold text-servicebook-navy mb-2">{title}</h3>
                <p className="text-professional-gray text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-servicebook-navy text-center mb-12">
            Our Journey
          </h2>
          <div className="space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="font-bold text-servicebook-bright text-lg">{m.year}</span>
                </div>
                <div className="flex-shrink-0 w-px bg-servicebook-bright/30 relative">
                  <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-servicebook-bright" />
                </div>
                <p className="text-professional-gray pt-0.5">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-servicebook-navy text-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Join the ServiceBook Pros Community</h2>
          <p className="text-gray-300 mb-6">
            Ready to see what field service management should feel like?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-3 bg-servicebook-bright text-white rounded-md hover:bg-servicebook-light transition font-medium"
            >
              Start Free Trial
            </Link>
            <Link
              href="/features"
              className="px-7 py-3 border-2 border-white/30 text-white rounded-md hover:bg-white/10 transition font-medium"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
