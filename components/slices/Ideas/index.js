import { Default, NoButton } from "./variants";

export const IdeasSlice = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ["default"]: Default,
    ["noButton"]: NoButton,
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};