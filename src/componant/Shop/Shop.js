import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getData, localSto } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [card, setCard] = useState([])
    const [products, setProducts] = useState([])
    // const products = useLoaderData()
    // setProducts(product)
    useEffect(() => {
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    useEffect(()=>{
        const getdata = getData();
        const addProductInArr = [];
        for(const id in getdata){
            const addadProduct = products.find(product => product.id === id);
            if(addadProduct){
                const quantity = getdata[id];
                addadProduct.quantity = quantity;
                addProductInArr.push(addadProduct)
            }
        }
        setCard(addProductInArr)
    },[products])
    const hendelProduct = (selectedproduct) => {
        console.log(selectedproduct)
        let newCard = [];
        const exist = card.find(product => product.id === selectedproduct.id);
        console.log(exist)
        if(!exist){
            selectedproduct.quantity = 1;
            newCard = [...card,selectedproduct]
        }
        else{
            const rest = card.filter(product => product.id !== selectedproduct.id)
            exist.quantity = exist.quantity + 1;
            newCard = [...rest,exist]
        }
        
        setCard(newCard)
        localSto(selectedproduct.id,1)
    }
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