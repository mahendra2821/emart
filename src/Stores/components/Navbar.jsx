import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {

  const{cartItems} = useCart()
  return (
    <>
    <div className='navsection'>
      <div className='title'>
        <h2>E-Mart</h2>
        </div>
        <div className='search'>
          <input type='text' placeholder='Search..' /> 
          </div>
          <div className='user'>
            <div className='user-details'>
              SignIn/SignUp
            </div>
            <Link to="/cart" className='span2'>
            <div className='cart'>
              Cart: <span>
               {cartItems.length}
              </span>
            </div>
            </Link>
          
          </div>
        </div>
        
       </>

  )
}

export default Navbar
