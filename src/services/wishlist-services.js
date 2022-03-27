import axios from 'axios';

const getWishlistItems = async (encodedToken) => {
    return await axios.get('/api/user/wishlist', {
        headers: {
            authorization: encodedToken,
        },
    });
};

const addItemToWishlist = async (encodedToken, product) => {
    return await axios.post(
        '/api/user/wishlist',
        {
            product,
        },
        {
            headers: {
                authorization: encodedToken,
            },
        },
    );
};

const removeFromWishlist = async (encodedToken, productId) => {
    return await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: {
            authorization: encodedToken,
        }
    });
};

export { getWishlistItems, addItemToWishlist, removeFromWishlist };
