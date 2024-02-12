import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  // @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  // }
  h2 {
    margin: 0;
    margin-bottom: 24px;
    font-weight: ${(props) => props.theme.typography.h2.desktop.fontWeight};
    line-height: ${(props) => props.theme.typography.h2.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
    color: ${(props) => props.theme.colors.textDarkblue};
    text-align: center;
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      // width: 70%;
      font-weight: ${(props) => props.theme.typography.h2.desktop.fontWeight};
      line-height: ${(props) => props.theme.typography.h2.desktop.lineHeight};
      font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  // margin-right: 50px;
  // margin-left: 50px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    // width: 100%;
    margin-right: 0;
  }
`;

export const ListContainer = styled.div`
  width: 260px;  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 34px;
  margin-right: 0px;
  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    width: 100%;
    margin-right: 20px;
  }
  img {
    height: 200px;
    // @media (max-width: 460px) {
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      padding: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 10px;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    margin-right: 0;
  }
  img {
    max-width: 48px;
    height: 48px;
    margin-top: 20px;
    @media (max-width: 460px) {
      padding: 0;
    }
  }
`;

export const TextContainer = styled.div`
  flex-direction: column;
  width: 100%;
  margin-left: 10px;
  h3 {
    margin: 0;
    font-weight: ${(props) => props.theme.typography.h3.desktop.fontWeight};
    line-height: 24px;
    margin-top: 24px;
    font-size: 16px;
    text-align: start;
    color: ${(props) => props.theme.colors.textDarkblue};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      // width: 70%;
      font-weight: ${(props) => props.theme.typography.h3.desktop.fontWeight};
      line-height: ${(props) => props.theme.typography.h3.desktop.lineHeight};
      font-size: ${(props) => props.theme.typography.h3.desktop.fontSize};
    }
  }
  p {
    margin-bottom: 0;
    font-weight: ${(props) => props.theme.typography.p.desktop.fontWeight};
    line-height: ${(props) => props.theme.typography.p.desktop.lineHeight};
    font-size: 16px;
    color: ${(props) => props.theme.colors.textPrimary};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 70%;
      font-weight: ${(props) => props.theme.typography.p.desktop.fontWeight};
      line-height: ${(props) => props.theme.typography.p.desktop.lineHeight};
      font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
    }
  }
`;

export const ItemsContainer = styled.ul`
  margin: 0;
  padding: 10px;
  list-style-type: none;
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  // justify-content: space-between;
  align-items: center;
  // width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 0px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
  .item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // margin: 10px;
    @media (max-width: 768px) {
      // width: 50%;
    }
    @media (max-width: 500px) {
      width: 100%;
      margin-bottom: 25px;
      padding-bottom: 0;
    }
  }
`;