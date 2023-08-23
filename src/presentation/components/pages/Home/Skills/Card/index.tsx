import { motion } from "framer-motion";

import { ISkillsList } from "../list";
import { experienceCalc } from "@/utils/experienceCalc";
import { ChevronDownIcon } from "@/assets/icons/chevron-down";

import { contentInfos, contentTitle } from "./styles";

interface ICard {
  skill: ISkillsList;
}

const Card: React.FC<ISkillsList> = ({ label, progress, description }) => (
  <motion.div whileHover={{ scale: 1.05 }} className={contentInfos}>
    <h3 className={contentTitle}>{label}</h3>

    <p className="text-md">
      Nível <strong className="text-blue600">{experienceCalc(progress)}</strong>{" "}
      - ({progress}%)
    </p>

    <ChevronDownIcon className="mx-auto fill-blue600" />

    <p className="text-md font-regular">{description}</p>
  </motion.div>
);

export { Card };
