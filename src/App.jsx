import './App.css'
import Navbar from './components/navbar';
import Hero from './components/Hero'
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';




function App() {


  return (
    <>
      <div className='App'>
        <Hero />
        <Navbar />
        <Nosotros />
        <Servicios/>
      </div>
    </>
  )
}

export default App
