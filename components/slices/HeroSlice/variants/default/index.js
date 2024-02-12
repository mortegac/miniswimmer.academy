import { SliceFactory } from "../../../../common/Containers";
import { Description, Content, ImgHolder, Button } from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";

const Base = (props) => {
  const { description, image, title, mobileimage, buttontext } = props.primary;

  // window.console.log('--slice--', slice)

  return (
    <Content backgroundColor={"transparent"}>
      <Description>
        {title[0]?.text && RichText.render(title)}
        {description[0]?.text && (
          RichText.render(description)
        )}
        <Button>
          {buttontext ? buttontext : `Let's Talk`}
        </Button>
      </Description>

      {/* <ImgHolder>
        <picture>
          <source srcSet={image.url} media="(max-width: 500px)" />
          <source srcSet={mobileimage.url} media="(max-width: 960px)" />
          <img src={image.url} alt="HeroImg" />
        </picture>
      </ImgHolder> */}
    </Content>
  );
};

// export const Default = SliceFactory(Base);
export const Default = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundColor: '#5FDC00',
      background: '#5FDC00',
    },
    bgImage: true,
    // bgImageSrc: "https://electromove.cdn.prismic.io/electromove/1ac22623-0626-4d1d-a34c-1acf3fc168e3_header_02.svg",
    base: Base
  }
});
