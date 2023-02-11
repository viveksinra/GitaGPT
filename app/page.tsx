import React from 'react'
import Footer from './Footer'
import MainSearch from './MainSearch'
import TiddleImage from './TiddleImage'

function Home() {
  return (
  
    <div className="h-full">
   
      {/* <!--Main--> */}
      <div className="container pt-8 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* <!--Left Col--> */}
       <MainSearch  />

        {/* <!--Right Col--> */}
      
<TiddleImage />
       
<Footer />
   
        
      </div>
    </div>
 
  )
}

export default Home