import { getData } from "../utilities/fakedb";

export const productAndcard = async()=>{
const productsData = await fetch("products.json");
const products = await productsData.json();
const saveCart = getData();
const prevaseCard = [];
for(const id in saveCart){
    const addedProduct = products.find(product =>product.id === id)
   if(addedProduct){
    const quantity = saveCart[id];
    addedProduct.quantity = quantity;
    prevaseCard.push(addedProduct)
   }
}
return {products, prevaseCard};
}