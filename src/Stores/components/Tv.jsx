import React from 'react'
import { tvData } from '../data/tv'
import './Landing_images.css'

const Tv = () => {

    const firstFiveImages = tvData.slice(0,5)
    return (
        <>
        <div className='proTitle'>
<h2>TV</h2>
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

export default Tv