import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducers/product-reducer";

const ProductContext = createContext();

const ProductProvider = ({children}) => {

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
        }
    });

    return(
        <ProductContext.Provider value={{state, dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts }