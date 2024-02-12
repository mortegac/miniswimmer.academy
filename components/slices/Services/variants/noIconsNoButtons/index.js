import { SliceFactory } from "../../../../common/Containers";
import {
  Description,
  Content,
  ImgHolder,
} from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";

const Base = (props) => {
  const { description, image, title } = props.primary;

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
        {description[0]?.text ? (
          RichText.render(description)
        ) : (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis id
            laboriosam a dignissimos! Quo temporibus quam saepe distinctio culpa
            quisquam laborum ut repudiandae velit repellat perferendis doloribus
            odio, et dignissimos..
          </p>
        )}
      </Description>
    </Content>
  );
};

export const NoIconsNoButtons = SliceFactory(Base);
