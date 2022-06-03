const getSearchedProduct = (productList, searchedProduct) => {
    return productList?.filter((product) =>
        product?.title?.toLowerCase().includes(searchedProduct.toLowerCase()),
    );
};

export { getSearchedProduct };
