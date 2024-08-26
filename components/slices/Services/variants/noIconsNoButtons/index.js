import Link from "next/link";

import { SliceFactory } from "../../../../common/Containers";
import {
  Description,
  Content,
  ImgHolder,
  ButtonContainer,
} from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";

const Base = (props) => {
  const { description, image, title, buttontext, buttonlink } = props.primary;

  return (
    <Content>
      <ImgHolder>
        <picture>
          <source srcSet={image.url} media="(max-width: 630px)" />
          <img src={image.url} alt="HeroImg" />
        </picture>
      </ImgHolder>
      <Description>
      {/* <pre>{JSON.stringify(props.primary, null, 2 )}</pre> */}
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
 
        {
          buttontext && 
            <Link
              key={`coach-level-1`}
              href={buttonlink.uid}
              passHref
              prefetch
            >
              <ButtonContainer fullwidth={false}>
                {buttontext && buttontext}
              </ButtonContainer>
            </Link>
          }
    
    </Description>
      </Content>
  );
};

export const NoIconsNoButtons = SliceFactory(Base);
