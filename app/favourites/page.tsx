'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Like from '../../public/like.png';
import Header from '@/components/header';
import Card from '../../components/card';
import Footer from '@/components/footer';
import '../../components/style.css';

interface Product {
  id: number;
  name: string;
  price: string;
  images: string[];
}

const LikedProducts: React.FC = () => {
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLikedProducts() {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem('access_token');
        const cardId = localStorage.getItem('card_id');
        console.log(token)
        if (!token || !cardId) {
          setError('Token yoki card ID topilmadi!');
          console.log('Token:', token); 
          console.log('Card ID:', cardId);  
          return;
        }

        const cardIdString = String(cardId);
        const res = await fetch(`https://texnoark.ilyosbekdev.uz/likes/user/likes/${cardIdString}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Ma`lumotlarni yuklashda xatolik!');
        }

        const data = await res.json();
        const likedProducts = data?.data?.likes || [];
        console.log(data);
        setLikedProducts(likedProducts);
      } catch (error: any) {
        setError(error.message || 'Xatolik yuz berdi!');
      } finally {
        setLoading(false);
      }
    }

    fetchLikedProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Yuklanmoqda...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <br />
        <div className="flex flex-col items-center gap-3 lg:gap-4">
          <p className="text-red-500">{error}</p>
          <Link
            href={'/'}
            className="w-[130px] h-[40px] md:w-[170px] flex items-center justify-center bg-blue-600 transition-all hover:bg-blue-500 rounded-md text-white"
          >
            Go Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (!likedProducts.length) {
    return (
      <div>
        <Header />
        <br />
        <div className="flex flex-col items-center gap-3 lg:gap-4">
          <Image className="w-[50%] sm:w-[30%] md:w-[20%] lg:w-[15%]" src={Like} alt="like" />
          <h1 className="text-[20px] font-bold md:text-[25px]">Add your favourite products</h1>
          <p className="md:text-[15px]">Go to the main page and click on ♡ in the product</p>
          <Link
            href={'/'}
            className="w-[130px] h-[40px] md:w-[170px] flex items-center justify-center bg-blue-600 transition-all hover:bg-blue-500 rounded-md text-white"
          >
            Go Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h1 className="text-[20px] lg:text-[30px] font-bold mb-5">Favourites Products</h1>
        <hr />
        <br />
        <div className="grid grid-cols-1 gap-3 min-[450px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {likedProducts.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.name}
              price={`${product.price} uzs`}
              credit={`12 oy / ${(Number(product.price) / 12).toFixed(0)} uzs`}
              image={product?.images?.[0] || '/iphone.webp'}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LikedProducts;
