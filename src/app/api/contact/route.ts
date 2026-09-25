import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      companyName,
      email,
      phone,
      location,
      startDate,
      service,
      requirements,
    } = body;

    // Field validation
    if (!fullName || !email || !phone || !location || !service || !requirements) {
      return NextResponse.json(
        { error: "Missing required form fields" },
        { status: 400 }
      );
    }

    // Configure Nodemailer with Gmail credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for port 465
      auth: {
        user: process.env.SMTP_USER || "4bizdeveloper@gmail.com",
        pass: process.env.SMTP_PASS || "bxsi tllp aglu mwgf",
      },
    });

    const recipient = process.env.RECIPIENT_EMAIL || "info@durratalnoorhospitality.com";

    // Send email
    await transporter.sendMail({
      from: `"Durrat Al Noor Website" <${process.env.SMTP_USER || "4bizdeveloper@gmail.com"}>`,
      to: recipient,
      replyTo: email,
      subject: `New Service Enquiry from ${fullName} - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #0F172A; line-height: 1.5;">
          <h2 style="color: #0B192C; border-bottom: 2px solid #DAB672; padding-bottom: 8px;">New Service Request</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Company / Property Name:</strong> ${companyName || "N/A"}</p>
          <p><strong>Email Address:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Service Location:</strong> ${location}</p>
          <p><strong>Preferred Start Date:</strong> ${startDate || "N/A"}</p>
          <p><strong>Service Required:</strong> ${service}</p>
          <div style="margin-top: 16px; background-color: #FAF9F6; padding: 12px; border-radius: 8px; border: 1px solid #E2E8F0;">
            <strong>Requirements:</strong>
            <p style="white-space: pre-wrap; margin-top: 6px;">${requirements}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Enquiry delivered successfully" });
  } catch (err: unknown) {
    const errorDetail = err instanceof Error ? err.message : String(err);
    console.error("Nodemailer SMTP Error:", errorDetail);
    return NextResponse.json(
      { error: `Mail Delivery Failed: ${errorDetail}` },
      { status: 500 }
    );
  }
}