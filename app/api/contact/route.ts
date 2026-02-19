import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  interest?: string;
  message?: string;
  website?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Simple in-memory rate limiter: max 3 requests per IP per 15 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const maxRequests = 3;
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (record.count >= maxRequests) return false;
  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 },
      );
    }

    const body: ContactPayload = await request.json();

    // Honeypot: bots fill hidden fields, humans don't
    if (body.website) {
      return NextResponse.json({ success: true }); // silently succeed for bots
    }

    // Validate required fields
    if (!body.name || !body.name.trim()) {
      return NextResponse.json({ ok: false, error: 'Name is required.' }, { status: 400 });
    }
    if (!body.email || !isValidEmail(body.email)) {
      return NextResponse.json(
        { ok: false, error: 'A valid email address is required.' },
        { status: 400 },
      );
    }

    // Sanitize inputs
    const sanitized = {
      name: body.name.trim().slice(0, 200),
      email: body.email.trim().toLowerCase().slice(0, 200),
      company: (body.company || '').trim().slice(0, 200),
      phone: (body.phone || '').trim().slice(0, 30),
      interest: (body.interest || 'other').trim().slice(0, 50),
      message: (body.message || '').trim().slice(0, 2000),
      submittedAt: new Date().toISOString(),
    };

    console.log('[Contact Form]', JSON.stringify(sanitized));

    // Send email notification if RESEND_API_KEY is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL ?? 'hello@servicebookpros.com';
    if (resendApiKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'ServiceBook Pros Contact Form <noreply@servicebookpros.com>',
            to: [contactEmail],
            subject: `New contact form submission from ${sanitized.name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${sanitized.name}</p>
              <p><strong>Email:</strong> ${sanitized.email}</p>
              <p><strong>Company:</strong> ${sanitized.company || 'Not provided'}</p>
              <p><strong>Phone:</strong> ${sanitized.phone || 'Not provided'}</p>
              <p><strong>Interest:</strong> ${sanitized.interest || 'Not specified'}</p>
              <p><strong>Message:</strong> ${sanitized.message || 'No message'}</p>
            `,
          }),
        });
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Don't fail the request if email sending fails
      }
    }

    return NextResponse.json({ ok: true, message: 'Thanks! We will be in touch shortly.' });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Something went wrong. Please try again.' },
      { status: 500 },
    );
  }
}
