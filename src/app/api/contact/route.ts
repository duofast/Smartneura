import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    const { firstName, lastName, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 20px;">
            <tr>
                <td align="center">
                    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

                        <!-- Header -->
                        <tr>
                            <td style="background:linear-gradient(135deg,#0ea5e9,#6366f1);border-radius:16px 16px 0 0;padding:40px 40px 32px;text-align:center;">
                                <div style="width:56px;height:56px;background:rgba(255,255,255,0.2);border-radius:50%;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;">
                                    <span style="font-size:24px;">✉️</span>
                                </div>
                                <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:-0.5px;">
                                    New Contact Message
                                </h1>
                                <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">
                                    Received via SmartNeura Contact Form
                                </p>
                            </td>
                        </tr>

                        <!-- Body -->
                        <tr>
                            <td style="background:#ffffff;padding:40px;">

                                <!-- Sender info -->
                                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                                    <tr>
                                        <td style="padding-bottom:16px;">
                                            <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;">From</p>
                                            <p style="margin:0;font-size:20px;font-weight:700;color:#0f172a;">${firstName} ${lastName}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;">Email</p>
                                            <a href="mailto:${email}" style="margin:0;font-size:15px;color:#0ea5e9;text-decoration:none;font-weight:500;">${email}</a>
                                        </td>
                                    </tr>
                                </table>

                                <!-- Divider -->
                                <div style="height:1px;background:linear-gradient(90deg,#0ea5e9,#6366f1);margin-bottom:28px;border-radius:1px;"></div>

                                <!-- Message -->
                                <p style="margin:0 0 12px;font-size:11px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;">Message</p>
                                <div style="background:#f8fafc;border-left:4px solid #0ea5e9;border-radius:0 8px 8px 0;padding:20px 24px;">
                                    <p style="margin:0;font-size:15px;color:#334155;line-height:1.8;white-space:pre-wrap;">${message}</p>
                                </div>

                                <!-- Reply button -->
                                <div style="text-align:center;margin-top:32px;">
                                    <a href="mailto:${email}?subject=Re: Your SmartNeura Inquiry" style="display:inline-block;background:linear-gradient(135deg,#0ea5e9,#6366f1);color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:8px;font-weight:600;font-size:14px;letter-spacing:0.3px;">
                                        Reply to ${firstName}
                                    </a>
                                </div>
                            </td>
                        </tr>

                        <!-- Footer -->
                        <tr>
                            <td style="background:#f8fafc;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;border-top:1px solid #e2e8f0;">
                                <p style="margin:0 0 4px;font-size:13px;font-weight:600;color:#0f172a;">SmartNeura</p>
                                <p style="margin:0;font-size:12px;color:#94a3b8;">120 Spencer Street, Melbourne, Australia</p>
                                <p style="margin:8px 0 0;font-size:11px;color:#cbd5e1;">This message was sent via the SmartNeura contact form</p>
                            </td>
                        </tr>

                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    `;

    try {
        await transporter.sendMail({
            from: `"SmartNeura Contact" <${process.env.GMAIL_USER}>`,
            to: process.env.CONTACT_EMAIL,
            replyTo: email,
            subject: `New Contact: ${firstName} ${lastName}`,
            html,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}