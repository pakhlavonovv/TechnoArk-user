'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { cardData } from "@/components/cards_map";
import Image from "next/image";
import '../../../components/style.css'
import Header from '@/components/header';
import SaleCards from '@/components/sale_cards';
import Footer from '@/components/footer';
import PlasticCards from '../../../public/tolovlar.jpg'

const Page = () => {
    const { id } = useParams();    
    const card = cardData.find((item) => item.id.toString() === id);

    if (!card) {
        return <div>Product not found</div>;
    }
    return (
        <div>
            <Header/>
            <div className="container grid grid-cols-1 gap-5">
                <div className="grid grid-cols-1 gap-3 lg:flex xl:justify-around">
                <div className="flex flex-col lg:w-[60%]">
                    <h1 className='text-[25px] order-2 sm:order-1 sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold'>{card?.title}</h1>
                    <Image className='w-[100%] object-cover h-[100%] xl:w-[90%] xl:h-[90%] order-1 sm:order-2' src={card.image} alt={card.title}/>
                </div>
                <div className="flex flex-col gap-3 lg:w-[40%] xl:w-[30%] xl:gap-5">
                <div className="w-[100%] h-[100%] lg:h-[400px] flex flex-col gap-1 p-4 lg:p-5 border-[1px] rounded-md border-black">
                    <h2 className='sm:text-[20px]'>Деталь:  {card.product_detail}</h2>
                    <h1 className='font-bold strikethrough text-[25px] sm:text-[30px] lg:text-[35px]'>{card.price}</h1>
                    <s className='sm:text-[18px] xl:text-[22px]'>{card?.sale}</s>
                    <button className='w-full font-bold bg-slate-200 sm:h-[45px] lg:h-[60px] rounded-md p-2'>{card?.credit}</button>
                    <div className="flex items-center gap-2">
                    <button className='w-full sm:h-[45px] font-bold bg-slate-300 rounded-md lg:h-[60px] lg:text-[20px] h-[40px] p-2'>Купить в 1 клик</button>
                    <button className='w-[40px] sm:h-[45px] lg:h-[60px] flex items-center justify-center rounded-md h-[40px] p-2 bg-slate-300 '>                    <i className="fa-regular fa-heart fa-lg"></i>
                    </button>
                    </div>
                    <button className='w-full h-[40px] sm:h-[45px] lg:h-[60px] bg-[#7000FF] hover:bg-[#722cce] text-white rounded-md'>Добавить в корзину</button>
                </div>
                <div className="w-[100%] h-[100%] lg:h-[400px] flex flex-col gap-1 p-4 lg:p-5 border-[1px] rounded-md border-black">
                  <h2 className='font-bold'>Доставка от 1 дня</h2>
                  <p>В пункте выдачи Узум или курьером</p><hr />
                  <div className="flex flex-col gap-2">
                    <h2 className='font-bold'>Безопасная оплата удобным способом</h2>
                    <p>Оплачивайте картой, наличными или в рассрочку</p>
                    <Image src={PlasticCards} alt='Karta bilan tolov'/>
                    <hr />
                    <h2>Простой и быстрый возврат</h2>
                    <p>Примем товары в течение 10 дней и сразу вернём деньги. Подробнее</p>
                  </div>
                </div>
                </div>
                </div>

            </div>
            <br /><br />
            <SaleCards/>
            <br /><br /><br />
            <Footer/>
        </div>
    );
};

export default Page;
