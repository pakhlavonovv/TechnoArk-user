"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Carousel1 from "../public/carousel-1.jpg";
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
      className="mySwiper w-[90%] h-[30vh] sm:h-[50vh] md:h-[60vh] xl:h-[75vh]"
    >
         <SwiperSlide>
        <div className="relative w-full h-full">
          <Image
            src={Carousel2}
            alt="Carousel2"
            fill
            priority
            className="object-cover brightness-50"
          />
          <div className="absolute top-1/3 left-10">
            <h1 className="text-[15px] text-yellow-500 sm:text-[20px] md:text-[28px] lg:text-[35px] xl:text-[45px] font-bold">
             Bir kunda yetkazib berish xizmati
            </h1>
            <div className="lg:w-[450px]">
              <p className="text-[12px] text-white sm:text-[15px] md:text-[18px] lg:text-[20px] xl:text-[23px] mt-2">
                Orginallik va qulay narxni o`zida jamlagan Xiaomi 12 Mi Laite
                siz uchun eng yaxshi arziydigan takliflarimizdan biridir!
              </p>
            </div>
            <button className="hidden mt-2 w-[100px] h-[25px] sm:w-[150px] sm:h-[40px] bg-yellow-500 hover:bg-yellow-600 text-white rounded-md sm:block">
              Batafsil
            </button>
            <Link href={"/"} className="text-[13px] underline sm:hidden">
              Batafsill
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-full">
          <Image
            src={Carousel1}
            alt="Carousel1"
            fill
            priority
            className="object-cover brightness-50"
          />
           <div className="absolute top-1/3 left-10">
            <h1 className="text-[15px] text-blue-400 sm:text-[20px] md:text-[28px] lg:text-[35px] xl:text-[45px] font-bold">
              Siz kutgan Xiaomi 12 Mi Laite
            </h1>
            <div className="lg:w-[450px]">
              <p className="text-[12px] text-white sm:text-[15px] md:text-[18px] lg:text-[20px] xl:text-[23px] mt-2">
                Orginallik va qulay narxni o`zida jamlagan Xiaomi 12 Mi Laite
                siz uchun eng yaxshi arziydigan takliflarimizdan biridir!
              </p>
            </div>
            <button className="hidden mt-2 w-[100px] h-[25px] sm:w-[150px] sm:h-[40px] bg-blue-500 hover:bg-blue-600 text-white rounded-md sm:block">
              Batafsil
            </button>
            <Link href={"/"} className="text-[13px] underline sm:hidden">
              Batafsill
            </Link>
          </div>
        </div>
      </SwiperSlide>
   
      <SwiperSlide>
        <div className="relative w-full h-full">
          <Image
            src={Carousel3}
            alt="Carousel3"
            fill
            priority
            className="object-cover brightness-50"
          />
          <div className="absolute top-1/3 left-10 text-white">
            <h1 className="text-[15px] sm:text-[20px] md:text-[28px] lg:text-[35px] xl:text-[45px] font-bold">
             Eng avvalo sifat va yorqinlik
            </h1>
            <div className="lg:w-[450px]">
              <p className="text-[12px] sm:text-[15px] md:text-[18px] lg:text-[20px] xl:text-[23px] mt-2">
                Orginallik va qulay narxni o`zida jamlagan Xiaomi 12 Mi Laite
                siz uchun eng yaxshi arziydigan takliflarimizdan biridir!
              </p>
            </div>
            <button className="hidden mt-2 w-[100px] h-[25px] sm:w-[150px] sm:h-[40px] bg-green-500 hover:bg-green-600 text-white rounded-md sm:block">
              Batafsil
            </button>
            <Link href={"/"} className="text-[13px] underline sm:hidden">
              Batafsill
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
