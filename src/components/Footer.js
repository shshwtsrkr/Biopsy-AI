import React, { useState } from 'react'
import Showmodal from './Showmodal';

function Footer(){
    const [showModal, setModal] = useState(false);

    return (
        <>
            <div className='flex flex-col gap-6 bg-zinc-900 md:h-96 h-[470px] pt-10 px-4 md:grid md:grid-cols-2 md:pt-16 lg:grid-cols-3 lg:gap-20 xl:grid-cols-4 xl:gap-40 xl:pt-28 xl:px-20'>
                <div className='text-stone-200 font-poppins tracking-wider flex flex-col'>
                <h1 className='text-xl'>Why?</h1>
                <span className='tracking-wider text-sm pt-3'>Creating safe AGI that benifits all of humanity</span><br/>
                <a href='/motivation' className='text-xs hover:underline hover:underline-offset-4 pt-2'>Learn about our motivation</a>
                </div>
                <div className='text-stone-200 font-poppins tracking-wider flex flex-col'>
                <h1 className='text-xl'>How?</h1>
                <span className='tracking-wider text-sm  pt-3'>Our Approach solution XYZ</span><br/>
                <a href='/solution' className='text-xs hover:underline hover:underline-offset-4 pt-2'>Learn about our solution</a>
                </div>
                <div className='text-stone-200 font-poppins tracking-wider flex flex-col'>
                <h1 className='text-xl'>Impact</h1>
                <a href='/impact' className='text-xs hover:underline hover:underline-offset-4 pt-3'>Learn about our impact</a>
                </div>
                <div className='text-stone-200 font-poppins cursor-pointer'>
                <a className='text-xl' onClick={() => setModal(true)}>Feedback</a>
                { showModal && <Showmodal closeModal={setModal} />}
                </div>
            </div>
        </>
    )
}

export default Footer;