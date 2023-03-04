import connectMongo from "../../../config/mongo";
import Solution from "../../../models/Solution";

export default async function handler(req, res) {
    const {fullQuest} = req.query;
    // res.send("vivek")
    // const data = await fetch(`https://gitagpt.org/api/ask/gita?q=vive`);

    await connectMongo();
    
    let theAns = await questAns(fullQuest)
  
   let fullResponse = {}

    let answer = ""
    // if(theAns == "undefined"){
    //   // let questionData = await Solution.findOne({}).catch(Err => console.log(Err))
    //   let questionData =  Solution.findOne({
    //     question: fullQuest
    //   })
    //     .catch(err => console.log(err))


    // }
    if(theAns == "undefined"){
    
     let data = await callAPi(fullQuest) 
     let apiResponse = await data?.json();
     let ans = apiResponse.response
     answer = ans?.toString().replace("GitaGpt.org", "Vivek Gita AI");
     if(apiResponse.max_queries == true){
      fullResponse.response  = "Greetings Arjun,I am thrilled to extend a warm welcome to you to Vivek Gita AI. I trust that this platform has been a useful resource on your journey so far. However, I must extend my apologies as we are currently facing some challenges in managing the high volume of inquiries, and therefore cannot accommodate any further requests from you at this time. I kindly request you to check back tomorrow, where I will be available to assist you to the best of my abilities. If you have found this platform to be of benefit, I would be deeply grateful if you could share it with those you hold dear. Wishing you all the success and happiness. Your friend, Krishna. ❤️"
    }else
  {
     fullResponse.response = answer
     // Saving Question Data
     let addQuestValue = {
      question:fullQuest,
      answer: answer
    }
    Solution.findOne({question:fullQuest})
    .then(data => {
      if(!data){
        new Solution(addQuestValue)
        .save()
        .then(
       console.log("saved succesfully")
        )
        .catch(err => console.log(err));
      }
    })
    .catch(err => console.log(err))
    }
   
    }else {
      fullResponse.response = theAns
    }
    res.status(200).json({ fullQuest, fullResponse, data:req.body })
  }

let callAPi = async(fullQuest)=> {
  console.log("api got called")
  let data = "" 
  data = await fetch(`https://gitagpt.org/api/ask/gita?q=${fullQuest}`).catch(err => console.log(err));
  return data
}

 let questAns = async (quest) => {
      let inputQuest = quest

      let mySol = [
        {
          question : "How can I cultivate a sense of detachment from my own negative thoughts and emotions",
          answer: "Greetings, my child. I understand that you are struggling with cultivating detachment from your negative thoughts and emotions. It takes great strength to acknowledge this struggle and seek guidance."
        },
        {
          question : "Meaning of Dharma",
          answer: "Dharma is the eternal law that governs the universe. It is the principle that upholds everything, from the smallest atom to the largest star. It is the path to enlightenment and liberation."
        },
        {
          question : "How to find inner peace",
          answer: "Arjuna, inner peace is not something that can be attained through external means. It is a state of being that arises from within. To find inner peace, you must connect with your innermost self, and let go of the illusions and distractions of the material world."
        },
        {
          question : "What is the meaning of life",
          answer: "Hey Arjuna! Life is a journey of self-discovery, where we must explore the depths of our own soul and connect with the divine within us. It is about learning to love and serve others, and to live a life of compassion and kindness. The meaning of life is to find joy, peace, and fulfillment in every moment."
        },
        {
          question : "How to handle breakups",
          answer: "The key to handling a breakup is to focus on self-care. Take time to rest, eat well, exercise, and engage in activities that you enjoy. Connect with your friends and family, and seek their support and encouragement. And above all, have faith in yourself, and know that you will get through this."
        },
        {
          question : "How can I be a better person",
          answer: "Hey Arjuna! To be a better person, you must first recognize your own faults and shortcomings. Only then can you begin to work on improving yourself. Set goals for yourself, and take small steps each day to achieve them. Focus on the things that are most important to you, and let go of distractions."
        },
        {
          question : "How can I be a better friend",
          answer: "Hey Arjuna! To be a better friend, you must learn to forgive and forget. We all make mistakes, and it is important to be able to move past them. Practice patience and understanding, and be willing to give second chances. And above all, always be there for your friends, no matter what."
        },
        {
          question : "How can I overcome my negative emotions and cultivate positive ones",
          answer: "Control your mind with practice and detachment. Abandon desires and focus on selfless action. Surrender to me with devotion and find inner peace"
        },
        {
          question : "How can I cultivate gratitude and appreciation for life",
          answer: "Be mindful of the present, let go of attachments to the past and future. Acknowledge and appreciate the divine grace in every moment."
        },
        {
          question : "How can I develop a deeper understanding of the universe and my place in it",
          answer: "Through meditation, one can develop knowledge and understanding of the self, the universe, and the Supreme Being. Focus on the present moment and detach from worldly desires."
        },
        {
          question : "How can I overcome my attachment to status and reputation",
          answer: "Detach from the fruits of your actions and perform them as an offering to me, without desire for personal gain. Recognize the impermanence of worldly status and reputation, and focus on the eternal self."
        },
        {
          question : "How can I overcome my attachment to material pleasures",
          answer: "Renounce attachment to the fruits of action, be steadfast in yoga, and dedicate all actions to Me with a mind fixed on Me. - Lord Krishna (Bhagwad Gita 9.27)"
        },
 
      ]
let ans = mySol.find(x => x.question === inputQuest);
let finAns = ""
if(ans){
finAns =   ans.answer
 } else {
   finAns = "undefined"
 }
 return finAns
  }