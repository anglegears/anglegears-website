import React from 'react'
import { Link } from "react-scroll"
import ModalLogin from '../modals/login'
import Image from 'next/image'

function Navbar({ login } : any) {
    return (
        <>
            <nav className="shadow-sm shadow-cyan-900 absolute w-full z-10">
                <div className="w-full">
                    <div className="flex items-center h-20 w-full">
                        <div className="flex items items-center px-44 justify-between w-full">
                            <div className="flex justify-center items-start flex-shrink-0">
                                <a href="/"><Image src="/logo/logo_and_text_horizontal.png" alt="AGR logo" width={160} height={35} /></a>
                            </div>
                            <div className="flex flex-row font-family-montserrat">
                                <div className="ml-10 flex items-baseline space-x-10">
                                    <Link activeClass="Home" to="about" smooth={false} offset={50} duration={500} 
                                    className="cursor-pointer tracking-wide text-white font-bold px-3 py-2 hover:text-sky-300 transition linear duration-300">
                                        THE GAME
                                    </Link>
                                    <Link activeClass="Home" to="about" smooth={false} offset={50} duration={500} 
                                    className="cursor-pointer tracking-wide text-white font-bold px-3 py-2 hover:text-sky-300 transition linear duration-300">
                                        ECOSYSTEM
                                    </Link>
                                    <Link activeClass="Home" to="about" smooth={false} offset={50} duration={500} 
                                    className="cursor-pointer tracking-wide text-white font-bold px-3 py-2 hover:text-sky-300 transition linear duration-300">
                                        COMMUNITY
                                    </Link>
                                    <Link activeClass="Home" to="about" smooth={false} offset={50} duration={500} 
                                    className="cursor-pointer tracking-wide text-white font-bold px-3 py-2 hover:text-sky-300 transition linear duration-300">
                                        ABOUT US
                                    </Link>                                               
                                </div> 
                                <div className="ml-4 flex items-baseline space-x-10">                  
                                    <button onClick={() => login(true)}
                                    className="ml-5 shadow-md shadow-sky-600 bg-sky-900 bg-opacity-30 hover:bg-sky-700 hover:bg-opacity-50 hover:shadow-sky-400 text-white py-2 px-10 rounded-xl transition ease-in-out duration-300">
                                        MINT
                                    </button>
                                </div>          
                            </div>
                        </div>
                    </div>  
                </div>
            </nav>
        </>
    )
}

export default Navbar