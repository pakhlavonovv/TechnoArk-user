import React from 'react'
import Image from 'next/image'
import Facebook from '../public/logos_facebook.png'
import Youtube from '../public/logos_youtube-icon.png'
import Telegram from '../public/logos_telegram.png'
import Twitter from '../public/twitter.png'
import Instagram from '../public/instagram (2).png'
import './style.css'
import Link from 'next/link'

const Map = () => {
  return (
    <Link href={'https://maps.app.goo.gl/N46dTzV8xHB57YG58'} className="map flex items-center justify-center lg:items-start p-2 pt-5">
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="w-[90%] h-auto bg-white md:h-[60vh] p-12">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-[20px]">OOO “Ashyo”</h2>
            <p>Telefon raqam: <span>+998 71 123 45 56</span></p>
            <p>Elektron pochta: <span>ashyo@gmail.com</span></p>
            <p>Manzilimiz</p>
            <span>100052, O‘zbekiston Respublikasi, Toshkent shahri, Bodomzor yo‘li 1-tor ko‘chasi, 72</span>
            <p>Ijtimoiy tarmoqlarimiz</p>
            <div className="flex gap-3">
              <button className="w-[60px] flex items-center justify-center h-[50px] bg-[#EBEFF3]">
                <Image src={Facebook} alt="facebook logo" />
              </button>
              <button className="w-[60px] flex items-center justify-center h-[50px] bg-[#EBEFF3]">
                <Image src={Youtube} alt="youtube logo" />
              </button>
              <button className="w-[60px] flex items-center justify-center h-[50px] bg-[#EBEFF3]">
                <Image src={Telegram} alt="telegram logo" />
              </button>
              <button className="w-[60px] flex items-center justify-center h-[50px] bg-[#EBEFF3]">
                <Image src={Twitter} alt="twitter logo" />
              </button>
              <button className="w-[60px] flex items-center justify-center h-[50px] bg-[#EBEFF3]">
                <Image src={Instagram} alt="instagram logo" />
              </button>
            </div>
          </div>
        </div>
        <select className="w-[90%] h-[50px] p-2">
          <option>Do‘konlarimizni izlang</option>
        </select>
      </div>
    </Link>
  )
}

export default Map
