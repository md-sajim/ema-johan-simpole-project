import { faDeleteLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItems.css'

const ReviewItems = ({product,hendalRemovedbtn}) => {
    const {name, price, quantity,shipping, img,id}=product;
console.log(product)
    return (
        <div className='review-items'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-container">
                <div className="review-detail">
                    <p>{name}</p>
                    <p><small>Price:{price}</small></p>
                    <p><small>Shipping:{shipping}</small></p>
                    <p><small>Quantity:{quantity}</small></p>
                </div>
                <div className="review-delete-btn">
                    <button onClick={()=>hendalRemovedbtn(id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashCan}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;