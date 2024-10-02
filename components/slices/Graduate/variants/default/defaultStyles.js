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
  h2 {
    margin: 0;
    margin-bottom: 24px;
    font-weight: ${(props) => props.theme.typography.h2.desktop.fontWeight};
    line-height: ${(props) => props.theme.typography.h2.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
    color: ${(props) => props.theme.colors.textDarkblue};
    text-align: center;
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
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
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
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