import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation"

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../assets/Nfts/babypenguin-1.svg';
import img2 from '../assets/Nfts/babypenguin-2.svg';
import img3 from '../assets/Nfts/babypenguin-3.svg';
import img4 from '../assets/Nfts/babypenguin-4.svg';
import img5 from '../assets/Nfts/babypenguin-5.svg';
import img6 from '../assets/Nfts/babypenguin-6.svg';
import img7 from '../assets/Nfts/babypenguin-7.svg';
import img8 from '../assets/Nfts/babypenguin-8.svg';
import img9 from '../assets/Nfts/babypenguin-9.svg';

import Arrow from '../assets/Arrow.svg'

const Container = styled.div`
width: 25vw;
height: 70vh;

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  background-color: ${props => props.theme.carouselColor};
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-button-next{
  color: ${props => props.theme.text};
  right: 0;
  top: 60%;
  width: 4rem;
  background-image: url(${Arrow});
  background-position: center;
  background-size: cover;

  &::after {
    display: none;
  }
}
.swiper-button-prev{
  color: ${props => props.theme.text};
  left: 0;
  top: 60%;
  width: 4rem;
  transform: rotate(180deg);
  background-image: url(${Arrow});
  background-position: center;
  background-size: cover;

  &::after {
    display: none;
  }
}
`

const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay = {{
            delay: 2000,
            disableOnInteraction: false,
        }}
        pagination={{
            type:'fraction',
        }}
        scrollbar={{
          draggable: true
        }}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        navigation={true}
        effect={"cards"}
        grabCursor={true}

        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt='Baby Penguins' /> </SwiperSlide>
        <SwiperSlide><img src={img2} alt='Baby Penguins' /> </SwiperSlide>
        <SwiperSlide><img src={img3} alt='Baby Penguins' /> </SwiperSlide>
        <SwiperSlide><img src={img4} alt='Baby Penguins' /> </SwiperSlide>
        <SwiperSlide><img src={img5} alt='Baby Penguins' /> </SwiperSlide>
        <SwiperSlide><img src={img6} alt='Baby Penguins' /> </SwiperSlide>
        <SwiperSlide><img src={img7} alt='Baby Penguins' /> </SwiperSlide>
        <SwiperSlide><img src={img8} alt='Baby Penguins' /> </SwiperSlide>
        <SwiperSlide><img src={img9} alt='Baby Penguins' /> </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel