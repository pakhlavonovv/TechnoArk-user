import './style.css';
import Image from 'next/image';
import Noutbuklar from '../public/noutbuklar.svg';
import KirMashina from '../public/kirmoshina.svg';
import Konditsioner from '../public/konditsioner.svg';
import Televizor from '../public/televizorlar.svg';
import Smartfon from '../public/smartfonlar.svg';
import Muzlatgich from '../public/muzlatgich.svg';
import Muzlatgich2 from '../public/muzlatgich2.svg';
import Link from 'next/link';

const CategoriesImages = () => {
  const categories = [
    { img: Noutbuklar, alt: 'Noutbuklar' },
    { img: KirMashina, alt: 'Kir yuvish mashinasi' },
    { img: Konditsioner, alt: 'Konditsioner' },
    { img: Televizor, alt: 'Televizor' },
    { img: Muzlatgich2, alt: 'Muzlatgich' },
    { img: Smartfon, alt: 'Smartfonlar' },
    { img: Muzlatgich, alt: 'Muzlatgich' },
  ];

  return (
    <div className="container grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`relative w-full h-[100%] bg-gray-300 rounded-lg flex items-center justify-center group transition-all`}
        >
          <Image
            className="w-[50%] md:w-[60%] xl:w-[60%] transition-transform group-hover:scale-110"
            src={category.img}
            alt={category.alt}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
            <Link
              href="/"
              className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100"
            >
              {category.alt}
            </Link>
          </div>
        </div>
      ))}

      {/* "Ko‘proq" tugmasi */}
      <div className="bg-[#134E9B] h-[60px] rounded-lg flex items-center justify-center">
        <Link
          href="/"
          className="text-[15px] md:text-[18px] font-bold text-white"
        >
          Ko‘proq
        </Link>
      </div>
    </div>
  );
};

export default CategoriesImages;
