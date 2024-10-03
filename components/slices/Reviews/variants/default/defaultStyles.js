import styled from "styled-components";



export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: white;
  h2 {
    text-align: center;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding-top: 22px; 

  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;


export const Content = styled.div`
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
export const Review = styled.div`
margin-top: 5px;
  p {
    line-height: 16px;
    font-size: 16px;
    font-weight: 400;
  }
`;
export const Box = styled.div`
  background-color: #FBF7FB;
  width: 80%;
  height: 300px;
  padding: 24px;


  background: #FBF7FB;
  border-radius: 25px;

  h3 {
    text-align: center;
    margin-left: 22px;
    color: #323130;
    font-weight:  ${(props) => props.theme.typography.h2.desktop.fontWeight};
    line-height:  ${(props) => props.theme.typography.h2.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
    color: #ffffff;
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      font-weight:  ${(props) => props.theme.typography.h2.desktop.fontWeight};
      line-height:  ${(props) => props.theme.typography.h2.desktop.lineHeight};
      font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
      
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100%;
      text-align: center;
      line-height:  ${(props) => props.theme.typography.h2.mobile.lineHeight};
    }
 }
`;

export const ListContainer = styled.div`
  width: 100%;  
  display: flex;
  
  .boxStart{
    margin-left:20px;
  }
  
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
      width: 100%;
      margin-right: 20px;
    }
   
    img {
      height: 120px;
      @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
        padding: 0;
        width: 100%;
        height: 100%;
      }
    }
`;


export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // padding: 32px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    margin-right: 0;
    padding-top: 32px;
    
  }
  
  h2 {
    text-align: center;
    margin: 0;
    // margin-bottom: 24px;
    font-weight:  ${(props) => props.theme.typography.h2.desktop.fontWeight};
    line-height:  ${(props) => props.theme.typography.h2.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
    color: #ffffff;
    // color: ${(props) => props.theme.colors.textDarkblue};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      font-weight:  ${(props) => props.theme.typography.h2.desktop.fontWeight};
      line-height:  ${(props) => props.theme.typography.h2.desktop.lineHeight};
      font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
      
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100%;
      text-align: center;
      line-height:  ${(props) => props.theme.typography.h2.mobile.lineHeight};
    }
    
  }
  p {
    margin: 0;
    // margin-top: 5px;
    line-height:  ${(props) => props.theme.typography.p.desktop.lineHeight};
    font-size: 15px;
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
    color:#ffffff; 
    // ${(props) => props.theme.colors.primary};
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
export const Title = styled.div`
  width: 100%;
  // background-color: red;
  h2 {
    text-align: center;
    margin: 40px 0;
    color: #323130;
  }
  
 
`;





export const Button = styled.button`
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
background:#fff;
// background:${(props) => props.theme.button.bgPrimary};
border: 1px solid #67614B;
// border: 1px solid ${(props) => props.theme.button.bgPrimary};
color:#67614B;
// color:${(props) => props.theme.colors.white};
:hover {
  // background-color: ${(props) => props.theme.button.bgPrimaryOver};
  background-color: #2b2b2b;
  color: ${(props) => props.theme.colors.white};
}
padding:${(props) => props.theme.button.padding};



@media (max-width: ${(props) => props.theme.breakpoints.md}) {
  width: 100%;
}
`;





export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

export const TextCourses = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  #htmlContainer{
    .green {
      color: green;
      text-transform: uppercase;
    }
   table {
      width: 100%;
    }
    th {
      border-bottom: 1px solid #364043;
      color: #67614b;
      font-size: 0.85em;
      font-weight: 600;
      padding: 0.5em 1em;
      text-align: left;
      
    }
    tr {
      
      color: #67614b;
      font-size: 0.85em;
      font-weight: 600;
      padding: 0.5em 1em;
      text-align: left;
    }
    td {
      margin-top: 10px;
      border-top: 1px solid #364043;
      color: #67614b;
      p {
        text-transform: uppercase;
      }
     
      font-weight: 400;
      padding: 0.65em;
    }
    .disabled td {
      color: #4F5F64;
    }
    // tbody tr {
    //   transition: background 0.25s ease;
    // }
    // tbody tr:hover {
    //   background: #014055;
    // }
  }
`;
export const TextContainer = styled.div`
  text-align: center;
  align-items: center;
  width: 100%;
  margin-left: 10px;
  margin-top: 10px;
  .flag {
    font-size: 36px;
    margin: 8px;
    text-align: center;
  }
  h3 {
    margin: 0;
    font-weight: ${(props) => props.theme.typography.h3.desktop.fontWeight};
    line-height: 24px;
    font-size: 16px;
    text-align: center;
    color: ${(props) => props.theme.colors.textDarkblue};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
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
  align-items: center;
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
    @media (max-width: 768px) {
    }
    @media (max-width: 500px) {
      width: 100%;
      margin-bottom: 25px;
      padding-bottom: 0;
    }
  }
`;