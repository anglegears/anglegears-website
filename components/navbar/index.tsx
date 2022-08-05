import React from 'react'
import { Link } from "react-scroll"
import ModalLogin from '../modals/login'

function Navbar({ login } : any) {
    return (
        <>
            <nav className="shadow-sm fixed w-full z-10">
                <div className="w-full">
                    <div className="flex items-center h-16 w-full">
                        <div className="flex items items-center mx-20 justify-between w-full">
                            <div className="flex justify-center items-center flex-shrink-0">
                                <h1 className="font-black text-2xl text-blue-700 cursor-pointer">
                                    NIKOLA
                                </h1>
                            </div>
                            <div className="flex flex-row divide-x-2">
                                <div className="ml-10 flex items-baseline space-x-10">
                                    <Link activeClass="Home" to="about" smooth={false} offset={50} duration={500} 
                                    className="cursor-pointer tracking-wide text-gray-700 font-semibold px-3 py-2 hover:text-blue-500 transition linear duration-300">
                                        Beranda
                                    </Link>
                                    <Link activeClass="Home" to="about" smooth={false} offset={50} duration={500} 
                                    className="cursor-pointer tracking-wide text-gray-700 font-semibold px-3 py-2 hover:text-blue-500 transition linear duration-300">
                                        Berita
                                    </Link>
                                    <Link activeClass="Home" to="about" smooth={false} offset={50} duration={500} 
                                    className="cursor-pointer tracking-wide text-gray-700 font-semibold px-3 py-2 hover:text-blue-500 transition linear duration-300">
                                        Peraturan
                                    </Link>
                                    <Link activeClass="Home" to="about" smooth={false} offset={50} duration={500} 
                                    className="cursor-pointer tracking-wide text-gray-700 font-semibold px-3 py-2 hover:text-blue-500 transition linear duration-300">
                                        Event
                                    </Link>
                                    <Link activeClass="Home" to="about" smooth={false} offset={50} duration={500} 
                                    className="cursor-pointer tracking-wide text-gray-700 font-semibold px-3 py-2 hover:text-blue-500 transition linear duration-300">
                                        Sharing Materi
                                    </Link>                                                       
                                </div> 
                                <div className="ml-4 flex items-baseline space-x-10">                  
                                    <button onClick={() => login(true)}
                                    className="ml-5 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 hover:scale-105 text-white font-semibold py-2 px-10 rounded-full transition ease-in-out duration-300">
                                        Masuk
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