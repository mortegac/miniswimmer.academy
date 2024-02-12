import { SliceFactory } from "../../../../common/Containers";
import { Description, Content } from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";

const Base = slice => {
  const { tittle, subtittle, bgColorInitial, bgColorEnd } = slice.primary;

  return (
    <Content>
      <Description>
        {subtittle[0]?.text ? RichText.render(subtittle) : <h3>Ready to get started?</h3>}
        {tittle[0]?.text ? RichText.render(tittle) : <h2>We turn your ideas into reality.</h2>}
      </Description>
    </Content>
  );
};

export const NoButton = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundImage: "linear-gradient(188deg, #7E141E , #511319 65% )"
    }
  }
});