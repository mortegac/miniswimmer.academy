import styled from "styled-components";

export const ItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-wrap: wrap;
  }
`;

export const Box = styled.div`
padding: 20px 30px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
export const Item = styled.div`
  background-color: white;
  width: 100%;
  max-width: "";
  padding: "24px";
  padding-top: "0";
  min-height: "320px";
  border-radius: "8px";
  // box-shadow: 0px 3px 15px ${(props) => props.theme.colors.textLightTertiary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  // border: "";
  text-align: center;
  

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 45%;
    min-height: unset;
    height: unset;
    min-height: 456px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
    min-height: unset;
    height: unset;
  }
`;



export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 8px;
  h3 {
    margin-top: 24px;
    font-size: ${(props) => props.theme.typography.h3.desktop.fontSize};
    line-height: ${(props) => props.theme.typography.h3.desktop.lineHeight};
  }
  .image {
    display: flex;
    justify-content: center;
    margin-bottom: "14px";
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
      font-weight: "700";
    }
  }
  a {
    p {
      color: ${(props) => props.theme.colors.primary};
    }
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
