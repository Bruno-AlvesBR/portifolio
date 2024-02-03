import { NextRequest } from "next/server";
import sendgrid from "@sendgrid/mail";
import mustache from "mustache";

import template from "../../../../public/email";
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, name, message } = body;

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

    return new Response("Success!", { status: 200 });
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

    return new Response("Failure!", { status: 500 });
  }
}
