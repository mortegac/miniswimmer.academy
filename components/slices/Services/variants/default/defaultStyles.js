import styled from "styled-components";


export const Title = styled.div`
  width: 100%;
  // background-color: red;
  h2 {
    text-align: center;
    margin: 40px 0;
  }
  
 
`;
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

export const ButtonContainer = styled.button`
  margin-top: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: ${(props) => props.theme.typography.fontFamily};
  white-space: nowrap;
  border-radius: ${(props) => props.theme.button.borderRadius};
  font-size: 16px;
  line-height: 24px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  width: fit-content;
  height: ${(props) => props.theme.button.height};
  background:${(props) => props.theme.colors.textLightPrimary};
  border: 1px solid ${(props) => props.theme.colors.textLightPrimary};
  color:${(props) => props.theme.colors.white};
  :hover {
    background-color: ${(props) => props.theme.colors.bgHover};
    color: ${(props) => props.theme.colors.white};
  }
  padding:${(props) => props.theme.button.padding};
  

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
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
    padding: 0;
    margin: 0;
    padding-top: 22px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
    margin: 0;
  }
  h2 {
    margin: 0;
    margin-bottom: 24px;
    font-weight:  ${(props) => props.theme.typography.h2.desktop.fontWeight};
    line-height:  ${(props) => props.theme.typography.h2.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
    color: ${(props) => props.theme.colors.textDarkblue};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 100%;
      font-weight:  ${(props) => props.theme.typography.h2.desktop.fontWeight};
      line-height:  ${(props) => props.theme.typography.h2.desktop.lineHeight};
      font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
      margin-bottom: 16px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      margin-top 16px;
      width: 100%;
      text-align: center;
      line-height:  ${(props) => props.theme.typography.h2.mobile.lineHeight};
    }
    
  }
  p {
    margin: 0;
    line-height:  ${(props) => props.theme.typography.p.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
    font-weight: ${(props) => props.theme.typography.p.desktop.fontWeight};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      margin-bottom: 22px;
      text-align: center;
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

export const Button = styled.button`
  border-radius: 22px;
  padding: 10px 30px;
  border: 1px solid;
  margin-top: 18px;
  font-weight:  ${(props) => props.theme.typography.btnText.desktop.fontWeight};
  line-height:  ${(props) => props.theme.typography.btnText.desktop.lineHeight};
  font-size: ${(props) => props.theme.typography.btnText.desktop.fontSize};
  text-align: center;
  width: 254px;
  height: 48px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.bgColorQuaternary};
  // background: ${(props) => props.theme.colors.secondary};
  background:${(props) => props.theme.colors.textLightPrimary};
  border-color: ${(props) => props.theme.colors.textLightPrimary};
`;

// width: 100%;
// height: 100%;
export const ImgIco = styled.div`
margin-top: 8px;
@media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  width: 500px;
  border: solid 1px pink;
}
`;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  
  
  // border: 1px solid blue;
  
  // .img{
  //   margin-top: 8px;
  //   // width: 100%;
  //   // height: 100%;
  // }
  

  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    width: 100%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;

  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export const ItemsContainer = styled.ul`
  margin-top: 44px;
  width: 100%;
  padding: 0;

  list-style-type: none;
  overflow: hidden;
  align-items: flex-start;
  flex-direction: row;
  
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    justify-content: center;
    margin-bottom: 0px;
  }


  .img {
    margin-right: 18px;
    margin-bottom: 50px;
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100px;
      height: 100px;
      margin-bottom: 16px;
    }
  }

  h3 {

    font-weight:  ${(props) => props.theme.typography.h3.desktop.fontWeight};
    line-height:  ${(props) => props.theme.typography.h3.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.h3.desktop.fontSize};
    text-align: center;
    color: ${(props) => props.theme.colors.textDarkblue};
    margin-bottom: 8px;
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 70%;
      margin-bottom: 16px;
      font-weight:  ${(props) => props.theme.typography.h3.desktop.fontWeight};
      line-height:  ${(props) => props.theme.typography.h3.desktop.lineHeight};
      font-size: ${(props) => props.theme.typography.h3.desktop.fontSize};
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100%;
      text-align: center;
      line-height:  ${(props) => props.theme.typography.h3.mobile.lineHeight};
    }
  }

  p {
    margin: 0;
    font-weight:  ${(props) => props.theme.typography.p.desktop.fontWeight};
    line-height:  ${(props) => props.theme.typography.p.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
    text-align: justify;
    color: ${(props) => props.theme.colors.textPrimary};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 70%;
      font-weight:  ${(props) => props.theme.typography.p.desktop.fontWeight};
      line-height:  ${(props) => props.theme.typography.p.desktop.lineHeight};
      font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
      margin-bottom: 16px;
      
      
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100%;
      text-align: center;
    }
  }

  .item {
    display: flex;
    margin: 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
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
