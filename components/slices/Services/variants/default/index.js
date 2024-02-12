import { RichText } from "prismic-reactjs";
import Link from "next/link";

import { SliceFactory } from "../../../../common/Containers";
import {
  Description,
  Content,
  ImgHolder,
  ButtonContainer,
  ListContainer,
  ItemsContainer,
  ContentContainer,
  Title
} from "../default/defaultStyles";
import { motion } from 'framer-motion'

const Base = (props) => {
  const { description, image, title, buttontext } = props.primary;

  return (
    <Content style={{ flexDirection: "column" }}>
      <Title>{title[0]?.text && RichText.render(title)}</Title>

      <Content>

        {/* 494x575 */}
        <ImgHolder>
          <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} exit={{ opacity: 0 }}>
            <picture>
              <source srcSet={image.url} media="(max-width: 630px)" />
              <img src={image.url} alt="HeroImg" />
            </picture>
          </motion.div>
        </ImgHolder>

        <Description>
          {description[0]?.text && RichText.render(description)}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            whileInView={{ y: [0, 50] }}
          >
            <ItemsContainer>
              {Array.isArray(props.items)
                ? props.items.map((box, index) => {
                  return index <= 8 ? (
                    <li className="item" key={`box-item-${index}`}>
                      <ListContainer>
                        {box?.imagelist?.url && <img src={box?.imagelist?.url || "-"} alt="" className="img" />}
                        <ContentContainer>
                          <h3>{box.titlelist}</h3>
                          <p>{box.descriptionlist}</p>
                        </ContentContainer>
                      </ListContainer>
                    </li>
                  ) : null;
                })
                : null}
            </ItemsContainer>

            {/* 
          <Link
            key={`comparation-contactButton`}
            href={"contact"}
            passHref
            prefetch
          >
            <ButtonContainer fullwidth={false}>
              {buttontext ? buttontext : `Agende una reunión`}
            </ButtonContainer>
          </Link> */}





          </motion.div>

        </Description>
      </Content>
    </Content>
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
// export const Default = SliceFactory(Base);
// 