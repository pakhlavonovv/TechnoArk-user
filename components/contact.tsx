'use client'
import React, { useState } from 'react';
import './style.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const token = '8107513491:AAHBPvsWRhNkv0nWbFD4NsIctifTJnNK6F0';
    const chatId = '6207044781';
  
    const textMessage = `
  *Ism:* ${name}
  *Familya:* ${surname}
  *Telefon raqam:* ${phone}
  *Elektronpochta:* ${email}
  *Fikir/Izoh:* ${message}
  `;
  
    setLoading(true);
  
    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: textMessage,
          parse_mode: 'Markdown', 
        }),
      });
  
      const data = await response.json();
      console.log(data);
  
      if (data.ok) {
        alert('Fikr muvaffaqiyatli yuborildi!');
        setName('');
        setSurname('');
        setPhone('');
        setEmail('');
        setMessage('');
      } else {
        alert('Xatolik yuz berdi. Iltimos, qaytadan urinib ko‘ring.');
      }
    } catch (error) {
      alert('Xatolik yuz berdi. Iltimos, qaytadan urinib ko‘ring.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="container">
      <div className="flex flex-col gap-1">
        <h1 className="text-[#B6BABF]">Bosh sahifa / Qayta Aloqa /</h1>
        <h2 className="text-[35px] font-bold mt-4">Qayta Aloqa</h2>
        <p className="text-[18px] text-[#B6BABF]">
          Bizning ishimiz haqidagi fikir mulohazalaringiz bilan bo‘lishing yoki izohlar maydonida o‘zingizni qiziqtirgan savolingizni yo‘llang
        </p>
      </div>
      <form onSubmit={handleFormSubmit} className="w-[100%] grid grid-cols-1 gap-2 mt-11 md:grid-cols-2 lg:w-[60%]">
        <div className="flex flex-col gap-1">
          <label className="text-black">Ism</label>
          <input
            type="text"
            className="w-full h-[45px] rounded-md outline-none p-1 bg-[#EBEFF3]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-black">Familiya</label>
          <input
            type="text"
            className="w-full h-[45px] rounded-md outline-none p-1 bg-[#EBEFF3]"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-black">Telefon raqam</label>
          <input
            type="text"
            className="w-full h-[45px] rounded-md outline-none p-1 bg-[#EBEFF3]"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-black">Elektronpochta</label>
          <input
            type="email"
            className="w-full h-[45px] rounded-md outline-none p-1 bg-[#EBEFF3]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </form>
      <div className="mt-3 flex flex-col gap-1">
        <label className="text-black">O‘zingizni fikringizni qoldiring</label>
        <textarea
          className="w-full resize-none h-[95px] md:h-[120px] rounded-md outline-none p-1 bg-[#EBEFF3] lg:w-[60%] lg:h-[150px]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button
      onClick={handleFormSubmit}
        type="submit"
        className="w-full mt-5 bg-[#15509E] border-[1px] border-[#15509E] h-[42px] rounded-md text-white lg:w-[200px] hover:bg-transparent hover:text-[#15509E]"
        disabled={loading}
      >
        {loading ? 'Yuborilmoqda...' : 'Yuborish'}
      </button>
    </div>
  );
};

export default Contact;
