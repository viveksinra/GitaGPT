"use client"
import Link from 'next/link'
import React, {useState} from 'react'

function AskQuestForm() {
    const [question, setQuestion] = useState("")
  return (
    <>
    <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
    {/* for="emailaddress" */}
      <label className="block text-blue-300 py-2 font-bold mb-2" >
        ASK Krishna your Question
      </label>
      <input
        className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
        id="question"
        type="text"
        placeholder="What Happen After Death?"
        value={question}
        onChange={(e) => (setQuestion(e.target.value))}
      />
    </div>

    <div className="flex items-center justify-between pt-4">
    <Link href={{
          pathname: '/Question/type1',
          query: { fullQuest: question },
        }} >
    <button
        className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
        type="button"
      >
        Ask Question
      </button>
          </Link>
 
    </div>
  </form>
   <p className="leading-normal text-base md:text-sm mb-8 text-center md:text-left">
   Disclaimer: Exercise caution and do not rely solely on this experimental AI program for making choices.
   </p></>
  )
}

export default AskQuestForm