import React from 'react';
import entypo from "../assets/entypo_sound.svg";
import nisibidi from "../assets/nisibidi.svg";
import pen from "../assets/mdi_draw-pen.svg";
import iconParkSolid from "../assets/icon-park-solid_mark.svg";
import comment from "../assets/uil_comment-alt-question (2).svg";
import lightbulb from "../assets/system-uicons_lightbulb-on.svg";

const Features = () => {
  return (
    <>
        <section className='px-4 md:px-10 pb-32'>
            <h1 className='text-white text-4xl md:text-5xl text-center pt-12'>Features</h1>
            <div className='flex flex-col md:grid sm:grid-col-2 md:grid-cols-3 gap-y-6 gap-x-4 md:gap-x-8 lg:gap-x-16 xl:gap-x-20 2xl:gap-x-24 md:gap-y-16 mt-12'>
                <div className='h-[180px] md:h-auto feature-box-shadow text-left bg-blue-500 text-black p-3 rounded-md border border-black relative'>
                    <h3 className='font-bold text-md pb-2'>Definitions</h3>
                    <p className='text-xs md:text-sm tracking-widest leading-5'>Each word is provided with at least one definition.</p>
                    <img src={comment} alt="" className='absolute top-24 right-2 w-[3rem] md:w-[4.5rem]'/>
                </div>
                <div className='h-[180px] md:h-auto feature-box-shadow text-left bg-[#25d615] text-black p-3 rounded-md border border-black relative'>
                    <h3 className='font-bold text-md pb-2'>Examples</h3>
                    <p className='text-xs md:text-sm tracking-widest leading-5'>Certain words are accompanied by contextual examples.</p>
                    <img src={pen} alt="" className='absolute top-24 right-0 w-[3rem] md:w-[4.7rem]'/>
                </div>
                <div className='h-[180px] feature-box-shadow text-left bg-[#ffe23e] text-black p-3 rounded-md border border-black relative'>
                    <h3 className='font-bold text-md pb-2'>Tone Marks</h3>
                    <p className='text-xs md:text-sm tracking-widest leading-5'>Diacritics are used to convey the different tones present in the igbo language.</p>
                    <img src={iconParkSolid} alt="" className='absolute top-28 right-2 w-[3rem] md:w-[3.7rem]'/>
                </div>
                <div className='h-[180px] feature-box-shadow text-left bg-[#eb3fb2] text-black p-3 rounded-md border border-black relative'>
                    <h3 className='font-bold text-md pb-2'>Variations</h3>
                    <p className='text-xs md:text-sm tracking-widest leading-5 pr-10'>The Igbo language has many dialects, some words capture this nuance by providing variant spelling.</p>
                    <img src={entypo} alt="" className='absolute top-[7rem] right-1 w-[3rem] md:w-[3.7rem]'/>
                </div>
                <div className='h-[180px] feature-box-shadow text-left bg-[#c2200a] text-black p-3 rounded-md border border-black relative'>
                    <h3 className='font-bold text-md pb-2'>Nsịbịdị</h3>
                    <p className='text-xs md:text-sm tracking-widest leading-5 pr-10'>Nsịbịdị is a writing system that was created in Nigeria.</p>
                    <img src={nisibidi} alt="" className='absolute top-32 right-1 w-[3rem] md:w-[4.5rem]'/>
                </div>
                <div className='h-[180px] feature-box-shadow text-left bg-[#0ac2aa] text-black p-3 rounded-md border border-black relative'>
                    <h3 className='font-bold text-md pb-2'>Proverbs</h3>
                    <p className='text-xs md:text-sm tracking-widest leading-5'>Proverbs are a core aspect of the Igbo language.</p>
                    <img src={lightbulb} alt="" className='absolute top-24 right-0 w-[3rem] md:w-[4.5rem]'/>
                </div>
            </div>

            <div className='w-full flex flex-col text-center'>
                <p className='text-[#fafafa] text-center text-md leading-[32.40px] mt-12 text-xs md:text-md font-normal'>The Igbo API aims to make the process of learning Igbo more accessible to the Nigerian diaspora and beyond</p>
                <button className='feature-btn px-10 py-4 rounded-md text-white font-semibold border border-black'>
                    Request feature
                </button>
            </div>
        </section>
    </>
  )
}

export default Features;