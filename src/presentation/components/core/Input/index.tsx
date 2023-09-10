import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldValues } from "react-hook-form/dist/types/fields";
import { UseFormRegister } from "react-hook-form/dist/types/form";

interface IInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  register?: UseFormRegister<FieldValues>;
}

const Input: React.FC<IInput> = ({ register, ...props }) => (
  <input
    className="py-4 px-4 w-full shadow-2xl rounded-lg"
    {...props}
    {...(register && register(props.name))}
  />
);

export { Input };
