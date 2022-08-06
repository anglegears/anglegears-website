import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import ModalLogin from '../components/modals/login'

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
    <>
      <div className="bg-violet-agr-900 text-white bg-[url('/assets/header.png')] w-screen h-screen absolute -z-50" />
      {/* <div className="bg-[url('/carousel/image_1.png')] w-screen h-screen absolute -z-50 opacity-20" /> */}
      <Head>
        <title>Angle Gears | Racing Metaverse World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar login={setModalLoginOpen} />
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <div onClick={BackdropClick} className={`absolute z-50 w-screen h-screen bg-black/50 backdrop-blur-sm justify-center items-center flex transition-all duration-500 ${modalLoginOpen ? 'visible opacity-100' : 'visibility-hidden opacity-0'}`}>
          <ModalLogin open={modalLoginOpen} onClose={() => setModalLoginOpen(false)} />
        </div>
        <main className="flex w-full flex-1 flex-row justify-center">
          <div className="flex w-1/2 flex-1 flex-col items-start justify-center px-20 text-white gap-7">

            <div className="flex flex-col items-baseline">
              <h1 className="text-6xl font-bold">
                Explore your creativity.
              </h1>
              <h1 className="text-6xl font-bold text-sky-300">
                Have fun with the community.
              </h1>
            </div>

            <div className="flex items-baseline space-x-6">
              <button onClick={() => setModalLoginOpen(true)} className="bg-transparent shadow-md shadow-sky-600 hover:shadow-sky-400 hover:scale-105 text-white font-semibold py-2 px-10 rounded-xl transition ease-in-out duration-300">
                Explore
              </button>
              <button className="bg-transparent shadow-md shadow-fuchsia-400 hover:shadow-fuchsia-300 hover:scale-105 text-white py-2 px-10 rounded-xl transition ease-in-out duration-300">
                Mint gCar NFT
              </button>
            </div>

            <div className="flex flex-col items-baseline">
              <h1 className="text-2xl font-bold">
                Welcome to the world of Angle Gears.
              </h1>
            </div>
          </div>

        </main>

        <Footer />
      </div>

    </>
  )
}

export default Home
