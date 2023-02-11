'use client';
import React from 'react'
import Footer from '../../Footer'
import { useRouter,useSearchParams  } from 'next/navigation'

type pageProps = {
    params:{
        questType: string
    }
}


const fetchTodos = async (fullQuest:string) => {
  const res = await fetch(`https://gitagpt.org/api/ask/gita?q=${fullQuest}`);
  const answer = await res.json();
  console.log(answer)
  return answer;
}



function AnswerPage({params:{questType}}:pageProps) {

  const searchParams = useSearchParams();

  // E.g. `/dashboard?page=2&order=asc`
  const fullQuest = searchParams.get('fullQuest') || "";

  const answer =  fetchTodos(fullQuest)

  return (
    <div >
      <h1>vivek{questType}{fullQuest}</h1>
      <Footer />
      </div>
  )
}

export default AnswerPage