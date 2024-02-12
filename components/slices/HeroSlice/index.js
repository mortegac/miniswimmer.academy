import { Default, NoButton, NoButtonnoDescription  } from "./variants";

export const HeroSlice = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ["default"]: Default,
    ["noButton"]: NoButton,
    ["noButtonnoDescription"]: NoButtonnoDescription,
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};
