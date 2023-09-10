import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Header from './Component/Header'
import Services from './Component/Services'
import About from './Component/About'
import Clients from './Component/Clients'
import Contact from './Component/Contact'
import Testimonial from './Component/Testimonial'
import Footer from './Component/Footer'

function App() {
  // const [count, setCount] = useState(0)
  return (
   <div>
    {/* <Navbar /> */}
    <Header />
    <About />
    <Services />
    <Testimonial />
    <Clients />
    <Contact />
    <Footer />
    
   </div>
  
  )
}

export default App
