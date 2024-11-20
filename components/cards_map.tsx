import React from 'react';
import Card from './card';
import Link from 'next/link';
import Airpods from '../public/airpods.svg';
import Iphone from '../public/iphone.webp'
import Infinix from '../public/infinix.webp'
import { StaticImageData } from 'next/image';

interface CardData {
  id: number;
  title: string;
  price: string;
  credit: string;
  image: string | StaticImageData;
  more_info: string;
  product_detail: string;
  sale: string
}

export const cardData: CardData[] = [
  {
    id: 1,
    title: 'Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px',
    price: '6 999 999 usz',
    credit: '6 oy / 1 200 000 usz',
    image: Airpods,
    more_info: `1 год официальной гарантии от производителя. IMEI-коды официально зарегистрированы (активация происходит в течение 30 дней)
Процессор: Snapdragon 685 Mobile (6 нм)`,
product_detail: '128GB/1TB',
sale: '13 000 000 uzs'
  },
  {
    id: 2,
    title: 'Iphone 16 pro max 1 T/B - Discover the Latest iPhone: Unleash Power, Performance, and Precision',
    price: '7 000 000 uzs',
    credit: '12 oy / 1 200 000 usz',
    image: Iphone,
    more_info: `1 год официальной гарантии от производителя. IMEI-коды официально зарегистрированы (активация происходит в течение 30 дней)
Процессор: Snapdragon 685 Mobile (6 нм)`,
product_detail: '128GB/1TB',
sale: '13 000 000 uzs'
  },
  {
    id: 3,
    title: 'Infinix Smart 8 PRO 3, 8/256 ГБ, 6/128 ГБ, 8/128 ГБ, 6.67", 120 Гц',
    price: '6 999 999 usz',
    credit: '6 oy / 1 200 000 usz',
    image: Infinix,
    more_info: `1 год официальной гарантии от производителя. IMEI-коды официально зарегистрированы (активация происходит в течение 30 дней)
Процессор: Snapdragon 685 Mobile (6 нм)`,
product_detail: '128GB/1TB',
sale: '13 000 000 uzs'
  },
  {
    id: 4,
    title: 'Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px',
    price: '6 999 999 usz',
    credit: '6 oy / 1 200 000 usz',
    image: Airpods,
    more_info: `1 год официальной гарантии от производителя. IMEI-коды официально зарегистрированы (активация происходит в течение 30 дней)
Процессор: Snapdragon 685 Mobile (6 нм)`,
product_detail: '128GB/1TB',
sale: '13 000 000 uzs'
  },
  {
    id: 5,
    title: 'Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px',
    price: '6 999 999 usz',
    credit: '6 oy / 1 200 000 usz',
    image: Airpods,
    more_info: `1 год официальной гарантии от производителя. IMEI-коды официально зарегистрированы (активация происходит в течение 30 дней)
Процессор: Snapdragon 685 Mobile (6 нм)`,
product_detail: '128GB/1TB',
sale: '13 000 000 uzs'
  },
  {
    id: 6,
    title: 'Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px',
    price: '6 999 999 usz',
    credit: '6 oy / 1 200 000 usz',
    image: Airpods,
    more_info: `1 год официальной гарантии от производителя. IMEI-коды официально зарегистрированы (активация происходит в течение 30 дней)
Процессор: Snapdragon 685 Mobile (6 нм)`,
product_detail: '128GB/1TB',
sale: '13 000 000 uzs'
  },
  {
    id: 7,
    title: 'Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px',
    price: '6 999 999 usz',
    credit: '6 oy / 1 200 000 usz',
    image: Airpods,
    more_info: `1 год официальной гарантии от производителя. IMEI-коды официально зарегистрированы (активация происходит в течение 30 дней)
Процессор: Snapdragon 685 Mobile (6 нм)`,
product_detail: '128GB/1TB',
sale: '13 000 000 uzs'
  },
  {
    id: 8,
    title: 'Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px',
    price: '6 999 999 usz',
    credit: '6 oy / 1 200 000 usz',
    image: Airpods,
    more_info: `1 год официальной гарантии от производителя. IMEI-коды официально зарегистрированы (активация происходит в течение 30 дней)
Процессор: Snapdragon 685 Mobile (6 нм)`,
product_detail: '128GB/1TB',
sale: '13 000 000 uzs'
  },
];
const CardsMap: React.FC = () => {

  return (
    <div className="container">
      <h1 className="text-[20px] font-bold sm:text-[23px] lg:text-[26px]">Most popular products</h1>
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

export default CardsMap;

