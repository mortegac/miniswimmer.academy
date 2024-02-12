import styled from "styled-components";

// export const LogoAnimation = styled.div`
// // .loadingio-spinner-ellipsis-8732go0ttei {
//   width: 200px;
//   height: 200px;
//   display: inline-block;
//   overflow: hidden;
//   background: rgba(NaN, NaN, NaN, 0);
// //  }

// @keyframes ldio-ey0gneaypu8 {
//   0% { transform: translate(12px,80px) scale(0); }
//  25% { transform: translate(12px,80px) scale(0); }
//  50% { transform: translate(12px,80px) scale(1); }
//  75% { transform: translate(80px,80px) scale(1); }
// 100% { transform: translate(148px,80px) scale(1); }
// }
// @keyframes ldio-ey0gneaypu8-r {
//   0% { transform: translate(148px,80px) scale(1): }
// 100% { transform: translate(148px,80px) scale(0); }
// }
// @keyframes ldio-ey0gneaypu8-c {
//   0% { background: #c2f79b }
//  25% { background: #07bc0c }
//  50% { background: #e81a68 }
//  75% { background: #a1a0a5 }
// 100% { background: #c2f79b }
// }
// .ldio-ey0gneaypu8 div {
//  position: absolute;
//  width: 40px;
//  height: 40px;
//  border-radius: 50%;
//  transform: translate(80px,80px) scale(1);
//  background: #c2f79b;
//  animation: ldio-ey0gneaypu8 1s infinite cubic-bezier(0,0.5,0.5,1);
// }
// .ldio-ey0gneaypu8 div:nth-child(1) {
//  background: #a1a0a5;
//  transform: translate(148px,80px) scale(1);
//  animation: ldio-ey0gneaypu8-r 0.25s infinite cubic-bezier(0,0.5,0.5,1), ldio-ey0gneaypu8-c 1s infinite step-start;
// }.ldio-ey0gneaypu8 div:nth-child(2) {
//  animation-delay: -0.25s;
//  background: #c2f79b;
// }.ldio-ey0gneaypu8 div:nth-child(3) {
//  animation-delay: -0.5s;
//  background: #a1a0a5;
// }.ldio-ey0gneaypu8 div:nth-child(4) {
//  animation-delay: -0.75s;
//  background: #e81a68;
// }.ldio-ey0gneaypu8 div:nth-child(5) {
//  animation-delay: -1s;
//  background: #07bc0c;
// }

// .ldio-ey0gneaypu8 {
//  width: 100%;
//  height: 100%;
//  position: relative;
//  transform: translateZ(0) scale(1);
//  backface-visibility: hidden;
//  transform-origin: 0 0; /* see note above */
// }
// .ldio-ey0gneaypu8 div { box-sizing: content-box; }
// `;
export const IconList = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
`;
export const IconContainer = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 118px;
  left: 285px;
  top: 153px;
  background: ${(props) => props.selected ? "#bab8b8" : "#FFFFFF"};
  opacity:  ${(props) => props.selected ? "0.6" : "1"};
  box-shadow: 0px 10px 19px rgba(0, 17, 51, 0.15);
  border-radius: 21.9899px;
  span{
    margin-top: 16px;
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
  }
  :hover {
    background-color: #bab8b8;
    opacity: 0.3;
    color: ${(props) => props.theme.colors.primary};
  }
  :active {
    background-color: #bab8b8;
    opacity: 0.6;
    color: ${(props) => props.theme.colors.primary};
  }

  

`;
// export const IconContainer2 = styled.div`
// /* Picture */

// position: absolute;
// width: 100px;
// height: 128px;
// left: 285px;
// top: 153px;

// /* Theme/Light */
// background: #FFFFFF;
// box-shadow: 0px 10px 19px rgba(0, 17, 51, 0.15);
// border-radius: 21.9899px;


// /* sir123 */

// position: absolute;
// width: 619px;
// height: 619px;
// left: -169.98px;
// top: -6.83px;



// /* Title */

