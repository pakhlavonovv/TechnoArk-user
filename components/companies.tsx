import React from 'react'
import Image from 'next/image'
import Artel from '../public/artel.png'
import Samsung from '../public/samsung.png'
import Nokia from '../public/nokia.png'
import Redmi from '../public/redmi.png'
import Iphone from '../public/ios.png'
import Vivo from '../public/vivo.png'
import Huawei from '../public/huawei.png'
import Link from 'next/link'

const Companies = () => {
  return (
    <div className='container'>
        <div className="grid grid-cols-2 gap-1 items-center md:grid-cols-3 lg:grid-cols-4">
            <div className="w-[100%] h-[90px] rounded-sm flex items-center justify-center bg-[#E1F0D7]">
                <Image src={Artel} alt='artel logo'/>
            </div>
            <div className="w-[100%] h-[90px] rounded-sm flex items-center justify-center bg-[#E6EDF6]">
                <Image src={Samsung} alt='samsung logo'/>
            </div>
            <div className="w-[100%] h-[90px] rounded-sm flex items-center justify-center bg-[#E0E8F3]">
                <Image className='w-[100px]' src={Nokia} alt='nokia logo'/>
            </div>
            <div className="w-[100%] h-[90px] rounded-sm flex items-center justify-center bg-[#FFE1CC]">
                <Image className='w-[90px]' src={Redmi} alt='redmi logo'/>
            </div>
            <div className="w-[100%] h-[90px] rounded-sm flex items-center justify-center bg-[#E5E5E5]">
                <Image className='w-[50px]' src={Iphone} alt='iphone logo'/>
            </div>
            <div className="w-[100%] h-[90px] rounded-sm flex items-center justify-center bg-[#CCE2F1]">
                <Image className='w-[90px]' src={Vivo} alt='vivo logo'/>
            </div>
            <div className="w-[100%] h-[90px] rounded-sm flex items-center justify-center bg-[#FFD1D2]">
                <Image className='w-[80px]' src={Huawei} alt='huawei logo'/>
            </div>
            <div className="w-[100%] h-[90px] rounded-sm flex items-center justify-center bg-[#E6EDF6]">
                <Link href={'/'} className='text-[20px]'>Ko'proq</Link>
            </div>
        </div>
    </div>
  )
}

export default Companies