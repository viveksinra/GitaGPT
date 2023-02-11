import '../styles/globals.css'
import Header from './Header';
import bgImg from "./img/header.png"
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
        {children}
        </body>
    </html>
  )
}
