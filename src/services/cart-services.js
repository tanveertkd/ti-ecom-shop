import axios from 'axios';

const getCartItems = async (encodedToken) => {
    return await axios.get('/api/user/cart', {
        headers: {
            authorization: encodedToken,
        },
    });
};

const addItemToCart = async (encodedToken, product) => {
    return await axios.post(
        '/api/user/cart',
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

const deleteItemFromCart = async (encodedToken, productId) => {
    return await axios.delete(`/api/user/cart/${productId}`, {
        headers: {
            authorization: encodedToken,
        },
    });
};

const updateCartItemQty = async (encodedToken, productId, type) => {
    return await axios.post(
        `/api/user/cart/${productId}`,
        {
            action: { type },
        },
        {
            headers: {
                authorization: encodedToken,
            },
        },
    );
};

export { getCartItems, addItemToCart, deleteItemFromCart,  updateCartItemQty };
