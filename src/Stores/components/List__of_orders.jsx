import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const List__of_orders = () => {
  return (
    <>
        <div className='subMenu'>
          
          <ul>
          <Link to='mobiles' className='Link'><li>Mobiles</li></Link>
          <Link to='watchs' className='Link'><li>Watch</li></Link>
          <Link to='womans' className='Link'> <li>Womans</li></Link>
          <Link to='books' className='Link'><li>Books</li></Link>  
          <Link to='mens' className='Link'><li>Mens</li></Link> 
          <Link to='fridges' className='Link'> <li>Fridge</li></Link> 
          <Link to='furnitures' className='Link'> <li>Furniture</li></Link> 
          <Link to='computers' className='Link'> <li>Computers</li></Link>
          <Link to='speakers' className='Link'>  <li>Speakers</li></Link>
          <Link to='ac' className='Link'> <li>AC</li></Link>
          <Link to='kitchen' className='Link'> <li>Kitchen</li></Link>   
          <Link to='tv' className='Link'><li>Tv</li></Link>   
          </ul>
        </div>
       
       
       </>

  )
}

export default List__of_orders
