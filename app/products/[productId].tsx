import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface CardData {
  id: number;
  title: string;
  price: string;
  credit: string;
  image: string | StaticImageData;
}

interface ProductProps {
  product: CardData;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>; // Fallback holatida yuklanayotganini bildiruvchi matn
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <Image src={product.image} width={400} height={400} alt={product.title} />
      <p className="text-lg font-semibold">{product.price}</p>
      <p>{product.credit}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Array.from({ length: 8 }, (_, index) => ({
    params: { id: (index + 1).toString() },
  }));

  return {
    paths,
    fallback: true, 
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const cardData: CardData[] = [
    {
      id: 1,
      title: 'Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px',
      price: '6 999 999 usz',
      credit: '6 oy / 1 200 000 usz',
      image: '../../public/airpods.svg  ', 
    },
    {
      id: 2,
      title: 'Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px',
      price: '6 999 999 usz ',
      credit: '6 oy / 1 200 000 usz',
      image: '../../public/airpods.svg  ',
    },
  ];

  const product = cardData.find((card) => card.id === Number(params?.id));

  if (!product) {
    return { notFound: true }; 
  }

  return {
    props: {
      product,
    },
  };
};

export default Product;
