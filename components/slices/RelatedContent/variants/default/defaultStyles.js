import styled from "styled-components";




export const ItemsWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 6px;
grid-row-gap: 6px;
  // width: 100%;
  // display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
margin-left: 200px;
background:pink;
  // padding: .5rem;
  // background:#f7f7f7;
  // padding-left: 1rem;
  // padding-top: 16px;
  // padding-right: 1rem;
  border-top: 1px solid #f3f3f3;
  border-bottom: 1px solid #f3f3f3;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 1rem;
  
  background-color: pink;
  max-height : 100px;
  min-height : 200px;
  // margin-bottom: 50px;
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
  bottom: 5px;
  right: 10px;
  
  &:hover {
    background: #7E397C;
  }
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 220px;
  overflow: hidden;
  position: relative;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
  
}
`;

export const CardImage = styled.div`
  width: 40%;
  .image {
    width: 200px;
    height: 220px;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
}
`;

export const CardContent = styled.div`
  width: 60%;
  padding: 4px 8px 0 8px;
  // background:#f7f7f7;
  h3{
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
    min-height: 70px;
    max-height: 70px;
    overflow: hidden;
  }
  p{
    border-top: 1px solid #f3f3f3;
    padding: 4px 10px 0 10px;
    background:#f7f7f7;
    margin-right:-10px;
    height: 200px;
    font-size: 14px;
  }
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
    width: 200px;
    height: 220px;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
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
  height: 220px;
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




export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  // h2 {
  //   margin: 0;
  //   margin-bottom: 24px;
  //   font-weight: ${(props) => props.theme.typography.h2.desktop.fontWeight};
  //   line-height: ${(props) => props.theme.typography.h2.desktop.lineHeight};
  //   font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
  //   color: ${(props) => props.theme.colors.textDarkblue};
  //   text-align: center;
  //   @media (max-width: ${(props) => props.theme.breakpoints.md}) {
  //     font-weight: ${(props) => props.theme.typography.h2.desktop.fontWeight};
  //     line-height: ${(props) => props.theme.typography.h2.desktop.lineHeight};
  //     font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
  //   }
  // }
  h3 {
    // margin-bottom: 64px;
    border-bottom: 1px solid #f3f3f3;
    padding-bottom: 24px;
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
  span{
    color:rgb(113, 112, 111);
    }
  .item {
    display: flex;
    padding: 0.3rem 1rem 0.3rem 1rem;
    background-color: #ee57e833;
    border: 1px solid pink;
    border-radius: 20px;
    margin-left:10px;
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