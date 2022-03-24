import { createContext, useContext, useEffect, useState } from 'react';
import { addItemToWishlist, getWishlistItems, removeFromWishlist } from '../services';
import { useAuth } from './auth-context';

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN');
    const { auth } = useAuth();

    const addToWishlistHandler = async (product) => {
        try {
            const response = await addItemToWishlist(AUTH_TOKEN, product);
            console.log('from add context:', response);
            if (response.status === 201) {
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
            throw new Error("Couldn't add to wishlist.", error);
        }
    };

    const removeFromWishlistHandler = async (id) => {
        try {
            const response = await removeFromWishlist(AUTH_TOKEN, id);
            if (response.status === 200) {
                setWishlistItems((existingItems) => ({
                    ...existingItems,
                    items: response.data.wishlist,
                }));
            }
        } catch (error) {
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
                        console.log(response);
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

    console.log('From context: ', wishlistItems);

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
