import React from 'react'
import { computerData } from '../data/computers'
import './Landing_images.css'
const Computers = () => {

    const firstFiveImages = computerData.slice(0,5)
    return (
        <>
        <div className='proTitle'>
<h2>COMPUTERS</h2>
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

export default Computers