import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  service: "Gmail", // use your email service
  auth: {
    user: "rdhuri277@gmail.com", // your email
    pass: "mbeflexfqrdgkunu", // your email password
  },
});

const mailOptions = {
  from: "rdhuri277@gmail.com", // sender address
  to: "rdhuri277@gmail.com", // list of receivers
  cc:"dhurir163@gmail.com",
};

export { transporter, mailOptions };
