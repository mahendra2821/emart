import React from 'react'
import { furnitureData } from '../data/furniture'
import './Landing_images.css'

const Furniture = () => {

    const firstFiveImages = furnitureData.slice(0,5)
    return (
        <>
        <div className='proTitle'>
<h2>FURNITURE</h2>
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

export default Furniture