"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules"; // Navigation modulini import qiling
import Image from "next/image";
import Carousel1 from '../public/carousel1.jpg';
import Carousel2 from '../public/carousel2.jpg';
import Carousel3 from '../public/carousel3.jpg';
import "swiper/css";
import "swiper/css/navigation"; 
export default function MySwiper() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      allowTouchMove={false}
      preventClicks={false}
      preventClicksPropagation={false}
      autoplay={{
        reverseDirection: false,
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      navigation
      modules={[Autoplay, Navigation]} 
      className="mySwiper mySwiper_main bg-[#F3F0F0] w-[90%] h-[100%]"
    >
      <SwiperSlide>
        <div className="flex justify-end items-end h-full">
         <Image 
            src={Carousel1} 
            priority
            alt="Carousel1" 
            className="w-[50px] h-auto mb-4" 
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-end items-end h-full">
          <Image 
            src={Carousel2}
            priority 
            alt="Carousel1" 
            className="w-[150px] h-auto mb-4" 
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-end items-end h-full">
          <Image 
            src={Carousel3} 
            alt="Carousel1" 
            className="w-[150px] h-auto mb-4" 
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
