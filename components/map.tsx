import React from 'react';
import './style.css';

const Map = () => {
  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.135309094044!2d69.29047837591523!3d41.32767097130758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4b6039cc475%3A0x6fd3bf1c5533b300!2sBodomzor%20yo&#39;li%201-tor%20ko&#39;chasi%2072%2C%20%D0%A2%D0%BEshkent%2C%20Toshkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1732804708379!5m2!1sen!2s"
        className="w-full h-full"
        loading="lazy"
      ></iframe>
     <div className="absolute mt-4 top-0 w-[90%] h-[90%] sm:w-[400px] lg:w-[500px] bg-white flex flex-col gap-9 p-4 lg:p-10">
      <div className="flex flex-col gap-2">
        <h2 className='font-bold '>OOO “Ashyo”</h2>
        <h3>Telefon raqam : <span>+998 71 123 45 56</span></h3>
        <h3>Elektron pochta: <span className='text-blue-500'>ashyo@gmail.com</span></h3>
        <div>
        <h3>Manzilimiz</h3>
        <p>100052, O‘zbekiston Respublikasi, Toshkent shahri, Bodomzor yo‘li 1-tor ko‘chasi, 72
        </p>
      </div>
        </div>
        <select className='h-[50px] p-2 border-[1px] shadow-sm cursor-pointer outline-none rounded-md'>
          <option >Do`konlarimizni izlang</option>
        </select>
      </div>
    </div>
  );
};

export default Map;
