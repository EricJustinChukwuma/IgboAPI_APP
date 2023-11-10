import React from 'react';
import { BsGithub } from "react-icons/bs"

const Banner = () => {
  return (
    <>
        <section className='w-full flex justify-center items-center flex-col pt-24 pb-2 md:pb-24 text-center'>
            <h1 className='text-white text-[50px] md:text-[80px] mb-4 md:px-0 px-10'>The First African Language API</h1>
            <p className='text-gray-100 p-2'>
              Access thousands of Igbo words, audio pronunciations, and example sentences to power the future of Igbo technology.
            </p>
            <div className='w-full mt-24 px-4'>
              <div className='flex flex-col md:flex-row justify-center gap-12'>
                <button className='api-btn px-6 py-4 bg-white font-extrabold rounded-md cursor-pointer'>
                  Get API key
                </button>
                <button className='git-btn text-white border-[1px] shadow-md font-bold px-6 py-4 flex justify-center items-center rounded-md cursor-pointer'>
                    <BsGithub  className='mr-2'/>
                    166 store
                </button>
              </div>
            </div>
        </section>
    </>
  )
}

export default Banner