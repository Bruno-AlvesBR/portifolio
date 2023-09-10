import sendgrid from "@sendgrid/mail";
import mustache from "mustache";
import template from "../../../public/email";
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

import { NextApiRequest, NextApiResponse } from "next";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { email, name, message } = req.body;

  try {
    if (!email) throw new Error();

    const htmlOutput = mustache.render(template, {
      title: `Nova mensagem de ${name || "Sistema"}.`,
      message: message || "Nenhuma mensagem enviada!",
      email,
      name: name || "Sistema",
    });

    await sendgrid.send({
      to: process.env.DEFAULT_EMAIL,
      from: process.env.DEFAULT_EMAIL,
      subject: "Contato - Portifólio",
      html: htmlOutput,
    });
  } catch (error) {
    const htmlOutput = mustache.render(template, {
      title: "FALHA! Alguém tentou entrar em contato!",
      message,
      email: email || "sistema@gmail.com",
      name: name || "Sistema",
    });

    await sendgrid.send({
      to: process.env.DEFAULT_EMAIL,
      from: process.env.DEFAULT_EMAIL,
      subject: "Contato - Portifólio",
      html: htmlOutput,
    });

    return res.status(error.statusCode || 500).json({ error: error.message });
  }
};
