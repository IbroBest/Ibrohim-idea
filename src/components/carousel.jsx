import React, { useRef, useState } from "react";
    
import { Swiper, SwiperSlide } from "swiper/react";
import carousel1 from '../assets/image/carousel1.jpeg'
import carousel2 from '../assets/image/carousel2.png'


import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

import { Pagination } from "swiper/modules";
import { Image } from "@chakra-ui/react";

export default function Carousel() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <Image src={carousel1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={carousel2} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}