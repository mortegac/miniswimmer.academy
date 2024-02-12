import styled from "styled-components";

export const ItemsContainer = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 42px;
  list-style-type: none;
  overflow: hidden;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 0px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }

  .item {
    display: flex;
    margin-right: 50px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 768px) {
      padding-bottom: 48px;
      width: 50%;
    }
    @media (max-width: 500px) {
      width: 100%;
      margin-bottom: 25px;
      padding-bottom: 0;
    }
    img {
      // max-width: 80px;
      // max-height: 80px;
      height: 40px;
      margin-bottom: 28px;
      @media (max-width: 460px) {
        padding: 0;
      }
    }
   span{
    margin-top : 16px;
    margin-bottom : 16px;
    letter-spacing: 0.25px;
    line-height: 24px;
    font-size: 16px;
    color: #605E5C;
    text-align: center;
   }
   
   h4 {
    font-size: 18px;
   }
  }
  .swiper {
    width: 100%;
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
    color: ${(props) => props.theme.colors.primary};
  }
  .swiper-button-next {
    color: ${(props) => props.theme.colors.primary};
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
    outline: 2px solid ${(props) => props.theme.colors.primary};
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
`;
export const ItemsContainerv2 = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 42px;
  list-style-type: none;
  overflow: hidden;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 0px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }

  .item {
    display: flex;
    margin-right: 50px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 768px) {
      padding-bottom: 48px;
      width: 50%;
    }
    @media (max-width: 500px) {
      width: 100%;
      margin-bottom: 25px;
      padding-bottom: 0;
    }
    img {
      max-width: 80px;
      max-height: 80px;
      // height: 40px;
      margin-bottom: 28px;
      @media (max-width: 460px) {
        padding: 0;
      }
    }
   span{
    margin-top : 16px;
    margin-bottom : 16px;
    letter-spacing: 0.25px;
    line-height: 24px;
    font-size: 16px;
    color: #605E5C;
    text-align: center;
   }
   
   h4 {
    font-size: 18px;
   }
  }
`;


export const Button = styled.button`
    border-radius: 22px;
    height: 46px;
    padding: 10px 30px;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    font-weight:  ${(props) => props.theme.typography.btnText.desktop.fontWeight};
    line-height:  ${(props) => props.theme.typography.btnText.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.btnText.desktop.fontSize};
    line-height: 24px;
    cursor: pointer; 
    color: ${(props) => props.theme.colors.secondary};
    // background: ${(props) => props.theme.colors.bgColorQuaternary};
    background: transparent;
`;