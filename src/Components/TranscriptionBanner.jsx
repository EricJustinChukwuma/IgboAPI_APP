import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const TranscriptionBanner = () => {
  return (
    <>
        <div className='flex flex-col justify-center items-start md:items-center text-white pt-32 md:pt-40 pb-12 text-left md:text-center px-4 relative'>
            <h1 className='text-white text-4xl md:text-7xl pb-2 leadind-[50px]'>The next generation of  AI</h1>
            <h3 className='text-[#339c33] text-4xl md:text-7xl pb-8 md:pb-14 leading-[40px]'>Igbo Language Transcription</h3>
            <p className='text-gray-100 text-lg md:text-xl w-full md:w-[50%] mx-0 md:mx-auto pb-32'>Closing the gap between Igbo language and technology, making Igbo more success to the world using pronunciations for software organisations and you.</p>

            <p className='text-gray-100'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

            <div className='w-full md:w-[35%] flex justify-center items-center relative'>
                <input 
                    type='text' 
                    placeholder='Your Email'
                    className='border border-gray-100 w-full py-4 pl-4 rounded outline-none'
                />
                <FaArrowRight className='absolute right-4 text-black'/>
            </div>
        </div>
    </>
  )
}

export default TranscriptionBanner