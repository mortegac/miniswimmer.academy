import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .swiper {
    width: auto;
    padding: 0 20px;
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      padding: 0;
    }
  }
  .swiper-wrapper {
    width: auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-bottom: 24px;
    margin-bottom: 24px;
    @media (max-width: 960px) {
      justify-content: unset;
    }
  }
  .swiper-pagination {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translatey(24px);
  }
  .swiper-slide {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-button-prev {
    color: #AE5EAB;
  }
  .swiper-button-next {
    color: #AE5EAB;
    // color: ${(props) => props.theme.colors.primary};
  }
  .swiper-pagination-bullet {
    background: ${(props) => props.theme.colors.primary};
    opacity: 1;
    width: 6px;
    height: 6px;
  }
  .swiper-pagination-bullet-active {
    background: ${(props) => props.theme.colors.secondary};
    opacity: 1;
    width: 6px;
    height: 6px;
    position: relative;
    outline: 2px solid #AE5EAB;;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
    .swiper-button-prev {
      left: 0;
    }
    .swiper-button-next {
      right: 0;
    }
  }
`;

export const TextCard = styled.span`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
margin-bottom: 8px;
margin-top:24px;


  h3 {
    margin-top: 16px;
    font-size: ${(props) => props.theme.typography.h3.desktop.fontSize};
    line-height: ${(props) => props.theme.typography.h3.desktop.lineHeight};
  }
  .image {
    display: flex;
    justify-content: center;
    margin-bottom: 14px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
    background: white;
    height: unset;
  }
`;
export const TextDescription = styled.span`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
// margin-bottom: 8px;
// margin-top:24px;
  h3 {
    margin-top: 32px;
    font-size: ${(props) => props.theme.typography.h3.desktop.fontSize};
    line-height: ${(props) => props.theme.typography.h3.desktop.lineHeight};
  }
  .image {
    display: flex;
    justify-content: center;
    margin-bottom: "14px";
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
    background: white;
    height: unset;
  }
`;
export const Card = styled.div`

  background-color: #FBF7FB;
  width: 80%;
  padding: 24px;
  border-radius: 25px;    
  min-height: 300px;
  padding: 52px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 360px;
  .image {
    width: 100%;
    max-height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 14px;
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {

      max-height: 60px;
      padding: 0px;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
    // background-color: pink;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 700px;
  }
  // @media (max-width: ${(props) => props.theme.breakpoints.md}) {
  //   width: 300px;
  //   height: unset;
  // }

`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 8px;
  
  h3 {
    font-size: 22px;
  }
  img {
    height: 120px;
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      padding: 0;
      width: 70%;
      height: 100%;
    }
  }
  .imageBox{
    width: 100%;
    margin-bottom: 16px;
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .boxNameStart{
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
       margin: 0px;
       margin-top: 16px;
      
    }
  }
  .boxStart{
    display: flex;
    flex-direction: row;
      @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      justify-content: center;
      align-items: center;
  }
    
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    p {
      // background-color: green;
      padding: 0px 16px 0px 16px;
    }

  }
  
`;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  p {
    &:first-child {
      font-weight: 700;
    }
  }
  a {
    &:after {
      content: "";
      width: 100%;
      height: 1px;
      background: ${(props) => props.theme.colors.primary};
      position: absolute;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
      bottom: 0;
      left: 0;
    }
    &:hover:after {
      transform: scaleX(1);
    }
  }
`;
