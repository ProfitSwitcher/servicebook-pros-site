'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@servicebookpros.com' },
  { icon: Phone, label: 'Phone', value: '(512) 555-0199' },
  { icon: MapPin, label: 'Office', value: 'Austin, TX' },
];

type FormState = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: 'demo',
    message: '',
  });
  const [state, setState] = useState<FormState>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setState('sent');
      setForm({ name: '', email: '', company: '', phone: '', interest: 'demo', message: '' });
    } catch {
      setState('error');
    }
  };

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-servicebook-navy to-[#2a5a8f] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Have a question, want a demo, or ready to start your free trial? We would love to hear
            from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-light-gray px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Contact info sidebar */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-servicebook-navy mb-4">
                Contact Information
              </h2>
              <p className="text-professional-gray mb-6">
                Reach out anytime. Our team typically responds within a few hours during business
                days.
              </p>
            </div>
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-servicebook-bright/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-servicebook-bright" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{label}</p>
                  <p className="text-servicebook-navy font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg border shadow-sm space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-servicebook-navy mb-1">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-servicebook-bright/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-servicebook-navy mb-1">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-servicebook-bright/50"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-servicebook-navy mb-1">
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-servicebook-bright/50"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-servicebook-navy mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-servicebook-bright/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-servicebook-navy mb-1">
                  What are you interested in?
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-servicebook-bright/50 bg-white"
                >
                  <option value="demo">Schedule a Demo</option>
                  <option value="trial">Start a Free Trial</option>
                  <option value="switch">Switch from Another Tool</option>
                  <option value="support">Support Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-servicebook-navy mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-servicebook-bright/50 resize-none"
                  placeholder="Tell us about your business and how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={state === 'sending'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-servicebook-bright text-white rounded-md hover:bg-servicebook-light transition font-medium disabled:opacity-60"
              >
                {state === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </button>

              {state === 'sent' && (
                <p className="text-green-600 text-center font-medium">
                  Thanks! We will be in touch shortly.
                </p>
              )}
              {state === 'error' && (
                <p className="text-red-600 text-center font-medium">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
