import { SliceFactory } from "../../../../common/Containers";
import { Description, Content, ImgHolder } from "./defaultStyles";
import { RichText } from "prismic-reactjs";
import LogoList from '../../../../common/LogoList';

const Base = (props) => {

  const { description, title } = props.primary;

  return (
    <Content>
      <Description>
        {title[0]?.text ? RichText.render(title) : <h2>Title</h2>}
        {description[0]?.text ? (
          RichText.render(description)
        ) : (
          <></>
        )}
      </Description>
      <LogoList list={props.items} />
    </Content>
  );
};

export const Default = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundColor: "white",
      // borderRadius: '100%',
      // backgroundImage: "linear-gradient(188deg, #078FF1 , #33C7DA 65% )",

    }
  }
});