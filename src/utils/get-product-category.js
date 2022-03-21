const getProductCategory = (products, category) => {
    let filteredProducts = [];
    if(!category.p_eq && !category.t_eq && !category.t_apparel){
        return products
    }
    if(category.p_eq){
        filteredProducts.push(...products.filter((item) => item.category === "protective_eq"))
    }  
    if(category.t_eq){
        filteredProducts.push(...products.filter((item) => item.category === "training_eq"))
    } 
    if(category.t_apparel){
        filteredProducts.push(...products.filter((item) => item.category === "apparel"))
    }
    return filteredProducts;
}

export {getProductCategory};