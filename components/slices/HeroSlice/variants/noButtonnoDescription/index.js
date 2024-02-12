import { SliceFactory } from "../../../../common/Containers";
import { Description, Content, ImgHolder } from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";

const Base = slice => {
  const { image, title, mobileimage } = slice.primary;

  // window.console.log('--slice--', slice)

  return (
    <Content>
      <Description>
        {title[0]?.text ? RichText.render(title) : <h1>Asesoramos en Proyectos de Electromovilidad</h1>}
      </Description>
      <ImgHolder>
        <picture>
          <source srcSet={image.url} media="(max-width: 500px)" />
          <source srcSet={mobileimage.url} media="(max-width: 960px)" />
          <img src={image.url} alt="HeroImg" />
        </picture>
      </ImgHolder>
    </Content>
  );
};

// export const NoButtonnoDescription = SliceFactory(Base);
export const NoButtonnoDescription = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundColor: 'rgb(176, 232, 222)',
      backgroundImage: 'linear-gradient(188deg, #98EED5 0%, #05956B 100%)',
    },
    bgImage: true,
    // bgImageSrc: "https://electromove.cdn.prismic.io/electromove/1ac22623-0626-4d1d-a34c-1acf3fc168e3_header_02.svg",
    base: Base
  }
});

