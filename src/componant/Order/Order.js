import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { localSto } from '../../utilities/fakedb';
import Card from '../Card/Card';
import ReviewItems from '../ReviewItems/ReviewItems';

const Order = () => {
    const { products, prevaseCard } = useLoaderData()
    const [card, setCart] = useState(prevaseCard)
    const hendalRemovedbtn = id => {
        const remidarCart = card.filter(product => product.id !== id)
        setCart(remidarCart)
        localSto(id)
        console.log(id)
    }

    return (
        <div className='shop-container'>
            <div className='shoping_car_container'>
                {
                    card.map(product => <ReviewItems
                        key={product.id}
                        product={product}
                        hendalRemovedbtn={hendalRemovedbtn}></ReviewItems>)
                }
            </div>
            <div className='shoping_card'>
                <div className='card-info'>
                    <Card card={card}></Card>

                </div>
            </div>

        </div>
    );
};

export default Order;