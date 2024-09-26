import React from 'react'
import { womanData } from '../data/woman'
import './Landing_images.css'

const Womens = () => {

    const firstFiveImages = womanData.slice(0,5)
    return (
        <>
        <div className='proTitle'>
<h2>WOMANS</h2>
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

export default Womens