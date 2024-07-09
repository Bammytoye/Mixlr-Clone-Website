'use client'
import React, { useState } from 'react'
import { CgAdd } from "react-icons/cg";
import { TbLivePhoto } from "react-icons/tb";
import { PiUpload } from "react-icons/pi";
import { BsColumns } from "react-icons/bs";
import { BsBrightnessLow } from "react-icons/bs";


const NavNar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className='p-3 flex items-center justify-between cursor-pointer'>
                <div className='flex items-center'>
                    <a href="#">
                        <img src="/images/download.svg" alt="" width={100} height={100} />
                    </a>
                </div>

                <div className='flex space-x-10 items-center text-gray-700'>
                    <a href="#">Features</a>
                    <a href="#">Listen</a>
                    <a href="#">Pricing</a>
                    <a href="#">Login</a>

                    <div className="relative inline-block text-left">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center text-red-600 hover:text-black font-bold py-2 px-5 rounded-full border hover:border-red-500"
                        >
                            <CgAdd className="mr-2 mb-0.5" /> Get Started
                        </button>

                        {isOpen && (
                            <div
                                className="absolute right-0 mt-2 w-60 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                            >
                                <ul className="py-1">
                                    <li className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-red-600">
                                        <TbLivePhoto className="mr-2 mb-0.5" />
                                        <a href="#">Go Live now</a>
                                    </li>

                                    <li className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-red-600">
                                        <PiUpload className="mr-2 mb-0.5" />
                                        <a href="#">Upload recording</a>
                                    </li>
                                    <hr />

                                    <li className="flex items-center px-4 py-2 text-sm text-red-700 hover:text-gray-600">
                                        <BsColumns className="mr-2 mb-0.5" />
                                        <a href="#">Create Space</a>
                                    </li>
                                    
                                    <li className="flex items-center px-4 py-2 text-sm text-red-700 hover:text-gray-600">
                                        <BsBrightnessLow className="mr-2 mb-0.5" />
                                        <a href="#">Start free trial</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavNar