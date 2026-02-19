import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="py-32 px-4 text-center">
      <div className="max-w-lg mx-auto">
        <p className="text-6xl font-bold text-servicebook-bright mb-4">404</p>
        <h1 className="text-2xl font-bold text-servicebook-navy mb-4">Page Not Found</h1>
        <p className="text-professional-gray mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-servicebook-bright text-white rounded-md hover:bg-servicebook-light transition font-medium"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border-2 border-servicebook-bright text-servicebook-bright rounded-md hover:bg-servicebook-bright hover:text-white transition font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
