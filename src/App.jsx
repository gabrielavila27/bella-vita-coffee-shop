import './App.css'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import Sobre from './components/Sobre/Sobre'
import Work from './components/Work/Work'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='main'>
      
     <Header/>

     <Slider/>

     <Sobre/>

      <Work/>

      <Menu/>

      <Footer/>
     
    </div>
  )
}

export default App
