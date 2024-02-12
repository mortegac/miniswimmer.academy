import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  flex-direction: column;
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
  align-items: center;
  width: 100%;
  margin-right: 100px;
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
    text-align: center;
    color: ${(props) => props.theme.colors.textSecondary};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 70%;
      line-height: 44px;
      font-size: 34px;
      margin-bottom: 16px;
    }
  }
  p {
    margin: 0;
    letter-spacing: 0.25px;
    line-height:  ${(props) => props.theme.typography.p.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      margin-bottom: 32px;
    }
  }
`;

export const ImgHolder = styled.div`
  width: 100%;
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
