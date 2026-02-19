'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/switch-from-housecall-pro', label: 'Switch' },
  { href: '/contact', label: 'Contact' },
];

function isActive(pathname: string, href: string): boolean {
  if (href.startsWith('/switch-from')) return pathname.startsWith('/switch-from');
  return pathname === href;
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/servicebook-icon.png"
            alt="ServiceBook Pros logo"
            width={32}
            height={32}
            priority
          />
          <span className="font-semibold text-servicebook-navy text-xl">
            ServiceBook Pros
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={
                  active
                    ? 'text-servicebook-bright font-semibold border-b-2 border-servicebook-bright'
                    : 'text-professional-gray hover:text-servicebook-navy transition'
                }
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://servicebook-pros-dashboard.vercel.app"
            className="text-professional-gray hover:text-servicebook-navy transition"
          >
            Log In
          </a>
          <Link
            href="/contact"
            className="px-5 py-2 bg-servicebook-bright text-white rounded-md hover:bg-servicebook-light transition"
          >
            Get a Demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-servicebook-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-6 pb-4 space-y-3">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={
                  active
                    ? 'block text-servicebook-bright font-semibold py-1'
                    : 'block text-servicebook-navy hover:text-servicebook-bright transition py-1'
                }
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://servicebook-pros-dashboard.vercel.app"
            className="block text-servicebook-navy hover:text-servicebook-bright transition py-1"
            onClick={() => setMobileOpen(false)}
          >
            Log In
          </a>
          <Link
            href="/contact"
            className="block text-center px-5 py-2 bg-servicebook-bright text-white rounded-md hover:bg-servicebook-light transition"
            onClick={() => setMobileOpen(false)}
          >
            Get a Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
