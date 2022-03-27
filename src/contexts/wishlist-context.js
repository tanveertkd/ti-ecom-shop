import { createContext, useContext, useEffect, useState } from 'react';
import { addItemToWishlist, getWishlistItems, removeFromWishlist } from '../services';
import { useAuth } from './auth-context';

import toast from 'react-hot-toast';

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN');
    const { auth } = useAuth();

    const addToWishlistHandler = async (product) => {
        const check = wishlistItems.items.find(item => item._id === product._id);
        if(!check){
            try {
                const response = await addItemToWishlist(AUTH_TOKEN, product);
                if (response.status === 201) {
                    setWishlistItems((existingItems) => ({
                        ...existingItems,
                        items: response.data.wishlist,
                    }));

                    (() => toast.success(`${product.title} has been added to your wishlist!`))();
                } else {
                    setWishlistItems((existingItems) => ({
                        ...existingItems,
                        items: [],
                    }));
                }
            } catch (error) {
                (() => toast.error(`${product.title} could not be added to your cart!`))();
                throw new Error("Couldn't add to wishlist.", error);
            }
        }
    };

    const removeFromWishlistHandler = async (id, title) => {
        try {
            const response = await removeFromWishlist(AUTH_TOKEN, id);
            if (response.status === 200) {
                setWishlistItems((existingItems) => ({
                    ...existingItems,
                    items: response.data.wishlist,
                }));

                (() => toast.success(`${title} removed your wishlist.`))();
            }
        } catch (error) {
            (() => toast.error(`${title} count not be removed from your wishlist.`))();
            throw new Error("Couldn't delete item.", error);
        }
    };

    const [wishlistItems, setWishlistItems] = useState({
        items: [],
    });

    useEffect(
        () =>
            (async () => {
                if (auth) {
                    try {
                        const response = await getWishlistItems(AUTH_TOKEN);
                        if (response.status === 200) {
                            setWishlistItems((existingItems) => ({
                                ...existingItems,
                                items: response.data.wishlist,
                            }));
                        } else {
                            setWishlistItems((existingItems) => ({
                                ...existingItems,
                                items: [],
                            }));
                        }
                    } catch (error) {
                        throw new Error("Couldn't get wishlist items.", error);
                    }
                }
            })(),
        [auth, AUTH_TOKEN],
    );

    return (
        <WishlistContext.Provider
            value={{
                wishlistItems,
                setWishlistItems,
                addToWishlistHandler,
                removeFromWishlistHandler,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (context === undefined) throw new Error('Wishlist context must be defined');
    return context;
};

export { WishlistProvider, useWishlist };
