import {useState} from 'react';
import Navlinks from './Navlinks';

function Navbar(){
    const [open, setOpen] = useState(false);
    const [fix, setFix] = useState(false);

    function setFixed(){
        if(window.scrollY >= 80){
            setFix(true);
        }else{
            setFix(false);
        }
    }
    window.addEventListener('scroll', setFixed);
    
    return(
        <>
            <nav className={fix ? 'navbar fixed': 'navbar'}>
                <div className='bg-zinc-800 lg:flex lg:justify-between lg:items-center px-6 lg:px-14 lg:h-24'>
                    <div className='z-50 flex justify-between items-center'>
                    <a href='/'>
                    <img src='./images/Biopsy AI Logo white png.png' className='w-28 lg:ml-0' />
                    </a>
                    <div className='text-2xl cursor-pointer text-white lg:hidden flex' onClick={() => setOpen(!open)}>
                    <i className={`${open ?'fa-solid fa-xmark' : 'fa-solid fa-bars'} `}></i>
                    </div>
                    </div>

                    <ul className=' hidden text-white font-raleway tracking-wider lg:flex items-center gap-12'>
                        <li>
                        <li className=''>
                        <a href='/demo' className='inline-block py-7 px-1'>Demo</a>
                        <span className="material-symbols-outlined text-white font-bold text-base">
                        north_east
                        </span></li>
                        </li>
                        <Navlinks />
                        <li className='flex gap-2 cursor-pointer'>
                            <a href='/developers'>Developers</a>
                            <span className="material-symbols-outlined text-white font-bold text-base">
                        north_east
                        </span>
                        </li>
                        <li className='flex gap-2 cursor-pointer'>
                            <a href="https://medium.com/@phiratpassiii/biopsyai-making-cancer-detection-sustainable-4f10e35e0a60">Blog</a>
                        </li>
                    </ul>

                    <div className='hidden lg:block justify-center lg:mt-0'>
                <div className='cursor-pointer px-2 py-1 bg-transparent border border-stone-700 rounded-full shadow-lg shadow-stone-900 hover:w-[200px] hover:xl:w-[250px] w-32 flex justify-between hover:transition-all  hover:duration-700 ease-in-out duration-700'>
                    <input type='text' placeholder='Search...' className=' outline-none w-full hover:w-full bg-transparent duration-first font-poppins' />
                    <a>
                    <i className="fa-solid fa-magnifying-glass text-2xl text-white"></i>
                    </a>
                </div>
                </div>


                {/* mobile nav */}
                
                <ul className={`text-white font-raleway tracking-wider items-center gap-12 lg:hidden bg-zinc-800 absolute top-20 h-[700px] bottom-0 pl-4 z-50 w-full p-5 duration-500 ${open ? 'left-0' : 'left-[-100%]'} flex flex-col pt-10`}>
                        <li>
                        <li className=''>
                        <a href='/demo' className='inline-block py-7 px-1 text-2xl'>Demo</a>
                        <span className="material-symbols-outlined text-white font-bold text-base">
                        north_east
                        </span></li>
                        </li>
                        <Navlinks />
                        <li className='flex gap-2 cursor-pointer'>
                            <a href='/developers' className='ml-7 md:ml-0 text-2xl'>Developers</a>
                            <span className="material-symbols-outlined text-white font-bold text-base">
                        north_east
                        </span>
                        </li>
                        <li className='flex gap-2 cursor-pointer'>
                            <a href="https://medium.com/@phiratpassiii/biopsyai-making-cancer-detection-sustainable-4f10e35e0a60" className='ml-1 md:ml-0 text-2xl'>Blog</a>
                        </li>
                        <div className=' lg:block justify-center lg:mt-0'>
                <div className='cursor-pointer px-2 py-1 bg-transparent border border-stone-700 rounded-full shadow-lg shadow-stone-900 hover:w-[200px] hover:xl:w-[250px] w-32 flex justify-between hover:transition-all  hover:duration-700 ease-in-out duration-700'>
                    <input type='text' placeholder='Search...' className=' outline-none w-full hover:w-full bg-transparent duration-first font-poppins' />
                    <a>
                    <i className="fa-solid fa-magnifying-glass text-2xl text-white"></i>
                    </a>
                </div>
                </div>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;