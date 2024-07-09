import Image from 'next/image'
import React from 'react'
import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <section>
            <div className='flex flex-col justify-center items-center space-y-20'>
                <div className='flex flex-col space-y-10'>
                    <p className='text-md text-red-500 tracking-extra-wide text-center cursor-pointer'>
                        View all features
                    </p>

                    <h3 className='w-[350px] text-5xl font-thin text-center'>
                        Broadcast your audio today
                    </h3>

                    <a href="#" className='text-center cursor-pointer font-bold text-xl border border-1 rounded-full px-16 py-5 bg-red-700 text-white hover:bg-red-400'>
                        Start free trial
                    </a>
                </div>

                <div className='flex flex-col space-y-10'>
                    <div className='flex justify-center'>
                        <Image src='/images/download1.svg' alt='' width={70} height={70} />
                    </div>

                    <div className='flex justify-center space-x-6 text-4xl text-red-700 cursor-pointer'>
                        <BiLogoFacebook />
                        <FaTwitter />
                    </div>

                    <div className='flex justify-center space-x-6'>
                        <p className='hover:text-red-700 cursor-pointer'>Pricing</p>
                        <p className='hover:text-red-700 cursor-pointer'>Blog</p>
                        <p className='hover:text-red-700 cursor-pointer'>Support</p>
                        <p className='hover:text-red-700 cursor-pointer'>Career</p>
                        <p className='hover:text-red-700 cursor-pointer'>Terms of Use</p>
                        <p className='hover:text-red-700 cursor-pointer'>Privacy Policy</p>
                    </div>
                    
                    <h4 className='text-center font-thin tracking-wide text-sm'>© Mixlr Ltd 2024 - All rights reserved</h4>
                </div>
            </div>
        </section>
    )
}

export default Footer