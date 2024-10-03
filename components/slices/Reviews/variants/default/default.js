import { SliceFactory } from "../../../../common/Containers";
// import { Description, Content, Button } from "./defaultStyles";
import { RichText } from "prismic-reactjs";
import { PrismicRichText } from '@prismicio/react'
import Link from "next/link";
import { Carousel } from "../../../../common/Carousel";

import {
  Description,
  Content,
  Title,
  Review,
  Box,
  ItemsContainer,
  ListContainer,
  DataContainer,
  TextContainer,
  TextCourses,
  
  MainContainer,
  Header
} from "../default/defaultStyles";

const Base = slice => {
  // const { tittle, } = slice.primary;
  const cards = slice.items;
    // window.console.log(slice)
  return (
    <MainContainer>
      <Header>
      {
          slice?.primary?.title &&
          <PrismicRichText field={slice.primary.title}/>
        }
      </Header>
      <Carousel items={cards}/>
    </MainContainer>
    
  );
};

export const Default = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      // backgroundImage: "linear-gradient(188deg, #F3FDEC, #88E73F 65% )"
      // backgroundImage: "linear-gradient(180deg, #AE5EAB 0%, #AE5EAB 58%, #7E397C 100%)"
    }
  }
});
