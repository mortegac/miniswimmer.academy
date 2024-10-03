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
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          960: {
            slidesPerView: 1,
            centeredSlidesBounds: true,
          },
        }}
      >
        {cards.map((slide, i) => (
          <SwiperSlide key={i}>
            <Card>
              <Header>
                <div className='imageBox'>
                  <img src={slide?.image?.url || "-"} alt="" />
                  <div className="boxNameStart">                 
                    <PrismicRichText field={slide.name}/>
                    <div className="boxStart">
                      { Array.from({ length: 5 }, (_, index) => (
                        <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0882 3L17.2883 16.83L2.08936 19.035L13.0888 29.805L10.4884 45L24.0882 37.83L37.688 45L35.0876 29.805L46.087 19.05L30.8881 16.83L24.0882 3Z" 
                            fill={index < slide?.numbersofstars ? "#AE5EAB" : "lightgray"}/>
                        </svg>
                        ))
                      } 
                    </div>
                  </div>
                </div>
                 {
                    slide?.recomendation &&
                    <PrismicRichText field={slide?.recomendation}/>
                  }                      
                {/* {slide.cardImage && (
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
                )} */}
              </Header>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
};
