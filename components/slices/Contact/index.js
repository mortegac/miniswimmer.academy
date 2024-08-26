import { Default, CotizarForm, Enroll } from "./variants";

export const ContactSlice = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ["default"]: Default,
    ["cotizarForm"]: CotizarForm,
    ["enroll"]: Enroll,
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};