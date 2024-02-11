import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldValues } from "react-hook-form/dist/types/fields";
import { UseFormRegister } from "react-hook-form/dist/types/form";

interface IInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  register?: UseFormRegister<FieldValues>;
  isError: boolean;
}

const Input: React.FC<IInput> = ({ register, isError, ...props }) => (
  <input
    className={`sm:py-2 bg-white1000 text-black py-4 px-4 w-full shadow-2xl rounded-lg ${
      isError ? "placeholder-red800" : "placeholder-gray200"
    }`}
    {...props}
    {...(register && register(props.name))}
  />
);

export { Input };
