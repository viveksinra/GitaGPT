'use client';
import React, {useState,useEffect} from 'react'
import Footer from '../../Footer'
import { useRouter,useSearchParams  } from 'next/navigation'
import axios from 'axios';
import AnswerPage from './Answer';
import AskQuestForm from '../../AskQuestForm';


function QuestAnsPage() {

  const searchParams = useSearchParams();

  // E.g. `/dashboard?page=2&order=asc`

  return (
    <div >
      <AnswerPage />
      <AskQuestForm />
   
      </div>
  )
}

export default QuestAnsPage