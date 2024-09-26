import React from 'react'
import { kitchenData } from '../data/kitchen'

import './Landing_images.css' 

const Kitchen = () => {

    const firstFiveImages = kitchenData.slice(0,5)
    return (
        <>
        <div className='proTitle'>
<h2>KITCHEN</h2>
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

export default Kitchen