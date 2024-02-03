import { OptionServer } from "./server";
import { OptionClient } from "./client";

interface IOption {
  label: string;
  slug: string;
  isSelected: boolean;
  onClick?(): void;
  setSelectedHash(event: string): void;
}

const Option: React.FC<IOption> = ({ isSelected, ...props }) => (
  <OptionServer isSelected={isSelected}>
    <OptionClient isSelected={isSelected} {...props} />
  </OptionServer>
);

export { Option };
