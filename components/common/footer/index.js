import styled from "styled-components";
import PropTypes from "prop-types";

import FooterList from "./subComponents/FooterList/FooterList";
import SocialLinks from "./subComponents/SocialLinks/SocialLinks";
// import TrustPilot from "./subComponents/TrustPilot";
// import Logo from "./subComponents/Logo/Logo";
import FooterCopyright from "./subComponents/FooterCopyright/FooterCopyright";

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 48px 24px;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "white"};
`;

const FooterItemsContainer = styled.div`
  width: 45%;
  max-width: 1140px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

const Footer = ({
  items,
}) => {
  const { data: { data }, data: { textrights } } = items
  return (
    <FooterWrapper backgroundColor={"#2b2b2b"}>
      <FooterItemsContainer>
        <FooterCopyright copyrightText="MiniSwimmer Academy © 2024, Inc. All Rights Reserved." />
        <FooterList title={"Academy"} items={items} />
        <SocialLinks socialTitle={" "} />
      </FooterItemsContainer>
     <div class="international-sites">
        <h3>Conozca los Sitios de la compañia</h3>
        <nav>
            <a href="https://miniswimmer.cl/" hreflang="es">miniswimmer Chile</a>
            <a href="https://miniswimmer.us/" hreflang="en-US">US miniswimmer</a>
            <a href="https://miniswimmer.academy/" hreflang="en">Academia</a>
            <a href="https://miniswimmer.org/" hreflang="x-default">Fundación</a>
        </nav>
    </div>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  // logo: PropTypes.string,
  // copyrightText: PropTypes.string,
  // backgroundColor: PropTypes.string,
  // columnTitle: PropTypes.string,
  // items: PropTypes.array,
  // socialTitle: PropTypes.string,
};

Footer.defaultProps = {
  // logo: "/logo.svg",
  // copyrightText:
  //   "Greta © 2023 , Inc. Todos los derechos reservados.",
  // backgroundColor: "gray",
  // columnTitle: "Electro Move",
  // socialTitle: "Follow us",
};

export default Footer;
