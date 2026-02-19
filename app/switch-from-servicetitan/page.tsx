import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle,
  ArrowRight,
  Upload,
  Settings,
  BookOpen,
  Headphones,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Switch from ServiceTitan to ServiceBook Pros | Built for Small Crews',
  description:
    'ServiceTitan built for enterprise? ServiceBook Pros gives small and mid-sized trades businesses all the power without the complexity or enterprise pricing.',
};

const comparisons = [
  { feature: 'Pricing for Small Crews', servicetitan: false, servicebook: true },
  { feature: 'Setup Time Under 48 Hours', servicetitan: false, servicebook: true },
  { feature: 'AI Scheduling', servicetitan: false, servicebook: true },
  { feature: 'True Offline Mode', servicetitan: false, servicebook: true },
  { feature: 'Trade-Specific Templates', servicetitan: true, servicebook: true },
  { feature: 'QuickBooks Integration', servicetitan: true, servicebook: true },
  { feature: 'Mobile App', servicetitan: true, servicebook: true },
  { feature: 'Dedicated Support on All Plans', servicetitan: false, servicebook: true },
];

const steps = [
  {
    icon: Upload,
    title: 'Export Your Data from ServiceTitan',
    detail:
      'Use ServiceTitan\'s built-in data export tool to pull your client records, job history, and custom fields.',
  },
  {
    icon: Settings,
    title: 'We Handle the Heavy Lifting',
    detail:
      'Our team maps your client records, job history, and templates — no enterprise onboarding consultant required.',
  },
  {
    icon: BookOpen,
    title: 'Custom Template Mapping',
    detail:
      'Our trade specialists configure your templates for electrical, HVAC, or generator work so your crew can start immediately.',
  },
  {
    icon: Headphones,
    title: 'Go Live in 48 Hours or Less',
    detail:
      'Dedicated onboarding support on every plan. No enterprise contracts, no six-figure setup fees — just a smooth handoff.',
  },
];

export default function SwitchFromServiceTitanPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-servicebook-navy to-[#2a5a8f] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Switch from ServiceTitan to ServiceBook Pros
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            ServiceTitan is built for large enterprises. ServiceBook Pros delivers
            enterprise-grade features at pricing that works for crews of 1 to 20 — no bloat,
            no six-figure contracts.
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
            Enterprise Power, Small-Crew Pricing
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2">
                  <th className="py-3 text-servicebook-navy">Feature</th>
                  <th className="py-3 text-center text-gray-500">ServiceTitan</th>
                  <th className="py-3 text-center text-servicebook-bright">ServiceBook Pros</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.feature} className="border-b">
                    <td className="py-3 text-professional-gray">{row.feature}</td>
                    <td className="py-3 text-center">
                      {row.servicetitan ? (
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
            &ldquo;We were paying $800/month for ServiceTitan features we barely used. ServiceBook
            Pros does everything we need at a fraction of the cost.&rdquo;
          </p>
          <p className="font-semibold text-servicebook-navy">Dave H.</p>
          <p className="text-sm text-gray-500">HVAC Owner, Nashville TN</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-servicebook-navy text-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Right-Size Your Software?</h2>
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
