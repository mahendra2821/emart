import React from 'react'
import './RoutingPages.css'
import { menData } from '../data/men'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const MobilePages = () => {
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
    menData : menData.filter((orange) =>  selectedPeoduct.includes(orange.brand))
  return(
    <>
    <Navbar/>
    <div className='fullpage'>
    <div className="pro-selected">
        {menData.map((phone) => {
            return (
                <div className='pro-input'>
                    <label>
                        <input type="checkbox"
                        checked={selectedPeoduct.includes(phone.brand)}
                        onChange={() => companyHandler(phone.brand)}
                        />
                        {phone.brand}  
                    </label>
                </div>
            )
        })}
    </div>

    <div className='pageSection'>
        {filteredProduct.map((item) => {
            return (
                <div>
                    <Link to={`/menswear/${item.id}`}> 
                    <div className='pageImg'>
                        <img src={item.image} alt="logo image"/>
                    </div>
                    </Link>
                   
                    <div className='proModel'>
                        {item.type} , {item.brand}
                    </div>

                </div>
            )
        })}
    </div>
    </div>
    </>
  )
}

export default MobilePages