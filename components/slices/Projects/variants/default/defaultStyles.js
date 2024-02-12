import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  }
`;

export const ImgContent = styled.div`

img {
  width: 535px;
  height: 612px;
}
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
margin-right: 3rem;
@media (max-width: ${(props) => props.theme.breakpoints.md}) {
  width: 100%;
  margin-right: 0;
}
//  h2 {
//     margin: 0;
//     margin-bottom: 24px;
//     font-weight:  ${(props) => props.theme.typography.h2.desktop.fontWeight};
//     line-height:  ${(props) => props.theme.typography.h2.desktop.lineHeight};
//     font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
//     color: ${(props) => props.theme.colors.textDarkPrimary};
//     text-align: start;
//     @media (max-width: ${(props) => props.theme.breakpoints.md}) {
//       width: 70%;
//       font-weight:  ${(props) => props.theme.typography.h2.desktop.fontWeight};
//       line-height:  ${(props) => props.theme.typography.h2.desktop.lineHeight};
//       font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
//       margin-bottom: 16px;
//     }
//   }
//   h3 {
//     font-weight:  ${(props) => props.theme.typography.h3.desktop.fontWeight};
//     line-height:  ${(props) => props.theme.typography.h3.desktop.lineHeight};
//     font-size: ${(props) => props.theme.typography.h3.desktop.fontSize};
//     text-align: start;
//     color: ${(props) => props.theme.colors.textSecondary};
//     margin-bottom: 8px;
//     @media (max-width: ${(props) => props.theme.breakpoints.md}) {
//       width: 70%;
//       margin-bottom: 16px;
//       font-weight:  ${(props) => props.theme.typography.h3.desktop.fontWeight};
//       line-height:  ${(props) => props.theme.typography.h3.desktop.lineHeight};
//       font-size: ${(props) => props.theme.typography.h3.desktop.fontSize};
//     }
//   }
  p {
    margin: 0;
    font-weight:  ${(props) => props.theme.typography.p.desktop.fontWeight};
    line-height:  ${(props) => props.theme.typography.p.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
    text-align: justify;
    color: ${(props) => props.theme.colors.textPrimary};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      // width: 70%;
      font-weight:  ${(props) => props.theme.typography.p.desktop.fontWeight};
      line-height:  ${(props) => props.theme.typography.p.desktop.lineHeight};
      font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
      margin-bottom: 16px;
    }
  }
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  // background-color: red;
  h2 {
    text-align: center;
    // margin: 40px 0;
  }
  
 
`;
export const ImgHolder = styled.div`
  width: 50%;
 
  
  margin-top: 1.5rem;
  img{
    max-width: 525px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    border-radius: 24px;
    img {
      width: 100%;
    }
  }
  
`;
// export const ImgHolder = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin-top: 1.5rem;
//   img {
//     width: 135px;
//     height: 50px;
//   }
//   @media (max-width: ${(props) => props.theme.breakpoints.md}) {
//     width: 100%;
//     border-radius: 24px;
//     img {
//       width: 100%;
//     }
//   }
// `;