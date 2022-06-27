// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

type Data = {
  success: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const {
      name,
      email,
      message,
    }: { name: string; email: string; message: string } = req.body;

    const msg = `Name: ${name}\r\n Email: ${email}\r\n Message: ${message}`;

    const data = {
      to: "josesansalt@gmail.com",
      from: "sendgrid@joseschz.com",
      subject: "New Message from Contact Form",
      text: msg,
      html: msg.replace(/\r\n/g, "<br>"),
    };

    try {
      sgMail.send(data);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ success: false });
    }
  }
}
