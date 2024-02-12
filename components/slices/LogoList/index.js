import { Default, OnlyLogosBg, ButtonTitleDescription } from "./variants";

export const LogoList = ({ slice }) => {
  const { variation } = slice;



  const typeOfComponents = {
    ["default"]: Default,
    ["onlyLogosBg"]: OnlyLogosBg,
    ["buttonTitleDescription"]: ButtonTitleDescription,

  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return (
    <>
      <TypeOfVariants {...slice} />

    </>
  )
};