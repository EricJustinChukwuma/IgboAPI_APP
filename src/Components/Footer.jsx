import React from 'react';
// import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaArrowRight } from "react-icons/fa";
import emailIcon from "../assets/Email sharp.svg";

const Footer = () => {
  return (
    <>
        <section className='w-full bg-white pt-12 pb-20 px-4 md:px-10 flex flex-col md:flex-row justify-between items-start relative'>
            <div className='flex flex-col justify-start mb-10 md:mb-0'>
                <h1 className='text-lg md:text-2xl pb-[1rem] font-semibold'>Projects</h1>
                <ul className='flex flex-col'>
                    <li><a href="">IgboSpeech</a></li>
                    <li><a href="">Nkọwa okwu</a></li>
                    <li><a href="">Igbo API</a></li>
                    <li><a href="">Nkọwa okwu Learning</a></li>
                </ul>
            </div>

            <div className='bg-white w-full md:w-[35rem] absolute left-0 right-0 top-[28rem] md:top-0 md:relative flex flex-col justify-start md:justify-center items-start md:items-center text-left md:text-center gap-y-8 md:gap-y-12 my-8 md:my-0 px-4 md:px-0 pb-16 md:pb-0'>
                <h1 className='text-3xl md:text-5xl'>Be the first to know when we have an update</h1>
                <div className='w-full md:w-[80%] flex justify-center items-center relative'>
                    <input 
                        type="text" 
                        placeholder='youremail@email.com'
                        className='border border-gray-100 w-full py-4 pl-4 rounded outline-none'
                    />
                    <FaArrowRight className='absolute right-4'/>
                </div>
                <div className='flex justify-start md:justify-center w-full gap-x-8 md:gap-x-16'>
                    <FaGithub className='text-[1.3rem] md:text-[1.9rem]'/>
                    <FaTwitter className='text-[1.3rem] md:text-[1.9rem] text-blue-600'/>
                    <FaLinkedin className='text-[1.3rem] md:text-[1.9rem] text-blue-600'/>
                    <img src={emailIcon} alt="" className='w-[1.3rem] md:w-[1.9rem]'/>
                    <FaInstagram className='text-[1.3rem] md:text-[1.9rem]'/>
                </div>
                <p className='flex justify-start items-center'><strong className='text-[1.2rem] font-bold'>&copy;</strong> 2022 Nkọwa okwu. All rights reserved</p>
            </div>

            <div>
                <h1 className='text-xl pb-[1rem] font-semibold'>Organization</h1>
                <ul>
                    <li><a href="">Donate</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">The Team</a></li>
                    <li><a href="">Volunteer</a></li>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Terms and Conditions</a></li>
                </ul>
            </div>
        </section>
    </>
  )
}

export default Footer