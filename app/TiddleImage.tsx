import Image from 'next/image'
import React from 'react'
import tdImg from "./img/krishna.svg"

function TiddleImage() {
  return (
    <div className="w-full xl:w-2/5 p-12 overflow-hidden">
    {/* <img  
    src: `url(${bgImg.src})` /> */}
        <Image
        
      src={tdImg}
      alt="Krishna Image"
      width={100}
      height={100}
      className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
    />
  </div>
  )
}

export default TiddleImage