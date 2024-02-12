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
`;

export const ItemsContainer = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 34px;
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
  h3 {
    margin: 0;
    margin-bottom: 24px;
    font-weight:  ${(props) => props.theme.typography.h3.desktop.fontWeight};
    line-height:  ${(props) => props.theme.typography.h3.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.h3.desktop.fontSize};
    text-align: center;
    color: ${(props) => props.theme.colors.textSecondary};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 70%;
      line-height: 44px;
      font-size: 34px;
      margin-bottom: 16px;
    }
  }

  span{
    margin: 0;
    margin-bottom: 24px;
    font-weight:  ${(props) => props.theme.typography.customSpan.desktop.fontWeight};
    line-height:  ${(props) => props.theme.typography.customSpan.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.customSpan.desktop.fontSize};
    text-align: center;
    color: ${(props) => props.theme.colors.bgColorQuaternary};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 70%;
      line-height: 44px;
      font-size: 34px;
      margin-bottom: 16px;
    }
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
  }
`;


