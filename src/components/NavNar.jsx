import React from 'react'
// import Logo from '../images/download.svg'
import { CgAdd } from "react-icons/cg";

const NavNar = () => {
    return (
        <header>
            <div className='p-3 flex items-center justify-between cur'>
                <div className='flex items-center'>
                    <a href="#">
                        <img src="/images/download.svg" alt="" width={100} height={100}/>
                    </a>
                </div>

                <div className='flex space-x-10 items-center text-gray-700'>
                    <a href="#">Features</a>
                    <a href="#">Listen</a>
                    <a href="#">Pricing</a>
                    <a href="#">Login</a>

                    <a href="#" className="flex items-center text-red-600 font-bold border py-2 px-5 rounded-full">
                        <CgAdd className="mr-2 mb-0.5" /> Get Started
                    </a>
                </div>
            </div>
        </header>
    )
}

export default NavNar