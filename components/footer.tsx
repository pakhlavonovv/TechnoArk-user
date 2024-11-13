import React from 'react'
import Image from 'next/image'
import Facebook from '../public/logos_facebook.png'
import Youtube from '../public/logos_youtube-icon.png'
import Telegram from '../public/logos_telegram.png'
import Twitter from '../public/twitter.png'
import Instagram from '../public/instagram (2).png'
import AppStore from '../public/app-store.png'
import Playmarket from '../public/playmarket.png'
import './style.css'

const Footer = () => {
  return (
    <footer className='container grid grid-cols-1 gap-4'>
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
            <h2 className='text-[18px] font-bold'>Mobil ilovani yuklab oling</h2>
            <div className="flex flex-col min-[450px]:flex-row gap-2 sm:w-[55%]">
                <button className='w-[50%] h-[60px] bg-[#EBEFF3] flex items-center justify-center gap-2 font-bold'><Image src={AppStore} alt='app store'/>App Store</button>
                <button className='w-[50%] h-[60px] bg-[#EBEFF3] flex items-center justify-center gap-2 font-bold'><Image src={Playmarket} alt='playmarket store'/>Play market</button>
            </div>
        </div>
    </footer>
  )
}

export default Footer