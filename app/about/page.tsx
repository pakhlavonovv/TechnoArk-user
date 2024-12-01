import Header from "@/components/header"
import CardsMap from "@/components/cards_map"
import Footer from "@/components/footer"
import Image from "next/image"
import PrintImage from '../../public/print.png'
import ShareImage from '../../public/share.png'
const ashyo_info = [
  {title: 'Ashyo haqida', description: 'Ashyo 2022 yilda Toshkent shahrida tashkil etylgan.'},
  {title: 'Muddatli to’lov', description: 'Ashyoda barcha eliktronika maishiy texnikalar uchun qulay onlayn to’lov rejasi'},
  {title: 'To‘lov usullari', description: 'Siz uchun qulay usulda to’lang do’konda, Cilik, Payme orqali.'},
  {title: 'Yetkazib berish', description: 'Ashyoda tovarlarni yetkazib berish shartlari.'},
  {title: 'Tavorlarga kafolat', description: 'Ashyo onlayn do’konining kafolati va qaytarilish haqida hamma narsani bilib oling'},
  {title: 'Yordam', description: 'Tushumagan narsalaringiz bo’lsa savollaringizni bering'},
]
const ashyo_right_info = [
  {desc: 'Ashyo - bozor narhid maishy texnika va electronics dukonlari qurilmalari. 2 oydan davomid mizhozlarga keng assortimentdagi mahsulotlarni, kafolatli va benson hizmatni taklif etib keladi.'},
  {desc: 'Ashyo 2022 yilda Toshkent shahrida tashkil etylgan. Bugungi kunga qadar jami poytaxtda va viloyatlarda 26 that dukon faoliyat ko`rsatmoqda.'},
  {desc: 'Siz tovarlarni har kanday kulay usulda sotib olishingiz mumkin: tarmoq dukonlarida yoki website. Maishy uchun texnikasi onlayn b`lib to`lov rezhashi mavjud. Ruyhatdan utish uchun zarur bulgan huzhzhat - bu pasport..'},
  {desc: 'Yuridik shahslar uchun pul o`tkazish yo`li bilan, eng muximi - qo`shimcha to`lovlarsiz sotib olish mumkin.'},

]
const Page = () => {
  return (
    <>
    <Header/>
    <div className="container grid grid-cols-1 items-center gap-5 lg:grid-cols-2 lg:gap-10">
      <div className="w-full h-[100%] flex flex-col gap-10 p-6 rounded-md bg-[#EBEFF3]">
      {ashyo_info.map((item, index)=> {
        return <div key={index} className="flex flex-col gap-1">
        <h2 className="text-[18px] font-bold">{item.title}</h2>
        <p>{item.description}</p>
      </div>
      })}
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-[22px] font-bold">Ashyo haqida</h1>
        <div className="w-full h-[40vh] bg-blue-600 text-white rounded-md flex items-center justify-center"><h3 className="text-[60px] lg:text-[70px] font-bold">Ashyo</h3></div>
        {
          ashyo_right_info.map((item)=> {
            return <p key={item.desc}>{item.desc}</p>
          })
        }
        <div className="flex gap-3">
          <Image src={PrintImage} alt="print image"/>
          <Image src={ShareImage} alt="share image"/>
        </div>
      </div>
    </div>
    <br /><br />
    <CardsMap/>
    <br /><br />
    <Footer/>
    </>
  )
}

export default Page