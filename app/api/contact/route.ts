import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  interest?: string;
  message?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const data: ContactPayload = await req.json();

    // Validate required fields
    if (!data.name || !data.name.trim()) {
      return NextResponse.json({ ok: false, error: 'Name is required.' }, { status: 400 });
    }
    if (!data.email || !isValidEmail(data.email)) {
      return NextResponse.json(
        { ok: false, error: 'A valid email address is required.' },
        { status: 400 },
      );
    }

    // Sanitize inputs
    const sanitized = {
      name: data.name.trim().slice(0, 200),
      email: data.email.trim().toLowerCase().slice(0, 200),
      company: (data.company || '').trim().slice(0, 200),
      phone: (data.phone || '').trim().slice(0, 30),
      interest: (data.interest || 'other').trim().slice(0, 50),
      message: (data.message || '').trim().slice(0, 2000),
      submittedAt: new Date().toISOString(),
    };

    // Log the submission (replace with your email / CRM integration)
    console.log('[Contact Form]', JSON.stringify(sanitized));

    // TODO: integrate with email provider (e.g. SendGrid, Resend) or CRM (e.g. HubSpot)
    // Example:
    // await sendEmail({ to: 'hello@servicebookpros.com', subject: `New lead: ${sanitized.name}`, body: sanitized });

    return NextResponse.json({ ok: true, message: 'Thanks! We will be in touch shortly.' });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Something went wrong. Please try again.' },
      { status: 500 },
    );
  }
}
