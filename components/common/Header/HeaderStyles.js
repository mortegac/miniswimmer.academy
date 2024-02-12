import styled from "styled-components";

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const navMenuItems = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 },
};

export const Anchor = styled.a`
  margin: 0;
  &.fullwidth {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  text-decoration: none;
`;
export const ButtonContainer = styled.button`
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
  height: ${(props) => props.theme.button.height};
  
  background:${(props) => props.theme.colors.white};
  
  color:${(props) => props.theme.colors.grey};
  
  :hover {
    background: #e4e1e1;
    color:${(props) => props.theme.colors.grey};
  }
  padding:${(props) => props.theme.button.padding};
  
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    padding: 8px 16px;
    font-size: 16px;
    height: 40px;
  }

  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.secondary};
  border-bottom: 1px solid rgba(0, 17, 51, 0.05);
  z-index: 9999;
  height: 65px;

  @media (max-width: 1000px) {
    height: 57px;
  }

  .navButton {
    height: 24px;
  }
`;

export const SectionContainer = styled.div`
  max-width: ${(props) => props.theme.sliceContainer.maxWidth};
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  width: 100%;
  height: 100%;
  // flex-direction: row;
  align-items: center;
  
  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 999;
    display: none;
    margin-right: -12px;
    @media (max-width: 1000px) {
      display: flex;
      max-width: 44px;
    }
  }
  .hamRotate.active {
    transform: rotate(45deg);
    .line {
      stroke: #001133c1;
    }
  }
  .hamRotate180.active {
    transform: rotate(180deg);
  }
  .line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: #013;
    stroke-width: 5.5;
    stroke-linecap: round;
    transition: all 0.4s ease;
  }
  .ham8 .top {
    stroke-dasharray: 40 160;
  }
  .ham8 .middle {
    stroke-dasharray: 40 142;
    transform-origin: 50%;
    transition: transform 400ms;
  }
  .ham8 .bottom {
    stroke-dasharray: 40 85;
    transform-origin: 50%;
    transition: transform 400ms, stroke-dashoffset 400ms;
  }
  .ham8.active .top {
    stroke-dashoffset: -64px;
  }
  .ham8.active .middle {
    //stroke-dashoffset: -20px;
    transform: rotate(90deg);
  }
  .ham8.active .bottom {
    stroke-dashoffset: -64px;
  }
`;
// export const SectionContainer = styled.div`
//   max-width: ${(props) => props.theme.sliceContainer.maxWidth};
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 24px;
//   a {
//     display: flex;
//     height: 39px;
//     letter-spacing: 0px;
//   }
// `;
export const LeftWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 1000px) {
    display: none;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0px;
    list-style: none;
    height: 100%;
    padding: 0;
    a {
      letter-spacing: 0px;
      height: 100%;
      li {
        position: relative;
        height: 100%;
        padding: 0 20px 0 20px;
        margin: 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: bold;
        color: #00113399;
        transition: color 0.4s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        letter-spacing: 0px;
        &:hover {
          color: ${(props) => props.theme.colors.textPrimary};
        }
        .underline {
          position: absolute;
          width: 100%;
          left: 0;
          bottom: -1px;
          transition: all 0.5s ease;
          height: 2px;
          background: ${(props) => props.theme.colors.primary};
          opacity: 0;
          transition: opacity 0.4s ease;
        }
      }
    }
    a.selected {
      li {
        letter-spacing: 0px;
        color: ${(props) => props.theme.colors.primary};
        .underline {
          opacity: 1;
        }
      }
    }
  }
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    a {
      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
`;
export const MobileNavContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  // background: rgb(250, 250, 251);
  background: ${(props) => props.theme.colors.secondary};
  transform: translateX(100%);
  transition: transform 0.3s ease;

  #NavMobile {
    padding: 9px 0px 0px 24px;
  }

  #NavMenuMobile {
    margin-top: 38px;
    padding-left: 24px;
  }

  .button-wrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 24px 24px 8px;
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      flex-direction: column;
      gap: 24px;
    }
    a {
      width: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
  ul {
    list-style: none;
    display: flex;
    letter-spacing: 0px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px;
    margin-bottom: 0;
    padding: 9px 0px 0px 24px;
    &:first-child {
      margin-top: 81px;
    }
    li {
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 42px;
      letter-spacing: 0px;
      color: #00113399;
      display: flex;
      &.lang {
        text-transform: uppercase;
        svg {
          margin-right: 8px;
        }
      }
      &.selected {
        a {
          color: ${(props) => props.theme.colors.primary};
        }
      }
      a {
        align-items: center;
        height: auto;
        letter-spacing: 0px;
        font-weight: normal;
        text-decoration: none;
        color: #00113399;
        &.selected {
          color: ${(props) => props.theme.colors.primary};
        }
      }
    }
  }
  @media (max-width: 1000px) {
    display: flex;
  }
  &.on {
    transform: translateX(0%);
  }
`;
