import React from "react"
import Footer from "./components/footer/footer.jsx"
import Hero from "./sections/hero"
import About from "./sections/about"
import FlashBack from "./sections/flashback"
import Prizes from "./sections/prizes"
import Sponsor from "./sections/sponsor/sponsor"
import StatsPage from "./sections/stats/stats.jsx"
import FAQ from "./sections/faq.jsx" // Change to uppercase
import { clarity } from 'react-microsoft-clarity'

function App() {
  clarity.init("qodrz4ajhs")
  return (
    <div className="main-container">
      <Hero />   
      <About />
      <StatsPage/>
      <FlashBack />
      <FAQ/> 
      <Prizes />
      <Sponsor />
      <Footer />
    </div>
  )
}

export default App