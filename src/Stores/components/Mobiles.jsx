import React from 'react'
import { mobileData } from '../data/mobiles'
import './Landing_images.css'
const Mobiles = () => {

  const firstFiveImages = mobileData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
    <h2>MOBILES</h2>
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

export default Mobiles