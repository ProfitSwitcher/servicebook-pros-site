/*
  Rewritten homepage for ServiceBook Pros.
  This version adds a navigation bar, a two-column hero section, styled features grid,
  pricing cards, a call-to-action section, and a footer. It uses Tailwind CSS utilities
  and the extended color palette defined in tailwind.config.ts.
*/

'use client';

import {
  CalendarCheck,
  FileText,
  BookOpen,
  CreditCard,
  WifiOff,
  CheckCircle,
} from 'lucide-react';

// Feature definitions with associated icons and descriptions
const features = [
  {
    icon: CalendarCheck,
    title: 'Scheduling & Dispatch',
    description:
      'Easily assign jobs and monitor field crews in real-time with drag-and-drop scheduling and live dispatch.',
  },
  {
    icon: FileText,
    title: 'Voice-to-Invoice AI',
    description:
      'Turn voice notes into professional estimates and invoices instantly using our AI assistant.',
  },
  {
    icon: BookOpen,
    title: 'Price Books by Pros',
    description:
      'Preloaded and customizable price books authored by electrical, HVAC and generator pros.',
  },
  {
    icon: CreditCard,
    title: 'Payments & QuickBooks Sync',
    description:
      'Securely accept cards and ACH with seamless QuickBooks Online integration.',
  },
  {
    icon: WifiOff,
    title: 'Offline-Friendly Mobile App',
    description:
      'Work confidently in the field—even when service is spotty—with full offline capabilities.',
  },
];

// Pricing tiers definitions
const tiers = [
  {
    name: 'Starter',
    price: '$59/mo',
    description: 'For solo operators ready to level up.',
    features: ['1 user', 'Scheduling & dispatch', 'Estimates & invoices', 'Basic reports'],
  },
  {
    name: 'Pro',
    price: '$149/mo',
    description: 'For growing teams needing more power.',
    features: [
      'Up to 5 users',
      'GPS & time tracking',
      'Price books & proposals',
      'QuickBooks sync',
    ],
  },
  {
    name: 'Growth',
    price: '$299/mo',
    description: 'For established crews ready for all the tools.',
    features: [
      'Up to 8 users',
      'Custom reports',
      'Dedicated onboarding',
      'All add‑ons included',
    ],
  },
];

export default function Page() {
  return (
    <>
      {/* Navigation bar */}
      <nav className="flex items-center justify-between py-4 px-6 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <img
            src="/brand/servicebook-icon.png"
            alt="ServiceBook Pros logo"
            className="h-8 w-8"
          />
          <span className="font-semibold text-servicebook-navy text-xl">
            ServiceBook Pros
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#features"
            className="text-servicebook-navy hover:text-servicebook-bright transition"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-servicebook-navy hover:text-servicebook-bright transition"
          >
            Pricing
          </a>
          <a
            href="/switch-from-housecall-pro"
            className="text-servicebook-navy hover:text-servicebook-bright transition"
          >
            Switch
          </a>
        </div>
      </nav>

      {/* Hero section */}
      <section className="bg-light-gray py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-servicebook-navy mb-6">
              AI-first Field Service Management
            </h1>
            <p className="text-lg text-professional-gray mb-8">
              Built by and for trades: electricians, HVAC and generator pros.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-6 py-3 bg-servicebook-bright text-white rounded-md hover:bg-servicebook-light transition"
                onClick={() => {
                  window.location.href = '/switch-from-housecall-pro';
                }}
              >
                Get Started
              </button>
              <a
                href="#demo"
                className="px-6 py-3 border-2 border-servicebook-bright text-servicebook-bright rounded-md hover:bg-servicebook-bright hover:text-white transition"
              >
                Schedule Demo
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/brand/servicebook_logo_full.png"
              alt="ServiceBook Pros hero graphic"
              className="max-h-60 w-auto"
            />
          </div>
        </div>
      </section>

      {/* Features section */}
      <section id="features" className="py-20 bg-white px-4">
        <h2 className="text-3xl font-bold text-servicebook-navy text-center mb-12">
          Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <Icon className="h-8 w-8 text-servicebook-bright mb-4" />
              <h3 className="text-xl font-semibold text-servicebook-navy mb-2">
                {title}
              </h3>
                <p className="text-professional-gray">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing section */}
      <section id="pricing" className="py-20 bg-light-gray px-4">
        <h2 className="text-3xl font-bold text-servicebook-navy text-center mb-12">
          Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map(({ name, price, description, features: tierFeatures }) => (
            <div
              key={name}
              className="flex flex-col justify-between p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div>
                <h3 className="text-2xl font-bold text-servicebook-navy mb-2">
                  {name}
                </h3>
                <p className="text-xl text-servicebook-bright font-semibold mb-2">
                  {price}
                </p>
                <p className="text-professional-gray mb-4">{description}</p>
                <ul className="space-y-2 mb-6">
                  {tierFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-servicebook-bright mt-1" />
                      <span className="text-professional-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className="mt-auto px-4 py-2 bg-servicebook-bright text-white rounded-md hover:bg-servicebook-light transition"
                onClick={() => {
                  window.location.href = '/switch-from-housecall-pro';
                }}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Demo call-to-action section */}
      <section id="demo" className="py-20 bg-white px-4">
        <h2 className="text-3xl font-bold text-servicebook-navy text-center mb-6">
          Ready to get started?
        </h2>
        <p className="text-center text-professional-gray mb-8">
          Schedule a demo and see how ServiceBook Pros can transform your business.
        </p>
        <div className="flex justify-center">
          <a
            href="/switch-from-housecall-pro"
            className="px-8 py-4 bg-servicebook-bright text-white rounded-md hover:bg-servicebook-light transition"
          >
            Schedule Demo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-servicebook-navy text-white py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ServiceBook Pros. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#features" className="hover:text-servicebook-light transition">
              Features
            </a>
            <a href="#pricing" className="hover:text-servicebook-light transition">
              Pricing
            </a>
            <a
              href="/switch-from-housecall-pro"
              className="hover:text-servicebook-light transition"
            >
              Switch
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}