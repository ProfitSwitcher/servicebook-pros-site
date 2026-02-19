import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CalendarCheck,
  FileText,
  BookOpen,
  CreditCard,
  WifiOff,
  Shield,
  BarChart3,
  MapPin,
  Bell,
  Users,
  Smartphone,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Features — ServiceBook Pros',
  description:
    'Scheduling, dispatch, voice-to-invoice AI, price books, payments, QuickBooks sync, offline mobile, and more.',
};

const featureGroups = [
  {
    heading: 'Scheduling & Dispatch',
    description: 'Keep your crew busy and your customers happy.',
    items: [
      {
        icon: CalendarCheck,
        title: 'Drag-and-Drop Scheduling',
        detail:
          'Assign and rearrange jobs on a visual calendar. See crew availability at a glance and avoid double-booking.',
      },
      {
        icon: MapPin,
        title: 'Live GPS Dispatch',
        detail:
          'See where every tech is in real-time. Send the nearest available crew member to the next job with one tap.',
      },
      {
        icon: Bell,
        title: 'Automated Reminders',
        detail:
          'Customers automatically receive appointment confirmations, reminders, and on-the-way notifications via text or email.',
      },
    ],
  },
  {
    heading: 'Estimates & Invoicing',
    description: 'From quote to payment in minutes, not days.',
    items: [
      {
        icon: FileText,
        title: 'Voice-to-Invoice AI',
        detail:
          'Finish a job, describe what you did, and our AI drafts a complete invoice with parts, labor, and line-item pricing.',
      },
      {
        icon: BookOpen,
        title: 'Pro-Built Price Books',
        detail:
          'Start with industry-standard pricing for electrical, HVAC, and generator work — then customize to match your business.',
      },
      {
        icon: CreditCard,
        title: 'Integrated Payments',
        detail:
          'Accept credit cards, debit, and ACH on the spot. Funds deposit in 1-2 business days. PCI-compliant and secure.',
      },
    ],
  },
  {
    heading: 'Business Management',
    description: 'Run your entire operation from one place.',
    items: [
      {
        icon: BarChart3,
        title: 'Reports & Dashboards',
        detail:
          'Revenue, job completion rates, crew utilization, average ticket size — track the metrics that matter for growth.',
      },
      {
        icon: Users,
        title: 'Customer CRM',
        detail:
          'Store customer history, equipment records, service agreements, and notes. Every tech sees the full picture before arriving.',
      },
      {
        icon: Shield,
        title: 'Customer Portal',
        detail:
          'Give customers a branded portal to view estimates, approve work, pay invoices, and track job status.',
      },
    ],
  },
  {
    heading: 'Mobile & Integrations',
    description: 'Tools that work where your crew works.',
    items: [
      {
        icon: Smartphone,
        title: 'iOS & Android Apps',
        detail:
          'Purpose-built mobile apps for field techs with intuitive navigation, photo capture, and signature collection.',
      },
      {
        icon: WifiOff,
        title: 'Offline Mode',
        detail:
          'No signal? No problem. Jobs, price books, and customer data sync automatically once you are back online.',
      },
      {
        icon: Clock,
        title: 'QuickBooks Sync',
        detail:
          'Two-way sync with QuickBooks Online keeps your books accurate without double-entry. Invoices, payments, and customers stay in sync.',
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-servicebook-navy to-[#2a5a8f] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Built for the Way You Work
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Every feature is designed by trades professionals who understand the
            daily grind of running a field service business.
          </p>
        </div>
      </section>

      {/* Feature groups */}
      {featureGroups.map((group, idx) => (
        <section
          key={group.heading}
          className={`py-20 px-4 ${idx % 2 === 0 ? 'bg-light-gray' : 'bg-white'}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-servicebook-navy mb-3">
                {group.heading}
              </h2>
              <p className="text-professional-gray">{group.description}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {group.items.map(({ icon: Icon, title, detail }) => (
                <div key={title} className="p-6 bg-white border rounded-lg shadow-sm">
                  <div className="h-12 w-12 rounded-lg bg-servicebook-bright/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-servicebook-bright" />
                  </div>
                  <h3 className="text-lg font-semibold text-servicebook-navy mb-2">
                    {title}
                  </h3>
                  <p className="text-professional-gray text-sm leading-relaxed">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-servicebook-navy text-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">See It in Action</h2>
          <p className="text-gray-300 mb-6">
            Start your 14-day free trial or schedule a personalized demo with our team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-3 bg-servicebook-bright text-white rounded-md hover:bg-servicebook-light transition font-medium"
            >
              Start Free Trial
            </Link>
            <Link
              href="/pricing"
              className="px-7 py-3 border-2 border-white/30 text-white rounded-md hover:bg-white/10 transition font-medium"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
