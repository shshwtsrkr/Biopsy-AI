import React, {useState} from 'react'
import { links } from './Mylinks';

function Navlinks(){
    const [heading, setHeading] = useState()
    return(
        <>
            {
            links.map((link) => (
                <div>
                    <div className='-mt-6 ml-1 lg:ml-0 lg:-mt-0 group cursor-pointer'>
                        <h1 className='ml-4 text-2xl lg:text-base' onClick={() => heading !== link.name ? setHeading(link.name) : setHeading("")}>
                            {link.name}
                            <i className="fa-solid fa-angle-down pl-3"></i>
                        </h1>
                        {link.submenu && (
                        <div>
                            <div className='absolute z-50 top-[69px] hidden group-hover:lg:block hover:lg:block'>
                            <div className='bg-black bg-opacity-50 -mt-[6px] px-5 rounded-xl py-2'>
                                {
                                    link.sublinks.map((mylinks) => (
                                        <div>
                                            {mylinks.sublink.map((slink) => (
                                                <li className='hover:bg-black hover:bg-opacity-60 hover:cursor-pointer pt-4 pb-4 px-6 hover:rounded-xl'>
                                                <a href={slink.link}>{slink.name}</a>
                                                </li>
                                            ))}
                                        </div>
                                    ))}
                            </div>
                            </div>
                        </div>)}
                    </div>

                    {/* Mobile nav */}
                    <div className={`${heading === link.name ? 'lg:hidden' : 'hidden'}`}>
                    {/* sublinks */}
                        {
                                    link.sublinks.map((mylinks) => (
                                        <div>
                                            {mylinks.sublink.map((slink) => (
                                                <li className='hover:bg-black hover:bg-opacity-60 hover:cursor-pointer pt-4 pb-4 px-6 hover:rounded-xl ml-3 text-center mt-2'>
                                                <a href={slink.link}>{slink.name}</a>
                                                </li>
                                            ))}
                                        </div>
                                    ))}
                    </div>
                </div>
        ))
        }
        </>
    )
}

export default Navlinks;