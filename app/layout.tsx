import '../styles/globals.css'
import Footer from './Footer';
import Header from './Header';
import bgImg from "./img/header.png"
import TiddleImage from './TiddleImage';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed" 
 style={{backgroundImage: `url(${bgImg.src})`}}
 >
  <Header />
  <div className="h-full">
   
   {/* <!--Main--> */}
   <div className="container pt-8 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
     {/* <!--Left Col--> */}

     {/* <!--Right Col--> */}
   


     
 
        {children}
        <TiddleImage />
       
<Footer />
</div>
 </div>
        </body>
    </html>
  )
}
