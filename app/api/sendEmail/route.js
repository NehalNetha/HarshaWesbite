import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  const data = { name: 'Bishal Shrestha', age: '27' };
  return NextResponse.json({ data });
}

export async function POST(request) {
  const { email, link, option, message } = await request.json();

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false,
    auth: {
      user: "lyricvideomakersdummy@gmail.com",
      pass: "nuzs etdu baeb odaw",
    },
  });

  try {
    let info = await transporter.sendMail({
      from: `"Your Website" <${"lyricvideomakersdummy@gmail.com"}>`,
      to: "Lyricvideo.submissions@gmail.com",
      subject: "New Contact Form Submission",
      text: `Email: ${email}\nLink: ${link}\nOption: ${option}\nMessage: ${message}`,
      html: `<p><strong>Email:</strong> ${email}</p>
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