// position: absolute;
// width: 61px;
// height: 20px;
// left: 20px;
// top: 73px;

// font-family: 'Nunito Sans';
// font-style: normal;
// font-weight: 700;
// font-size: 16px;
// line-height: 20px;
// /* identical to box height, or 125% */
// text-align: center;
// letter-spacing: 0.136569px;

// color: rgba(0, 17, 51, 0.6);



// /* Bus 2 */

// position: absolute;
// width: 32px;
// height: 32px;
// left: 34px;
// top: 21px;



// /* Bus 1 */

// position: absolute;
// width: 32px;
// height: 32px;
// left: 34px;
// top: 21px;

// background: url(.png);

// `;


export const Tooltip = styled.div`
 
.tooltip-text{
  margin:-20px;
  margin-left: -43px !important;
  bottom: 102% !important;
}
  svg {
    margin-bottom: 4px;
    margin-right: 6px;
  }
  .tooltip {
    position: relative;
    display: inline-block;
    margin-top: 18px;
    
    path {
      fill: #b4b8c1;
    }
  }

  .tooltip:hover,
  .tooltip:active {
    path {
      fill: #3FBB49;
    }
  }

  @media (max-width: 500px) {
    .tooltip {
      display: none;
    }
  }

  @media (min-width: 501px) {
    .tooltipmodal {
      display: none;
    }
  }

  // .tooltip h3 {
  //   color: rgba(0, 17, 51, 0.3);
  //   margin-top: 0px;
  // }

  // .tooltip {
  //   h4,
  //   p {
  //     color: rgba(0, 17, 51, 0.8);
  //   }
  // }

  .lastToolTipP {
    margin-bottom: 0px;
  }

  .tooltip-text {
    opacity: 0.2;
    visibility: hidden;
    width: 400px;
    background-color: #F3FDEC;
    color: #fff;
    border-radius: 24px;
    padding: 18px 18px;
    display: flex;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.25px;
    text-align: left;
    position: absolute;
    z-index: 1;

    // TOP POSITIION
    bottom: 125%;
    left: 50%;
    margin-left: -60px;

    // LEFT POSITIION
    // top: -217%;
    // left: 100%;
    // margin-left: 18px;
  }

  .tooltip .tooltip-text::after {
    content: "";
    position: absolute;

    // left: 10%;
    // bottom: 0%;
    
    // margin-left: -5px;

    // transform: translateY(10%);

    // border-width: 15px;
    // border-style: solid;
    // border-color: transparent rgb(188 188 188 / 20%) transparent transparent;
    
    
    // bottom: calc(50% - 10px);
    // top: 150px;
    // border-style: solid;
    // border-width: 0 8px 8px 8px;
    // border-color: transparent transparent #bfbfbf transparent;
    
  }

  .tooltip:hover .tooltip-text {
    @media (min-width: 501px) {
      visibility: visible;
      opacity: 1;
      transition: opacity 0.5s ease-in-out;
    }
  }

  @media (max-width: 500px) {
    .tooltip-text {
      left: -240px;
    }
  }
`;

// export const Popover = styled.div`

// a {
//   text-decoration: none;
// }
// svg {

//   height: 24px;
//   margin-bottom: 10px;
//   margin-right: 6px;
// }

// .popover__title {
//   font-size: 24px;
//   line-height: 36px;
//   text-decoration: none;
//   color: rgb(228, 68, 68);
//   text-align: center;
//   padding: 15px 0;
// }

// .popover__wrapper {
//   position: relative;
//   margin-top: 1.5rem;
//   display: inline-block;
// }



// .popover__content {
//   opacity: 0;
//   visibility: hidden;
//   position: absolute;
//   left: -94px;
//   top: -116px;
//   transform: translate(0, 10px);
//   padding: 1.5rem;  
//   width: 200px;
//   min-height: 150px;
//   background: white;
//   border: 1px solid rgba(0, 17, 51, 0.15);
//   border-radius: 24px;

