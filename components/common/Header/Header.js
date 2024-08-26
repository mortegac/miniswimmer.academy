import React, { useState } from "react";


import { renderedMenuLinks, LinkLogo } from './utils';

import {
  LeftWrap,
  NavContainer,
  SectionContainer,
  Anchor,
  ButtonContainer,
  MobileNavContainer
} from "./HeaderStyles";



export const Header = ({
  header,
  pagename,
  activeDocMeta,
}) => {

  const [open, setOpen] = useState(false);

  const HamburgerBehavior = () => {
    setOpen(!open);
  };

  activeDocMeta.lang = header.lang;

  const menuLinks = header?.data?.menulinks || [];
  const calltoactiontext = header?.data?.calltoactiontext || [];
  const calltoactionUri = header?.data?.calltoactionurl.uid || {};
  // const calltoactionUri = header?.data?.calltoactionurl.url || {};

  return (
    <NavContainer>
      <SectionContainer>
        <LinkLogo />
        <LeftWrap>
          <ul>{renderedMenuLinks(menuLinks, pagename)}</ul>
          {/* <pre>{JSON.stringify( calltoactionUri, null, 2)}</pre> */}
          <Anchor id={calltoactionUri} href={calltoactionUri}>
            <ButtonContainer fullwidth={true}>
              {calltoactiontext[0]?.text || "Contact"}
            </ButtonContainer>
          </Anchor>
        </LeftWrap>
        <svg
          className={`ham hamRotate ham8 ${open && "active"}`}
          viewBox="0 0 100 100"
          width="50"
          onClick={HamburgerBehavior}
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
          />
        </svg>
        <MobileNavContainer className={open && "on"}>
          {open && (
            <>
              <div style={{ padding: "10px 10px" }}>
                <LinkLogo />
              </div>
              <ul>{renderedMenuLinks(menuLinks, pagename)}</ul>
              <Anchor id={calltoactionUri} href={calltoactionUri} target="_blank">
                <ButtonContainer fullwidth={true}>
                  {calltoactiontext[0]?.text || "Contact"}
                </ButtonContainer>
              </Anchor>
            </>
          )}
        </MobileNavContainer>

      </SectionContainer>
    </NavContainer >
  );
};
