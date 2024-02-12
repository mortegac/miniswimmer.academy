import { SliceFactory } from "../../../../common/Containers";
import {
  Description,
  Content,
  ImgHolder,
} from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";

const Base = (props) => {
  const { image, title } = props.primary;

  return (
    <Content>
      <ImgHolder>
        <picture>
          <source srcSet={image.url} media="(max-width: 630px)" />
          <img src={image.url} alt="HeroImg" />
        </picture>
      </ImgHolder>
      <Description>
        {title[0]?.text ? (
          RichText.render(title)
        ) : (
          <h2>We offer a variety of high-end services.</h2>
        )}
      </Description>
    </Content>
  );
};

export const ImageText = SliceFactory(Base);
