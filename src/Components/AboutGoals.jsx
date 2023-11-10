import React from 'react';
import upDownArrow from "../assets/up_down_arrow.svg";
import upDownArrow2 from "../assets/Frame 4188.svg";

const AboutGoals = () => {
  return (
    <>
        <section className='flex flex-col justify-between text-white pt-28 pb-10'>
            <div className='relative pb-28 w-full'>
                <img src={upDownArrow2} alt="" className='absolute -top-28 md:-top-32 left-[1rem] md:left-16 w-[6rem] md:w-[13rem]'/>

                <div className='w-full md:w-[37.5rem] flex flex-col justify-start items-end md:justify-end md:items-end mb-10 md:mb-20 pb-10 md:pb-28 px-4 md:px-8 text-right ml-auto relative'>
                    <h1 className='text-4xl md:text-7xl pb-10 md:pb-20'>Our goal</h1>
                    <p className='text-sm md:text-lg'>Our main goal is to make an easy-to-access, robust, lexical Igbo Labguage resource to help solve a variety of complex problems within the worlds of education to Machine Learning</p>
                </div>
                <img src={upDownArrow} alt="" className='w-[6rem] md:w-[13rem] absolute bottom-4 left-[1rem] md:bottom-24 md:left-[15rem]'/>
            </div>

            <div className='flex flex-col md:flex-row px-4 md:px-8 gap-x-16'>

                <div className='w-full md:w-[52.5rem]'>
                    <h1 className='text-4xl md:text-7xl pb-10 md:pb-16'>Our <br /> products</h1>
                    <p className='text-sm md:text-lg pb-4 md:pb-8'>We have spent the last 2+ years working these amazing products That we believe improve the us of the Igbo language and make Igbo more accessible for individuals, big companies, startups, developer and side projects</p>
                    <button className='feature-btn px-10 py-4 rounded-md text-white font-semibold border border-black'>Request demo</button>
                </div>

                <div className='flex flex-col gap-y-8 md:grid md:grid-cols-2 grid-rows-2 md:gap-x-8 md:gap-y-14 pt-6 md:pt-16 pb-20 text-black'>
                    <div className='feature-box-shadow flex flex-col py-3 pl-4 pr-10 bg-[#0ac2aa] rounded-lg border'>
                        <h3 className='text-2xl font-bold pb-4'>IgboSpeech</h3>
                        <p className='text-left'>Speech to text AI transcription software, for education, law enforcement, media and more.</p>
                    </div>
                    <div className='feature-box-shadow flex flex-col py-3 pl-4 pr-12 bg-[#eb3fb2] rounded-lg border'>
                        <h3 className='text-2xl font-bold pb-4'>Nkọwa okwu</h3>
                        <p className='text-left'>The best Igbo dictionary to find translations of Igbo-English words, English-Igbo words, Igbo Nsịbịdị.</p>
                    </div>
                    <div className='feature-box-shadow flex flex-col py-3 pl-4 pr-12 bg-[#eb3fb2] rounded-lg border'>
                        <h3 className='text-2xl font-bold pb-4'>Igbo API</h3>
                        <p className='text-left'>The first and best collection of Igbo data on Igbo words, audio pronunciation, Nsịbịdị and more.</p>
                    </div>
                    <div className='feature-box-shadow flex flex-col py-3 pl-4 pr-12 bg-[#0ac2aa] rounded-lg border'>
                        <h3 className='text-2xl font-bold pb-4'>Editor platform</h3>
                        <p className='text-left'>Custom made internal tool for adding in Igbo words, audio pronunciations. Nsịbịdị into the API.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutGoals