import { Default, CotizarForm } from "./variants";

export const ContactSlice = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ["default"]: Default,
    ["cotizarForm"]: CotizarForm,
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};