import Link from 'next/link';
import Image from 'next/image';
import {
  CalendarCheck,
  FileText,
  BookOpen,
  CreditCard,
  WifiOff,
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Zap,
  Shield,
} from 'lucide-react';

export const metadata = {
  title: 'ServiceBook Pros — Field Service Management for Trades Pros',
  description:
    'AI-powered scheduling, invoicing, and job management built for electricians, HVAC techs, and generator pros. Start your free trial today.',
};

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
  {
    icon: Shield,
    title: 'Customer Portal',
    description:
      'Give customers a branded portal to approve estimates, pay invoices, and track job progress.',
  },
];

const stats = [
  { value: '2,500+', label: 'Active Pros' },
  { value: '98%', label: 'Uptime' },
  { value: '45min', label: 'Avg. Time Saved/Day' },
  { value: '4.9/5', label: 'App Rating' },
];

const testimonials = [
  {
    name: 'Mike R.',
    role: 'Electrician, Dallas TX',
    quote:
      'ServiceBook Pros cut our invoicing time in half. The voice-to-invoice feature alone is worth the subscription.',
    stars: 5,
  },
  {
    name: 'Sarah K.',
    role: 'HVAC Business Owner, Denver CO',
    quote:
      'Switching from Housecall Pro was painless. The price books already had everything we needed from day one.',
    stars: 5,
  },
  {
    name: 'James T.',
    role: 'Generator Installer, Atlanta GA',
    quote:
      'Finally software that understands our trade. Offline mode is a game-changer when we\'re on rural job sites.',
    stars: 5,
  },
];

const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'Yes — every plan comes with a 14-day free trial. No credit card required to start.',
  },
  {
    q: 'Can I import data from another FSM tool?',
    a: 'Absolutely. We have one-click importers for Housecall Pro, Jobber, ServiceTitan, and CSV files.',
  },
  {
    q: 'Does it work offline?',
    a: 'Yes. Our mobile app stores jobs, customer info, and price books locally so you can work without cell service.',
  },
  {
    q: 'How does voice-to-invoice work?',
    a: 'Just talk through the job details after a service call. Our AI creates a draft invoice with line items, labor, and materials — ready for review and send.',
  },
  {
    q: 'Is QuickBooks sync included?',
    a: 'QuickBooks Online sync is included in the Pro and Growth plans. Starter plan users can add it for $19/mo.',
  },
];

export default function Page() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-servicebook-navy to-[#2a5a8f] text-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-servicebook-light font-medium mb-3 tracking-wide uppercase text-sm">
              Built by tradespeople, for tradespeople
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI-First Field Service Management
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Schedule, dispatch, invoice, and get paid — all from one app. Designed for
              electricians, HVAC technicians, and generator pros.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-7 py-3 bg-servicebook-bright text-white rounded-md hover:bg-servicebook-light transition font-medium"
              >
                Start Free Trial
              </Link>
              <Link
                href="/features"
                className="px-7 py-3 border-2 border-white/30 text-white rounded-md hover:bg-white/10 transition font-medium flex items-center gap-2"
              >
                Explore Features <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/brand/servicebook_logo_full.png"
              alt="ServiceBook Pros"
              width={512}
              height={256}
              className="max-h-64 w-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Social proof stats */}
      <section className="bg-white py-12 px-4 border-b">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-servicebook-navy">{stat.value}</p>
              <p className="text-sm text-professional-gray mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features overview */}
      <section className="py-20 bg-light-gray px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-servicebook-navy mb-4">
              Everything You Need to Run Your Business
            </h2>
            <p className="text-professional-gray max-w-2xl mx-auto">
              From scheduling to payments, ServiceBook Pros gives you all the tools to manage jobs,
              crews, and customers — without the bloat.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="h-12 w-12 rounded-lg bg-servicebook-bright/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-servicebook-bright" />
                </div>
                <h3 className="text-xl font-semibold text-servicebook-navy mb-2">{title}</h3>
                <p className="text-professional-gray">{description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-servicebook-bright hover:text-servicebook-navy font-medium transition"
            >
              See all features <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-servicebook-navy text-center mb-14">
            Trusted by Pros Across the Country
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-6 bg-light-gray rounded-lg border"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-professional-gray mb-4 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-servicebook-navy">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-light-gray px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-servicebook-navy text-center mb-14">
            Up and Running in 3 Steps
          </h2>
          <div className="space-y-8">
            {[
              {
                step: '1',
                icon: Users,
                title: 'Sign Up & Import',
                desc: 'Create your account and import customers, jobs, and price books from your existing tool — or start fresh.',
              },
              {
                step: '2',
                icon: Zap,
                title: 'Customize & Go',
                desc: 'Set up your crew, service areas, and notification preferences. The app adapts to how you already work.',
              },
              {
                step: '3',
                icon: CreditCard,
                title: 'Schedule, Invoice & Get Paid',
                desc: 'Start dispatching jobs, generating invoices with AI, and collecting payments — all from one dashboard.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-servicebook-bright text-white flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-servicebook-navy mb-1">{item.title}</h3>
                  <p className="text-professional-gray">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-servicebook-navy text-center mb-14">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b pb-6">
                <h3 className="text-lg font-semibold text-servicebook-navy mb-2">{faq.q}</h3>
                <p className="text-professional-gray">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-servicebook-navy to-[#2a5a8f] text-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Business?</h2>
          <p className="text-gray-200 mb-8 text-lg">
            Join thousands of trades professionals who run their business on ServiceBook Pros.
            Start your 14-day free trial today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-servicebook-bright text-white rounded-md hover:bg-servicebook-light transition font-medium"
            >
              Start Free Trial
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-md hover:bg-white/10 transition font-medium"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
