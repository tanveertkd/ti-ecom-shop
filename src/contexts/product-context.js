import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducers/product-reducer";
import { getProductById } from "../services";

const ProductContext = createContext();

const ProductProvider = ({children}) => {

    const getProductByIdHandler = async (productId) => {
        const response = await getProductById(productId);
        dispatch({type: 'SINGLE_PRODUCT', payload: response.data});
    }

    const [state, dispatch] = useReducer(productReducer, {
        data: [],
        filters: {
            sortBy: "",
            category: {
                p_eq: false,
                t_eq: false,
                t_apparel: false,
            },
            rating: "0",
            priceRangeValue: 5000,
            excludeOutOfStock: false,
        },
        singleProduct: [],
        searchedProduct: ''
    });

    return(
        <ProductContext.Provider value={{state, dispatch, getProductByIdHandler}}>
            {children}
        </ProductContext.Provider>
    )
}

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts }