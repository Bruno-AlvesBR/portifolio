import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { FieldValues } from "react-hook-form/dist/types/fields";
import { UseFormRegister } from "react-hook-form/dist/types/form";

interface ITextArea
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  register?: UseFormRegister<FieldValues>;
}

const TextArea: React.FC<ITextArea> = ({ register, className, ...props }) => (
  <textarea
    className={`bg-white1000 py-4 px-4 w-full shadow-2xl rounded-lg h-full resize-none text-black placeholder-gray200 ${className}`}
    {...props}
    {...(register && register(props.name))}
  />
);

export { TextArea };