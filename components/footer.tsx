import React from 'react'
import Image from 'next/image'
import Facebook from '../public/logos_facebook.png'
import Youtube from '../public/logos_youtube-icon.png'
import Telegram from '../public/logos_telegram.png'
import Twitter from '../public/twitter.png'
import Instagram from '../public/instagram (2).png'
import AppStore from '../public/app-store.png'
import Playmarket from '../public/playmarket.png'
import Link from 'next/link'
import './style.css'

const Footer = () => {
  return (
    <footer className='container grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        <div className='flex flex-col gap-5'>
            <h1 className='text-[20px] font-bold'>Bizning ijtimoiy tarmoqlarda</h1>
            <div className="flex gap-3">
                <button className='w-[60px] flex items-center justify-center h-[50px] rounded-lg bg-[#EBEFF3]'>
                    <Image src={Facebook} alt='facebook logo'/>
                </button>
                <button className='w-[60px] flex items-center justify-center h-[50px] rounded-lg bg-[#EBEFF3]'>
                    <Image src={Youtube} alt='youtube logo'/>
                </button>
                <button className='w-[60px] flex items-center justify-center h-[50px] rounded-lg bg-[#EBEFF3]'>
                    <Image src={Telegram} alt='telegram logo'/>
                </button>
                <button className='w-[60px] flex items-center justify-center h-[50px] rounded-lg bg-[#EBEFF3]'>
                    <Image src={Twitter} alt='twitter logo'/>
                </button>
                <button className='w-[60px] flex items-center justify-center h-[50px] rounded-lg bg-[#EBEFF3]'>
                    <Image src={Instagram} alt='instagram logo'/>
                </button>
            </div>
            <h2 className='text-[20px] font-bold'>Mobil ilovani yuklab oling</h2>
            <div className="flex min-[450px]:flex-row gap-2 sm:w-[80%] lg:w-[40%]">
                <button className='w-[50%] h-[60px] p-2 rounded-lg bg-[#EBEFF3] flex items-center justify-center text-[18px] lg:text-[23px] gap-2 font-bold'><Image src={AppStore} alt='app store'/></button>
                <button className='w-[50%] h-[60px] p-2 rounded-lg bg-[#EBEFF3] flex items-center justify-center text-[18px] lg:text-[23px] gap-2 font-bold'><Image src={Playmarket} alt='playmarket store'/></button>
            </div>
        </div>
        <div className="flex flex-col gap-2 items-center mt-5 sm:items-start">
            <h1 className='text-[18px] font-bold'>Menyu</h1>
            <Link className='text-gray-500 transition-colors hover:text-gray-300' href={'/'}>Ashyo haqida</Link>
            <Link className='text-gray-500 transition-colors hover:text-gray-300' href={'/'}>Foydalanish shartlari</Link>
            <Link className='text-gray-500 transition-colors hover:text-gray-300' href={'/'}>Maxfiylik va hafsizlik siyosiati</Link>
            <Link className='text-gray-500 transition-colors hover:text-gray-300' href={'/'}>Mahsulotlarni va tovarlarni qaytarish siyosati</Link>
            <Link className='text-gray-500 transition-colors hover:text-gray-300' href={'/'}>Biz bilan aloqa</Link>
        </div>
        <div className='flex flex-col gap-2 items-center mt-4 sm:items-start'>
            <h2 className='text-[18px] font-bold'>Aloqa</h2>
            <h2 className='text-[22px] font-bold'>+998 (71) 123-45-67</h2>
            <p>Savollaringiz bormi?</p>
            <div className='flex items-center justify-between w-[100%] lg:w-[350px] bg-gray-400 h-[45px] rounded-md p-2'>
                <input className='outline-none bg-transparent w-[80%] text-white placeholder:text-white' type="text" placeholder='Qiziqtigan savollaringizni bering'/>
                <i className="fa-solid fa-share"></i>
            </div> 
        </div>
    </footer>
  )
}

export default Footer