import { sendEmail } from '../../lib/mailgun';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { to, subject, text } = req.body;

    try {
      await sendEmail({
        from: `Your Company <${process.env.MAILGUN_FROM_EMAIL}>`,
        to,
        subject,
        text,
      });
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}