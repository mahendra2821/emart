import React from 'react'
import { fridgeData } from '../data/fridge'
import './Landing_images.css'
const Fridge = () => {
    const firstFiveImages = fridgeData.slice(0,5)
    return (
        <>
        <div className='proTitle'>
<h2>FRIDGE</h2>
      <div>
      <div className='proSection'>
          {firstFiveImages.map((item) => {
              return(
                  <div className='imgBox'>
                      <img src={item.image} alt="image logo" className='ProImage'/>
                  </div>
              )
          })
          }
      </div>
      </div>
      </div>
      </>
    )
}

export default Fridge