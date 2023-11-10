import React from 'react';
import toys from "../assets/toys.svg";
import toys2 from "../assets/toys (1).svg"

const AboutBanner = () => { 

    return (
      <>
          <section className='w-full bg-[#81ca7a] py-48 overflow-hidden relative'>   
              <img src={toys2} alt="" className='absolute top-20 md:top-10 w-[7rem] md:w-[15rem]'/> 
              <div className='w-full md:w-[600px] flex flex-col justify-start items-start relative px-4 md:px-8'>
                  <h1 className='text-4xl md:text-7xl font-semibold pb-10 md:pb-20'>About</h1>
                  <p className='text-sm md:text-lg leading-8 md:leading-10 text-gray-300'>The Igbo API is a multidialectal audio-supported, open-to-contribute Igbo-English dictionary API. This Project focuses on enabling developers, organisations, and teams to create technology that relies  on the Igbo language.</p>
              </div>
              <img src={toys} alt="" className='w-[10rem] sm:w-[15rem] md:w-[25rem] lg:w-[35rem] absolute top-20 -right-12 md:top-44 md:right-32'/>
              <img src={toys} alt="" className='w-[10rem] sm:w-[15rem] md:w-[25rem] lg:w-[35rem] absolute -bottom-14 -right-14 md:top-32 md:-right-60 -rotate-12'/>
              <img src={toys} alt="" className='w-[5rem] sm:w-[6.5rem] md:w-[8rem] lg:w-[11rem] absolute top-8 right-16 md:top-40 md:right-[440px] rotate'/>
          </section>
      </>
    )
}

export default AboutBanner