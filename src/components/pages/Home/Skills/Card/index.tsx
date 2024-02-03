import { ChevronDownIcon } from "@/assets/icons/chevron-down";
import { ISkillsList } from "../list";
import { experienceCalc } from "@/utils/experienceCalc";

type ICard = ISkillsList;

export const Card: React.FC<ICard> = ({ label, progress, description }) => (
  <>
    <h3
      className={
        "text-center text-lg font-bold border-b-[0.5px] border-b-black1000 text-black900"
      }
    >
      {label}
    </h3>

    <p className="text-md text-black900 font-medium">
      Nível <strong className="text-blue600">{experienceCalc(progress)}</strong>{" "}
      - ({progress}%)
    </p>

    <ChevronDownIcon className="mx-auto fill-blue600" />

    <p className="text-md font-regular text-black900 font-medium">
      {description}
    </p>
  </>
);
