const getPriceRange = (products, price) => {
    return products.filter(item => Number(item.price) <= price)
}

export {getPriceRange};