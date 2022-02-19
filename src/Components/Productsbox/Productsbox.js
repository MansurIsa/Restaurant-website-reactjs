import React from 'react'
import '../Productsbox/Productsbox.css'

const Productsbox = (props) => {
  return (
    <div className='products_box'>
        <div className="products_box_image">
            <img src={props.image} alt="" />
        </div>
        <div className="products_box_text">
            <h3>{props.title}</h3>
            <button className='btn'>Order Now</button>
        </div>
    </div>
  )
}

export default Productsbox