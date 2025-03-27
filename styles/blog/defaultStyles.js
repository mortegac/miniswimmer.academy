import styled from "styled-components";
export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const ItemsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

export const Box = styled.div`
  // padding: .5rem;
  background:#f7f7f7;
  padding-left: 1rem;
  padding-top: 16px;
  border-top: 1px solid #f3f3f3;
  border-bottom: 1px solid #f3f3f3;
  padding-right: 1rem;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 1rem;
  
  // background-color: pink;
  max-height : 200px;
  min-height : 200px;
  margin-bottom: 50px;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #AE5EAB;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease;
  position: absolute;
  bottom: 0;
  right: 10px;
  
  &:hover {
    background: #7E397C;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 8px;
  position: relative;
  h3 {
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    min-height: 120px;
    max-height: 120px;
    overflow: hidden;
  }
  .image {
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 0% center;
    }
  }
  .imagefull {
    width: 100%;
    height: 300px;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
`;

export const Item = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    margin-right: 0;
    padding-top: 32px;
  }
  
  .EnrollBox{
    padding-top:8px;
    margin-left:32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .dateBox{
    padding-top:8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
    
  h6 {
    margin: 0;
    margin-bottom: 14px;
    font-weight:  ${(props) => props.theme.typography.h6.desktop.fontWeight};
    line-height:  ${(props) => props.theme.typography.h6.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.h6.desktop.fontSize};
    color: #ffffff;
  }
  h2 {
    text-align: left;
    margin: 0;
    margin-top: 10px;
    font-weight:  ${(props) => props.theme.typography.h2.desktop.fontWeight};
    line-height: 46px;
    // line-height:  ${(props) => props.theme.typography.h2.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
    color: ${(props) => props.theme.colors.textDarkblue};
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
    // margin-top: 32px;
    line-height:  ${(props) => props.theme.typography.p.desktop.lineHeight};
    // font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
    font-size: 16px;
    font-weight: ${(props) => props.theme.typography.p.desktop.fontWeight};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      margin-bottom: 22px;
    }
  }
  
  h3 {
    font-weight:  ${(props) => props.theme.typography.h3.desktop.fontWeight};
    line-height:  30px;
    // line-height:  ${(props) => props.theme.typography.h3.desktop.lineHeight};
    font-size: 24px;
    // font-size: ${(props) => props.theme.typography.h3.desktop.fontSize};
    text-align: center;
    color:#605E5C; 
    margin-top: 8px;
    margin-bottom: 8px;
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      margin-bottom: 16px;
      font-weight:  ${(props) => props.theme.typography.h3.desktop.fontWeight};
      line-height:  ${(props) => props.theme.typography.h3.desktop.lineHeight};
      font-size: ${(props) => props.theme.typography.h3.desktop.fontSize};
    }
  }
  #htmlContainer {
    max-width: 1054px;
    padding: 0 15px;
    width: 100%;
    margin-bottom: 64px;

    strong {
      a {
        font-weight: 700;
      }
    }
    
    h1 {
      color: rgba(0, 17, 51, 0.8);
      font-size: 40px;
      font-weight: 700;
      line-height: 64px;
      text-align: left;
       padding-top: 24px;
      padding-bottom: 24px;
    }
    
    h2 {
      font-size: 32px;
      color: rgba(0, 17, 51, 0.8);
      text-align: left;
      padding-top: 24px;
      padding-bottom: 24px;
    }

    h3 {
      text-align: left;
      color: rgba(0, 17, 51, 0.8);
      padding-top: 24px;
      padding-bottom: 24px;
      font-size: 28px;
      font-weight: 700;
      line-height: 28px;
    }

    h4 {
      margin-bottom: 10px;
      color: rgba(0, 17, 51, 0.9);
      font-family: "Poppins";
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
       padding-top: 24px;
      padding-bottom: 24px;
    }
    li,
    p {
      line-height: 25px;
      font-size: 18px;
      color: rgba(0, 17, 51, 0.6);
    }
    p {
      margin: 14px 0px;
    }
    a {
      font-weight: normal;
    }
    table {
      border: 1px solid #00113326;
      tbody {
        tr {
          color: rgba(0, 17, 51, 0.8);
          border: 1px solid #00113326;
        }
      } 
        text-align: left;
        border-collapse: collapse;
        border: 1px solid #00113326;
        width: 100%;
        box-sizing: border-box;
        &.one {
          border: none;
          tr,
          td {
            border: none;
          }
         
          tr {
            padding: 0;
            width: 100%;
            display: flex;
            flex-direction: row;
            td {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: flex-start;
              width: 50%;
              border: 1px solid #00113326;
            }
          }
        }
        th {
        background: #ffdffe;
          border: 1px solid #00113326;
          max-width: 50%;
          width: 100%;
          padding-left: 15px;
          p { font-weight:600; }
          .table-title {
            max-width: 25%;
          }
        }
        tr {
          border: 1px solid #00113326;
          padding-left: 15px;
        }
        td {
          border: 1px solid #00113326;
          padding: 15px;
        }
      }
  }
`;
