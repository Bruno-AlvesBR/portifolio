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

export const ContactsForm = () => {
  const [successRequest, setSuccessRequest] = useState(false);

  const validationForm = yup.object({
    name: yup.string().required("name is required*"),
    email: yup.string().email().required("e-mail is required*"),
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
      await sendGridService.sendEmail(email, name, message);
      setSuccessRequest(true);
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setSuccessRequest(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="h-full sm:px-6 items-center flex flex-col gap-6 w-full max-w-[500px] px-14 py-16 bg-white1000 shadow-md rounded-md"
    >
      <h2 className="text-5 text-center text-black900 font-normal">
        Send a message to me
      </h2>

      <Input
        name="name"
        register={register}
        placeholder={errors.name?.message.toString() || "name"}
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
        placeholder={errors.message?.message.toString() || "message"}
        className="min-h-[150px]"
      />

      <div className="flex flex-row items-center justify-between w-full gap-4">
        {successRequest && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="toast"
          >
            <div className="alert alert-info">
              <span>Thank you for contact me!</span>
            </div>
          </motion.div>
        )}

        <motion.button
          {...(!successRequest && {
            whileHover: { opacity: 0.7 },
            whileTap: { scale: 0.9 },
          })}
          type="submit"
          className={`${
            successRequest
              ? "bg-white1000 text-gray600"
              : "bg-blue700 text-white1000"
          } w-full p-4 rounded-md font-bold`}
          disabled={successRequest}
        >
          {successRequest ? "Sending..." : "SEND"}
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
          MAIL
        </motion.a>
      </div>
    </form>
  );
};