// }
// .popover__content:before {
//   position: absolute;
//   z-index: -1;
//   content: "";
//   right: calc(50% - 10px);
//   top: 150px;
//   border-style: solid;
//   border-width: 0 8px 8px 8px;
//   border-color: transparent transparent #bfbfbf transparent;
//   transition-duration: 0.3s;
//   transition-property: transform;
// }
// .popover__wrapper:hover .popover__content {
//   z-index: 10;
//   opacity: 1;
//   visibility: visible;
//   transform: translate(0, -40px);
//   transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
// }
// .popover__message {
//   text-align: center;
// }

// `;
export const ModalContainer = styled.div`
  .bottomModal{
    width: 60%;
    color: white;
    font-weight: bold;
    font-family: ${(props) => props.theme.typography.fontFamily};
    white-space: nowrap;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    line-height: 24px;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;
    height: ${(props) => props.theme.button.height};
    border-radius: ${(props) => props.theme.button.borderRadius};
    background:${(props) => props.theme.button.bgPrimary};
    border: 1px solid ${(props) => props.theme.button.bgPrimary};
    :hover {
      background-color: ${(props) => props.theme.button.bgPrimaryOver};
    }
    padding:${(props) => props.theme.button.padding};
    

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 100%;
    }
  }
  .bottomModal-simple{
    width: 60%;
    color: ${(props) => props.theme.button.bgPrimary};
    font-weight: bold;
    font-family: ${(props) => props.theme.typography.fontFamily};
    white-space: nowrap;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    line-height: 24px;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;
    height: ${(props) => props.theme.button.height};
    border-radius: ${(props) => props.theme.button.borderRadius};
    background: white;
    border: 1px solid ${(props) => props.theme.button.bgPrimary};
    :hover {
      background-color: ${(props) => props.theme.button.bgPrimaryOver};
    }
    padding:${(props) => props.theme.button.padding};
    margin-bottom: 16px;
  
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 100%;
    }
  }
  
  
h3{
  color: green;
  text-align: center;
  margin: 24px 0 16px 0;
  font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
  font-weight: ${(props) => props.theme.typography.p.desktop.lineHeight};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: 22px;
  line-height: ${(props) => props.theme.typography.p.desktop.lineHeight};
  margin-top: 14px;
  letter-spacing: 0px;
  width: 100%;
  line-height: 1.4;
  margin: 0;
  padding: 1em 0.5em;
  color: ${(props) => props.theme.colors.primary};
}
.modal-background {
  display: ${(props) => props.isVisible};
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
}
.modal {
  overflow: scroll;
  display: ${(props) => props.isVisible};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 900px;
  height: 700px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 4px;
  z-index: 99999;
}
.modal > p {
	padding: 15px;
    margin: 0;
}
.modal-header {
	// background-color: #f9f9f9;
    // border-bottom: 1px solid #dddddd;
    box-sizing: border-box;
    height: 20px;
}
.modal-header h3 {
	margin: 0;
    box-sizing: border-box;
    padding-left: 15px;
    line-height: 50px;
    color: #4d4d4d;
    font-size: 16px;
    display: inline-block;
}
.modal-header label {
	  box-sizing: border-box;
    border: 0;
    float: right;
    line-height: 50px;
    padding: 0 15px 0 15px;
    cursor: pointer;
}
.modal-header label:hover img {
	opacity: 0.6;
}

`;


