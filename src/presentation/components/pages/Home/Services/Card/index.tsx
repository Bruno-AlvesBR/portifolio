import { ReactNode } from "react";

interface IServiceCard {
  id: number;
  name: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard: React.FC<IServiceCard> = ({
  id,
  name,
  description,
  icon,
}) => (
  <div
    key={id}
    className="relative w-full bg-white1000 flex flex-col gap-6 items-center p-6 justify-between shadow-xl rounded-md"
  >
    <span>{icon}</span>

    <h3 className="text-9 font-semibold text-blue600 text-center">{name}</h3>
    <p className="text-6 text-black800">{description}</p>
  </div>
);

export { ServiceCard };