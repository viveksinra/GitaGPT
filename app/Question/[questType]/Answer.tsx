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
    let [mySol, setMySol] = useState("")
  fetchTodos(fullQuest).then(data => setMySol(data))
  return (
    <>
    <div className="flex items-center gap-x-6">

    <div>
      <h3 className="text-base font-semibold leading-7 tracking-tight bg-black text-blue-500">{fullQuest}</h3>
      <p className="text-sm font-semibold leading-6 text-indigo-600">Your Question</p>
    </div>
    <Image 
    width={100}
    height={100}
    className="h-16 w-16 rounded-full" 
    src="https://i.pinimg.com/originals/3d/56/a8/3d56a8408fbe4ab6129c24953b28be4e.jpg" 
    alt="" />
  </div>
      <div className="flex items-center gap-x-6">
      <Image 
      width={100}
      height={100}
      className="h-16 w-16 rounded-full" 
      src="https://i.pinimg.com/originals/3d/56/a8/3d56a8408fbe4ab6129c24953b28be4e.jpg" 
      alt="" />
      <div>
        <h3 className="text-base font-semibold leading-7 tracking-tight bg-black text-blue-500">{mySol}</h3>
        <p className="text-sm font-semibold leading-6 text-indigo-600">Krishna / Gita</p>
      </div>
    </div></>
  )
}

export default AnswerPage