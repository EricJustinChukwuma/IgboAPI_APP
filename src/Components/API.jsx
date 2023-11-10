import React from 'react';
import { BiCopy, BiCopyAlt } from "react-icons/bi";
import { CgCopy } from "react-icons/cg";
import { FaCopy, FaRegCopy } from "react-icons/fa";
import { MdCopyAll } from "react-icons/md";
import Bgimage from "../assets/grid.jpg";

const API = () => {
  return (
    <>
        <section className='w-full mt-20 pt-16 pb-32 md:pb-40 px-4 md:px-10 relative'>
            <img src={Bgimage} alt="" className='absolute top-0 left-0 w-full h-full object-cover -z-[99]' />
            <h1 className='text-[#272727] text-4xl md:text-5xl text-center mb-6'>Biko, check it out for yourself</h1>
            <p className='text-center text-gray-700'>Get over 2,000 request for free, no warn at all</p>

            <div className='flex flex-col lg:flex-row justify-center mt-20'>
                <div className='w-full border-2 border-black'>
                    <div className='bg-blue-400 w-full border-b-2 border-black px-4 py-2'>
                        <h3 className='text-[21px] font-bold'>Enter a word below</h3>
                        <p className='text-sm'>Enter a word in either English or Igbo to see it's information</p>
                    </div>
                    <div className='w-full pr-6 pl-4 py-6 bg-white'>
                        <h1 className='text-[21px] mb-4 font-bold'>Query</h1>
                        <div className='flex flex-col md:flex-row justify-start items-start gap-y-4 md:gap-y-0'>
                            <div className='flex items-center'>
                                <input type="checkbox" className='w-[20px] h-[20px] mr-2 cursor-pointer'/>
                                <label htmlFor="Examples" className='mr-5 text-md font-semibold'>Examples</label>
                            </div>
                            <div className='flex items-center'>
                                <input type="checkbox" className='w-[20px] h-[20px] mr-2 cursor-pointer'/>
                                <label htmlFor="Dialects" className='text-md font-semibold'>Dialects</label>
                            </div>
                        </div>
                        <div className='mt-8 relative'>
                            <h3 className='font-bold mb-2'>End Point</h3>
                            <input 
                                type="text" 
                                name="endPoint" 
                                className='w-full border border-gray-500 p-3 md:p-3.5 outline-none rounded-sm placeholder:text-sm md:placeholder:text-md placeholder:text-gray-700'
                                placeholder='http://Igboapi.com/api/v1/words?'
                            />
                            <FaRegCopy className='absolute top-12 right-2 md:right-4 cursor-pointer text-[16px] md:text-[22px]'/>
                        </div>
                        <div className='mt-12'>
                            <h3 className='font-bold mb-2'>Word search</h3>
                            <div className='flex flex-col md:flex-row justify-center md:items-center items-start gap-x-4'>
                                <input 
                                    type="text" 
                                    name='wordSearch' 
                                    className='w-full border border-gray-500 p-3.5 outline-none rounded-sm placeholder:text-gray-700 text-sm md:text-md'
                                    placeholder='Enter a word, ie water or biko'
                                />
                                <button className='submit-btn py-3.5 md:px-10 px-16 border-none rounded-md text-white font-semibold mt-4 md:mt-0 cursor-pointer'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full h-[460px] flex flex-col border-2 border-black relative'>
                    <div className='bg-blue-400 w-full border-b-2 border-black px-4 py-2'>
                        <h1 className='text-[21px] font-bold'>Response</h1>
                        <p className='text-sm'>Copy this Code for use in your code base</p>
                    </div>
                    <div className='w-full h-full relative'>
                        <textarea className='w-full h-full bg-black outline-none text-white p-4'/>
                        <FaRegCopy size={32} className='absolute top-2 right-2 cursor-pointer z-[90] text-white bg-gray-900 w-8 py-1 px-1 box-border mb-0' />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default API;