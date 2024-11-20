'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import { cardData } from "@/components/cards_map";
import Image from "next/image";

const Page = () => {
    const { id } = useParams();    
    const card = cardData.find((item) => item.id.toString() === id);

    if (!card) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container">
            <h1 className="text-[20px] font-bold sm:text-[23px] lg:text-[26px]">{card.title}</h1>
            <div className="product-details">
                <div className="image">
                    <Image src={card.image} alt={card.title} width={300} height={300} />
                </div>
                <div className="details">
                    <p><strong>Price:</strong> {card.price}</p>
                    <p><strong>Credit:</strong> {card.credit}</p>
                </div>
            </div>
        </div>
    );
};

export default Page;
