import React from 'react';

const Card = ({card}) => {
    console.log(card)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of card){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;

    }
    const tax = total * 0.1;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Card;