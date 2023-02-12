"use client"
import React, {useState} from 'react'
import { useRouter,useSearchParams  } from 'next/navigation'
import Image from 'next/image';

const fetchTodos = async (fullQuest:string) => {
  const res = await fetch(`/api/question/${fullQuest}`);
  const answer = await res.json();
  const solution = await answer.fullResponse.response
 let retData =  solution.toString()

  return retData;
}



  function AnswerPage() {

  const searchParams = useSearchParams();

  // E.g. `/dashboard?page=2&order=asc`
  const fullQuest = searchParams.get('fullQuest') || "";
    let [mySol, setMySol] = useState("Getting Answer From Gita ...")
  fetchTodos(fullQuest).then(data => setMySol(data))
  return (
    <>
    <div className= "gap-x-6 md:-mt-32 mb-12">
    <div className="flex  gap-x-6  items-center place-content-end">

    <div>
    <span className="bg-clip-text ext-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Arjun Ask :</span>

      <p className="text-sm font-semibold leading-6 text-indigo-600">Your Question</p>
    </div>
    <Image 
    width={100}
    height={100}
    className="h-16 w-16 rounded-full" 
    src="https://res.cloudinary.com/motoinvoice/image/upload/v1676196579/impImage/argun_o4vsjz.jpg" 
    alt="" />
  </div>
  <h3 className="bg-gradient-to-r from-purple-800 to-black hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out">Shri Krishna "{fullQuest}"</h3>

  </div>
  <div className=" gap-x-6 mb-12">
      <div className="flex items-center gap-x-6 ">
      <Image 
      width={100}
      height={100}
      className="h-16 w-16 rounded-full" 
      src="https://res.cloudinary.com/motoinvoice/image/upload/v1676196579/impImage/krishna_rtpka6.jpg" 
      alt="" />
      <div>
      <span className="bg-clip-text ext-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Krishna Response</span>
    {/* <h3 className="bg-gradient-to-r hover:from-purple-800 hover:to-green-500 to-pink-500 from-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out">Krishna Response</h3> */}
        <p className="text-sm font-semibold leading-6 text-indigo-600">Krishna / Gita</p>
      </div>
    </div>
    <h3 className="bg-gradient-to-r hover:from-purple-800 hover:to-green-500 to-pink-500 from-black text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out">{mySol}</h3>

    </div>
    </>
  )
}

export default AnswerPage