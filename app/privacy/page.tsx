import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — ServiceBook Pros',
  description: 'How ServiceBook Pros collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-servicebook-navy mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: January 1, 2025</p>

        <div className="space-y-8 text-professional-gray leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-servicebook-navy mb-3">1. Information We Collect</h2>
            <p>
              When you use ServiceBook Pros, we may collect personal information such as your name,
              email address, phone number, company name, and billing details. We also collect usage
              data including device information, IP address, and interaction patterns within the
              application.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-servicebook-navy mb-3">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide and improve our services, process
              transactions, communicate with you about your account, send service-related
              notifications, and respond to your requests. We may also use aggregated, anonymized
              data to analyze usage trends and improve our product.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-servicebook-navy mb-3">3. Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share data with trusted third-party
              service providers who assist us in operating our platform (e.g., payment processors,
              cloud hosting, email delivery), subject to confidentiality agreements. We may also
              disclose information if required by law or to protect our rights.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-servicebook-navy mb-3">4. Data Security</h2>
            <p>
              We implement industry-standard security measures including encryption in transit
              (TLS/SSL), encryption at rest, access controls, and regular security audits. While no
              system is completely secure, we take reasonable steps to protect your information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-servicebook-navy mb-3">5. Data Retention</h2>
            <p>
              We retain your personal data for as long as your account is active or as needed to
              provide our services. If you cancel your account, we retain your data for 90 days
              before permanent deletion, unless a longer retention period is required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-servicebook-navy mb-3">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You may
              also request a copy of your data in a portable format. To exercise these rights,
              contact us at privacy@servicebookpros.com.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-servicebook-navy mb-3">7. Cookies</h2>
            <p>
              We use cookies and similar technologies to maintain session state, remember your
              preferences, and understand how you use our platform. You can manage cookie preferences
              through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-servicebook-navy mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material
              changes by posting the updated policy on our website and updating the &ldquo;Last
              updated&rdquo; date above.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-servicebook-navy mb-3">9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at
              privacy@servicebookpros.com or write to us at ServiceBook Pros, Austin, TX.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
