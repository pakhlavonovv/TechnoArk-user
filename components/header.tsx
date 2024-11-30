"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./style.css";
import Logo from "../public/logo.svg";



const header_links = [
    { title: "Tashkent", link: "/" },
    { title: "About us", link: "/about" },
    { title: "Products", link: "/products" },
    { title: "Contacts", link: "/contact" },
    { title: "My basket", link: "/basket" },
    { title: "Favourites", link: "/favourites" },
];
const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className="w-full">
            <div className="container md:hidden">
                <div className="flex items-center justify-between p-4">
                    <Image
                        priority
                        className="w-[50px] h-[50px]"
                        src={Logo}
                        alt="logo img"
                    />
                    <h2 className="font-bold">+998 (71) 123-45-67</h2>
                    <i
                        className="fa-solid fa-bars fa-xl cursor-pointer"
                        onClick={toggleSidebar}
                    ></i>
                </div>

                <div
                    className={`fixed top-0 left-0 h-full w-[80%] max-w-[300px] bg-white shadow-lg transform transition-transform duration-300 z-50 ${
                        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <div className="p-4 flex items-center justify-between border-b border-gray-200">
                        <h2 className="text-xl font-bold">Menu</h2>
                        <i
                            className="fa-solid fa-xmark fa-xl cursor-pointer"
                            onClick={toggleSidebar}
                        ></i>
                    </div>
                    <ul className="mt-4">
                        {header_links.map((item) => (
                            <li key={item.title} className="px-4 flex flex-col py-2  hover:bg-gray-100 text-lg">
                                <Link href={item.link} className="text-[16px]" onClick={toggleSidebar}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={toggleSidebar}
                    ></div>
                )}
            </div>

            <div className="hidden md:flex flex-col bg-[#EBEFF3]">
                <div className="container flex items-center justify-between p-2">
                    <ul className="flex items-center gap-3">
                        <i className="fa-solid fa-location-dot fa-lg"></i>
                        {header_links.map((item) => (
                            <Link
                                key={item.title}
                                className="text-[16px] hover:text-[#134E9B] lg:text-[18px]"
                                href={item.link}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </ul>
                    <div className="flex items-center gap-3">
                        <h2 className="font-bold">+998 (71) 123-45-67</h2>
                        <select className="outline-none bg-transparent p-3 rounded-lg">
                            <option>Uz</option>
                            <option>Ru</option>
                        </select>
                    </div>
                </div>

                <div className="bg-white w-full">
                <div className="container flex items-center justify-between p-4">
                    <Link href={"/"} className="flex items-center">
                        <Image
                            className="w-[90px] h-[90px]"
                            src={Logo}
                            alt="logo"
                        />
                        <h1 className="text-[#134E9B] hidden font-bold xl:flex xl:text-[45px]">
                            Ashyo
                        </h1>
                    </Link>
                    <div className="flex items-center gap-4">
                            <button className="hidden lg:flex lg:items-center lg:justify-center bg-blue-800 hover:bg-blue-900 w-[160px] h-[50px] rounded-md text-white text-xl">Katalog</button>
                        <div className="flex items-center justify-between w-[400px] xl:w-[600px] h-[50px] bg-[#EBEFF3] rounded-xl">
                            <input
                                className="pl-5 outline-none text-black border-none bg-transparent text-lg"
                                type="text"
                                placeholder="What are you looking for?"
                            />
                            <button className="bg-[#134E9B] h-full w-[15%] rounded-xl">
                                <i className="fa-solid fa-magnifying-glass fa-xl text-white"></i>
                            </button>
                        </div>
                        <Link href={'favourites'} className="w-[60px] h-[60px] flex items-center justify-center bg-[#EBEFF3] rounded-xl">
                            <i className="fa-regular fa-heart fa-lg"></i>
                        </Link>
                        <Link href={'basket'} className="w-[60px] h-[60px] flex items-center justify-center bg-[#EBEFF3] rounded-xl">
                            <i className="fa-solid fa-briefcase fa-lg"></i>
                        </Link>
                        <button className="w-[60px] h-[60px] bg-[#EBEFF3] rounded-xl">
                            <i className="fa-regular fa-user fa-lg"></i>
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
