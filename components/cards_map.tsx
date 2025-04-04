'use client';

import React, { useEffect, useState } from 'react';
import Card from './card';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: string;
  createdAt: string;
  lastUpdateAt: string;
  description?: string; 
  images: string[]; 
}

const CardsMap: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); 

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://texnoark.ilyosbekdev.uz/products/search');
        const data = await res.json();
        setProducts(data.data?.products || []); 
      } catch (error) {
        console.log('Productlarni yuklashda xatolik:', error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1 className="text-[20px] font-bold sm:text-[23px] lg:text-[26px]">Most popular products</h1>
      <div className="grid grid-cols-1 gap-3 min-[450px]:grid-cols-2  min-[1100px]:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Link 
            key={product.id} 
            href={`/products/${product.id}`}
          >
            <Card
              id={product.id}
              title={product.name} 
              price={`${product.price} uzs`} 
              credit={`12 oy / ${(Number(product.price) / 12).toFixed(0)} uzs`}
              image={product?.images?.[0] || '/iphone.webp'} 
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardsMap;
