import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  {
    heading: 'Product',
    links: [
      { href: '/features', label: 'Features' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/switch-from-housecall-pro', label: 'Switch from Housecall Pro' },
      { href: '/switch-from-jobber', label: 'Switch from Jobber' },
      { href: '/switch-from-servicetitan', label: 'Switch from ServiceTitan' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-servicebook-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/brand/servicebook-icon.png"
                alt="ServiceBook Pros"
                width={32}
                height={32}
              />
              <span className="font-semibold text-lg">ServiceBook Pros</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              AI-first field service management built by and for trades professionals.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 className="font-semibold mb-3">{group.heading}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-servicebook-light transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} ServiceBook Pros. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Made for electricians, HVAC, and generator pros.
          </p>
        </div>
      </div>
    </footer>
  );
}
