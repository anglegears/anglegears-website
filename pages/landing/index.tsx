import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import ModalLogin from '../../components/modals/login'

const Landing: NextPage = ( { login } : any ) => {
 
  return (
      <div className="flex h-screen"> 
        <main className="flex flex-row justify-center">
          <div className="flex flex-col items-start justify-center px-20 text-white gap-7">

            <div className="flex flex-col items-baseline">
              <h1 className="text-6xl font-bold">
                Explore your creativity.
              </h1>
              <h1 className="text-6xl font-bold text-sky-300">
                Have fun with the community.
              </h1>
            </div>

            <div className="flex items-baseline space-x-6">
              <button onClick={() => login(true)} className="bg-transparent shadow-md shadow-sky-600 hover:shadow-sky-400 hover:scale-105 text-white font-semibold py-2 px-10 rounded-xl transition ease-in-out duration-300">
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
    </div>
  )
}

export default Landing
