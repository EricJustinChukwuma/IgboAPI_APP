import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <nav 
                className='w-full flex justify-between items-center py-2 px-6 md:py-4 md:px-8 bg-[#111] fixed z-[99'
            >
                <div className='flex items-center justify-center mr-4'>
                    <h3 className='text-white pr-4 cursor-pointer'>Nkọwa okwu</h3>
                    <select className='hidden md:inline-block bg-transparent text-sm text-white cursor-pointer'>
                        <option value='english' className='text-black'>English</option>
                        <option value='Igbo' className='text-black'>Igbo</option>
                    </select>
                </div>

                <div className={`hidden md:block`}>
                    <button 
                        className='border-white mr-2 border-[1px] py-1 px-4 rounded-full transition-all text-white hover:bg-white hover:text-black'
                    >Nkọwa okwu</button>
                    <button 
                        className='border-white mr-2 border-[1px] py-1 px-4 rounded-full transition-all text-white hover:bg-white hover:text-black'
                    >IgboSpeech</button>
                    <button 
                        className='border-white mr-2 border-[1px] py-1 px-4 rounded-full transition-all text-white hover:bg-white hover:text-black'
                    >IgboAPI</button>
                    {
                    nav ? 
                        <AiOutlineClose onClick={handleNav} className='absolute text-[1.2rem] top-3 right-4 z-[99] md:hidden block text-white cursor-pointer' />
                        : <AiOutlineMenu onClick={handleNav} className='absolute text-[1.2rem] top-3 right-4 z-[99] md:hidden block text-white cursor-pointer' />
                    }
                    {
                        nav ?
                        <div className={`w-[200px] h-[100vh] pb-2 pl-2 flex flex-col fixed transition-[2s] bg-[#111]
                        ${nav ? 'top-10 right-0' : '-top-10 -right-[200px]'}`
                        }>
                            <button 
                            className='border-white mr-2 border-[1px] py-1 px-4 rounded-full transition-all text-white hover:bg-white hover:text-black'
                            >Nkọwa okwu</button>
                            <button 
                            className='border-white mr-2 border-[1px] py-1 px-4 rounded-full transition-all text-white hover:bg-white hover:text-black'
                            >IgboSpeech</button>
                            <button 
                            className='border-white mr-2 border-[1px] py-1 px-4 rounded-full transition-all text-white hover:bg-white hover:text-black'
                            >IgboAPI</button>
                        </div> : ''
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar