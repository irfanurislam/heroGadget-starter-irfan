import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { createContext, useState } from "react";
import Modal from "./components/Modal";

  export const ProductsContext = createContext([]);
 export const CartContext = createContext([]);

const App = () => {
  //  let [isOpen, setIsOpen] = useState(false)
  const { cartArray, products } = useLoaderData();
  const [cart,setCart] = useState(cartArray)

const cartAlert = sessionStorage.getItem('alert')
if(cart.length > 0 && cartAlert !== 'true'){
  //  setIsOpen(true)
  alert('already have')
  sessionStorage.setItem('alert',true)
  
}





  return (
    <ProductsContext.Provider value={products}>
     <CartContext.Provider value ={[cart,setCart]}>
     <Header></Header>
      <div className="min-h-[calc(100vh-137px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      {/* <Modal isopen= {isOpen} setIsOpen={setIsOpen}></Modal> */}
     </CartContext.Provider>
    </ProductsContext.Provider>
  );
};

export default App;
