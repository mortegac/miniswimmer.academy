import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-right: 50px;
  margin-left: 50px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    margin-right: 0;
  }
  h2 {
    margin: 0;
    margin-bottom: 24px;
    font-weight:  ${(props) => props.theme.typography.h2.desktop.fontWeight};
    line-height:  ${(props) => props.theme.typography.h2.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
    color: ${(props) => props.theme.colors.textDarkblue};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 70%;
      font-weight:  ${(props) => props.theme.typography.h2.desktop.fontWeight};
      line-height:  ${(props) => props.theme.typography.h2.desktop.lineHeight};
      font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
      margin-bottom: 16px;
    }
  }
  p {
    margin: 0;
    line-height:  ${(props) => props.theme.typography.p.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
    font-weight: ${(props) => props.theme.typography.p.desktop.fontWeight};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      margin-bottom: 22px;
    }
  }
`;

export const ImgHolder = styled.div`
  width: 50%;
  img {
    width: 100%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    border-radius: 24px;
    img {
      width: 100%;
    }
  }
`;
