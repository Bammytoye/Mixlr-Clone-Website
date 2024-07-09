import React from 'react'
import Image from 'next/image';


const Solution = () => {
    return (
        <section className='py-44'>
            <div className='w-[950px] mx-auto'>
                <div className='flex justify-center items-center space-x-18'>
                    <div className='px-12'>
                        <h3 className='text-5xl font-extrabold leading-tight'>A Complete Solution</h3>

                        <p className='font-thin text-lg'>
                            We're a comprehensive one-stop-shop for all audio needs - from live streaming and 
                            hosting to beautiful, custom players, apps and websites.
                        </p>
                    </div>

                    <Image src='/images/solution1.jpg' alt='' width={450} height={450} />
                </div>

                <div className='flex justify-center items-center space-x-18'>
                    <Image src='/images/solution2.jpg' alt='' width={450} height={450} />
                    
                    <div className='px-12'>
                        <h3 className='text-5xl font-extrabold leading-tight'>Quality Sound, User-Friendly Tools</h3>

                        <p className='font-thin text-lg'>
                            Our user-friendly tools simplify the production of professional-grade audio, 
                            making it accessible for everyone.
                        </p>
                    </div>

                </div>

                <div className='flex justify-center items-center space-x-18'>
                    <div className='px-12'>
                        <h3 className='text-5xl font-extrabold leading-tight'>Tailor Your Audio Presence</h3>

                        <p className='font-thin text-lg'>
                            Our advanced customization options allow creators to maintain and express their 
                            brand identity.
                        </p>
                    </div>

                    <Image src='/images/solution3.jpg' alt='' width={450} height={450} />
                </div>

                <div className='flex justify-center items-center space-x-18'>
                    <Image src='/images/solution4.webp' alt='' width={450} height={450} />
                    
                    <div className='px-12'>
                        <h3 className='text-5xl font-extrabold leading-tight'>Audio for Beginners to Pros</h3>

                        <p className='font-thin text-lg'>
                            We cater for all skill levels, offering everything from plug-and-play to account-managed 
                            white-labeled solutions.
                        </p>
                    </div>
                </div>

                <div className='flex justify-center items-center space-x-18'>
                    <div className='px-12'>
                        <h3 className='text-5xl font-extrabold leading-tight'>A Decade of Audio Expertise</h3>

                        <p className='font-thin text-lg'>
                            We've been dedicated exclusively to audio for over 12 years, positioning us as 
                            industry experts.
                        </p>
                    </div>

                    <Image src='/images/solution5.webp' alt='' width={450} height={450} />
                </div>

                <div className='flex justify-center items-center space-x-18'>
                    <Image src='/images/solution6.webp' alt='' width={450} height={450} />
                    
                    <div className='px-12'>
                        <h3 className='text-5xl font-extrabold leading-tight'>Create and Listen Anywhere, Effortlessly</h3>

                        <p className='font-thin text-lg'>
                            Mixlr is crafted for flexibility and ease of use on the go, ensuring that both creators and listeners enjoy a seamless 
                            audio experience, no matter where they are.
                        </p>
                    </div>
                </div>

                <div className='flex justify-center items-center space-x-18'>
                    <div className='px-12'>
                        <h3 className='text-5xl font-extrabold leading-tight'>Your content, your rules</h3>

                        <p className='font-thin text-lg'>
                            We champion full creative control for audio creators, offering extensive 
                            personalization, privacy options, and a commitment to ad-free content.
                        </p>
                    </div>

                    <Image src='/images/solution7.jpg' alt='' width={450} height={450} />
                </div>

                <div className='flex justify-center items-center space-x-18'>
                    <Image src='/images/solution8.webp' alt='' width={450} height={450} />
                    
                    <div className='px-12'>
                        <h3 className='text-5xl font-extrabold leading-tight'>Support That Resonates</h3>

                        <p className='font-thin text-lg'>
                            First-class support at every step, from setup inquiries to specialized assistance for 
                            live events.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solution