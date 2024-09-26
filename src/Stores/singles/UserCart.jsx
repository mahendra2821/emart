
import React from 'react'
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';

import './UserCart.css'

const UserCart = () => {

    const {cartItems, addToCart, removeFromCart} = useCart()

  return (
<>
<Navbar />
<div>
    <h2 className='y-cart'>Your Cart</h2>
 {cartItems.length ===0 ?
    (<p className='empty'>Your Cart is Empty</p>):
   <div>
     {cartItems.map((item)=>{
        return(
            <div className='cart'>
            <div className='cart-section'>
                <div className="cart-img">
                    <img src={item.image} alt="" />
                </div>
             <div className="cart-details">
                    <h3>{item.product}</h3>
                    <h2>
                        {item.price}
                    </h2>
                    <h3>{item.model}</h3>
              
                <button className='removeBtn' onClick={() => removeFromCart(item)}>Remove</button>
            </div>
            </div>
            </div>
        )
    })}
   </div>

}
     
    </div>
</>
  )
}

export default UserCart