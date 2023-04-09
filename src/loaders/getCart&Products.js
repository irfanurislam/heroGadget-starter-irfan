import { getStoredCart } from "../utils/fakeDb"

const productsAndCartData = async() =>{
    const productsData = await fetch ('products.json')
    const products = await productsData.json()
    const savedCart = getStoredCart()
    const cartArray = []
    for(const id in savedCart){
        const foundCart = products.find(product => product.id === id)
        if(foundCart){
            foundCart.quantity = savedCart[id]
            cartArray.push(foundCart)
        }
    }
    return {cartArray,products}
}

export default productsAndCartData