export const TableHeader = styled.div`
  .bottomModal{
    color: white;
    font-weight: bold;
    font-family: ${(props) => props.theme.typography.fontFamily};
    white-space: nowrap;
    font-size: 16px;
    margin-top: 36px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    line-height: 24px;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;
    height: ${(props) => props.theme.button.height};
    border-radius: ${(props) => props.theme.button.borderRadius};
    background:${(props) => props.theme.button.bgPrimary};
    border: 1px solid ${(props) => props.theme.button.bgPrimary};
    :hover {
      background-color: ${(props) => props.theme.button.bgPrimaryOver};
    }
    padding:${(props) => props.theme.button.padding};
    

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 100%;
    }
  }

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: inherit;
  padding-top: 2em;
  padding-bottom: 2em;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    .rg-dek{
      font-size: 10px;  
    }
  }
  .rg-dek{
    font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
    font-weight: ${(props) => props.theme.typography.p.desktop.lineHeight};
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: 22px;
    line-height: ${(props) => props.theme.typography.p.desktop.lineHeight};
    margin-top: 14px;
    letter-spacing: 0px;
    width: 100%;
    line-height: 1.4;
    margin: 0;
    padding: 1em 0.5em;
    color: ${(props) => props.theme.colors.primary};
  }
`;
export const TableContainer = styled.div`
  font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
  line-height: ${(props) => props.theme.typography.p.desktop.lineHeight};
  font-weight: ${(props) => props.theme.typography.p.desktop.lineHeight};
  color: ${(props) => props.theme.colors.textSecondary};
  font-family: ${(props) => props.theme.typography.fontFamily};
  margin-top: 14px;
  letter-spacing: 0px;
  width: 100%;
  font-size: 15px;
  line-height: 1.4;
  margin: 0;
  padding: 1em 0.5em;
  color: ${(props) => props.theme.colors.primary};

.rg-header {
    margin-bottom: 1em;
    text-align: left;
  }
  
  .rg-header > * {
    // display: block;
  }
  .rg-hed {
    font-weight: bold;
    font-size: 1em;
  }
  .rg-dek {
    font-size: 1em;    
    color: ${(props) => props.theme.colors.primary};
  }
  
  .rg-source {
    margin: 0;
    font-size: 0.75em;
    text-align: right;
  }
  .rg-source .pre-colon {
    text-transform: uppercase;
  }
  
  .rg-source .post-colon {
    font-weight: bold;
  }
  
  /* table */
  table.rg-table {
    width: 100%;
    margin-bottom: 0.5em;
    border-collapse: collapse;
    border-spacing: 0;
  }
  table.rg-table tr {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  table.rg-table thead {
    border-bottom: 1px solid #ddd;
    padding-bottom: 1.35em;
  }
  table.rg-table tr {
  }
  table.rg-table tr.highlight {
    background-color: #dcf1f0 !important;
    
  }
  table.rg-table.zebra tr:nth-child(even) {
    background-color: #f6f6f6;
  }
  table.rg-table th {
    font-weight: bold;
    padding: 0.35em;
    padding-bottom: 1.35em;
  }
  table.rg-table td {
    padding: 0.65em;
    padding-top: 1.35em;
    padding-bottom: 1.35em;
    // background-color: #fafafa;
  
  }
  table.rg-table .highlight td {
    font-weight: bold;
  }
  table.rg-table th.number,
  td.number {
    text-align: center;
  }
  
  /* media queries */
  @media screen and (max-width: 600px) {
    .rg-container {
      max-width: 600px;
      margin: 0 auto;
    }
    table.rg-table {
      width: 100%;
    }
    table.rg-table tr.hide-mobile,
    table.rg-table th.hide-mobile,
    table.rg-table td.hide-mobile {
      display: none;
    }
    table.rg-table thead {
      display: none;
    }
    table.rg-table tbody {
      width: 100%;
    }
    table.rg-table tr,
    table.rg-table th,
    table.rg-table td {
      display: block;
      padding: 0;
      padding: 6px;
    }
    table.rg-table tr {
      border-bottom: none;
      margin: 0 0 1em 0;
      padding: 0.5em;
    }
    table.rg-table tr.highlight {
      background-color: inherit !important;
    }
    table.rg-table.zebra tr:nth-child(even) {
      background-color: transparent;
    }
    // table.rg-table.zebra td:nth-child(even) {
    //   background-color: #f6f6f6;
    // }
    // table.rg-table tr:nth-child(even) {
    //   background-color: transparent;
    // }
    table.rg-table td {
      padding: 1.5em 1em 0.25em 1em;
      text-align: left;
    }
    table.rg-table td[data-title]:before {
      content: attr(data-title);
      font-weight: bold;
      display: inline-block;
      content: attr(data-title);
      margin-right: 0.5em;
      font-size: 0.95em;
    }
    table.rg-table td:last-child {
      padding-right: 0;
    }
    table.rg-table td:empty {
      display: none;
    }
    table.rg-table .highlight td {
      background-color: inherit;
      font-weight: normal;
    }
}

`;




