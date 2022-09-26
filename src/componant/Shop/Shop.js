import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [card, setCard] = useState([])
    const hendelProduct = (product) => {
        const newCard = [...card, product];
        setCard(newCard)
    }
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="shoping_card_container">
                {
                    products.map(product => <Product product={product} key={product.id} hendelProduct={hendelProduct}></Product>)
                }
            </div>
            <div className="shoping_card">
                <h3>Order Summary</h3>
                <div className='card-info'>
                    <Card card={card}></Card>
                </div>
            </div>
        </div>
    );
};

export default Shop;