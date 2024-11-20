import React from 'react';
import Card from './card';
import Link from 'next/link';
import Airpods from '../public/airpods.svg';
import { StaticImageData } from 'next/image';

interface CardData {
  id: number;
  title: string;
  price: string;
  credit: string;
  image: string | StaticImageData;
}

const SaleCards: React.FC = () => {
  const cardData: CardData[] = [
    {
      id: 1,
      title: 'Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px',
      price: '6 999 999 usz',
      credit: '6 oy / 1 200 000 usz',
      image: Airpods,
      
    },
    {
      id: 2,
      title: 'Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px',
      price: '6 999 999 usz',
      credit: '6 oy / 1 200 000 usz',
      image: Airpods,
      
    },
    {
      id: 3,
      title: 'Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px',
      price: '6 999 999 usz',
      credit: '6 oy / 1 200 000 usz',
      image: Airpods,
      
    },
    {
      id: 4,
      title: 'Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px',
      price: '6 999 999 usz',
      credit: '6 oy / 1 200 000 usz',
      image: Airpods,
      
    }
  ];

  return (
    <div className="container">
      <h1 className="text-[20px] font-bold sm:text-[23px] lg:text-[26px]">Oxirgi ko`rgan mahsulotlar</h1>
      <div className="grid grid-cols-1 gap-3 min-[450px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cardData.map((card) => (
          <Link key={card.id} href={`/products/${card.id}`}>
            <Card title={card.title} price={card.price} credit={card.credit} image={card.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SaleCards;

