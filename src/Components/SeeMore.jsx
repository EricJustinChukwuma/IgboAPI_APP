import React from 'react';
import checkmark from "../assets/checkmark.svg";
import flight1 from "../assets/flight_takeoff.svg";
import flight2 from "../assets/flight_takeoff_24dp.svg";
import flight3 from "../assets/flight_takeoff_black.svg";
import flight4 from "../assets/flight_takeoff_black_24dp.svg";
import flight5 from "../assets/Frame 4188.svg";

const SeeMore = () => {
  return (
    <section className='about-bottom-banner py-28 flex px-4 relative'>
        <div className='w-full md:w-[520px] text-center pt-12 pb-8 px-4 border mx-auto my-0'>
            <h1 className='text-4xl md:text-7xl font-bold pb-14'>See more</h1>
            <p className='pb-8'>This is an <u>open source project</u> created by <u>Ijemma Onwuzulike</u>.</p>
            <p className='pb-8'>The intial words and example that populated this API came from Kay Williamson's dictionary entitled <u>Dictionary of Ònìchà Igbo.</u></p>
            <p>The Igbo API hosts and serves all word and example sentence data that is shown on <u>Nkọwa okwu</u>, our official online Igbo-English dictionary app.</p>
        </div>
        <img src={checkmark} alt="" className='absolute top-20 left-[260px] w-[6rem] md:w-[8rem] xl:w-[12rem] hidden lg:block'/>
        <img src={flight1} alt="" className='absolute bottom-0 left-[410px] w-[6rem] hidden lg:block'/>
        <img src={flight2} alt="" className='absolute bottom-14 right-[300px] w-[5.5rem] hidden lg:block'/>
        <img src={flight3} alt="" className='absolute top-[270px] right-[220px] w-[7rem] hidden lg:block'/>
        <img src={flight4} alt="" className='absolute top-[320px] left-[8rem] w-[7rem] hidden lg:block'/>
    </section>
  )
}

export default SeeMore