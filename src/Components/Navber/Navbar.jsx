import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'


const Navbar = () => {
    const {setcurrency} = useContext

    
  console.log(logo)
  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo'/>
      <ul  >
        <li >Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className='nav-right'>
        <select>
          <option value={"USD"}>USD</option>
          <option value={"EUR"}>EUR</option>
          <option value={"INR"}>INR</option>
        </select>
        <button>Sign UP <img src={arrow_icon} alt="" /></button>
      </div>



    </div>
  )
}

export default Navbar