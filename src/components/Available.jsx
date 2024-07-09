'use client'
import React from 'react'
import { IoLogoWindows } from "react-icons/io5";
import { AiFillAndroid, AiFillAmazonCircle, AiFillCiCircle } from "react-icons/ai";
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Available = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const quotes = [
        {
            image: '/images/card1.png',
            quote: 'Penske Entertainment and the INDYCAR Radio Network have used Mixlr for over a decade to reach our INDYCAR fans across the globe. It is a pleasure to continue with the Mixlr platform as we evolve in the new era of digital content.',
            author: 'Chris Pollock, Network Director, INDYCAR Radio Network'
        },
        {
            image: '/images/card2.png',
            quote: 'We broadcast with Mixlr because it is a very simple-to-use, ready-to-go solution',
            author: 'Sommie Njoku, Dominion City Lagos'
        },
        {
            image: '/images/card3.png',
            quote: 'We ve been streaming live on Mixlr since 2014...from remote villages to some of the biggest stadiums in the world.We love Mixlr, its great! Easy to use, reliable with excellent audio quality.',
            author: 'Jonathan Pinfield, Live Sports FM'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 5000); // Change the interval time as needed

        return () => clearInterval(interval);
    }, [quotes.length]);

    return (
        <div>
            <div className="flex flex-col justify-center items-center space-y-7">
                <p className='text-lg '>
                    Available on
                </p>

                <ul className='flex space-x-16 text-6xl'>
                    <li><IoLogoWindows /></li>
                    <li><AiFillAndroid /></li>
                    <li><AiFillAmazonCircle /></li>
                    <li><AiFillCiCircle /></li>
                </ul>

                <p className='flex justify-center text-4xl w-[580px] text-center font-light leading-tight'>
                    The simplest way to get audio to your audience.
                </p>

                {/* <div className='pt-20'>
                    <div className='flex justify-center border bg-gray-100 border-gray-100 mx-auto w-[650px] py-20 rounded-3xl'>
                        <figure className='flex-col w-[450px] justify-center items-center text-center space-y-5'>
                            <Image className='mx-auto' src='/images/card1.png' alt='quoteOne' width={70} height={70} />

                            <blockquote className='text-xl font-serif'>
                                Penske Entertainment and the INDYCAR Radio Network have used Mixlr for over a 
                                decade to reach our INDYCAR fans across the globe. It is a pleasure to continue 
                                with the Mixlr platform as we evolve in the new era of digital content.
                            </blockquote>

                            <cite className='italic'>Chris Pollock, Network Director, INDYCAR Radio Network</cite>
                        </figure>
                    </div>

                    <div className='flex justify-center border bg-gray-100 border-gray-100 mx-auto w-[650px] py-20 rounded-3xl'>
                        <figure className='flex-col w-[450px] justify-center items-center text-center space-y-5'>
                            <Image className='mx-auto' src='/images/card2.png' alt='quoteOne' width={70} height={70} />

                            <blockquote >
                                We broadcast with Mixlr because it is a very simple-to-use, ready-to-go solution
                            </blockquote>

                            <cite className='italic'>Sommie Njoku, Dominion City Lagos</cite>
                        </figure>
                    </div>

                    <div className='flex justify-center border bg-gray-100 border-gray-100 mx-auto w-[650px] py-20 rounded-3xl'>
                        <figure className='flex-col w-[450px] justify-center items-center text-center space-y-5'>
                            <Image className='mx-auto' src='/images/card3.png' alt='quoteOne' width={70} height={70} />

                            <blockquote >
                                We've been streaming live on Mixlr since 2014...from remote villages to some 
                                of the biggest stadiums in the world. We love Mixlr, it's great! Easy to use, 
                                reliable with excellent audio quality.
                            </blockquote>

                            <cite className='italic'>Jonathan Pinfield, Live Sports FM</cite>
                        </figure>
                    </div>
                </div> */}

                <div className="pt-20">
                    {quotes.map((quote, index) => (
                        <div
                            key={index}
                            className={`flex justify-center border bg-gray-100 border-gray-100 mx-auto w-[650px] py-20 rounded-3xl ${index === currentIndex ? 'block' : 'hidden'
                                }`}
                        >
                            <figure className="flex-col w-[450px] justify-center items-center text-center space-y-5">
                                <Image className="mx-auto" src={quote.image} alt="quoteOne" width={70} height={70} />
                                <blockquote className="text-xl font-serif">{quote.quote}</blockquote>
                                <cite className="italic">{quote.author}</cite>
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Available