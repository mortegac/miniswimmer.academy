import { ItemsWrapper, Item, Header, Footer, Box } from "./ItemsContainerStyles";
import { PrismicRichText } from "@prismicio/react";
import { RichText } from "prismic-reactjs";

export const ItemsContainer = ({ items }) => {
  const cards = items;
  return (
    <ItemsWrapper>
      {console.log('---items---', items)}
      {cards.map((card, i) => (
        <Item key={i} >
          <Header>
            {card.cardImage && (
              <div className="image">
                <img
                  src={card.cardImage.url}
                  alt={card.cardImage.alt || "item-image"}
                />
              </div>
            )}
            {card.cardTitle && <PrismicRichText field={card.cardTitle} />}
            <Box>
              {card.cardDescription && <PrismicRichText field={card.cardDescription} />}
            </Box>
          </Header>

          {/* <Footer>
            {card.authorName && <PrismicRichText field={card.authorName} />}
            {card.authorInfo && <PrismicRichText field={card.authorInfo} />}
            {card.ctaText && (
              <a href={card.ctaUrl.url}>{RichText.asText(card.ctaText)}</a>
            )}
          </Footer> */}
        </Item>
      ))}
    </ItemsWrapper>
  );
};
