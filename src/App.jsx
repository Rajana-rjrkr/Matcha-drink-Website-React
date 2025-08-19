import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import LandingPage from './Pages/LandingPage'
import Menu from './Pages/Menu'
import Location from './Pages/Location'
import MyCart from './Pages/MyCart'
function App() {
  
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/location' element={<Location/>} />
      <Route path='/cart' element={<MyCart/>} />
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
