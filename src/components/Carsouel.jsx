"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Carousel = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images, interval]);

    return (
        <div className='slideshow mb-10 px-5'>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`slide px-56 ${index === currentIndex ? 'active' : ''}`}
                >
                    {index === currentIndex && <Image src={image} alt={`Slide ${index}`} width={1300} height={1300} />}
                </div>
            ))}
        </div>
    );
};

export default Carousel;
