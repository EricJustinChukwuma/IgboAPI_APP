import React from 'react';
import image1 from "../assets/Frame 4209.jpg";
import image2 from "../assets/Frame 4210.jpg";
import image3 from "../assets/Frame 4211.jpg";
import image4 from "../assets/Frame 4211 (1).jpg";
import image5 from "../assets/Frame 4212.jpg";
import image6 from "../assets/Frame 4212 (1).jpg";
import image7 from "../assets/Frame 4213.jpg";
import image8 from "../assets/Frame 4209 (1).jpg";
import image9 from "../assets/Frame 4209 (2).jpg";
import image10 from "../assets/Frame 4210 (1).jpg";
import image11 from "../assets/Frame 4210 (2).jpg";
import image12 from "../assets/Frame 4210 (3).jpg";
import image13 from "../assets/Frame 4212 (2).jpg";
import image14 from "../assets/Frame 4209 (3).jpg";
import image15 from "../assets/Frame 4209 (4).jpg";
import image16 from "../assets/Frame 4213 (1).jpg";
import image17 from "../assets/Frame 4213 (2).jpg";
import MapImage from "../assets/Group 1875.svg";

const Members2 = () => {
  return (
    <>
        <section className='w-full flex flex-col md:flex-row justify-center items-start pb-20 px-4 md:px-12 gap-x-4'>
            <div className='flex flex-col w-full md:w-[27.5rem] justify-center items-center pt-20'>
                <h1 className='text-white text-3xl md:text-5xl pb-4 md:pb-8'>17</h1>
                <h3 className='text-gray-100 text-md md:text-lg pb-10 md:pb-16'>GitHub Contributors</h3>
                <div className='flex flex-col gap-y-2'>
                    <div className='flex justify-center items-center gap-x-1'>
                        <img src={image1} alt="" className='w-[40px] rounded-lg'/> 
                        <img src={image2} alt="" className='w-[40px] rounded-lg'/> 
                        <img src={image3} alt="" className='w-[40px] rounded-lg'/> 
                        <img src={image4} alt="" className='w-[40px] rounded-lg'/> 
                        <img src={image5} alt="" className='w-[40px] rounded-lg'/> 
                        <img src={image6} alt="" className='w-[40px] rounded-lg'/> 
                        <img src={image7} alt="" className='w-[40px] rounded-lg'/> 
                    </div>
                    <div className='flex justify-center items-center gap-x-1'>
                        <img src={image8} alt="" className='w-[40px] rounded-lg'/>
                        <img src={image9} alt="" className='w-[40px] rounded-lg'/>
                        <img src={image10} alt="" className='w-[40px] rounded-lg'/>
                        <img src={image11} alt="" className='w-[40px] rounded-lg'/>
                        <img src={image12} alt="" className='w-[40px] rounded-lg'/>
                        <img src={image13} alt="" className='w-[40px] rounded-lg'/>
                    </div>
                    <div className='flex justify-center items-center gap-x-1'>
                        <img src={image14} alt="" className='w-[40px] rounded-lg'/>
                        <img src={image15} alt="" className='w-[40px] rounded-lg'/>
                        <img src={image16} alt="" className='w-[40px] rounded-lg'/>
                        <img src={image17} alt="" className='w-[40px] rounded-lg'/>
                    </div>
                </div>
            </div>

            <div className='inline-flex w-full md:w-[27.5rem] h-full md:h-[100vh] flex-col items-center text-center gap-[1rem] md:gap-[3rem] pt-[5rem] md:pt-[22rem] pb-10 md:pb-0'>
                <h1 className='text-white text-3xl md:text-5xl'>Get an API Key</h1>
                <p className='text-gray-100 tracking-widest text-sm md:text-md'>Interested in what you see? Register for an <br /> API! for free.</p>
                <button className='feature-btn px-10 py-4 rounded-md text-white font-semibold border border-black'>
                    Get API key
                </button>
            </div>

            <div className='flex flex-col justify-center items-center w-full md:w-[28.5rem] mt-20 px-10'>
                <h1 className='text-white text-3xl md:text-5xl pb-8'>150+</h1>
                <h3 className='text-gray-100 text-md md:text-lg pb-8'>Members in Slack</h3>
                <div className='flex flex-col justify-center items-center w-full md:w-[250px] lg:w-[300px] xl:w-[350px]'>
                    <img src={MapImage} alt="" className='w-full'/>
                </div>
                
            </div>
            
        </section>
    </>
  )
}

export default Members2;