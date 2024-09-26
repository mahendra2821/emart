import React from 'react'
import { acData } from '../data/ac'
import './Landing_images.css'
const Ac = () => {

    const firstFiveImages = acData.slice(0,5)
    return (
        <>
        <div className='proTitle'>
<h2>AC</h2>
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

export default Ac