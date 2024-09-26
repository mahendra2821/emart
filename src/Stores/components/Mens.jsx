import React from 'react'
import { menData } from '../data/men'
import './Landing_images.css'


const Mens = () => {

    const firstFiveImages = menData.slice(0,5)
    return (
        <>
        <div className='proTitle'>
<h2>MENS</h2>
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

export default Mens