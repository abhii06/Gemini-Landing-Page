
import FeatureSection from "./components/FeatureSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Workflow from "./components/Workflow"
import Services  from "./components/Services"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"


function App() {
 

  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection/>
      <FeatureSection/>
      <Workflow/>
      <Services/>
      <Testimonials/>
      <Footer/>
      </div>
     
      
    </>
  )
}

export default App
