import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  const data = { name: 'Bishal Shrestha', age: '27' };
  return NextResponse.json({ data });
}

export async function POST(request) {
  const { firstname, lastname, email, link, option, message } = await request.json();

  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    let info = await transporter.sendMail({
      from: `"Your Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: "New Contact Form Submission",
      text: `Email: ${email}\nLink: ${link}\nOption: ${option}\nMessage: ${message}`,
      html: `<p><strong>Firstname:</strong> ${firstname}</p>
             <p><strong>Lastname:</strong> ${lastname}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Link:</strong> ${link}</p>
             <p><strong>Option:</strong> ${option}</p>
             <p><strong>Message:</strong> ${message}</p>`
    });

    console.log("Message sent: %s", info.messageId);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
  }
}
