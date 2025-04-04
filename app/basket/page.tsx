'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/header';
import BuyProduct from '@/components/buy_product';
import Footer from '@/components/footer';
import Like from '../../public/like.png';
import '../../components/style.css';

interface CardInterface {
  id: number;
  name: string;
  price: string;
  images: string[];
}
interface Product extends CardInterface {
  product_id: CardInterface;
}

const BasketProducts: React.FC = () => {
  const [basketProducts, setBasketProducts] = useState<Product[]>([]);
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [total, setTotal] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [isClient, setIsClient] = useState(false);  
  const getBaskets = async () => {
    const user_id = localStorage.getItem('user_id');
    const res = await fetch(`https://texnoark.ilyosbekdev.uz/carts/user/${user_id}`);
    let data = await res.json();
    console.log(data.data?.carts[0])
    setBasketProducts(data.data?.carts || []);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      getBaskets();
    }
  }, [isClient]);
  useEffect(() => {
    const newTotal = basketProducts.reduce((acc, product) => {
      const quantity = quantities[product.id] ?? 1; 
      return acc + Number(product.product_id?.price || 0) * quantity; // `price`ni tekshirish
    }, 0);
    setTotal(newTotal);
  }, [quantities, basketProducts]);
  
  
  
  
    
  

  const handleQuantityChange = (id: number, increment: boolean) => {
    setQuantities((prev) => {
      const currentQuantity = prev[id] ?? 1; 
      const newQuantities = { ...prev };
      newQuantities[id] = increment ? currentQuantity + 1 : Math.max(currentQuantity - 1, 1);
      return newQuantities;
    });
  };
  
  

  const deleteProduct = async (cardId: string) => {
    const token = localStorage.getItem('access_token');
    try {
        const response = await fetch(`https://texnoark.ilyosbekdev.uz/carts/delete/${cardId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`, 
            },
        });

        if (!response.ok) {
            throw new Error('Something went wrong');
        }

        const data = await response.json();
        console.log('Product deleted successfully:', data);
        getBaskets();
    } catch (error) {
        console.error('Error deleting product:', error);
    }
};



  const openModal = (product: Product) => {
    setProductToDelete(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setProductToDelete(null);
  };

  if (!basketProducts.length) {
    return (
      <div>
        <Header />
        <br /><br />
        <div className="flex flex-col items-center gap-3 lg:gap-4">
          <Image className="w-[50%] sm:w-[30%] md:w-[20%] lg:w-[15%]" src={Like} alt="like" />
          <h1 className="text-[20px] font-bold md:text-[25px]">Buy products now</h1>
          <p className="md:text-[15px]">Go to the main page and buy products</p>
          <Link href={'/'} className="w-[130px] h-[40px] md:w-[170px] flex items-center justify-center bg-blue-600 transition-all hover:bg-blue-500 rounded-md text-white">Go Home</Link>
        </div>
        <br /><br />
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h1 className="text-[20px] lg:text-[30px] font-bold mb-5">Your Baskets:</h1>
        <hr />
        <br />
        <div className="flex flex-col gap-5">
          {basketProducts.map((product) => (
            <div key={product.id} className="flex flex-col sm:flex-row gap-4 items-center justify-between border-b pb-4 md:flex-row">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Image
                  src={product?.product_id?.images?.[0] || '/iphone.webp'}
                  alt={product.name || 'Product Image'} 
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                <div className='flex flex-col items-center sm:items-start gap-2'>
                  <h2 className="font-bold text-lg">{product.product_id?.name}</h2>
                  <p className="text-gray-600">{Number(product.product_id?.price).toLocaleString()} uzs</p>
                  <button
                    className="bg-gray-200 w-[40px] h-[40px] rounded-md hover:bg-gray-300"
                    onClick={() => openModal(product)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="bg-gray-200 w-[40px] h-[40px] rounded-md hover:bg-gray-300"
                  onClick={() => handleQuantityChange(product.id, false)}
                >
                  -
                </button>
                <span>{quantities[product.id]}</span>
                <button
                  className="bg-gray-200 w-[40px] h-[40px] rounded-md hover:bg-gray-300"
                  onClick={() => handleQuantityChange(product.id, true)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 bg-gray-100 p-10 rounded-md shadow-md w-full max-w-sm ml-auto">
          <h2 className="font-bold text-xl mb-2">Order Summary</h2>
          <p className="text-gray-600">Delivery: <strong>Free</strong></p>
          <p className="text-lg font-bold">Total: {total.toLocaleString()} uzs</p>
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md mt-3">Buy Now</button>
        </div>
      </div>

      {showModal && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-lg font-sans mb-4">Are you sure you want to delete this product?</h2>
            <div className="flex justify-end gap-2">
                <button
                    className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-md"
                    onClick={closeModal}
                >
                    No
                </button>
                <button
                    className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={() => {
                        if (productToDelete) {
                            deleteProduct(productToDelete.id.toString());
                        }
                        closeModal();
                    }}
                >
                    Yes
                </button>
            </div>
        </div>
    </div>
)}

    <BuyProduct/>
      <Footer />
    </div>
  );
};

export default BasketProducts;
