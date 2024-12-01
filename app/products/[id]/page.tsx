'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from "next/image";
import CommentMan from '../../../public/commentman.png'
import Header from '@/components/header';
import RecentlyCards from "@/components/recently_cards";
import Footer from '@/components/footer';
import NotFound from '../../../public/not-found.png'
import DeliveryIcon from '../../../public/delivery.png'
import ShopIcon from '../../../public/shop.png'
import ClockIcon from '../../../public/clock.png'
import '../../../components/style.css';

const Page = () => {
    type ProductType = {
        id: number;
        name: string;
        price: string;
        images: string[];
    };
    type UserType = {
        first_name: string,
        last_name: string,
    }
    interface CommentInterface {
        comment: string,
        id:number,
        user_id: UserType 
    }
    const { id } = useParams();
    const [product, setProduct] = useState<ProductType | null>(null);
    const [comment, setComment] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [commentsList, setCommentsList] = useState<CommentInterface[]>([]);

    const handleGetComment = async () => {
        try {
            const storedComments = JSON.parse(localStorage.getItem('comments') || '[]');
            const productComments = storedComments.filter((comment: any) => comment.productId === parseInt(id as string, 10));
            setCommentsList(productComments);
        } catch (error) {
            setError('Error fetching comments from localStorage');
        }
    };

    const handleComment = async (e: React.FormEvent) => {
        e.preventDefault();

        const token = localStorage.getItem('access_token');
        if (!token) {
            setError('Token topilmadi!');
            return;
        }

        const productId = id ? parseInt(Array.isArray(id) ? id[0] : id, 10) : NaN;
        if (isNaN(productId)) {
            setError('Mahsulot ID noto‘g‘ri');
            return;
        }

        if (!comment.trim()) {
            setError('Iltimos, fikringizni yozing!');
            return;
        }

        const storedComments = JSON.parse(localStorage.getItem('comments') || '[]');
        storedComments.push({ productId, comment });
        localStorage.setItem('comments', JSON.stringify(storedComments));

        try {
            const response = await fetch('https://texnoark.ilyosbekdev.uz/comment/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    product_id: productId,
                    comment: comment,
                }),
            });

            if (!response.ok) {
                throw new Error('Fikr yuborishda xatolik yuz berdi!');
            }

            const data = await response.json();
            if (data.success) {
                alert('Fikr muvaffaqiyatli yuborildi!');
                setComment(''); 
            } else {
                console.log('Fikr yuborishda xatolik yuz berdi!')
            }
        } catch (error: any) {
            setError(error.message || 'Xatolik yuz berdi!');
        }
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`https://texnoark.ilyosbekdev.uz/products/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTPS error! status: ${response.status}`);
                }
                const data = await response.json();
                setProduct(data.data?.product || null);
            } catch (error) {
                setError('Mahsulotni olishda xatolik yuz berdi!');
            }
        };
        getData();
        const getCommentData = async () => {
            try {
                const response = await fetch(`https://texnoark.ilyosbekdev.uz/comment/product/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTPS error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data)
                setCommentsList(data.data?.comment)
            } catch (error) {
                setError('Mahsulotni olishda xatolik yuz berdi!');
            }
        };
        getCommentData();
        handleGetComment(); 
    }, [id]);

    if (!product) {
        return (
            <div>
                <Header />
                <br />
                <div className="container flex flex-col items-center justify-center text-center py-10">
                    <Image className='w-[40%] sm:w-[30%] lg:w-[20%] xl:w-[14%]' src={NotFound} alt='not found image' />
                    <h2 className='font-semibold text-[50px] text-gray-400'>404</h2>
                    <h3 className='font-bold'>NOT FOUND</h3>
                    <p>The product is not found</p>
                </div>
                <br />
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
                    <button className='bg-[#c7d8e9] w-[100%] min-[425px]:w-[340px] md:w-full h-[60px] rounded-md'> {Math.floor(Number(product.price) / 12)} 000 ga 12 oyga muddatli to`lov</button>
                    <div className="flex flex-col items-center justify-center w-full lg:flex-row gap-2">
                        <button className='w-full rounded-md h-[50px] min-[425px]:w-[340px] lg:w-[400px] border-[1px] border-black'>Savatga qo`shish</button>
                        <button className='w-full rounded-md h-[50px] min-[425px]:w-[340px] lg:w-[400px] border-[1px] border-blue-500 bg-blue-500 text-white transition-all hover:bg-transparent hover:text-blue-500'>Xarid qilish</button>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            <Image className='w-[25px] h-[25px]' src={DeliveryIcon} alt='Delivery icon' />
                            <p>Yetkazib berish O’zbekiston bo’ylab</p>
                        </div>
                        <div className="flex gap-2">
                            <Image className='w-[25px] h-[25px]' src={ShopIcon} alt='Shop icon' />
                            <p>Do’kondi o’zidan olib ketishingiz mumkin</p>
                        </div>
                        <div className="flex gap-2">
                            <Image className='w-[25px] h-[25px]' src={ClockIcon} alt='Clock icon' />
                            <p>Tahminiy yetkazib berish vaqti 1 kundan 3 kungacha.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="container flex flex-col gap-5">
            <div className="container order-1 lg:order-2 grid grid-cols-4 items-start justify-center gap-3 mt-5">
                {commentsList.map((item, index) => (
                    <div key={index} className="flex gap-2">
                        <Image className='w-[50px] h-[50px]' src={CommentMan} alt='comment man'/>
                        <div className="flex flex-col gap-3">
                            <h2>{item.user_id?.first_name} {item.user_id?.last_name}</h2><hr />
                            <p>{item.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
            <form onSubmit={handleComment} className="container order-2 lg:order-1 flex flex-col items-center justify-center sm:items-start gap-3">
                <h2 className='underline sm:text-[20px] md:text-[25px]'>Mijozlar fikrilari</h2>
                <textarea
                    className='resize-none rounded-md w-[90%] sm:w-[70%] md:w-[50%] lg:w-[500px] h-[30vh] p-5 border-[1px] border-black outline-none'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    name="comment"
                />
                {error && <p className="text-red-500">{error}</p>}
                <button className='w-[150px] h-[40px] bg-blue-700 text-white rounded-md hover:bg-blue-600'>Yuborish</button>
            </form>
            </div>


            <RecentlyCards />
            <Footer />
        </div>
    );
};

export default Page;
