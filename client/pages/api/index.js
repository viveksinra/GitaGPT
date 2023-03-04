export default async function handler(req, res) {
    // res.send("vivek")
    


    res.status(200).json({  fullResponse, data:req.body })
  }
// export default async function handler(req, res) {
//     // res.send("vivek")
//     const data = await fetch(`https://gitagpt.org/api/ask/gita?q=what`);
//     // const res = await fetch(`https://gitagpt.org/api/ask/gita?q=${fullQuest}`);
//     let fullResponse = await data.json();
//     let ans = fullResponse.response
//     let answer = ans?.toString().replace("GitaGpt.org", "Vivek Gita AI");
//     fullResponse.response = answer
//     if(fullResponse.max_queries == true){
//       fullResponse.response  = "Greetings Arjun,I am thrilled to extend a warm welcome to you to Vivek Gita AI. I trust that this platform has been a useful resource on your journey so far. However, I must extend my apologies as we are currently facing some challenges in managing the high volume of inquiries, and therefore cannot accommodate any further requests from you at this time. I kindly request you to check back tomorrow, where I will be available to assist you to the best of my abilities. If you have found this platform to be of benefit, I would be deeply grateful if you could share it with those you hold dear. Wishing you all the success and happiness. Your friend, Krishna. ❤️"
//     }


//     res.status(200).json({  fullResponse, data:req.body })
//   }