import React from 'react'
import './style.css'

const Contact = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-1">
        <h1 className="text-[#B6BABF]">Bosh sahifa / Qayta Aloqa /</h1>
        <h2 className="text-[35px] font-bold mt-4">Qayta Aloqa</h2>
        <p className="text-[18px] text-[#B6BABF]">
          Bizning ishimiz haqidagi fikir mulohazalaringiz bilan bo‘lishing yoki izohlar maydonida o‘zingizni qiziqtirgan savolingizni yo‘llang
        </p>
      </div>
      <form className="w-[100%] grid grid-cols-1 gap-2 mt-11 md:grid-cols-2 lg:w-[60%]">
        <div className="flex flex-col gap-1">
          <label className="text-black">Ism</label>
          <input type="text" className="w-full h-[45px] rounded-md outline-none p-1 bg-[#EBEFF3]" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-black">Familiya</label>
          <input type="text" className="w-full h-[45px] rounded-md outline-none p-1 bg-[#EBEFF3]" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-black">Telefon raqam</label>
          <input type="text" className="w-full h-[45px] rounded-md outline-none p-1 bg-[#EBEFF3]" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-black">Elektronpochta</label>
          <input type="email" className="w-full h-[45px] rounded-md outline-none p-1 bg-[#EBEFF3]" />
        </div>
      </form>
      <div className="mt-3 flex flex-col gap-1">
        <label className="text-black">O‘zingizni fikringizni qoldiring</label>
        <textarea className="w-full resize-none h-[95px] md:h-[120px] rounded-md outline-none p-1 bg-[#EBEFF3] lg:w-[60%] lg:h-[150px]"></textarea>
      </div>
      <button className="w-full mt-5 bg-[#15509E] border-[1px] border-[#15509E] h-[42px] rounded-md text-white lg:w-[250px] hover:bg-transparent hover:text-[#15509E]">
        Yuborish
      </button>
    </div>
  )
}

export default Contact
