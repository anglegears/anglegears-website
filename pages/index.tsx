import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import ModalLogin from '../components/modals/login'
import Landing from './landing'

const Home: NextPage = () => {
  const divRef = React.useRef();

  const [modalLoginOpen, setModalLoginOpen] = useState(false)

  const BackdropClick = (event: { preventDefault: () => void; target: any; currentTarget: any }) => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      setModalLoginOpen(false)
    }
  };

  return (
    <div className="bg-violet-agr-900 min-h-screen">
      <Head>
        <title>Angle Gears | Racing Metaverse World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="text-white absolute"/> */}

      <div onClick={BackdropClick} className={`absolute z-50 min-w-screen min-h-screen bg-black/50 backdrop-blur-sm justify-center items-center flex transition-all duration-500 ${modalLoginOpen ? 'visible opacity-100' : 'visibility-hidden opacity-0'}`}>
        <ModalLogin open={modalLoginOpen} onClose={() => setModalLoginOpen(false)} />
      </div>

      <Navbar login={setModalLoginOpen} />
      <Landing />

      <Footer />
    </div>
  )
}

export default Home
