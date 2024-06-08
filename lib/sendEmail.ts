import nodemailer from "nodemailer";

export const sendEmail = async (email: string, title: string, body: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: "Developer Choudhary",
      to: email,
      subject: title,
      html: body,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
