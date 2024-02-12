import { SliceFactory } from "../../../../common/Containers";
import { Description, Content, ImgHolder } from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";

const Base = slice => {
  const { description, image, title, mobileimage } = slice.primary;

  // window.console.log('--slice--', slice)

  return (
    <Content>
      <ImgHolder />
      <picture style={{ visibility: "none" }}>
        <source srcSet={image?.url || ""} media="(max-width: 500px)" />
        <source srcSet={mobileimage?.url || ""} media="(max-width: 960px)" />
        <img src={image?.url || ""} alt="HeroImg" />
      </picture>
      {/* </ImgHolder> */}
      <Description>
        {title[0]?.text && RichText.render(title)}
        {description[0]?.text && RichText.render(description)}
      </Description>
    </Content>
  );
};

// export const  = SliceFactory(Base);
export const NoButton = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      padding: "0",
      // height: 'height: 600px',
      backgroundColor: 'rgb(176, 232, 222)',
      backgroundImage: 'linear-gradient(188deg, #AE5EAB 0%, #AE5EAB 100%)',
      background: 'transparent',
      background: 'linear-gradient(180deg, #AE5EAB 0%, #AE5EAB 58%, #7E397C 100%)',
    },
    bgImage: true,
    bgImageSrc: "",
    base: Base
  }
});
