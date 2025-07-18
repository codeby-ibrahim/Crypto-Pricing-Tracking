import Navbar from './Components/Navber/Navbar'
import {Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './pages/Footer/Footer';
const App = () => {
  return (
    <div className='app'>
        <Navbar/>
       < Routes>
         <Route path='/' element={<Home/>}/>
       <Route path='/coin/:coinid' element={<Coin/>}/> 
       </ Routes>
       <Footer/>
    </div>
  )
}

export default App