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

  // window.console.log("--header--", header?.data?.logo?.url  )
  
  const blog=[ {
    "label": "Blog",
    "link": {
      "id": "blog",
      "type": "page",
      "tags": [],
      "lang": "en-us",
      "slug": "blog",
      "first_publication_date": "2024-08-25T19:24:44+0000",
      "last_publication_date": "2024-12-20T16:06:00+0000",
      "uid": "blog",
      "link_type": "Document",
      "key": "a88265c2-f56d-4a8c-90c1-7490b5892f84",
      "isBroken": false
    }
  }
]
  
  return (
    <NavContainer>
      {/* <pre style={{color: "white"}}>{header?.data?.logo?.url}</pre> */}
      <SectionContainer>
        <LinkLogo url={header?.data?.logo?.url}/>
        <LeftWrap>
          <ul>{renderedMenuLinks(menuLinks, pagename)}</ul>
          <ul>{renderedMenuLinks(blog, pagename)}</ul>
        
          
          {/* <pre>{JSON.stringify( menuLinks, null, 2)}</pre> */}
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
