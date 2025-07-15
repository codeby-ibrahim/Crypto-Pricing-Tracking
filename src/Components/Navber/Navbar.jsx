import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'



const Navbar = () => {

  console.log(logo)
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul  >
            <li >Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>   
        </ul>
        <div className='nav-right'>
           <select>
                
           </select>

        </div>



    </div>
  )
}

export default Navbar