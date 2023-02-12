import React from 'react'
import AskQuestForm from './AskQuestForm'


function MainSearch() {
  return (
    <div className="flex flex-col w-full xl:w-3/5 justify-center lg:items-start overflow-y-hidden">
    <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
    Decoding Life's  
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
      Puzzlements with Krishna:
      </span>
      More Than 500,000+ Queries Responded
    </h1>
 

   <AskQuestForm />

    <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
    Disclaimer: Exercise caution and do not rely solely on this experimental AI program for making choices.
    </p>
  </div>
  )
}

export default MainSearch