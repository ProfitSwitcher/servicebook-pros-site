import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — ServiceBook Pros',
  description: 'Terms and conditions for using the ServiceBook Pros platform.',
};

export default function TermsPage() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-servicebook-navy mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: January 1, 2025</p>

        <div className="space-y-8 text-professional-gray leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-servicebook-navy mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using ServiceBook Pros (&ldquo;the Service&rdquo;), you agree to be
              bound by these Terms of Service. If you do not agree to these terms, do not use the
              Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-servicebook-navy mb-3">2. Description of Service</h2>
            <p>
              ServiceBook Pros is a field service management platform that provides scheduling,
              dispatch, invoicing, payment processing, and business management tools for trades
              professionals. The Service is provided on a subscription basis.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-servicebook-navy mb-3">3. Account Registration</h2>
            <p>
              You must provide accurate and complete information when creating an account. You are
              responsible for maintaining the security of your account credentials and for all
              activity that occurs under your account.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-servicebook-navy mb-3">4. Subscription & Billing</h2>
            <p>
              Paid plans are billed monthly or annually as selected during sign-up. All fees are
              non-refundable except as required by law. We reserve the right to change pricing with
              30 days&apos; written notice. Your subscription renews automatically unless cancelled
              before the renewal date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-servicebook-navy mb-3">5. Free Trial</h2>
            <p>
              New accounts receive a 14-day free trial. No payment information is required to start
              a trial. At the end of the trial period, you may choose a paid plan or your account
              will be paused. Your data will be retained for 90 days after a trial expires.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-servicebook-navy mb-3">6. Acceptable Use</h2>
            <p>
              You agree not to use the Service for any unlawful purpose or in any way that could
              damage, disable, or impair the Service. You may not attempt to gain unauthorized
              access to any part of the Service, other accounts, or related systems.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-servicebook-navy mb-3">7. Intellectual Property</h2>
            <p>
              The Service, its original content, features, and functionality are owned by
              ServiceBook Pros and protected by intellectual property laws. You retain ownership of
              any data you input into the Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-servicebook-navy mb-3">8. Data Ownership</h2>
            <p>
              You own all customer data, job records, invoices, and other business data you create
              within the Service. You may export your data at any time. Upon account termination, we
              retain your data for 90 days before permanent deletion.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-servicebook-navy mb-3">9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, ServiceBook Pros shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages resulting from your
              use of the Service. Our total liability shall not exceed the amount you paid us in the
              12 months preceding the claim.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-servicebook-navy mb-3">10. Termination</h2>
            <p>
              Either party may terminate this agreement at any time. You may cancel your
              subscription through your account settings. We may suspend or terminate your account
              if you violate these terms, with notice when reasonably possible.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-servicebook-navy mb-3">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify you of material
              changes via email or a notice within the Service. Continued use of the Service after
              changes take effect constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-servicebook-navy mb-3">12. Contact</h2>
            <p>
              Questions about these Terms of Service may be directed to legal@servicebookpros.com or
              by mail to ServiceBook Pros, Austin, TX.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
