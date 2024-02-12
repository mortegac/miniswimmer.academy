import { SliceFactory } from "../../../../common/Containers";
import { Description, Container, Title, ImgHolder } from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";

import { motion } from 'framer-motion'

const Base = (props) => {
  const { description, imgswapp, title, subtitle, projects, imageapplestore } = props.primary;


  return (
    <Container>
      {/* <ImgContent>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          whileInView={{ y: [0, 50] }}
        >
          <picture>
            <source srcSet={imgswapp.url} media="(max-width: 500px)" />
            <img src={imgswapp.url} alt="project image" />
          </picture>
        </motion.div>
      </ImgContent> */}
      <ImgHolder>
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} exit={{ opacity: 0 }}>
          <picture>
            <source srcSet={imgswapp.url} media="(max-width: 630px)" />
            <img src={imgswapp.url} alt="Estadistica Greta" />
          </picture>
        </motion.div>
      </ImgHolder>

      <Description>
        <Title>{subtitle && subtitle}</Title>
        <Title>{title && RichText.render(title)}</Title>
        {/* {title && RichText.render(title)} */}
        <motion.div
          whileInView={{ y: [0, 50] }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
        >
          {description && RichText.render(description)}
        </motion.div>

      </Description>
    </Container>
  );
};

export const Default = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundColor: "white",
      // borderRadius: '100%',
      // backgroundImage: "linear-gradient(188deg, #078FF1 , #33C7DA 65% )",

    }
  }
});