import './App.css'
import Footer from './componets/Footer/Footer'
import Hero from './componets/Hero/Hero'
import Navber from './componets/Navber/Navber'
import Section from './componets/Section/Section'

export default function App() {
const sectionPromise = fatchSection(),

  return (
    <>
    
    <Navber></Navber>
    <Hero></Hero>
   <Section fallback="">
   <Section sectionPromisen={sectionPromise}></Section>
   </Section>
  </>
  )
}

export default App
