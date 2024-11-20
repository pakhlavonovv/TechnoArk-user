"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Carousel1 from "../public/carousel1.jpg";
import Carousel2 from "../public/carousel2.jpg";
import Carousel3 from "../public/carousel3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

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
      className="mySwiper mySwiper_main w-[85%] h-[90%]"
    >
      <SwiperSlide>
        <div className="relative w-full h-full">
          <Image
            src={Carousel1}
            priority
            alt="Carousel1"
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-1/4 left-10 lg:left-[90px] text-white">
            <h1 className="text-[15px] sm:text-[20px] md:text-[28px] lg:text-[35px] xl:text-[45px] font-bold">Siz kutgan Xiaomi 12 Mi Laite</h1>
            <div className="lg:w-[450px]">
            <p className="text-[12px] sm:text-[15px] md:text-[18px] lg:text-[20px] xl:text-[23px] mt-2">Orginallik va qulay narxni o`zida jamlagan  Xiaomi 12 Mi Laite  siz uchun eng yaxshi arziydigan takliflarimizdan biridir!ii</p>
            </div>
            <button className="hidden mt-2 w-[100px] h-[25px] sm:w-[150px] sm:h-[40px] bg-blue-500 hover:bg-blue-600 text-white rounded-md sm:block">
              Batafsil
            </button>
            <Link href={'/'} className="text-[13px] underline sm:hidden">Batafsill</Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-full">
          <Image
            src={Carousel2}
            priority
            alt="Carousel2"
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-1/3 left-10 text-white">
            <h1 className="text-[15px] sm:text-[20px] md:text-[28px] lg:text-[35px] xl:text-[45px] font-bold">Siz kutgan Xiaomi 12 Mi Laite</h1>
            <div className="lg:w-[450px]">
            <p className="text-[12px] sm:text-[15px] md:text-[18px] lg:text-[20px] xl:text-[23px] mt-2">Orginallik va qulay narxni o`zida jamlagan  Xiaomi 12 Mi Laite  siz uchun eng yaxshi arziydigan takliflarimizdan biridir!ii</p>
            </div>            <button className="mt-2 w-[100px] h-[25px] sm:w-[150px] sm:h-[40px] bg-blue-500 hover:bg-blue-600 text-white rounded">
              Batafsil
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-full">
          <Image
            src={Carousel3}
            priority
            alt="Carousel3"
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-1/3 left-10 text-white">
            <h1 className="text-[15px] sm:text-[20px] md:text-[28px] lg:text-[35px] xl:text-[45px] font-bold">Siz kutgan Xiaomi 12 Mi Laite</h1>
            <div className="lg:w-[450px]">
            <p className="text-[12px] sm:text-[15px] md:text-[18px] lg:text-[20px] xl:text-[23px] mt-2">Orginallik va qulay narxni o`zida jamlagan  Xiaomi 12 Mi Laite  siz uchun eng yaxshi arziydigan takliflarimizdan biridir!ii</p>
            </div>            <button className="mt-2 w-[80px] h-[25px] sm:w-[150px] sm:h-[40px] bg-blue-500 hover:bg-blue-600 text-white rounded">
              Batafsil
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
