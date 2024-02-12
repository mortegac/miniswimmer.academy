import { Default, NoBackground } from "./variants/default";

export const Metrics = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ["default"]: Default,
    ["noBackground"] : NoBackground,
    
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};