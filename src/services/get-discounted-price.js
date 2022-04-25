const getDiscountedPrice = (price, discount) => (price - (price * discount) / 100).toFixed(2);
export { getDiscountedPrice };