// fin:  TABLE
export const PageContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 490px;
  margin-top:64px;
  margin-bottom:64px;
  text-align: left;
  h2{
    text-align: center;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // min-height: 512px;
  position: relative;

  #hiddenForm {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  width: 100%;
  input[type="submit"]{
    height: ${(props) => props.theme.button.height};
    margin-top: 0 !important;
    width:40% !important;
  }

  .buttonStyle{
    font-weight: bold;
    font-family: ${(props) => props.theme.typography.fontFamily};
    white-space: nowrap;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    line-height: 24px;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;
    height: ${(props) => props.theme.button.height};
    border-radius: ${(props) => props.theme.button.borderRadius};
    
    color: ${(props) => props.theme.button.bgPrimary};
    background:white;
    border: 1px solid ${(props) => props.theme.button.bgPrimary};
    :hover {
      background-color: ${(props) => props.theme.button.bgPrimaryOver};
    }
    padding:${(props) => props.theme.button.padding};
    margin-right: 16px;

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 100%;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 800px;
  background: white;
  border: 1px solid rgba(0, 17, 51, 0.15);
  border-radius: 24px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  .box-center{
    width: 100%;   
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
    animation: fadeIn ease 1s;
    -webkit-animation: fadeIn ease ;
    -moz-animation: fadeIn ease 1s;
    -o-animation: fadeIn ease 1s;
    -ms-animation: fadeIn ease 1s;
  }
  
  @keyframes {
    0% {
      opacity:0;
    }
    40% {
      opacity:1;
    }
  }
  
  @-moz-keyframes {
    0% {
      opacity:0;
    }
    40% {
      opacity:1;
    }
  }
  
  @-webkit-keyframes {
    0% {
      opacity:0;
    }
    40% {
      opacity:1;
    }
  }
  
  @-o-keyframes {
    0% {
      opacity:0;
    }
    40% {
      opacity:1;
    }
  }
  
  @-ms-keyframes {
    0% {
      opacity:0;
    }
    40% {
      opacity:1;
  }
`;

export const FormContainer = styled.form`

.boxSeparateA{
  width: 30%;
  margin: 0 20px;
  padding: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-right: 2px solid #eeeeee;
  // background-color: pink;
  flex-direction: column;
}
.boxSeparateB{
  width: 30%;
  margin: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
}

.box-input{
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  span { 
    margin-left: 16px;
    font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
    line-height: ${(props) => props.theme.typography.p.desktop.lineHeight};
    font-weight: ${(props) => props.theme.typography.p.desktop.lineHeight};
    color: #a3a3a3;
    font-family: ${(props) => props.theme.typography.fontFamily};
    margin-top: 14px;
    letter-spacing: 0px;
    margin-bottom: 5px;
  } 
}

.box{
  margin: 20px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
}
.add-margin{
  margin-top :22px;
    margin-bottom :22px;
}
.textInput{
    text-align: left;
    height: 48px;
    width: 100%;
    border: 1px solid rgba(0, 17, 51, 0.15);
    border-radius: 6px;
    padding: 13px;
    color: rgba(0, 17, 51, 0.8);
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-weight: 600;
    font-size: 18px;
    transition: all 0.4s ease;
    outline: none;
    box-shadow: 0 0 0 0 transparent;
    // margin:22px 0;
    margin: 0;
    margin-top :22px;
    margin-bottom :22px;
    background-color: rgb(244, 244, 244);
  }

  @media (max-width: 500px) {
    padding: 24px;
  }
  @media (max-width: 400px) {
    border: none;
  }
  h2 {
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
    color: rgba(0, 17, 51, 0.8);
    text-align: center;
    margin: 0;
    letter-spacing: 0px;
  }
  p {
    font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
    line-height: ${(props) => props.theme.typography.p.desktop.lineHeight};
    font-weight: ${(props) => props.theme.typography.p.desktop.lineHeight};
    color: ${(props) => props.theme.colors.textSecondary};
    font-family: ${(props) => props.theme.typography.fontFamily};
    margin-top: 14px;
    margin-bottom: 23px;
    letter-spacing: 0px;
  }

  label {
    font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
    line-height: ${(props) => props.theme.typography.p.desktop.lineHeight};
    font-weight: ${(props) => props.theme.typography.p.desktop.lineHeight};
    color: ${(props) => props.theme.colors.textSecondary};
    font-family: ${(props) => props.theme.typography.fontFamily};
    // margin-top: 14px;
    letter-spacing: 0px;
    margin-bottom: 5px;
  }
  input {
    height: 48px;
    width: 100%;
    border: 1px solid rgba(0, 17, 51, 0.15);
    border-radius: 6px;
    padding: 13px;
    color: rgba(0, 17, 51, 0.8);
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-weight: 400;
    font-size: 14px;
    transition: all 0.4s ease;
    outline: none;
    box-shadow: 0 0 0 0 transparent;
    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary};
    }
    &.error {
      border: 1px solid #ff3355;
    }
  }
 textarea {
    min-height: 48px;
    width: 100%;
    border: 1px solid rgba(0, 17, 51, 0.15);
    border-radius: 6px;
    padding: 13px;
    color: rgba(0, 17, 51, 0.8);
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-weight: 400;
    font-size: 14px;
    transition: all 0.4s ease;
    outline: none;
    box-shadow: 0 0 0 0 transparent;
    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary};
    }
    &.error {
      border: 1px solid #ff3355;
    }
  }
  span {
    font-family: ${(props) => props.theme.typography.fontFamily};
    color: #ff3355;
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 12px;
    line-height: 16px;
    min-height: 22px;
    &.last {
      min-height: unset;
    }
  }

  input[type="submit"] {
    margin-top: 26px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    font-weight: bold;
    border-radius: 24px;
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: 16px;
    line-height: 24px;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;
    height: 48px;
    width: 100%;
    background:${(props) => props.theme.button.bgPrimary};
    border: 1px solid ${(props) => props.theme.button.bgPrimary};
    color:${(props) => props.theme.colors.white};
    :hover {
      background-color: ${(props) => props.theme.button.bgPrimaryOver};
      color: ${(props) => props.theme.colors.white};
    }
    
    appearance: none;
    @media (max-width: 768px) {
      margin-bottom: 16px;
    }
    @media (max-width: 500px) {
      margin-bottom: 0;
    }
  }
  .checkbox-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    border: none;
    input[type="checkbox"] {
      height: 24px;
      width: 24px;
      margin: 0;
      padding: 0 5px;
      &:focus {
        box-shadow: 0 0 0 0 transparent;
      }
    }
    p {
      margin: 0 0 0 10px;
      @media (max-width: 350px) {
        width: 300px;
      }
    }
    a {
      text-decoration: none;
      font-weight: 600;
      color: ${(props) => props.theme.colors.textPrimary};
      transition: all 0.3s ease;
      &:hover {
        color: ${(props) => props.theme.colors.primary};
      }
    }
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
  font-size: 16px;
  line-height: 24px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  height: ${(props) => props.theme.button.height};
  border-radius: ${(props) => props.theme.button.borderRadius};
  background:${(props) => props.theme.button.bgPrimary};
  border: 1px solid ${(props) => props.theme.button.bgPrimary};
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
  width: 100%;
  margin-right: 100px;
  align-items: center;
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
    color: ${(props) => props.theme.colors.textDarkblue};
    text-align: center;
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 70%;
      font-weight:  ${(props) => props.theme.typography.h2.desktop.fontWeight};
      line-height:  ${(props) => props.theme.typography.h2.desktop.lineHeight};
      font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
      margin-bottom: 16px;
    }
  }
`;