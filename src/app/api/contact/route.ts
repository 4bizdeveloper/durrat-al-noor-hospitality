import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
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

    // Validate required fields
    if (!fullName || !email || !phone || !location || !service || !requirements) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email Body
    const mailOptions = {
      from: `"Durrat Al Noor Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL || "info@durratalnoorhospitality.com",
      replyTo: email,
      subject: `New Enquiry from ${fullName} - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0B192C; border-bottom: 2px solid #DAB672; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 180px;">Full Name:</td>
              <td style="padding: 8px 0;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Company Name:</td>
              <td style="padding: 8px 0;">${companyName || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email Address:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Service Location:</td>
              <td style="padding: 8px 0;">${location}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Preferred Start Date:</td>
              <td style="padding: 8px 0;">${startDate || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Service Required:</td>
              <td style="padding: 8px 0;">${service}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #FAF9F6; border-left: 4px solid #DAB672;">
            <h3 style="margin-top: 0; color: #0B192C;">Requirements:</h3>
            <p style="white-space: pre-wrap; margin: 0;">${requirements}</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Enquiry submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email message." },
      { status: 500 }
    );
  }
}