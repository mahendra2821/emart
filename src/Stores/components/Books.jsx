import React from 'react'
import { booksData } from '../data/books'
import './Landing_images.css'
const Books = () => {

  const firstFiveImages = booksData.slice(0,5)
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

export default Books