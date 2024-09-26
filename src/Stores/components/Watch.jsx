import React from 'react'
import { watchData } from '../data/watch'
import './Landing_images.css'

const Watch = () => {

    const firstFiveImages = watchData.slice(0,5)
    return (
        <>
        <div className='proTitle'>
<h2>WATCH</h2>
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

export default Watch