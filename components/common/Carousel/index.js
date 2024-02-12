import Image from 'next/image'
import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from "swiper";
// import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { PrismicRichText } from "@prismicio/react";
// import { RichText } from "prismic-reactjs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { CarouselContainer, Card, Header, Footer, TextCard, TextDescription } from "./CarouselStyles";

const Span = ({ text }) => <span>{text && text}</span>

export const Carousel = ({ items }) => {
  SwiperCore.use();
  // SwiperCore.use([Autoplay]);

  const cards = items;

  return (
    <CarouselContainer items={items}>

      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        navigation
        centeredSlides={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          960: {
            slidesPerView: 3,
            centeredSlidesBounds: true,
          },
        }}
      >
        {cards.map((slide, i) => (
          <SwiperSlide key={i}>
            <Card>
              <Header>
                {slide.cardImage && (
                  <>
                    <div className="image">
                      <img
                        src={slide?.cardImage?.url || null}
                        alt={slide?.cardImage?.alt || ""}
                      />
                    </div>
                    <TextCard>
                      {slide?.cardTitle && <PrismicRichText field={slide?.cardTitle || ""} />}
                    </TextCard>
                    <TextDescription>
                      {slide?.cardDescription && <PrismicRichText field={slide?.cardDescription || ""} />}
                    </TextDescription>
                  </>
                )}
              </Header>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
};
