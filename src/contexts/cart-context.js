import { createContext, useContext, useEffect, useState } from 'react';
import { getCartItems } from '../services';
import { useAuth } from './index';

import toast from 'react-hot-toast';

import { addItemToCart, deleteItemFromCart, updateCartItemQty } from '../services/cart-services';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const { auth } = useAuth();
    const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN');

    const addToCartHandler = async (product) => {
        const check = cartItems.items.find(item => item._id === product._id);
        
        if(!check){
            try {
                const response = await addItemToCart(AUTH_TOKEN, product);
                if (response.status === 201) {
                    setCartItems((existingItems) => ({
                        ...existingItems,
                        items: response.data.cart,
                    }));
                    (() => toast.success(`${product.title} has been added to your cart!`))();
                }
            } catch (error) {
                (() => toast.error(`${product.title} cound not be added to your cart.`))();
                throw new Error("Couldn't add item to cart.", error);
            }
        }
    };

    const handleDelete = async (id, title) => {
        const response = await deleteItemFromCart(AUTH_TOKEN, id);
        if (response.status === 200) {
            setCartItems((existingItems) => ({
                ...existingItems,
                items: response.data.cart,
            }));
            (() => toast.success(`Item removed from your cart.`))();
        } else {
            (() => toast.error(`${title} caould not be removed your cart.`))();
            throw new Error("Couldn't delete item from cart");
        }
    };

    // Update item quantity handler
    const updateHandler = async (product, type) => {
        if(product.qty === 1 && type === "decrement"){
            handleDelete(product._id);
        } else {
            const response = await updateCartItemQty(AUTH_TOKEN, product._id, type);
            if (response.status === 200) {
                setCartItems((existingItems) => ({
                    ...existingItems,
                    items: response.data.cart,
                }));
                (() => toast.success(`${product.title}'s quantity updated.`))();
            }
        }
    };

    //Get item price after discount
    const getDiscountedPrice = (product) => {
        return product.reduce(
            (accumulator, current) => ((accumulator += (current.price * current.discount) / 100) * current.qty),
            0,
        );
    };

    //Get total price of all items in cart
    const getCartTotalValue = (product) => {
        return product.reduce((accumulator, current) => (accumulator += current.price*current.qty), 0);
    };

    const [cartItems, setCartItems] = useState({
        items: [],
        totalValue: 0,
        totalDiscount: 0,
    });

    useEffect(
        () =>
            (async () => {
                if (auth) {
                    try {
                        const response = await getCartItems(AUTH_TOKEN);
                        if (response.status === 200) {
                            setCartItems((existingItems) => ({
                                ...existingItems,
                                items: response.data.cart,
                            }));
                        }
                    } catch (error) {
                        console.log('Cart: ', error);
                    }
                } else {
                    setCartItems((existingItems) => ({
                        ...existingItems,
                        items: [],
                    }));
                }
            })(),
        [auth, AUTH_TOKEN],
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                setCartItems,
                addToCartHandler,
                handleDelete,
                getCartTotalValue,
                getDiscountedPrice,
                updateHandler,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) throw new Error('Cart Context not defined');
    return context;
};

export { CartProvider, useCart };
