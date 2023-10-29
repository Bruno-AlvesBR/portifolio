import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

import { SendGridProvider } from "@/infra/http/Providers/SendGrid";
import { Input } from "@/presentation/components/core/Input";
import { GmailIcon } from "@/assets/icons/gmail";
import { TextArea } from "@/presentation/components/core/TextArea";

const Contacts = () => {
  const [successRequest, setSuccessRequest] = useState(false);

  const validationForm = yup.object({
    name: yup.string().required("O name é obrigatório"),
    email: yup.string().email().required("O email é obrigatório"),
    message: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationForm),
  });

  const handleSubmitForm = async (event: {
    name: string;
    email: string;
    message: string;
  }) => {
    setSuccessRequest(true);

    const { name, email, message } = event;

    const sendGridProvider = new SendGridProvider();
    await sendGridProvider.sendEmail(email, name, message);
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className="relative flex flex-col gap-8 w-full h-full justify-between"
    >
      <header>
        <h2 className="text-blue800 text-8 font-bold uppercase text-center">
          Contatos
        </h2>
      </header>

      <main className="flex h-full flex-row gap-8 md:flex-wrap items-center justify-center">
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="h-full sm:px-6 items-center flex flex-col gap-6 w-full max-w-[500px] px-14 py-16 bg-white1000 shadow-md rounded-md"
        >
          <h2 className="text-4 text-center">Entre em contato comigo</h2>

          <Input
            name="name"
            register={register}
            placeholder={errors.name?.message.toString() || "Nome"}
          />
          <Input
            name="email"
            type="email"
            register={register}
            placeholder={errors.email?.message.toString() || "Email"}
          />
          <TextArea
            name="message"
            register={register}
            placeholder={errors.message?.message.toString() || "Mensagem"}
            className="min-h-[150px]"
          />

          <div className="flex flex-row items-center justify-between w-full gap-4">
            <motion.button
              {...(!successRequest && {
                whileHover: { opacity: 0.7 },
                whileTap: { scale: 0.9 },
              })}
              type="submit"
              className={`${
                successRequest ? "bg-white1000" : "bg-blue700 text-white1000"
              } w-full p-4 rounded-md font-bold`}
              disabled={successRequest}
            >
              {successRequest ? "Obrigado por entrar em contato!" : "ENVIAR"}
            </motion.button>

            <motion.a
              whileHover={{ opacity: 0.7 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:brunoph.faces12@gmail.com"
              target="_blank"
              className={
                "flex flex-row items-center justify-center gap-4 border-black box-border border-[1px] text-black1000 w-full p-4 rounded-md font-bold"
              }
            >
              <GmailIcon width={20} height={20} fill="red" color="red" />
              GMAIL
            </motion.a>
          </div>
        </form>
      </main>
    </motion.div>
  );
};

export { Contacts };
