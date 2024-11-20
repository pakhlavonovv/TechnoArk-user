import React from 'react'
import Image from 'next/image'
import Airpods from '../public/airpodss.svg'
import './style.css'

const AirpodsAds = () => {
  return (
    <div className='w-[100%] h-[100%] bg-[#282828]'>
       <div className="container p-3 flex flex-col items-center justify-center gap-3 sm:flex-row">
       <div className='flex flex-col items-center lg:w-[50%] gap-2  xl:items-start p-1'>
        <h1 className='text-white text-center text-[18px] font-bold sm:text-[22px] md:text-[25px] lg:text-[30px] xl:text-[50px] xl:text-start'>Musiqa zavqini his qilish uchun ko`p mablag` sarflash shart emas!</h1>
        <button className='w-[150px] h-[40px] bg-white text-black border-[1px] border-white rounded-md transition-all hover:bg-transparent hover:text-white'>Batafsil</button>
        </div>
        <div className='flex items-center justify-center'>
        <Image className='w-[70%] xl:w-[518px] xl:h-[493px]' src={Airpods} alt='airpods'/>
        </div>
       </div>
    </div>
  )
}

export default AirpodsAds