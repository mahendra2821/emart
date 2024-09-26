import React from 'react'
import './RoutingPages.css'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const ComputersPages = () => {
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
    computerData : computerData.filter((orange) =>  selectedPeoduct.includes(orange.company))
  return (
    <>
    <Navbar/>
    <div className='fullpage'>
    <div className="pro-selected">
        {computerData.map((phone) => {
            return (
                <div className='pro-input'>
                    <label>
                        <input type="checkbox"
                        checked={selectedPeoduct.includes(phone.company)}
                        onChange={() => companyHandler(phone.company)}
                        />
                        {phone.company}  
                    </label>
                </div>
            )
        })}
    </div>

    <div className='pageSection'>
        {filteredProduct.map((item) => {
            return (
                <div>
                    <Link to={`/computersss/${item.id}`}> 
                    <div className='pageImg'>
                        <img src={item.image} alt="logo image"/>
                    </div>
                    </Link>
                   
                    <div className='proModel'>
                        {item.company} , {item.model}
                    </div>

                </div>
            )
        })}
    </div>
    </div>
    </>
  )
}

export default ComputersPages