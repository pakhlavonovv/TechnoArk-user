import './style.css'
import Image from 'next/image'
import Noutbuklar from '../public/noutbuklar.svg'
import KirMashina from '../public/kirmoshina.svg'
import Konditsioner from '../public/konditsioner.svg'
import Televizor from '../public/televizorlar.svg'
import Smartfon from '../public/smartfonlar.svg'
import Muzlatgich from '../public/muzlatgich.svg'
import Muzlatgich2 from '../public/muzlatgich2.svg'
import Link from 'next/link'

const CategoriesImages = () => {
  return (
    <div className='container grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <div className='w-[100%] h-[100%] bg-[#5C4F8C] flex justify-around gap-2 p-1 pt-5 rounded-lg'>
            <button className='w-[100px] p-2 flex items-center justify-center h-[30px] rounded-md border-[1px] text-white bg-transparent'>Noutbuklar</button>
            <Image className='w-[50%]' src={Noutbuklar} alt='noutbuklar'/>
        </div>
        <div className='w-[100%] h-[100%] bg-[#A09188] flex justify-around gap-2 p-1 pt-5 rounded-lg'>
            <button className='w-[100%] p-2 flex items-center justify-center min-[470px]:w-[200px] h-[30px] rounded-md border-[1px] text-white bg-transparent'>Kir mashinasi</button>
            <Image className='w-[90%] sm:w-[70%] xl:w-[80%]' src={KirMashina} alt='kir yuvish mashinasi'/>
        </div>
        <div className='w-[100%] h-[100%] bg-[#797C7D] flex justify-around gap-2 p-1 pt-5 rounded-lg'>
            <button className='w-[130px] p-2 flex items-center justify-center h-[30px] rounded-md border-[1px] text-white bg-transparent'>Konditsiyoner</button>
            <Image className='w-[50%] xl:w-[60%]' src={Konditsioner} alt='konditsioner'/>
        </div>
        <div className='w-[100%] h-[100%] bg-[#CEAF75] flex justify-around gap-2 p-1 pt-5 rounded-lg'>
            <button className='w-[200px] p-2 flex items-center justify-center h-[30px] rounded-md border-[1px] text-white bg-transparent'>Televizorlar</button>
            <Image className='w-[70%] sm:w-[60%] xl:w-[80%]' src={Televizor} alt='televizor'/>
        </div>
        <div className='w-[100%] h-[100%] bg-[#888380] flex justify-around gap-2 p-1 pt-5 rounded-lg'>
            <button className='w-[130px] p-2 flex items-center justify-center h-[30px] rounded-md border-[1px] text-white bg-transparent'>Muzlatgichlar</button>
            <Image className='w-[50%]' src={Muzlatgich2} alt='muzlatgich'/>
        </div>
        <div className='w-[100%] h-[100%] bg-[#676D86] flex justify-around gap-2 p-1 pt-5 rounded-lg'>
            <button className='w-[130px] p-2 flex items-center justify-center h-[30px] rounded-md border-[1px] text-white bg-transparent'>Smartfonlar</button>
            <Image className='w-[60%] xl:w-[70%]' src={Smartfon} alt='smartfonlar'/>
        </div>
        <div className='w-[100%] h-[100%] bg-[#888380] flex justify-around gap-2 p-1 pt-5 rounded-lg'>
            <button className='w-[130px] p-2 flex items-center justify-center h-[30px] rounded-md border-[1px] text-white bg-transparent'>Muzlatgichlar</button>
            <Image className='w-[50%]' src={Muzlatgich} alt='muzlatgich'/>
        </div>
        <div className='bg-[#134E9B] h-[40px] md:h-[60px] rounded-lg flex items-center justify-center'>
                <Link href={'/'} className='text-[15px] md:text-[18px] font-bold text-white'>Ko`proq</Link>
        </div>
    </div>
  )
}

export default CategoriesImages