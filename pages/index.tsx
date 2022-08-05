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
      <Navbar login={setModalLoginOpen} />
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <div onClick={BackdropClick} className={`absolute z-50 w-screen h-screen bg-black/50 backdrop-blur-sm justify-center items-center flex transition-all duration-500 ${modalLoginOpen ? 'visible opacity-100' : 'visibility-hidden opacity-0'}`}>
          <ModalLogin open={modalLoginOpen} onClose={() => setModalLoginOpen(false)} />
        </div>

        <Head>
          <title>Nikola</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full flex-1 flex-row justify-center">
          <div className="flex w-1/2 flex-1 flex-col items-start justify-center px-20 text-gray-800 gap-7">
            <div className="flex flex-row gap-4 items-center justify-center h-32">
              <Image src="/logo_gov.png" alt="govmaluku logo" width={92} height={92} />
              <h1 className="text-5xl font-bold">
                Pemerintah Provinsi Maluku (Bangsat)
              </h1>
            </div>

            <div className="flex flex-col items-baseline">
              <h1 className="text-6xl font-bold">
                Klinik Konsultasi dan Layanan{' '}
              </h1>
              <h1 className="text-6xl font-bold text-blue-600">
                ANJAB ABK
              </h1>
            </div>

            <div className="flex items-baseline space-x-6">
              <button onClick={() => setModalLoginOpen(true)} className="bg-blue-700 hover:bg-blue-500 text-white font-semibold py-3 px-14 rounded-full transition ease-in-out dubration-300">
                Masuk
              </button>
              <button className="bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-10 rounded-full transition ease-in-out duration-300">
                Tentang kami
              </button>
            </div>

            <div className="flex flex-col items-baseline">
              <h1 className="text-2xl font-bold">
                #BanggaMelayaniBangsa{' '}
              </h1>
            </div>
          </div>

          <div className="flex w-1/2 flex-1 flex-col items-start justify-center text-center text-gray-800 gap-7  mr-10">
            <div className="bg-[url('/bg/bg_illustration.png')] bg-cover w-full h-3/5">
            </div>
          </div>
        </main>

        <Footer />
      </div>

    </>
  )
}

export default Home
