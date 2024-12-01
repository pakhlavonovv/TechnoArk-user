'use client';
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
  id?: number;
  title: string;
  credit: string;
  image: string | StaticImageData;
  price: string;
}

const Card: React.FC<CardProps> = ({ id, title, image, price, credit }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const likedProducts = JSON.parse(localStorage.getItem('likedProducts') || '[]');
    if (likedProducts.includes(id)) {
      setIsLiked(true);
    }
  }, [id]);

  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!id) return;

    setLoading(true);

    try {
      const response = await fetch('https://texnoark.ilyosbekdev.uz/likes/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify({ product_id: id }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message || 'Failed to like the product');
      }

      const likedProducts = JSON.parse(localStorage.getItem('likedProducts') || '[]');
      if (!likedProducts.includes(id)) {
        likedProducts.push(id);
        localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
      }

      setIsLiked(true);
    } catch (error: any) {
      alert(error.message || 'An error with liking products');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!id) {
      alert('Mahsulot ID mavjud emas!');
      return;
    }

    const token = localStorage.getItem('access_token');

    try {
      const response = await fetch('https://texnoark.ilyosbekdev.uz/carts/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product_id: id,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData);
      }

      const data = await response.json();

      if (data.success) {
        alert('Savatchaga muvaffaqiyatli qo`shildi!');
      } else {
        console.log('Savatchaga qo`shishda xatolik yuz berdi!');
      }
    } catch (error: any) {
      alert(error.message || 'error!');
    }
  };

  return (
    <div className="w-full h-[100%] lg:w-[350px] lg:h-[100%] flex flex-col justify-between gap-5 p-4 rounded-lg hover:cursor-pointer group relative transition-transform duration-300">
      <button
        onClick={handleLike}
        disabled={loading}
        className={`absolute top-5 right-8 w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-colors duration-300 z-10 ${
          isLiked ? 'bg-white text-red-500' : 'bg-white text-gray-500'
        }`}
      >
        <i className="fa-solid fa-heart"></i>
      </button>
      <div className="bg-[#EBEFF3] p-3 h-[90%] md:h-[350px] rounded-lg w-full transition-transform duration-300 group-hover:scale-105 z-0">
        <Image
          className="object-contain h-[45vh] md:h-[90%]"
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
            <button onClick={handleCreate} className="w-[45px] h-[40px] border-[1px] bg-[#134E9B] rounded-md text-white">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
