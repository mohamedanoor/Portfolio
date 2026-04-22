import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      // TODO: once you verify a domain with Resend, change this to:
      // from: "Portfolio <hello@yourdomain.com>"
      from: "Mohamed Noor <onboarding@resend.dev>",
      to: "mohamedabdikadirn@gmail.com",
      reply_to: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: 'Geist Sans', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #f8fafc;">
          <div style="background: #ffffff; border-radius: 8px; padding: 32px; border: 1px solid #e2e8f0;">
            <p style="font-size: 11px; font-family: monospace; letter-spacing: 0.1em; text-transform: uppercase; color: #2563eb; margin: 0 0 16px;">
              Portfolio — New Message
            </p>
            <h2 style="font-size: 20px; font-weight: 600; color: #0f172a; margin: 0 0 24px;">
              ${name} sent you a message
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #64748b; width: 80px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #0f172a; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #64748b;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #0f172a;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </td>
              </tr>
            </table>
            <div style="background: #f8fafc; border-left: 3px solid #2563eb; border-radius: 4px; padding: 16px 20px;">
              <p style="font-size: 13px; color: #64748b; margin: 0 0 8px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
              <p style="font-size: 15px; color: #0f172a; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="font-size: 12px; color: #94a3b8; margin: 24px 0 0;">
              Reply directly to this email to respond to ${name}.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
