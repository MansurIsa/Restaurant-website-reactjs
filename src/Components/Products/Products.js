import React from 'react';
import Productsbox from '../Productsbox/Productsbox';
import pimage1 from '../../images/s1.png';
import pimage2 from '../../images/s2.png';
import '../Products/Products.css';


const Products = () => {
    return (
        <div className='products' id='products'>
            <div className="container">
                <h2>CHOOSE & ENJOY</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className="products_container">
                    <Productsbox image={pimage1} title="Burger" />
                    <Productsbox image={pimage2} title="Pizza" />
                    <Productsbox image={pimage1} title="Doner" />
                </div>
            </div>
        </div>
    )
}

export default Products