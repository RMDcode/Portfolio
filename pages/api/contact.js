import { mailOptions, transporter } from '@/config/nodemailer';

const handler = async (req, res) => {
  console.log('Request received:', req.body);

  if (req.method === 'POST') {
    const data = req.body;

    try {
      console.log('Sending email with transporter:', transporter);
      console.log('Mail options:', mailOptions);

      await transporter.sendMail({
        ...mailOptions,
        to: "rdhuri277@gmail.com", // You can set this dynamically
        cc:"dhurir163@gmail.com",
        subject: data.subject,
        text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nMessage:\n${data.message}`,
        html: `<h1>${data.subject}</h1><p>Username: ${data.name}<br> Useremail: ${data.email}<br> Phone: ${data.phone}<br>Message:<br>${data.message}</p>`,
      });
      
      await transporter.sendMail({
        ...mailOptions,
        to: data.email, // You can set this dynamically
        cc:"dhurir163@gmail.com",
        subject: "Message has been sent to Rohit Dhuri",
        text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nMessage:\n${data.message}`,
        html: `<h1>Hi ${data.name},</h1><br><p>Thanks for reach out to me.</p><p>I will reach out to you for ${data.subject}.</p><br><br><br>
        <p>Regards,</p><h2>Rohit Dhuri</h2>`,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.log('Error sending email:', error);
      return res.status(400).json({ message: error.message });
    }
  }

  return res.status(400).json({ message: 'Bad request' });
};

export default handler;
