import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonals from './components/Testimonals/Testimonals'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
    <div>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title subtitle='OUR PROGRAM' title='what we offer'/>
    <Program/>
    <About/>
    <Title subtitle='OUR Gallary' title='Campus Photo'/>
     <Campus/>
     <Title subtitle='TESTIMONALS' title='What Students Says'/>
     <Testimonals/>
     <Title subtitle='CONTACT US' title='Get In Touch'/>
     <Contact/>
     <Footer/>

     </div>
     </div>
    
    </>
  )
}

export default App