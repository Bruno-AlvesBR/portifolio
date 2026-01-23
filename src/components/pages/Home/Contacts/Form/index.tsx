"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { useState } from "react";
import * as yup from "yup";

import { SendgridService } from "@/services/sendgrid";
import { Input } from "@/components/core/Input";
import { TextArea } from "@/components/core/TextArea";
import { GmailIcon } from "@/assets/icons/gmail";
import { LinkedinIcon } from "@/assets/icons/linkedin";

export const ContactsForm = () => {
  const [isLoadingRequest, setIsLoadingRequest] = useState(false);
  const [isSuccessfullRequest, setIsSuccessfullRequest] = useState(false);

  const validationForm = yup.object({
    name: yup.string().required("nome é obrigatório*"),
    email: yup.string().email().required("e-mail é obrigatório*"),
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
    const { name, email, message } = event;

    const sendGridService = new SendgridService();

    try {
      setIsLoadingRequest(true);

      await sendGridService.sendEmail(email, name, message);
      setIsSuccessfullRequest(true);
    } finally {
      setIsLoadingRequest(false);

      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsSuccessfullRequest(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="h-fit sm:px-6 sm:py-6 sm:gap-4 items-center flex flex-col gap-6 w-full max-w-[500px] px-8 py-10 bg-black/10 border-[1px] border-white/10 rounded-md"
    >
      <h2 className="sm:text-4 text-5 text-center text-white font-normal">
        Envie uma mensagem
      </h2>

      <Input
        name="name"
        register={register}
        placeholder={errors.name?.message.toString() || "nome"}
        isError={!!errors.name?.message}
      />
      <Input
        name="email"
        type="email"
        register={register}
        placeholder={errors.email?.message.toString() || "e-mail"}
        isError={!!errors.email?.message}
      />
      <TextArea
        name="message"
        register={register}
        placeholder={errors.message?.message.toString() || "mensagem"}
        className="min-h-[150px]"
      />

      {isSuccessfullRequest && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="toast"
        >
          <div className="alert alert-info">
            <span>Obrigado por entrar em contato!</span>
          </div>
        </motion.div>
      )}

      <motion.button
        {...(!isLoadingRequest && {
          whileHover: { opacity: 0.7 },
          whileTap: { scale: 0.9 },
        })}
        type="submit"
        className={`${
          isLoadingRequest
            ? "bg-white1000 text-gray600"
            : "bg-blue700 text-white1000"
        } w-full p-4 rounded-md font-bold sm:py-2 sm:text-4 sm:font-medium`}
        disabled={isLoadingRequest}
      >
        {isLoadingRequest ? "Enviando..." : "ENVIAR"}
      </motion.button>

      <div className="sm:flex-row flex-row flex items-center justify-between w-full gap-4">
        <motion.a
          whileHover={{ opacity: 0.7 }}
          whileTap={{ scale: 0.9 }}
          href="mailto:brunoph.faces12@gmail.com"
          target="_blank"
          className={
            "flex sm:py-2 flex-row items-center justify-center gap-4 border-gray100 box-border bg-transparent border-[1px] w-full p-4 rounded-md"
          }
        >
          <GmailIcon width={20} height={20} fill="red" color="red" />
          <p className="sm:hidden text-white font-bold">E-MAIL</p>
        </motion.a>
        <motion.a
          whileHover={{ opacity: 0.7 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/bruno-alvesbr/"
          target="_blank"
          className={
            "flex sm:py-2 flex-row items-center justify-center gap-4 border-gray100 box-border bg-transparent border-[1px] w-full p-4 rounded-md"
          }
        >
          <LinkedinIcon width={20} height={20} />
          <p className="sm:hidden text-white font-bold">LINKEDIN</p>
        </motion.a>
      </div>
    </form>
  );
};
