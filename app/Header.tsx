import Link from 'next/link'
import React from 'react'
import { FaTwitter,FaInstagram } from 'react-icons/fa';

function Header() {
  return (
    <div className="w-full container mx-auto">
    <div className="w-full flex items-center justify-between">
      <a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Gita</span>
     AI
      </a>

      <div className="flex w-1/2 justify-end content-center">
        <a className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" 
        href="https://twitter.com/viveksinra">
       <FaTwitter className="fill-current" />
        </a>
        <a
          className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
          href="https://www.instagram.com/viveksinra/"
        >
          <FaInstagram className="fill-current w-full" />
        </a>
      </div>
    </div>
  </div>
  )
}

export default Header