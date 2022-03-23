import { createContext, useContext, useEffect, useState } from "react";
import { getCartItems } from "../services";
import { useAuth } from "./index";

import { addItemToCart, deleteItemFromCart } from "../services/cart-services";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const { auth } = useAuth();
    const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN');

    const addToCartHandler = async (product) => {
        try{
            const response = await addItemToCart(AUTH_TOKEN, product);
            if(response.status === 201){
                setCartItems((existingItems) => (
                    {
                        ...existingItems,
                        items: response.data.cart
                    }
                ))
            }
        }catch(error){
            throw new Error("Couldn't add item to cart.", error);
        };
    }


    const handleDelete = async (id) => {
        const response = await deleteItemFromCart(AUTH_TOKEN, id);
        if(response.status === 200){
            setCartItems((existingItems) => ({
                ...existingItems,
                items: response.data.cart
            }))
        }
    }

    const [cartItems, setCartItems] = useState({
        items: []
    });

    useEffect(()=>(
        (async () => {
            if(auth){
                try{
                    const response = await getCartItems(AUTH_TOKEN);
                    if(response.status === 200){
                        setCartItems((existingItems) => (
                            {
                                ...existingItems,
                                items: response.data.cart
                            }
                        ))
                    }
                }catch(error){
                    console.log("Cart: ", error);
                }
            }else{
                setCartItems((existingItems)=>({
                    ...existingItems,
                    items: []
                }));
            }
        })()
    ), [auth, AUTH_TOKEN]);


    return(
        <CartContext.Provider value={{cartItems, setCartItems, addToCartHandler, handleDelete}}>
            {children}
        </CartContext.Provider>
    );
}

const useCart = () => {
    const context = useContext(CartContext);
    if(context === undefined)
        throw new Error("Cart Context not defined");
    return context;
}

export { CartProvider, useCart };