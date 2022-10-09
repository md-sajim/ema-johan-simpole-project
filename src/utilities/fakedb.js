// use local storage to manage cart data
/*const addToDb = id =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb, 
    removeFromDb,
    deleteShoppingCart
}
*////////////////////////////////////////////////////////////////////////
function localSto(id, id2) {
    if (id === "delete") {
        const con = window.confirm("Press a button!");
        if (con) {
            localStorage.removeItem('card_detail')
        }
    }
    else {
        let shoopingCard = {};
        const localStode = localStorage.getItem("card_detail");
        if (localStode) {
            shoopingCard = JSON.parse(localStode);
        }
        const localData = shoopingCard[id];
        if (id && id2) {
            if (localData) {
                shoopingCard[id] = localData + 1;
            }
            else {
                shoopingCard[id] = 1;
            }
        }
        else {
            if (id in shoopingCard) {
                delete shoopingCard[id]
            }
        }
        localStorage.setItem("card_detail", JSON.stringify(shoopingCard));
    }
}
const getData = () =>{
    let shoopingCard = {};
    const localStode = localStorage.getItem("card_detail");
        if (localStode) {
            shoopingCard = JSON.parse(localStode);
        }
        return shoopingCard;
}
export { localSto, getData};