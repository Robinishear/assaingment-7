import { useState } from 'react'
import './App.css'
import Cols from './componets/Cols/Cols'
import Footer from './componets/Footer/Footer'
import Hero from './componets/Hero/Hero'
import Navber from './componets/Navber/Navber'
import Section from './componets/Section/Section'

export default function App() {

  const [iconMakred,setIconMakred] = useState([]);

  const handleIconMark = (Section) => {
    setIconMakred([...iconMakred,Section])
  }
  console.log(setIconMakred)

  return (
    <>
    
    <Navber></Navber>
    <Hero></Hero>
    <Cols></Cols>
   <Section handleIconMark={handleIconMark}></Section>

      
   <Footer></Footer>
   
  </>
  )
};

