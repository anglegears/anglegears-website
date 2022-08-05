import React, {Component, useEffect, useRef} from 'react'
import Image from 'next/image'

function ModalLogin({ open, children, onClose, inputUsername } : any) {
    if (!open) return null

    return (
            <div className="w-1/5 h-fit bg-white px-10 py-10 flex flex-col shadow-2xl rounded-lg gap-9 divide-y-2">
                <p className="text-gray-700 font-bold text-2xl text-center">
                    Masuk ke Nikola
                </p>
                <div className="w-full h-full flex flex-col gap-3 pt-6">
                    <p className="text-gray-700 font-semibold text-lg">
                        Username
                    </p>
                    <input autoFocus className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                    <p className="text-gray-700 font-semibold text-lg">
                        Password
                    </p>
                    <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
                <div className="w-full h-full flex flex-col gap-4 pt-6">
                    <button className="bg-blue-700 hover:bg-blue-500 text-white font-semibold py-3 px-14 rounded-md transition ease-in-out dubration-300">
                        Masuk
                    </button>
                    <button onClick={onClose} className="bg-gray-200 hover:bg-gray-100 text-gray-900 font-semibold py-3 px-14 rounded-md transition ease-in-out dubration-300">
                        Batal
                    </button>
                </div>
            </div>
    )
}

export default ModalLogin