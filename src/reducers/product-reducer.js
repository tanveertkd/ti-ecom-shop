const productReducer = (state, action) => {
    switch(action.type){
        case "NO_FILTER":
            return {
                ...state,
                data: [...action.payload]
            }
        case "LOW_TO_HIGH":
            return {
                ...state,
                filters: {...state.filters, sortBy: action.type}
            }
        
        case "HIGH_TO_LOW":
            return {
                ...state,
                filters: {...state.filters, sortBy: action.type}
            }

        case "P_EQ":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    category: {
                        ...state.filters.category,
                        p_eq: !state.filters.category.p_eq
                    }
                }
            }

        case "T_EQ":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    category: {
                        ...state.filters.category,
                        t_eq: !state.filters.category.t_eq
                    }
                }
            }
        
        case "T_APPAREL":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    category: {
                        ...state.filters.category,
                        t_apparel: !state.filters.category.t_apparel
                    }
                }
            }
        
        case "RATING":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    rating: action.payload
                }
            }


        case "PRICE":
            return{
                ...state,
                filters: {
                    ...state.filters, 
                    priceRangeValue: action.payload 
                }
            }
        
        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    sortBy: "",
                    category: {
                        p_eq: false,
                        t_eq: false,
                        t_apparel: false,
                    },
                    rating: "1",
                    priceRangeValue: 10000,
                    excludeOutOfStock: false,
                }
            }
        default:
            return state;
    }
} 

export {productReducer};