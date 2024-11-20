"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './style.css';
import Logo from '../public/logo.svg';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleCategoryDropdown = () => {
        setIsCategoryOpen(!isCategoryOpen);
    };

    const header_links = [
        { title: "Tashkent", link: '/' },
        { title: "About us", link: '/' },
        { title: "Products", link: '/' },
        { title: "Contacts", link: '/contact' },
    ];

    const category_links = [
        { title: "Category 1", link: '/category1' },
        { title: "Category 2", link: '/category2' },
        { title: "Category 3", link: '/category3' },
    ];

    return (
        <div className='w-full'>
            <div className="md:bg-[#EBEFF3]">
                <div className="container items-center justify-between p-2 hidden md:flex">
                    <ul className='flex items-center gap-3'>
                        <i className="fa-solid fa-location-dot fa-lg"></i>
                        {
                            header_links.map((item) => (
                                <Link key={item.title} className='text-[16px] hover:text-[#134E9B] lg:text-[18px]' href={item.link}>{item.title}</Link>
                            ))
                        }
                    </ul>
                    <div className='flex items-center gap-3'>
                        <h2 className='font-bold'>+998 (71) 123-45-67</h2>
                        <select className='outline-none bg-transparent p-3 rounded-lg'>
                            <option>Uz</option>
                            <option>Ru</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='flex items-center justify-between md:hidden'>
                    <Image priority className='w-[50px] h-[50px]' src={Logo} alt='logo img' />
                    <h2 className='font-bold'>+998 (71) 123-45-67</h2>
                    <i className="fa-solid fa-bars fa-xl"></i>
                </div>
                <div className="hidden items-center gap-4 justify-between lg:flex">
                    <Link href={'/'} className="flex items-center">
                    <Image className='w-[90px] h-[90px]' src={Logo} alt='logo' />
                        <h1 className='text-[#134E9B] text-[24px] font-bold xl:text-[50px]'>Ashyo</h1>
                    </Link>
                    <div className="flex items-center gap-2 relative">
                        <button
                            onClick={toggleDropdown}
                            className='bg-[#134E9B] lg:w-[150px] xl:w-[170px] h-[50px] text-white border-[1px] border-[#134E9B] rounded-xl text-lg transition-all hover:bg-transparent hover:text-[#134E9B]'
                        >
                            Kategorya
                        </button>
                        {isDropdownOpen && (
                            <ul className="absolute mt-2 w-[500px] bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                {category_links.map((item) => (
                                    <li key={item.title} className="px-4 py-2 hover:bg-gray-100 text-lg">
                                        <Link href={item.link}>{item.title}</Link>
                                    </li>
                                ))}
                                <li className="absolute top-0 right-0 px-4 py-2 text-xl cursor-pointer" onClick={toggleDropdown}>
                                    <i className="fa-solid fa-xmark"></i>
                                </li>
                            </ul>
                        )}
                        <div className="flex items-center justify-between lg:w-[400px] xl:w-[600px] h-[50px] bg-[#EBEFF3] rounded-xl">
                            <input className='pl-5 outline-none border-none bg-transparent text-lg' type="text" placeholder='What are you looking for?' />
                            <button className='bg-[#134E9B] h-full w-[15%] rounded-xl'><i className="fa-solid fa-magnifying-glass fa-xl text-white"></i></button>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <button className='w-[60px] h-[60px] bg-[#EBEFF3] rounded-xl'><i className="fa-regular fa-heart fa-lg"></i></button>
                        <button className='w-[60px] h-[60px] bg-[#EBEFF3] rounded-xl'><i className="fa-solid fa-briefcase fa-lg"></i></button>
                        <button className='w-[60px] h-[60px] bg-[#EBEFF3] rounded-xl'><i className="fa-regular fa-user fa-lg"></i></button>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 min-[440px]:flex-row mt-12 lg:hidden relative">
                    <div className="flex items-center justify-between w-full h-[45px] bg-[#EBEFF3] rounded-lg">
                        <input className='pl-5 outline-none border-none bg-transparent text-lg' type="text" placeholder='What are you looking for?' />
                        <button className='bg-[#134E9B] h-full w-[30%] rounded-lg'><i className="fa-solid fa-magnifying-glass fa-xl text-white"></i></button>
                    </div>
                    <button
                        onClick={toggleCategoryDropdown}
                        className='bg-[#134E9B] w-[40%] h-[45px] text-white border-[1px] border-[#134E9B] text-lg rounded-lg transition-all hover:bg-transparent hover:text-[#134E9B]'
                    >
                        Kategorya
                    </button>
                    {isCategoryOpen && (
                        <ul className="absolute mt-2 w-[300px] bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                            {category_links.map((item) => (
                                <li key={item.title} className="px-4 py-2 hover:bg-gray-100 text-lg">
                                    <Link href={item.link}>{item.title}</Link>
                                </li>
                            ))}
                            <li className="absolute top-0 right-0 px-4 py-2 text-xl cursor-pointer" onClick={toggleCategoryDropdown}>
                                <i className="fa-solid fa-xmark"></i>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;
