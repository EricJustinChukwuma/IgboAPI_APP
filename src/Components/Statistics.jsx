import React, { useState } from 'react';

const Statistics = () => {
  return (
    <>
        <section className='bg-[#f3d8a7] text-center pt-12 pb-28'>
            <h1 className='text-4xl md:text-6xl mb-6'>Database Statistics</h1>
            <p className='text-gray-200 text-md md:text-lg tracking-wide px-4 mb-12'>The Igbo API is the most robust, Igbo-English dictionary API that is maintained by our wonderful volunteer community</p>
            <div className='grid grid-cols-1 md:grid-cols-3 px-10 md:px-36'>
                <div className='p-8 bg-[#ffe23e] border'>
                    <h1 className='text-4xl mb-4 font-bold'>106</h1>
                    <p>Developers using the Igbo API</p>
                </div>
                <div className='p-8 bg-[#ffe23e] border'>
                    <h1 className='text-4xl mb-4 font-bold'>3,831</h1>
                    <p>Words in the database</p>
                </div>
                <div className='p-8 bg-[#ffe23e] border'>
                    <h1 className='text-4xl mb-4 font-bold'>1,740</h1>
                    <p>Words in Nsịbịdị</p>
                </div>
                <div className='p-8 bg-[#ffe23e] border'>
                    <h1 className='text-4xl mb-4 font-bold'>3,881</h1>
                    <p>Standard Igbo Words</p>
                </div>
                <div className='p-8 bg-[#ffe23e] border'>
                    <h1 className='text-4xl mb-4 font-bold'>3,877</h1>
                    <p>Word audio pronunciations</p>
                </div>
                <div className='p-8 bg-[#ffe23e] border'>
                    <h1 className='text-4xl mb-4 font-bold'>8,846</h1>
                    <p>Example Igbo sentences</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Statistics