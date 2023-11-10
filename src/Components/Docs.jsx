import React from 'react'

const Docs = () => {
  return (
    <>
        <section className='bg-white flex flex-col justify-center items-center py-12 px-2 text-center'>
            <h1 className='text-4xl md:text-5xl'>Docs</h1>
            <p className='text-md md:text-lg mt-10'>Find out more about how to use the <br /> IgboAPI in yor applications</p>
            <button className='docs-btn mt-12 md:mt-20 mx-auto px-10 py-4 rounded-md text-white font-semibold'>
                Request feature
            </button>
        </section>
    </>
  )
}

export default Docs;