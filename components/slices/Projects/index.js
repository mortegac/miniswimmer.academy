import { Default } from "./variants/default";

export const ProjectSlice = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ["default"]: Default,
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};