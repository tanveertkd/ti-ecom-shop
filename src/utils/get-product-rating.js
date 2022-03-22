const getProductRating = (products, rating) => {
    return products.filter(item => item.rating >= rating);
}

export { getProductRating };