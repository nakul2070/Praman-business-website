import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(req: Request) {
    const data = await req.json();
    const { name, email, company, phone, message } = data;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.verify();

        // Email to company
await transporter.sendMail({
    from: `"Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: 'New Contact Form Submission Received',
    html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
            <h2 style="color:#000000;">New Contact Inquiry</h2>
            <p>Dear Team,</p>
            <p>You have received a new inquiry via the website contact form. Below are the details:</p>
            
            <table cellpadding="6" cellspacing="0" border="1" style="border-collapse: collapse; font-size: 14px;">
                <tr>
                    <td><strong>Name</strong></td>
                    <td>${name}</td>
                </tr>
                <tr>
                    <td><strong>Email</strong></td>
                    <td>${email}</td>
                </tr>
                <tr>
                    <td><strong>Company</strong></td>
                    <td>${company || 'N/A'}</td>
                </tr>
                <tr>
                    <td><strong>Phone</strong></td>
                    <td>${phone || 'N/A'}</td>
                </tr>
                <tr>
                    <td><strong>Message</strong></td>
                    <td>${message}</td>
                </tr>
            </table>

            <p>Please respond to this inquiry at your earliest convenience.</p>
            <p>Regards,<br/>Website Contact System<br/><strong>Praman Engineering</strong></p>
        </div>
    `,
});


        // Email to user
        await transporter.sendMail({
            from: `"Praman Engineering" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Thank you for contacting Praman Engineering',
            html: `
                <p>Dear ${name},</p>
                <p>Thank you for reaching out to us.</p>
                <p>We have received your message and our team will get back to you shortly.</p>
                <br/>
                <p>Best regards,<br/>Praman Engineering Team</p>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : 'Unknown error';
    console.error('Email error:', errMsg);
    return NextResponse.json({ success: false, error: errMsg }, { status: 500 });
}
}
