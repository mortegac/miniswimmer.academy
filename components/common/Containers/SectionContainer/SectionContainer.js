import PropTypes from "prop-types";
import Image from "next/image";
import {
  SectionContainerBase,
  SectionBackgroundImage,
} from "./SectionContainerStyles";

// const SectionContainer = ({ children, bgImage, ...rest }) => {
const SectionContainer = ({ children, bgImage, bgImageSrc, bgImageUrl, base, ...rest }) => {
  return (
    <SectionContainerBase {...rest}>
      {bgImage && (
        <SectionBackgroundImage image={bgImageSrc}>
          {/* <Image
            src={bgImageSrc}
            alt="background image"
            layout="fill"
            objectFit="cover"
            quality={100}
          /> */}
        </SectionBackgroundImage>
      )}
      {children}
    </SectionContainerBase>
  );
};

SectionContainer.propTypes = {
  children: PropTypes.element,
  rest: PropTypes.element,
};

SectionContainer.defaultProps = {};

export default SectionContainer;
