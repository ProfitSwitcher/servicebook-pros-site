import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing — ServiceBook Pros',
  description:
    'Simple, transparent pricing for solo operators and growing teams. Start free for 14 days.',
};

const tiers = [
  {
    name: 'Starter',
    price: '$59',
    period: '/mo',
    description: 'For solo operators ready to level up.',
    highlight: false,
    features: [
      '1 user included',
      'Scheduling & dispatch',
      'Estimates & invoices',
      'Voice-to-invoice AI',
      'Basic reports',
      'Mobile app (iOS & Android)',
      'Offline mode',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/mo',
    description: 'For growing teams that need more power.',
    highlight: true,
    features: [
      'Up to 5 users',
      'Everything in Starter, plus:',
      'GPS & time tracking',
      'Pro price books & proposals',
      'QuickBooks Online sync',
      'Customer portal',
      'Advanced reports',
      'Priority support',
    ],
  },
  {
    name: 'Growth',
    price: '$299',
    period: '/mo',
    description: 'For established crews wanting all the tools.',
    highlight: false,
    features: [
      'Up to 8 users',
      'Everything in Pro, plus:',
      'Custom dashboards & reports',
      'Dedicated onboarding specialist',
      'Service agreements & recurring jobs',
      'API access',
      'All add-ons included',
      'Phone & chat support',
    ],
  },
];

const addOns = [
  { name: 'Additional user', price: '$25/mo per user' },
  { name: 'QuickBooks sync (Starter)', price: '$19/mo' },
  { name: 'SMS notifications bundle', price: '$15/mo' },
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-servicebook-navy to-[#2a5a8f] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            No hidden fees. No long-term contracts. Start with a 14-day free trial on any plan.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20 bg-light-gray px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col justify-between p-8 rounded-lg shadow-sm border transition hover:shadow-md ${
                tier.highlight
                  ? 'bg-white border-servicebook-bright border-2 relative'
                  : 'bg-white'
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-servicebook-bright text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className="text-2xl font-bold text-servicebook-navy mb-1">
                  {tier.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-servicebook-navy">
                    {tier.price}
                  </span>
                  <span className="text-professional-gray">{tier.period}</span>
                </div>
                <p className="text-professional-gray mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-servicebook-bright mt-0.5 flex-shrink-0" />
                      <span className="text-professional-gray text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className={`block text-center px-4 py-3 rounded-md transition font-medium ${
                  tier.highlight
                    ? 'bg-servicebook-bright text-white hover:bg-servicebook-light'
                    : 'border-2 border-servicebook-bright text-servicebook-bright hover:bg-servicebook-bright hover:text-white'
                }`}
              >
                Start Free Trial
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-servicebook-navy text-center mb-8">
            Optional Add-Ons
          </h2>
          <div className="space-y-4">
            {addOns.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center p-4 bg-light-gray rounded-lg"
              >
                <span className="text-professional-gray font-medium">{item.name}</span>
                <span className="text-servicebook-navy font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-light-gray px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-servicebook-navy text-center mb-8">
            Pricing Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I switch plans later?',
                a: 'Yes. Upgrade or downgrade at any time. Changes take effect on your next billing cycle.',
              },
              {
                q: 'Do I need a credit card to start?',
                a: 'No. Your 14-day trial is completely free — no payment info required.',
              },
              {
                q: 'What happens after my trial?',
                a: 'You can choose a paid plan to keep going, or your account pauses with no charge. Your data stays safe for 90 days.',
              },
              {
                q: 'Do you offer annual billing?',
                a: 'Yes. Pay annually and save 15% on any plan. Contact us for details.',
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b pb-6">
                <h3 className="text-lg font-semibold text-servicebook-navy mb-2">
                  {faq.q}
                </h3>
                <p className="text-professional-gray">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-servicebook-navy text-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-gray-300 mb-6">
            Talk to our team — we will help you pick the right plan for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-7 py-3 bg-servicebook-bright text-white rounded-md hover:bg-servicebook-light transition font-medium"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
