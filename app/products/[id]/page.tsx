'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from "next/image";
import '../../../components/style.css';
import Header from '@/components/header';
import RecentlyCards from "@/components/recently_cards";
import Footer from '@/components/footer';

const Page = () => {
    type ProductType = {
        id: number;
        name: string;
        price: string;
        images: string[];
    };

    const { id } = useParams();
    const [product, setProduct] = useState<ProductType | null>(null); 

    const getData = async () => {
        try {
            const response = await fetch(`https://texnoark.ilyosbekdev.uz/products/${id}`);
            if (!response.ok) {
                throw new Error(`HTTPS error! status: ${response.status}`);
            }
            const data = await response.json();
            setProduct(data.data?.product || null); 
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    if (!product) {
        return (
            <div>
                <Header />
                <div className="container text-center py-10">
                    <h1 className="text-2xl font-bold">Mahsulot topilmadi!</h1>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <div className="container grid grid-cols-1 items-center gap-3 py-10 md:flex">
                <div className="flex flex-col items-center justify-center gap-3 md:w-[70%] md:items-start">
                    <h1 className="font-bold text-[24px] md:text-[35px]">{product.name}</h1>
                    {product.images[0] && (
                        <div className='bg-[#EBEFF3] flex items-center w-[80%] justify-center h-[70vh] rounded-md'>
                            <Image
                                src={product.images[0]}
                                alt={product.name}
                                width={500}
                                height={300}
                                className="rounded-lg w-[70%]"
                            />
                        </div>
                    )}
                   </div>
                   <div className="flex flex-col items-center justify-center gap-3 md:w-[45%] lg:items-start lg:justify-start">
                   <p className="text-xl font-semibold md:text-[24px]">Narxi: {product.price} uzs</p>
                   <button className='bg-[#c7d8e9] w-[100%] min-[425px]:w-[340px] md:w-full h-[60px] rounded-md'> {Math.floor(Number(product.price) / 12)} 000 ga 12 oyga muddatli to'lov</button>
                   <div className="flex flex-col items-center justify-center w-full lg:flex-row gap-2">
                   <button className='w-full rounded-md h-[50px] min-[425px]:w-[340px] lg:w-[400px] border-[1px] border-black'>Savatga qo`shish</button>
                   <button className='w-full rounded-md h-[50px] min-[425px]:w-[340px] lg:w-[400px] border-[1px] border-blue-500 bg-blue-500 text-white transition-all hover:bg-transparent hover:text-blue-500'>Xarid qilish</button>
                   </div>
                </div>
            </div>
            <RecentlyCards />
            <Footer />
        </div>
    );
};

export default Page;
