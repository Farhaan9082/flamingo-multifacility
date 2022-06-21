import Image from 'next/image';
import React from 'react'
import background from "../../public/background.jpg";

const Hero = () => {
  return (
    <div className="">
      <div className="h-screen w-full">
        <Image src={background} className="object-cover min-h-screen" />
      </div>
      <div className="container py-4">
        <h1 className='text-md text-pink-500 font-medium'>Flamingo Multifacility</h1>
        <h1 className='text-4xl font-bold text-gray-900 mt-2'>We provide security and facility services</h1>
        <p className='mt-5 text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, ipsa! Suscipit amet quia, ipsam molestiae delectus iure provident nostrum minima quibusdam ipsum laborum dolore voluptatibus molestias facere officiis odit dignissimos.</p>
      </div>
    </div>
  )
}

export default Hero