import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { SendGridProvider } from "@/infra/http/Providers/SendGrid";
import { Input } from "@/presentation/components/core/Input";

const Contacts = () => {
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
          className="sm:px-6 items-center flex flex-col gap-6 w-full max-w-[500px] px-14 py-16 bg-white1000 shadow-md rounded-md"
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
          <Input
            name="message"
            register={register}
            placeholder={errors.message?.message.toString() || "Mensagem"}
          />

          <motion.button
            whileHover={{ opacity: 0.7 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="bg-blue700 w-full p-4 rounded-md text-white1000 font-bold"
          >
            ENVIAR
          </motion.button>
        </form>
      </main>
    </motion.div>
  );
};

export { Contacts };
