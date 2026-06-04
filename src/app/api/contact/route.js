import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const body = await request.json();

        const { name, phone, email, eventDate, location, guestCount, message } = body;

        if (!name || !phone || !email) {
            return Response.json({ error: 'Name, phone, and email are required.' }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'Elite Valet Website <onboarding@resend.dev>',
            to: ['info@elitecarvalet.com'],
            replyTo: email,
            subject: `New valet request from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
                    <h2>New Valet Service Request</h2>

                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Event Date:</strong> ${eventDate || 'Not provided'}</p>
                    <p><strong>Event Location:</strong> ${location || 'Not provided'}</p>
                    <p><strong>Estimated Cars / Guests:</strong> ${guestCount || 'Not provided'}</p>

                    <hr />

                    <p><strong>Message:</strong></p>
                    <p>${message || 'No message provided.'}</p>
                </div>
            `,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ success: true, data });
    } catch (error) {
        return Response.json({ error: 'Something went wrong sending the message.' }, { status: 500 });
    }
}
