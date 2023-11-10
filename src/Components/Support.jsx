import React, { useState } from 'react';
import confetti1 from "../assets/freepik--Confetti--inject-102.svg";
import confetti2 from "../assets/freepik--Confetti--inject-102 (1).svg";
import supportImage from "../assets/image 1.jpg";

const Support = () => {
    
  return (
    <>
        <section className='w-full pt-16 pb-24 bg-blue-600 relative overflow-hidden'>
            <img src={confetti1} alt="" className='w-[26rem] h-[24rem] absolute top-0 left-0 hidden md:block'/>
            <img src={confetti2} alt="" className='w-[26rem] h-[24rem] absolute top-0 right-0 hidden md:block'/>
            <div className='flex flex-col justify-center items-center text-center'>
                <h1 className='text-white text-5xl font-bold pb-16 md:pb-20'>Supported by</h1>
                <img src={supportImage} alt="" className='w-[12.5rem] md:w-[16rem]'/>
            </div>
        </section>
    </>
  )
}

export default Support