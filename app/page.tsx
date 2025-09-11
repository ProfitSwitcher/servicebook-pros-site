'use client';

import { useState } from 'react';
import {
  CalendarCheck,
  FileText,
  BookOpen,
  CreditCard,
  WifiOff,
  CheckCircle,
} from 'lucide-react';


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

const tiers = [
  {
    name: 'Starter',
    price: '$59/mo',
    description: 'For solo operators ready to level up.',
    features: [
      '1 user',
      'Scheduling & dispatch',
      'Estimates & invoices',
      'Basic reports',
    ],
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
      'All add-ons included',
    ],
  },
];

export default function Page() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [open, setOpen] = useState(false);

  const handleSelect = (plan: string) => {
    setSelectedPlan(plan);
    setOpen(true);
  };

  return (
    <>
      
      <section className="py-16 text-center bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="text-4xl font-bold text-servicebook-navy mb-4">
            ServiceBook Pros
          </h1>
          <p className="text-lg text-professional-gray mb-6">
            AI-first field service management built for the trades.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              className="px-6 py-3 rounded-md bg-servicebook-bright text-white hover:bg-servicebook-light transition"
              onClick={() => handleSelect('starter')}
            >
              Get Started
            </button>
            <a
              href="/switch-from-housecall-pro"
              className="px-6 py-3 rounded-md border border-servicebook-bright text-servicebook-bright hover:bg-servicebook-bright hover:text-white transition"
            >
              Switch from Housecall Pro
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-gray">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-servicebook-navy text-center mb-10">
            Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white p-6 rounded-xl shadow">
                <Icon className="h-8 w-8 text-servicebook-bright mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-professional-gray">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-servicebook-navy text-center mb-10">
            Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map(({ name, price, description, features: tierFeatures }) => (
              <div key={name} className="border rounded-xl p-6 flex flex-col">
                <h3 className="text-2xl font-bold text-servicebook-navy mb-2">
                  {name}
                </h3>
                <p className="text-3xl font-extrabold text-servicebook-bright mb-2">
                  {price}
                </p>
                <p className="text-sm text-professional-gray mb-4 flex-1">
                  {description}
                </p>
                <ul className="space-y-2 mb-6">
                  {tierFeatures.map((feat) => (
                    <li key={feat} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-servicebook-bright mr-2" />
                      <span className="text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-auto px-4 py-2 rounded-md bg-servicebook-bright text-white hover:bg-servicebook-light transition"
                  onClick={() => handleSelect(name.toLowerCase())}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-gray text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-servicebook-navy mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-professional-gray mb-6">
            Schedule a demo and see how ServiceBook Pros can transform your business.
          </p>
          <button
            className="px-6 py-3 rounded-md bg-servicebook-bright text-white hover:bg-servicebook-light transition"
            onClick={() => handleSelect('demo')}
          >
            Schedule Demo
          </button>
        </div>
      </section>
    </>
  );
}
