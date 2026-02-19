import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle,
  ArrowRight,
  Upload,
  Settings,
  CreditCard,
  Headphones,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Switch from Jobber to ServiceBook Pros | Better Field Service Software',
  description:
    'Tired of Jobber\'s limitations? ServiceBook Pros offers AI-powered scheduling, real offline mode, and pricing built for trades pros. Switch in 48 hours.',
};

const comparisons = [
  { feature: 'AI-Powered Scheduling', jobber: false, servicebook: true },
  { feature: 'True Offline Mode', jobber: false, servicebook: true },
  { feature: 'Trade-Specific Templates', jobber: false, servicebook: true },
  { feature: 'Generator Service Tracking', jobber: false, servicebook: true },
  { feature: 'Built-in Equipment History', jobber: false, servicebook: true },
  { feature: 'Mobile-First Design', jobber: true, servicebook: true },
  { feature: 'QuickBooks Integration', jobber: true, servicebook: true },
  { feature: 'Pricing for Trades Pros', jobber: false, servicebook: true },
];

const steps = [
  {
    icon: Upload,
    title: 'Export Your Data from Jobber',
    detail:
      'We support CSV export and direct import from Jobber. Export your clients, jobs, and invoices in minutes.',
  },
  {
    icon: Settings,
    title: 'Our Team Maps Your Data',
    detail:
      'Our migration specialists map your client records, job history, and custom fields into ServiceBook Pros — no spreadsheet wrangling on your end.',
  },
  {
    icon: CreditCard,
    title: 'Import Service History & Templates',
    detail:
      'We bring over your service history and set up trade-specific templates for electrical, HVAC, or generator work.',
  },
  {
    icon: Headphones,
    title: 'Go Live in 48 Hours',
    detail:
      'Free onboarding support walks you through your first week. Your crew is up and running without missing a beat.',
  },
];

export default function SwitchFromJobberPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-servicebook-navy to-[#2a5a8f] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Switch from Jobber to ServiceBook Pros
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Jobber is built for general home services. ServiceBook Pros is built specifically for
            electricians, HVAC techs, and generator pros — with the AI tools your trade demands.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block px-7 py-3 bg-servicebook-bright text-white rounded-md hover:bg-servicebook-light transition font-medium"
            >
              Start Your Free Migration
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-servicebook-navy text-center mb-12">
            Why Trades Pros Are Leaving Jobber
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2">
                  <th className="py-3 text-servicebook-navy">Feature</th>
                  <th className="py-3 text-center text-gray-500">Jobber</th>
                  <th className="py-3 text-center text-servicebook-bright">ServiceBook Pros</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.feature} className="border-b">
                    <td className="py-3 text-professional-gray">{row.feature}</td>
                    <td className="py-3 text-center">
                      {row.jobber ? (
                        <CheckCircle className="h-5 w-5 text-gray-400 mx-auto" />
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="py-3 text-center">
                      <CheckCircle className="h-5 w-5 text-servicebook-bright mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Migration steps */}
      <section className="py-20 bg-light-gray px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-servicebook-navy text-center mb-12">
            How Migration Works
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map(({ icon: Icon, title, detail }, idx) => (
              <div key={title} className="flex gap-4 items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-servicebook-bright text-white flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-servicebook-navy mb-1">{title}</h3>
                  <p className="text-professional-gray text-sm leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-professional-gray italic leading-relaxed mb-4">
            &ldquo;I switched from Jobber after 3 years. The trade-specific templates alone saved
            me hours every week. I wish I had made the move sooner.&rdquo;
          </p>
          <p className="font-semibold text-servicebook-navy">Carlos M.</p>
          <p className="text-sm text-gray-500">Electrical Contractor, Phoenix AZ</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-servicebook-navy text-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Make the Switch?</h2>
          <p className="text-gray-300 mb-6">
            Free migration assistance included with every plan. No long-term contracts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-3 bg-servicebook-bright text-white rounded-md hover:bg-servicebook-light transition font-medium flex items-center gap-2"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="px-7 py-3 border-2 border-white/30 text-white rounded-md hover:bg-white/10 transition font-medium"
            >
              Compare Plans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
