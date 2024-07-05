import React from 'react'
import { CgArrowUpO, CgController, CgServerless  } from "react-icons/cg";

const HomePage = () => {
    return (
        <section className='p-20'>
            <div className='space-y-16'>
                <div className='flex justify-center items-center'>
                    <p className='text-5xl'>Professional audio  <br />
                        <span className='font-bold flex justify-center'> Simplified.</span>
                    </p>
                </div>

                <div className='flex justify-center items-center'>
                    <p className='cursor-pointer font-bold text-xl border border-1 rounded-full p-5 bg-red-700 text-white hover:bg-red-400'>
                        Start free trial
                    </p>
                </div>

                <div className="flex justify-center font-bold">
                    <div className="flex justify-center items-center space-x-32 border bg-gray-200 px-1 py-3 rounded-full w-[700px]">
                        <a href="#" className="flex items-center">
                            <CgController className="mr-3 mb-1" /> Live Stream
                        </a>

                        <a href="#" className="flex items-center ">
                            <CgArrowUpO className="mr-3 mb-1" /> Host
                        </a>

                        <a href="#" className="flex items-center ">
                            <CgServerless className="mr-3 mb-1" /> Share
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HomePage