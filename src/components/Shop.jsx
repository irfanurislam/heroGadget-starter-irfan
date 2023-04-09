import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../utils/fakeDb';
import { CartContext, ProductsContext } from '../App';
import { toast } from 'react-hot-toast';

const Shop = () => {
    // const products = useLoaderData()
    const [cart,setCart] = useContext(CartContext)
    const products = useContext(ProductsContext)
    console.log(products)
    const handleAddToCart = (product) =>{
        let newCart = []
        const exist = cart.find(existingProduct => product.id === existingProduct.id)
        if(!exist){
        product.quantity = 1
        newCart = [...cart,product]
        }
        else{
        const rest = cart.filter(existingProduct => existingProduct.id !== product.id)
        exist.quantity = exist.quantity + 1;
        newCart = [...rest,exist]
        }
        toast.success('product added 👏')
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='product-container'>
          
            {
                products.map(product => <ProductCard
                key={product.id}
                product={product}
                handleAddToCart ={handleAddToCart}
                ></ProductCard>)
            }
        </div>
    );
};

export default Shop;