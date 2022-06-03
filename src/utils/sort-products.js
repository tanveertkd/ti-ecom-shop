const getSortedProducts = (products, sortBy) => {
    if (sortBy === 'HIGH_TO_LOW') {
        return [...products].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'LOW_TO_HIGH') {
        return [...products].sort((a, b) => a.price - b.price);
    }
    return products;
};

export { getSortedProducts };
