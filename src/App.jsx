import './App.css'
import Navbar from './components/navbar';
import Hero from './components/Hero'
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Contact from './components/Contact';
import Testimonios from './components/testimonios/testimonios';




function App() {


  return (
    <>
      <div className='App'>
        <Hero />
        <Navbar />
        <Nosotros /> 
        <Testimonios/>
        <Servicios/>
        <Contact/>
      </div>
    </>
  )
}

export default App
