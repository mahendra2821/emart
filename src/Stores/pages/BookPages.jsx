import React from 'react'
import './RoutingPages.css'

import { booksData } from '../data/books'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const BookPages = () => {
    const [selectedPeoduct , setSelectedProduct] = useState([])

    const companyHandler = (mango) => {
        if (selectedPeoduct.includes(mango)) {
            setSelectedProduct(selectedPeoduct.filter(item => item !== mango))
        }
        else {
            setSelectedProduct([...selectedPeoduct, mango])
        }
    }

    const filteredProduct = selectedPeoduct.length === 0 ? 
    booksData : booksData.filter((orange) =>  selectedPeoduct.includes(orange.title))
  return (
    <>
    <Navbar/>
    <div className='fullpage'>
    <div className="pro-selected">
        {booksData.map((phone) => {
            return (
                <div className='pro-input'>
                    <label>
                        <input type="checkbox"
                        checked={selectedPeoduct.includes(phone.author)}
                        onChange={() => companyHandler(phone.author)}
                        />
                        {phone.author}  
                    </label>
                </div>
            )
        })}
    </div>

    <div className='pageSection'>
        {filteredProduct.map((item) => {
            return (
                <div>
                    <Link to={`/bookscoll/${item.id}`}> 
                    <div className='pageImg'>
                        <img src={item.image} alt="logo image"/>
                    </div>
                    </Link>
                   
                    <div className='proModel'>
                        {item.title} , {item.author}
                    </div>

                </div>
            )
        })}
    </div>
    </div>
    </>
  )
}

export default BookPages