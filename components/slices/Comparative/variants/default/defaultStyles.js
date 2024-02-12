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
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  }
`;

// export const CardList = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   @media (max-width: ${(props) => props.theme.breakpoints.md}) {
//     flex-direction: column;
//   }
//   @media (max-width: ${(props) => props.theme.breakpoints.sm}) {

//   }
// `;


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
background:${(props) => props.theme.button.bgPrimary};
border: 1px solid ${(props) => props.theme.colors.textLightPrimary};
color:${(props) => props.theme.colors.white};
:hover {
  background-color: ${(props) => props.theme.button.bgPrimaryOver};
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
  align-items: center;
  padding: 32px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    margin-right: 0;
  }
  
  h2 {
    text-align: center;
    margin: 0;
    margin-bottom: 24px;
    font-weight:  ${(props) => props.theme.typography.h2.desktop.fontWeight};
    line-height:  ${(props) => props.theme.typography.h2.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
    color: ${(props) => props.theme.colors.textDarkblue};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      // width: 100%;
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
    margin-top: 32px;
    line-height:  ${(props) => props.theme.typography.p.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
    font-weight: ${(props) => props.theme.typography.p.desktop.fontWeight};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      margin-bottom: 22px;
    }
  }
  
  h3 {
    font-weight:  ${(props) => props.theme.typography.h3.desktop.fontWeight};
    line-height:  ${(props) => props.theme.typography.h3.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.h3.desktop.fontSize};
    text-align: center;
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 8px;
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      // width: 70%;
      margin-bottom: 16px;
      font-weight:  ${(props) => props.theme.typography.h3.desktop.fontWeight};
      line-height:  ${(props) => props.theme.typography.h3.desktop.lineHeight};
      font-size: ${(props) => props.theme.typography.h3.desktop.fontSize};
    }
  }
`;

export const Card = styled.div`
  min-height: 870px;
  width: 48%;
  background: white;
  border: 1px solid rgba(0, 17, 51, 0.15);
  border-radius: 8px;
  padding: 48px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 98%;
    
  }
  .description {
   margin: 42px 0;
  }
  .list-check {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 32px 16px;
    p {
      width: 86%;      
    }
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 45px;
        margin-bottom: 12px;
      }
      p {
        text-align: center;
        width: 100%;
      }
    }
  }
  
  
  
  // @media (max-width: 500px) {
  //   padding: 24px;
  // }
  // @media (max-width: 400px) {
  //   padding: 0px;
  //   border: none;
  // }
 `;

export const ItemsContainer = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 42px;
  list-style-type: none;
  overflow: hidden;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 0px;
    flex-flow: column wrap;
  }
  @media (max-width: 500px) {
    flex-direction: row;
    flex-flow: column wrap;
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
      max-width: 200px;
      height: 40px;
      // margin-bottom: 28px;
      @media (max-width: 460px) {
        padding: 0;
      }
    }
  }
`;

export const ImgHolder = styled.div`
  width: 35px;
  img {
    width: 35px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    border-radius: 24px;
    img {
      width: 70%;
    }
  }
`;
