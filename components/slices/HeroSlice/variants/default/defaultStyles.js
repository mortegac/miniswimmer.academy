import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top:30px;
  margin-bottom:102px;
  
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  }
`;

export const Description = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  // margin-left: 200px;
  padding-bottom: 50px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    margin-left: 0;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    text-align: center;
  }
  h1 {
    margin: 0;
    margin-bottom: 8px;
    line-height:  ${(props) => props.theme.typography.h1.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.h1.desktop.fontSize};
    color: #2b2b2b;
    z-index: 10px;
    em {
      color: ${(props) => props.theme.colors.textLightPrimary};
      font-style: normal;
      z-index: 10px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
      // width: 70%;
      line-height:  ${(props) => props.theme.typography.h1.mobile.lineHeight};
      font-size: ${(props) => props.theme.typography.h1.mobile.fontSize};
      margin-bottom: 16px;
      em {
        color: #AE5EAB;
        font-style: normal;
        z-index: 10px;
      }
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100%;
      line-height:  ${(props) => props.theme.typography.h1.mobile.lineHeight};
      font-size: ${(props) => props.theme.typography.h1.mobile.fontSize};
      em {
        color: ${(props) => props.theme.colors.textLightPrimary};
        font-size: 34px;
        z-index: 10px;
      }
      
    }
  }
  p {
    margin: 0;
    letter-spacing: 0.25px;
    color: #fff;
    line-height:  ${(props) => props.theme.typography.p.desktop.lineHeight};
    font-size: 24px;
    z-index: 10px;
    font-weight: ${(props) => props.theme.typography.p.desktop.fontWeight};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      margin-bottom: 32px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100%;
      line-height:  ${(props) => props.theme.typography.p.mobile.lineHeight};
      font-size: ${(props) => props.theme.typography.p.mobile.fontSize};
      text-align: center;
    }
  }
`;

export const ImgHolder = styled.div`
  z-index: 2;
  backgroundImage: ${(props) => props.bgImage || ""}
  width: 50%;
  img {
    width: 100%;
    border-radius: 50%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 80%;
    border-radius: 24px;
    img {
      width: 100%;
    }
  }
`;

export const Button = styled.button`
    border-radius: 22px;
    height: 46px;
    padding: 10px 30px;
    border: transparent;
    font-size: 16px;
    margin-top: 18px;
    line-height: 24px;
    width:142px;
    height:48px;
    cursor: pointer; 
    color: ${(props) => props.theme.colors.secondary};
    background: ${(props) => props.theme.colors.bgColorQuaternary};
`;
