import './App.css'
import About from './components/About'
import Cards from './components/Cards'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Marrique from './components/Marrique'
import Navbar from './components/Navbar'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Navbar />
      <HeroSection />
      <Marrique />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </>
  )
}

export default App
