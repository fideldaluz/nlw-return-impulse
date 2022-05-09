import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "56ff14c87dbd1e",
    pass: "86f44a444bb94a"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feeget <oi@feedget.com>",
      to: "Fidel da Luz <fideldaluz@gmail.com>",
      subject,
      html: body
    });

  };
}