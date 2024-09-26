import React from 'react'
import { speakerData } from '../data/speaker'
import './Landing_images.css'
const Speakers = () => {

    const firstFiveImages = speakerData.slice(0,5)
    return (
        <>
        <div className='proTitle'>
<h2>SPEAKERS</h2>
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

export default Speakers