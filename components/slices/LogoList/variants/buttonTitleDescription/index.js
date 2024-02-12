import { SliceFactory } from "../../../../common/Containers";
import { Description, Content } from "./defaultStyles";
import LogoListv2 from '../../../../common/LogoListv2';

const Base = (props) => {

  const { description, title } = props.primary;

  return (
    <Content>
      <h2>{title[0]?.text || ""}</h2>
      <LogoListv2 list={props.items} />
    </Content>
  );
};

export const ButtonTitleDescription = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundColor: "white",
      // borderRadius: '100%',
      // backgroundImage: "linear-gradient(188deg, #078FF1 , #33C7DA 65% )",

    }
  }
});