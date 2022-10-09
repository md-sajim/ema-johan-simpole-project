import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCoffee, faSoap } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({product,hendelProduct}) => {
    // console.log(props.product)
    const { id, category, name, seller, price, stock, ratings, ratingsCount, img, shipping, quantity } = product;
    
    return (
        <div>
            <div className='card'>
                <img src={img?img:""} alt="" />
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <div className="card_info">
                    <p><small>Manufacturer : {seller}</small></p>
                    <p><small>Ratings: {ratings}</small></p>
                </div>
            </div>
                <button className='but' onClick={()=>hendelProduct(product)}>Add to Cart <FontAwesomeIcon icon={faCartShopping}/> </button>
        </div>
    );
};

export default Product;