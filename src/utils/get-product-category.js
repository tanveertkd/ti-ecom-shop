const getProductCategory = (product, category) => {
    if(category.p_eq && category.t_eq && category.t_apparel){
        return product;
    } else if(category.p_eq){
        return product.filter((item) => item.category === "protective_eq")
    } else if(category.t_eq){
        return product.filter((item) => item.category === "training_eq")
    } else if(category.t_apparel){
        return product.filter((item) => item.category === "apparel")
    }
    return product;
}

export {getProductCategory};