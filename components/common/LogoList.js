import { ItemsContainer, Button } from "./LogoListStyle";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from "swiper";
// import SwiperCore, { Navigation, Pagination } from 'swiper';

import 'swiper/css';

const LogoList = props => {
  const { list } = props;
  return (
    <ItemsContainer>
      <Swiper
        spaceBetween={5}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}

        modules={[Navigation, Pagination, A11y, Autoplay]}
        // navigation={false}
        centeredSlides={true}
        // pagination={{ clickable: false }}
        // navigation={{
        //   nextEl: ".custom_next",
        //   prevEl: ".custom_prev"
        // }}
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
            slidesPerView: 5,
            centeredSlidesBounds: true,
          },
        }}
      >

        {Array.isArray(list)
          ? list.map((box, index) => {
            return (
              // <SwiperSlide >
              <SwiperSlide key={index}>

                <li
                  className="item"
                  key={`box-item-${index}`}
                // style={{ backgroundColor: "black" }}
                >
                  <img src={box?.logoImage?.url || "-"} alt="" />
                  {/* <h4>Industria</h4>
              <span>Conoce cómo funciona Greta en la Minería</span>
              <Button>
              Seguir Leyendo
            </Button> */}
                </li>
              </SwiperSlide>
            )
          })
          : null}
      </Swiper>
    </ItemsContainer>
  );
};

export default LogoList;
