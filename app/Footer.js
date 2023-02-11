import Image from 'next/image'
import React from 'react'
import appStImg from "./img/AppStore.svg"
import playStImg from "./img/PlayStore.svg"

function Footer() {
  return (
    <>    <div className="mx-auto md:pt-16">
    <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center">
      Download our app:
    </p>
    <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
      {/* <a href='https://play.google.com/store/apps/details?id=com.softechinfra.android.qualifier'>
      <Image
        src={appStImg}
        alt="Krishna Image"
        width={150}
        height={150}
        className="h-12 pr-12 transform hover:scale-125 duration-300 ease-in-out cursor-pointer"
      />
      </a> */}
      <a href='https://play.google.com/store/apps/details?id=com.softechinfra.android.qualifier'>
    <Image
        href={"https://play.google.com/store/apps/details?id=com.softechinfra.android.qualifier"}
        src={playStImg}
        alt="Krishna Image"
        width={150}
        height={150}
        className="h-12 pr-12 transform hover:scale-125 duration-300 ease-in-out cursor-pointer"
      />
      </a>
    
    </div>
  </div>
    <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
          <a className="text-gray-500 no-underline hover:no-underline" href="#">&copy; Made with Love 2023</a>
          - Vivek 
          <a className="text-gray-500 no-underline hover:no-underline" href="https://twitter.com/viveksinra">vivek.org.in</a>
        </div></>

  )
}

export default Footer