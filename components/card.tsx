'use client';
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
  id: number;
  title: string;
  credit: string;
  image: string | StaticImageData;
  price: string;
}

const Card: React.FC<CardProps> = ({ id, title, image, price, credit }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); 

    const likedProducts = JSON.parse(localStorage.getItem('likedProducts') || '[]');
    if (isLiked) {
      const updatedLikes = likedProducts.filter((productId: number) => productId !== id);
      localStorage.setItem('likedProducts', JSON.stringify(updatedLikes));
      setIsLiked(false);
    } else {
      localStorage.setItem('likedProducts', JSON.stringify([...likedProducts, id]));
      setIsLiked(true);
    }
  };

  useEffect(() => {
    const likedProducts = JSON.parse(localStorage.getItem('likedProducts') || '[]');
    if (likedProducts.includes(id)) {
      setIsLiked(true);
    }
  }, [id]);

  return (
    <div className="w-full h-[100%] lg:w-[350px] lg:h-[100%] flex flex-col justify-between gap-5 p-4 rounded-lg hover:cursor-pointer group relative transition-transform duration-300">
      <button
        onClick={handleLike}
        className="absolute top-5 right-8 w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-colors duration-300 z-10 bg-white"
      >
        <i
          className={`fa-solid fa-heart transition-colors duration-300 ${
            isLiked ? 'text-red-500' : 'text-gray-500'
          }`}
        ></i>
      </button>
      <div className="bg-[#EBEFF3] p-3 h-[100%] md:h-[350px] rounded-lg w-full transition-transform duration-300 group-hover:scale-105 z-0">
        <Image
          className="object-contain h-[45vh] md:h-[100%]"
          src={image}
          width={400}
          height={500}
          alt="image"
        />
      </div>
      <div className="flex flex-col gap-5 justify-between z-10">
        <h1 className="text-[14px] xl:text-[18px]">{title}</h1>
        <div className="flex justify-between gap-2 min-[450px]:flex-col min-[686px]:flex-row">
          <div>
            <h2 className="font-bold text-[16px] xl:text-[22px]">{price}</h2>
            <button className="bg-[#FDEAF4] w-[151px] h-[28px] text-[13px] rounded-md">{credit}</button>
          </div>
          <div className="flex gap-2 mt-2">
            <button className="w-[45px] h-[40px] border-[1px] border-gray-400 rounded-md">
              <i className="fa-solid fa-book"></i>
            </button>
            <button className="w-[45px] h-[40px] border-[1px] bg-[#134E9B] rounded-md text-white">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
