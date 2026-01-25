import { NextResponse } from 'next/server';
import validator from 'validator';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    let { name, email, telefon, nachricht } = body;

    // Sanitize and validate inputs
    name = validator.escape(name || '').trim();
    email = validator.normalizeEmail(email || '') || '';
    telefon = validator.escape(telefon || '').trim();
    nachricht = validator.escape(nachricht || '').trim();

    if (!name || !email || !nachricht) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Validate email
    if (!validator.isEmail(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const CONTACT_TO = process.env.CONTACT_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@mira-technikwelt.de';

    // SMTP config required in env
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json({ error: 'SMTP not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in your environment.' }, { status: 500 });
    }

    // Dynamic import of nodemailer so the app doesn't crash if it's not installed yet
    const nodemailer = await import('nodemailer');

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const subject = `Neue Kontaktanfrage von ${name}`;
    const text = `Name: ${name}\nE-Mail: ${email}\nTelefon: ${telefon || '-'}\n\nNachricht:\n${nachricht}`;
    const html = `<p><strong>Name:</strong> ${name}</p>
                  <p><strong>E-Mail:</strong> ${email}</p>
                  <p><strong>Telefon:</strong> ${telefon || '-'}</p>
                  <hr />
                  <p>${nachricht.replace(/\n/g, '<br/>')}</p>`;

    await transporter.sendMail({
      from: `${name} <${SMTP_USER}>`,
      to: CONTACT_TO,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error('Error in /api/contact:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
